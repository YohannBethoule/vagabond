<script setup lang="ts">
    import IconMap from '~/assets/icons/map.svg'
    import Logo from '~/assets/icons/logo_vagabond.svg'
</script>

<template>
    <header>
        <NuxtLink to="/"><Logo class="logo" /></NuxtLink>
        <NuxtLink to="/carte"><IconMap class="map-icon" :filled="true"/></NuxtLink>
    </header>
</template>

<style lang="scss" scoped>
    header {
        background-color: $orange;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 20px;
    }

    svg {
        margin: 0;
        color: $white;

        &:hover {
            color: black;
        }
    }

    .logo {
        width: 120px;
        font-size: 4rem;
    }

    .map-icon {
        width: 30px;
        height: 30px;
    }

    h1 {
        margin: 0;
    }
</style>