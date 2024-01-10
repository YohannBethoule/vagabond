<script setup lang="ts">
import Logo from '~/assets/icons/logo_vagabond.svg'
import ArrowDown from '~/assets/icons/arrow_down.svg'
import InstagramIcon from '~/assets/icons/instagram.svg'
import FacebookIcon from '~/assets/icons/facebook.svg'
import YoutubeIcon from '~/assets/icons/youtube.svg'

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
</script>

<template>
    <footer>
        <ArrowDown id="arrow-up" @click="scrollToTop"/>
        <Logo class="logo" :filled="true"/>
        <Socials />
        <p>
            Copyright © 2023 vagabond-fest.com All rights reserved.<br/>
            Designed by Louise Bruneau & developed by Yohann Bethoule
        </p>
    </footer>
</template>

<style scoped lang="scss">
footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;
}

.logo {
    width: 200px;
    height: 100px;
}

#arrow-up {
    width: 50px;
    height: 50px;
    transform: rotate(180deg);
}

p {
    text-align: center;
    font-size: 0.8rem;
    margin-top: 1rem;
    line-height: 2rem;
}
</style>