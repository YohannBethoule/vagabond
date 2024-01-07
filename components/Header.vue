<script setup lang="ts">
import IconMap from '~/assets/icons/map2.svg'
import IconBurger from '~/assets/icons/burger.svg'
import Logo from '~/assets/icons/logo_vagabond.svg'

const isMenuOpen = ref(false)

const toggleMenu = (value: boolean) => {
    isMenuOpen.value = value
}
</script>

<template>
    <header>
        <NuxtLink to="/">
            <Logo class="logo"/>
        </NuxtLink>
        <div>
            <NuxtLink to="/carte" class="map">
                <IconMap class="map-icon"/>
            </NuxtLink>
            <a href="#" @click="toggleMenu(true)" class="menu-link">
                <IconBurger/>
            </a>
        </div>
    </header>
    <Menu :is-open="isMenuOpen" :close="() => toggleMenu(false)"/>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/variables.scss';

header {
    background-color: $orange;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    height: $header-height;
    box-shadow: 0 2px 3px 0 gray;
}

.map {
    margin-right: 20px;
}

svg {
    margin: 0;
    color: $white;

    &:hover {
        color: black;
    }
}

.menu-link svg {
    height: 1.4rem;
}

.logo {
    width: 120px;
    font-size: 4rem;
}

svg {
    width: 30px;
    height: 30px;
}

h1 {
    margin: 0;
}
</style>