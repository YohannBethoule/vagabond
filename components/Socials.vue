<script setup lang="ts">

import YoutubeIcon from "assets/icons/youtube.svg";
import InstagramIcon from "assets/icons/instagram.svg";
import FacebookIcon from "assets/icons/facebook.svg";
</script>

<template>
    <section class="links">
        <a href="https://www.instagram.com/vagabond_fest?igsh=OGdlcGxrOGl0Nzhu" target="_blank" rel="noopener noreferrer">
            <InstagramIcon/>
        </a>
        <a href="https://www.instagram.com/vagabond_fest?igsh=OGdlcGxrOGl0Nzhu" target="_blank" rel="noopener noreferrer">
            <FacebookIcon/>
        </a>
        <a href="https://www.instagram.com/vagabond_fest?igsh=OGdlcGxrOGl0Nzhu" target="_blank" rel="noopener noreferrer">
            <YoutubeIcon/>
        </a>
    </section>
</template>

<style scoped lang="scss">
.links {
    display: flex;
    gap: 1rem;
    justify-content: center;
    align-items: center;
    height: 4rem;

    a {
        width: 70px;
        height: 70px;
        border: 1px solid black;
        border-radius: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        &:hover {
            border-width: 2px;
        }

        svg {
            color: black;
            width: 50px;
            height: 50px;
        }
    }
}
</style>