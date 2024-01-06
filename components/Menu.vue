<script setup lang="ts">
import Logo from "assets/icons/logo_vagabond.svg";
import FacebookIcon from "assets/icons/facebook.svg";
import InstagramIcon from "assets/icons/instagram.svg";
import YoutubeIcon from "assets/icons/youtube.svg";
import IconMap from '~/assets/icons/map2.svg'
import IconStar from '~/assets/icons/star.svg'
import IconArticle from '~/assets/icons/newspaper.svg'
import IconUs from '~/assets/icons/us.svg'
import IconFaq from '~/assets/icons/faq.svg'
import IconJoinUs from '~/assets/icons/groups.svg'

const props = defineProps<{
    isOpen: boolean,
    close: Function
}>()
</script>

<template>
    <Transition name="menu">
        <aside v-if="isOpen" class="menu">
            <a href="#" class="close" @click="close"></a>
            <nav>
                <ul class="main">
                    <li>

                        <Collapsible>
                            <template #headline>
                                <a href="/" @click="close"><IconStar class="link-icon" />Festival</a>
                            </template>
                            <template #content>
                                <ul class="submenu">
                                    <li class="menu-item"><a href="/" @click="close">Lineup</a></li>
                                    <li class="menu-item"><a href="/" @click="close">Tickets</a></li>
                                    <li class="menu-item"><a href="/" @click="close">Gallery </a></li>
                                </ul>
                            </template>
                        </Collapsible>
                    </li>
                    <li>
                        <a class="menu-item" href="/carte" @click="close"><IconMap class="link-icon" />Vagabond Map</a>
                    </li>
                    <li>
                        <a class="menu-item" href="/" @click="close"><IconArticle class="link-icon"/>Articles</a>
                    </li>
                    <li>
                        <a class="menu-item" href="/" @click="close"><IconUs class="link-icon"/>About</a>
                    </li>
                    <li>
                        <a class="menu-item" href="/" @click="close"><IconFaq class="link-icon" :filled="true"/>FAQ</a>
                    </li>
                    <li>
                        <a class="menu-item" href="/" @click="close"><IconJoinUs class="link-icon"/>Join us</a>
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
    display: flex;
    flex-direction: column;
    font-weight: 700;
}

.main {
    margin-top: 2rem;
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

.link-icon {
    margin-right: 20px;
    color: $orange;
}

.close {
    position: absolute;
    right: 32px;
    top: 32px;
    width: 32px;
    height: 32px;
    border: 2px solid black;
    border-radius: 100%;

    &:hover {
        border-width: 3px;
        &:before, &:after {
            width: 3px;
        }
    }
}

.close:before, .close:after {
    position: absolute;
    left: 15px;
    top: 4px;
    content: ' ';
    height: 24px;
    width: 2px;
    background-color: black;
}
.close:before {
    transform: rotate(45deg);
}
.close:after {
    transform: rotate(-45deg);
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
    margin-top: auto;
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

.menu-enter-active,
.menu-leave-active {
    transition: all 0.5s ease;
}

.menu-enter-from,
.menu-leave-to {
    transform: translateX(100vw);
}
</style>