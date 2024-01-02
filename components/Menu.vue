<script setup lang="ts">
import Logo from "assets/icons/logo_vagabond.svg";
import ChevronIcon from "assets/icons/chevron.svg";
import FacebookIcon from "assets/icons/facebook.svg";
import InstagramIcon from "assets/icons/instagram.svg";
import YoutubeIcon from "assets/icons/youtube.svg";

const props = defineProps<{
    isOpen: boolean,
    close: Function
}>()

const showSubmenu = ref(false)

</script>

<template>
    <Transition name="menu">
        <aside v-if="isOpen" class="menu">
            <button class="close-btn" @click="close">X</button>
            <nav>
                <ul class="main">
                    <li>
                        <a class="menu-item" @click="() => {showSubmenu = !showSubmenu}">Festival <ChevronIcon :class="['chevron', showSubmenu ? 'up' : 'down']"/></a>
                        <Transition name="submenu">
                            <ul v-if="showSubmenu" class="submenu">
                                <li class="menu-item"><a href="/" @click="close">Lineup</a></li>
                                <li class="menu-item"><a href="/" @click="close">Tickets</a></li>
                                <li class="menu-item"><a href="/" @click="close">Gallery </a></li>
                            </ul>
                        </Transition>
                    </li>
                    <li>
                        <a class="menu-item" href="/carte" @click="close">Vagabond Map</a>
                    </li>
                    <li>
                        <a class="menu-item" href="/" @click="close">Articles</a>
                    </li>
                    <li>
                        <a class="menu-item" href="/" @click="close">About</a>
                    </li>
                    <li>
                        <a class="menu-item" href="/" @click="close">FAQ</a>
                    </li>
                    <li>
                        <a class="menu-item" href="/" @click="close">Join us</a>
                    </li>
                </ul>
            </nav>

            <div class="menu-footer">
                <Logo class="logo" :filled="true"/>
                <section class="links">
                    <a href="https://www.instagram.com/popillante_graphisme/" target="_blank" rel="noopener noreferrer">
                        <InstagramIcon/>
                    </a>
                    <a href="https://www.facebook.com/vagabondparis" target="_blank" rel="noopener noreferrer">
                        <FacebookIcon/>
                    </a>
                    <a href="https://www.behance.net/vagabondparis" target="_blank" rel="noopener noreferrer">
                        <YoutubeIcon/>
                    </a>
                </section>
            </div>

        </aside>
    </Transition>
</template>

<style scoped lang="scss">
.menu {
    width: 100vw;
    height: 100vh;
    z-index: 50;
    background: white;
    position: fixed;
    top: 0;
    left: 0;
    padding: 2rem;
    box-sizing: border-box;
}

.logo {
    width: 200px;
    height: 100px;
}

ul {
    list-style: none;
    padding: 0;
    margin: 0;
    line-height: 6rem;
}

li {
    font-size: 2.5rem;

    a {
        color: black;
        text-decoration: none;
    }
}

.close-btn {
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 2rem;
    background: none;
    border: none;
    cursor: pointer;
}

.submenu {
    margin-left: 3rem;
    line-height: 4rem;
    font-style: italic;

    li {
        font-size: 2rem;
    }

}

.menu-footer {
    position: absolute;
    bottom: 1rem;
    left: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    justify-content: center;
    place-items: center;

    .logo {
        width: 200px;
        height: 100px;
    }

    .links {
        display: flex;
        gap: 1rem;
        justify-content: center;
        align-items: center;

        a {
            width: 70px;
            height: 70px;
            border: 1px solid black;
            border-radius: 100%;
            display: flex;
            justify-content: center;
            align-items: center;

            svg {
                color: black;
                width: 50px;
                height: 50px;
            }
        }
    }
}

.chevron {
    transition: transform 1s ease;

    &.up {
        transform: rotate(180deg);
    }

    &.down {
        transform: rotate(0deg);

    }
}

.submenu-enter-active,
.submenu-leave-active {
    transition: all 0.5s ease;
    max-height: fit-content;
}

.submenu-enter-from,
.submenu-leave-to {
    transition: all 0.5s ease;
    max-height: 0;
}

.menu-enter-active,
.menu-leave-active {
    transition: all 0.5s ease;
}

.menu-enter-from,
.menu-leave-to {
    transform: translateX(100vw);
}
</style>