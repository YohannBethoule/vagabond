<script setup lang="ts">
import Logo from "assets/icons/logo_vagabond.svg";
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
                                <a href="#" @click="close">
                                    <IconStar class="link-icon"/>
                                    Festival</a>
                            </template>
                            <template #content>
                                <ul class="submenu">
                                    <li class="menu-item">
                                        <NuxtLink to="/" @click="close">Lineup</NuxtLink>
                                    </li>
                                    <li class="menu-item">
                                        <NuxtLink to="/" @click="close">Tickets</NuxtLink>
                                    </li>
                                    <li class="menu-item">
                                        <NuxtLink to="/" @click="close">Gallery</NuxtLink>
                                    </li>
                                </ul>
                            </template>
                        </Collapsible>
                    </li>
                    <li>
                        <NuxtLink class="menu-item" to="/carte" @click="close">
                            <IconMap class="link-icon"/>
                            Vagabond Map
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink class="menu-item" to="/" @click="close">
                            <IconArticle class="link-icon"/>
                            Articles
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink class="menu-item" to="/" @click="close">
                            <IconUs class="link-icon"/>
                            About
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink class="menu-item" to="/" @click="close">
                            <IconFaq class="link-icon" :filled="true"/>
                            FAQ
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink class="menu-item" to="/" @click="close">
                            <IconJoinUs class="link-icon"/>
                            Join us
                        </NuxtLink>
                    </li>
                </ul>
            </nav>

            <div class="menu-footer">
                <Logo class="logo" :filled="true"/>
                <Socials/>
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

        &:hover {
            font-weight: 600;
        }
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
    top: 6px;
    content: ' ';
    height: 20px;
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