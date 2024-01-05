<template>
    <HomeScroller></HomeScroller>
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
        height: 100%;
        display: flex;
        flex-direction: column;
        flex-grow: 1;
    }
</style>
<script setup lang="ts">
import Footer from "~/components/Footer.vue";
</script>