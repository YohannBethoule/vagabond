<script setup lang="ts">
import {defineProps} from "vue";

const props = defineProps<{
    headline: String
}>()

const expanded = ref(false)
</script>

<template>
    <div :class="[expanded ? 'expanded' : '', 'container']">
        <div class="headline" @click="expanded = !expanded">{{ headline }}<span class="arrow"></span></div>
        <div class="collapsible">
            <slot></slot>
        </div>
    </div>
</template>

<style scoped lang="scss">
* {
    transition: all 0.5s ease-in-out;
}

.headline {
    display: flex;
    align-items: center;
    cursor: pointer;
}

.collapsible {
    max-height: 0;
    overflow: hidden;
    margin-left: 2rem;
}

.arrow {
    margin: 0 1.5rem;
}

.arrow::before,
.arrow::after {
    position: relative;
    display: block;
    content: '';
    width: 12px;
    height: 2px;
    background: currentColor;
    transition: all 0.5s ease-in-out;
}

.arrow::before {
    transform: rotate(45deg);
}

.arrow::after {
    left: 8px;
    top: -2px;
    transform: rotate(-45deg);
}

.expanded {
    .collapsible {
        max-height: 1000px;
    }

    .arrow::before {
        transform: rotate(-45deg);
    }

    .arrow::after {
        transform: rotate(45deg);
    }
}

</style>