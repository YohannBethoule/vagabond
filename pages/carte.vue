<script setup lang="ts">
import { GoogleMap, Marker } from "vue3-google-map";
import type {Ref} from "vue";

const mapRef: Ref<null> = ref(null)

// Third pattern: watch for "ready" then do something with the API or map instance
watch(() => mapRef.value?.ready, (ready) => {
    if (!ready) return
    console.log("bernard", mapRef.value?.api)
    const service = new mapRef.value.api.places.PlacesService(mapRef.value.map)

        service.findPlaceFromQuery({
        query: "BUBAR - Microbrasserie, Bar et Cave",
        fields: ["name", "geometry"],
    }, (results: any, status: string) => {
        if (status === "OK") {
            console.log(results);
        }
        places.value = [{
            name: results[0].name,
            lat: results[0].geometry.location.lat(),
            lon: results[0].geometry.location.lng(),
        }]

        console.log("prout");
    });
})

watch(mapRef, (map) => {
    console.log("courgette", map);
});



const places = useState("places", () => []);
const lat = useState("lat", () => 45.82755635593049);
const lng = useState("lng", () => 1.2592093547306058);

const center = computed(() => ({ lat: lat.value, lng: lng.value }));

const markers = computed(() => {
    return  places.value.map((p, index) => ({
        position: {
            lat: p.lat,
            lng: p.lon,
        },
        label: (index + 1).toString(),
        title: p.name
    }));
});
</script>

<template>
    <GoogleMap
        api-key="AIzaSyBLCtmMsSNW4GmChqerdOGM51V-Qem3yAE"
        :libraries="['places']"
        class="map"
        :center="center"
        :zoom="6"
        ref="mapRef"
    >
        <Marker
            v-for="(marker, index) in markers"
            :key="index"
            :options="marker"
        />
    </GoogleMap>
</template>

<style scoped>
.map{
    width: 100vw;
    height: 100%;
}
</style>