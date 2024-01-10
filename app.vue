<template>
    <HomeScroller v-if="isFirstNavigation"></HomeScroller>
    <Header />
    <main>
        <NuxtPage/>
    </main>
    <Footer />
</template>

<style>
    body {
        background-image: url('assets/images/home/home-bg.webp');
        display: flex;
        width: 100vw;
        max-width: 100vw;
        min-height: 100vh;
        font-family: 'Cormorant Garamond', serif;
    }

    main {
        width: 100vw;
        display: flex;
        flex-direction: column;
        flex-grow: 1;
    }
</style>
<script setup lang="ts">
import Footer from "~/components/Footer.vue";

// Reactive variable to track if it's the first navigation
const isFirstNavigation = ref(true);

const route = useRoute();

watch(route, (newRoute, oldRoute) => {
    if (oldRoute && newRoute.path !== oldRoute.path) {
        isFirstNavigation.value = false;
    }
}, { immediate: true });
</script>