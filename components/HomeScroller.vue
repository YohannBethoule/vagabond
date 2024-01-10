<script setup lang="ts">
import IconEllipse from 'assets/icons/decoration/icon_ellipse.svg'
import IconLosange from 'assets/icons/decoration/icon_losange.svg'
import IconTireBouchon from 'assets/icons/decoration/icon_tirebouchon.svg'
import IconZguigui from 'assets/icons/decoration/icon_zguigui.svg'
import ArrowDown from '~/assets/icons/arrow_down.svg'
import Logo from '~/assets/icons/logo_vagabond.svg'

const getRandomArbitrary = (min: number, max: number): number => {
    return Math.random() * (max - min) + min;
}

const animateBubbles = () => {
  const icons = document.querySelectorAll<HTMLElement>('.icon');

  icons.forEach((icon: HTMLElement) => {
    // Random values for horizontal movement, vertical movement, and rotation
    const deltaX = getRandomArbitrary(-10, 10); // Horizontal movement range
    const deltaY = getRandomArbitrary(-10, -10); // Vertical movement range (upwards)
    const rotation = getRandomArbitrary(-180, 180); // Rotation range

    // Apply the CSS transformation
    icon.style.transition += `transform 0.5s linear`;
    icon.style.transform += `translate(${deltaX}%, ${deltaY}%) rotate(${rotation}deg)`;
  });
}

const handleScroll = (event: WheelEvent | TouchEvent) => {
  if (show.value || isAnimatingOut.value) {
    event.preventDefault();
    isAnimatingOut.value = true;
    show.value = false;
    animateBubbles();

    // Wait for the out-animation to complete
    setTimeout(() => {
      isAnimatingOut.value = false;
    }, 2000); // Assuming your animation takes 1 second
  }
}

const scrollerRef = ref<HTMLElement | null>(null);
const show = ref<boolean>(true);

const isAnimatingOut = ref(false);

onMounted(() => {

    // Listen to both wheel and touchmove events
    window.addEventListener('wheel', handleScroll, { passive: false });
    window.addEventListener('touchmove', handleScroll, { passive: false });
});

onUnmounted(() => {
    // Remove the event listeners when the component is destroyed
    window.removeEventListener('wheel', handleScroll);
    window.removeEventListener('touchmove', handleScroll);
});


</script>


<template>
    <Transition name="scroll">
        <div id="scroller" ref="scrollerRef" v-if="show">
            <IconEllipse id="ellipse1" class="icon" :class="{ animated: !show }" :filled="true"/>
            <IconLosange id="losange1" class="icon" :class="{ animated: !show }" :filled="true"/>
            <IconTireBouchon id="tirebouchon1" class="icon" :class="{ animated: !show }" :filled="true"/>
            <IconZguigui id="zguigui1" class="icon" :class="{ animated: !show }" :filled="true"/>
            <IconEllipse id="ellipse2" class="icon" :class="{ animated: !show }" :filled="true"/>
            <IconLosange id="losange2" class="icon" :class="{ animated: !show }" :filled="true"/>
            <IconTireBouchon id="tirebouchon2" class="icon" :class="{ animated: !show }" :filled="true"/>
            <IconZguigui id="zguigui2" class="icon" :class="{ animated: !show }" :filled="true"/>
            <Logo class="logo" :filled="true"/>
            <div class="bottom">
                <p>Taking the time to travel</p>
                <ArrowDown id="arrow" @click="() => {show = false}"/>
            </div>
        </div>
    </Transition>
</template>

<style lang="scss" scoped>
#scroller {
    position: fixed;
    top: 0;
    left: 0;
    height: 100dvh;
    width: 100dvw;
    background: $lightblue;
    z-index: 20;
}

.scroll-leave-active {
    transition: all 2s ease;
}

.scroll-leave-to {
    transform: translateY(-100%);
}

.bottom {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 10px;
    width: 100%;
}

.logo {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 200px;
    width: 200px;
}

.icon {
    width: 70px;
    height: 70px;
    position: absolute;

}

#ellipse1 {
    top: 10%;
    left: 80%;
}

#losange1 {
    top: 33%;
    left: 20%;
}

#tirebouchon1 {
    top: 27%;
    left: 33%;
}

#zguigui1 {
    top: 30%;
    left: 75%;
}

#ellipse2 {
    top: 50%;
    left: 50%;
}

#losange2 {
    top: 60%;
    left: 60%;
}

#tirebouchon2 {
    top: 70%;
    left: 70%;
}

#zguigui2 {
    top: 80%;
    left: 80%;
}

#arrow {
    bottom: 30px;
    left: 45%;
    height: 50px;
    width: 50px;
}
</style>