<script setup lang="ts">
import {defineProps} from 'vue'
import {type PlaceDetails} from "@/types/Place";
import WaterIcon from "@/assets/icons/services/water.svg";
import ElectricityIcon from "@/assets/icons/services/electricity.svg";
import WcIcon from "@/assets/icons/services/wc.svg";
import ShowerIcon from "@/assets/icons/services/shower.svg";
import WifiIcon from "@/assets/icons/services/wifi.svg";
import DrinksIcon from "@/assets/icons/services/drink.svg";
import FoodIcon from "@/assets/icons/services/food.svg";
import SleepIcon from "@/assets/icons/services/sleep.svg";


const props = defineProps<{
    place: PlaceDetails
}>()

// Map service names to icon components
const iconMap = {
    water: WaterIcon,
    electricity: ElectricityIcon,
    wc: WcIcon,
    shower: ShowerIcon,
    wifi: WifiIcon,
    drinks: DrinksIcon,
    food: FoodIcon,
    sleep: SleepIcon,
};

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
                    Hours
                </template>
                <template #content>
                    <p v-for="day of place.openingHours" :key="day">{{ day }}</p>
                </template>
            </Collapsible>
            <div class="services">
                <div v-for="service in place.services" :key="service" class="service"><component :is="iconMap[service]" class="service-icon" /></div>
            </div>
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
    font-size: 1.5rem;
}
img {
    width: 10rem;
    height: auto;
    rotate: -5deg;
}
h2 {
    margin: 0 0 0.5rem;
}
p {
    margin: 0 0 0.5rem;
}

.left {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    left: -10%;
}

.services {
    display: flex;
    flex-wrap: wrap;
    margin-top: 1rem;
}

.service-icon {
    width: 1.5rem;
    height: 1.5rem;
    margin-right: 0.5rem;
    background: $orange;
    border-radius: 100%;
    padding: .5rem;
    stroke-width: 5px;
}

@media (max-width: 600px) {
    article {
        flex-direction: column;
    }
    .left {
        left: 0;
        top: -20%
    }

    .right {
        margin-top: -10%;
    }
}
</style>