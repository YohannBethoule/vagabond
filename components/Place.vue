<script setup lang="ts">
import {defineProps} from 'vue'
import {type PlaceDetails} from "@/types/Place";

const props = defineProps<{
    place: PlaceDetails
}>()

console.log("props", props)
</script>

<template>
    <article>
        <div class="left">
            <img v-if="place.photos && place.photos.length > 0" :src="place.photos[0]" :alt="place.name"/>

        </div>
        <div class="right">
            <h2>{{ place.name }}</h2>
            <p>{{ place.address }}</p>
            <Collapsible>
                <template #headline>
                    Horaires
                </template>
                <template #content>
                    <p v-for="day of place.openingHours" :key="day">{{ day }}</p>
                </template>
            </Collapsible>
            <p v-for="service in place.services" :key="service">{{ service }}</p>
        </div>

    </article>
</template>

<style scoped lang="scss">
article {
    background: $green;
    border-radius: 10px;
    padding: 1rem;
    margin-bottom: 1rem;
    color: white;
    width: 80vw;
    max-width: 40rem;
    display: flex;
}
img {
    width: 10rem;
    height: auto;
    rotate: -5deg;
}
h2 {
    margin-bottom: 0.5rem;
}
p {
    margin-bottom: 0.5rem;
}

.left {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    left: -15%;
}
</style>