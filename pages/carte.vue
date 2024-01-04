<script setup lang="ts">
import {CustomMarker, GoogleMap} from "vue3-google-map";
import {ref, type Ref} from "vue";
import {type PlaceDetails} from "@/types/Place";
import placesData from "@/assets/data/places.json";
import MarkerIcon from "@/assets/icons/map_marker.svg";

const mapRef: Ref<any> = ref(null)
const placesService: Ref<any> = ref(null);

const places = ref<PlaceDetails[]>([]);
const selectedPlace = ref<PlaceDetails|null>(null);

const center = { lat: 47.2140086, lng: -1.5553611 };


const config = useRuntimeConfig();

// Third pattern: watch for "ready" then do something with the API or map instance
watch(() => mapRef.value?.ready, (ready) => {
    if (!ready) return
    console.log("google maps api", mapRef.value?.api)
    placesService.value = new mapRef.value.api.places.PlacesService(mapRef.value.map)

    for (const place of placesData) {
        placesService.value.getDetails({
            placeId: place.id,
            fields: ["name", "formatted_address", "place_id", "geometry", "photos", "opening_hours"],
            language: "en",
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
    return places.value.map((p: any, index: number) => ({
        position: {
            lat: p.location.lat(),
            lng: p.location.lng(),
        },
        label: (index + 1).toString(),
        title: p.name,
        id: p.id
    }))
});
</script>

<template>
    <GoogleMap
        :api-key="config.public.googleApiKey"
        :libraries="['places']"
        class="map"
        :center="center"
        :zoom="12"
        ref="mapRef"
    >
        <CustomMarker v-for="(marker, index) in markers" :key="index" :options="marker" @click="selectedPlace = places.find(p => p.id === marker.id)"
        >
            <MarkerIcon :filled="true" :class="{marker, isActive: selectedPlace?.id === marker.id}" />
        </CustomMarker>
        <section class="selected-place">
            <Place :place="selectedPlace" v-if="selectedPlace" />
        </section>
    </GoogleMap>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";
.map{
    width: 100dvw;
    height: calc(100% - $header-height);
}

.marker {
    width: 30px;
    height: 30px;
    color: $yellow;

    &.isActive {
        color: $green;
    }
}

.selected-place {
    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: center;
    width: 100%;
}
</style>