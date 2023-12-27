<script setup lang="ts">
import { GoogleMap, Marker } from "vue3-google-map";
import placesData from "@/assets/data/places.json";
import {type PlaceDetails} from "@/types/Place";
import {ref, type Ref} from "vue";

const mapRef: Ref<any> = ref(null)
const placesService: Ref<any> = ref(null);

const places = ref<PlaceDetails[]>([]);
const selectedPlace = ref<PlaceDetails|null>(null);

const center = { lat: 45.82755635593049, lng: 1.2592093547306058 };

// Third pattern: watch for "ready" then do something with the API or map instance
watch(() => mapRef.value?.ready, (ready) => {
    if (!ready) return
    console.log("google maps api", mapRef.value?.api)
    placesService.value = new mapRef.value.api.places.PlacesService(mapRef.value.map)

    for (const place of placesData) {
        placesService.value.getDetails({
            placeId: place.id,
            fields: ["name", "formatted_address", "place_id", "geometry", "photos", "opening_hours"],
            language: "fr",
        }, handleDetails);
    }
})

const handleDetails = (results: any, status: string) => {
    if (status !== "OK") {
        console.error("No details found");
        return;
    }

    places.value.push({
        name: results.name,
        address: results.formatted_address,
        id: results.place_id,
        location: results.geometry.location,
        photos: results.photos.map((p: any) => p.getUrl()),
        openingHours: results.opening_hours.weekday_text,
        services: placesData.find((p: any) => p.id === results.place_id)?.services ?? [],
    });
}

const markers = computed(() => {
    const allMarkers = places.value.map((p: any, index: number) => ({
        position: {
            lat: p.location.lat(),
            lng: p.location.lng(),
        },
        label: (index+1).toString(),
        title: p.name,
        id: p.id
    }));
    console.log("allMarkers", allMarkers);

    return allMarkers
});
</script>

<template>
    <GoogleMap
        api-key=""
        :libraries="['places']"
        class="map"
        :center="center"
        :zoom="6"
        ref="mapRef"
    >
        <Marker
            v-for="(marker) in markers"
            :key="marker.id"
            :options="marker"
            @click="selectedPlace = places.find(p => p.id === marker.id)"
        />
        <section class="selected-place">
            <Place :place="selectedPlace" v-if="selectedPlace" />
        </section>
    </GoogleMap>
</template>

<style scoped>
.map{
    width: 100vw;
    height: 100%;
}

.selected-place {
    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: center;
    width: 100%;
}
</style>