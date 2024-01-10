<script setup lang="ts">
import Logo from '~/assets/icons/logo_vagabond.svg'
import IconEllipse from 'assets/icons/decoration/icon_ellipse.svg'
import IconLosange from 'assets/icons/decoration/icon_losange.svg'
import IconZguigui from 'assets/icons/decoration/icon_zguigui.svg'
</script>

<template>
    <div id="home">
<!--        ROW 1-->
        <div class="grid-row row-shrink-right">
            <div class="one">
                <img id="img1" src="~/assets/images/home/img1.webp" alt="Backpacker family"/>
                <IconEllipse class="icon" :filled="true"/>
            </div>
            <div class="two orange italic subtitle">
                <p class="">Walk</p>
                <p class="bold">Ride</p>
                <p class="bolder">Slide</p>
            </div>
        </div>

<!--        ROW 2-->
        <div class="grid-row row-shrink-left">
            <div class="three">
                <p class="orange italic subtitle">
                    <Logo class="logo" :filled="true"/>
                    journey accessible <span class="black">to all :</span> coming together, sharing, and traveling gently
                </p>
            </div>
            <div class="four">
                <img id="img2" src="~/assets/images/home/img2.webp" alt="Couple riding bikes"/>
                <IconZguigui class="icon" :filled="true"/>
            </div>
        </div>

<!--ROW 3-->
        <div class="grid-row row-shrink-left">
            <div class="five">
                <img id="img3" src="~/assets/images/home/img3.webp" alt="Rollerblading"/>
                <IconLosange class="icon" :filled="true"/>
            </div>
            <div class="six">
                <p class="italic">Sparkling, Dynamic, and Mobile !</p>
            </div>
        </div>
        <div class="another-grid">
            <div class="seven">
                <p>An invitation to <span class="italic bolder">distance oneself</span></p>
                <p id="from-phones" class="orange italic bolder">from phones</p>
            </div>
            <img id="img4" src="~/assets/images/home/img4.webp" alt="Road sign"/>
            <img id="img5" src="~/assets/images/home/img5.webp" alt="Walking stick and backpack"/>
            <img id="img6" src="~/assets/images/home/img6.webp" alt="Bike in forest"/>

            <IconZguigui class="icon zguigui" :filled="true"/>
            <IconEllipse class="icon ellipse" :filled="true"/>
        </div>
        <div class="grid-row row-shrink-left eight">
            <p></p>
            <p class="bottom-text italic">and to meet <span class="bolder">new people,</span></p>
        </div>

        <div class="grid-row row-shrink-right eight">
            <img id="img7" src="~/assets/images/home/img7.webp" alt="Tea with sweet note"/>
            <img id="img8" src="~/assets/images/home/img8.webp" alt="Bike with family"/>
            <IconZguigui class="icon" :filled="true"/>
        </div>
        <div class="p-traveler-network">
            <p>thus creating</p>
            <p class="orange italic bolder">a network of travelers</p>
        </div>
        <div class="grid-row row-shrink-right nine">
            <img id="img9" src="~/assets/images/home/img9.webp" alt="Kayaking"/>
            <img id="img10" src="~/assets/images/home/img10.webp" alt="Breakfast in nature"/>
            <IconLosange class="icon" :filled="true"/>
        </div>
        <img id="img11" src="~/assets/images/home/img11.webp" alt="Hiking with friends"/>
    </div>

</template>

<style lang="scss" scoped>
#home {
    height: fit-content;
    display: flex;
    flex-direction: column;
    gap: 20px;
    font-size: clamp(1.5rem, 2.5vw, 7rem);
    margin: clamp(0rem, 2vw, 5rem);
    overflow-x: hidden;

    @media screen and (max-width: 600px) {
        margin: 0;
        padding: 5vw;
    }
}

.grid-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    align-items: center;
}

.row-shrink-right {
    grid-template-columns: 1fr minmax(150px, 1fr);
    /* This makes the right column in this row shrinkable */
}

.row-shrink-left {
    grid-template-columns: minmax(150px, 1fr) 1fr;
    /* This makes the left column in this row shrinkable */
}

.black {
    color: black;
}

.orange {
    color: $orange;
}

.italic {
    font-style: italic;
}

.bold {
    font-weight: 500;
}

.bolder {
    font-weight: 700;
}

.icon {
    width: 80px;
    height: 80px;
    z-index: 10;
    position: absolute;
}

img {
    opacity: 0.7;
    width: clamp(250px, 40vw, 900px);
    min-width: 250px;
    aspect-ratio: auto 1/1;
}

.one {
    #img1 {
        rotate: -10deg;
        margin-top: 10vh;
        margin-left: calc(-150px + 20vw);
    }

    .icon {
        top: calc(150px + 25vw);
        left:40vw;
    }
}

.two {
    font-size: clamp(3rem, 5vw, 5rem);
    text-align: center;
    margin-top: 50px;

    p {
        margin: 5% 0;
    }
}

.three {
    .logo {
        font-size: clamp(5rem, 7vw, 15rem);
        height: auto;
        margin: 0;
    }
}

.four {
    .icon {
        top: calc(400px + 35vw);
        left: 80vw;
    }
}

.five {
    .icon {
        position: relative;
        left: 0;
        top: -200px;
    }
}

.another-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    align-items: center;
    position: relative;

    .zguigui {
        top: calc(150px + 20vw);
        left: 70vw;
    }

    .ellipse {
        top: calc(300px + 70vw);
        left: calc(-150px + 50vw);

    }
}

.seven {
    width: fit-content;
    #from-phones {
        text-align: right;
        margin-right: -5vw;
    }
}

.eight {
    .icon {
        position: relative;
        left: 75vw;
        top: -50px;
    }
}

.nine {
    .icon {
        position: relative;
        left: 75vw;
        top: -50px;
    }
}

.p-traveler-network {
    text-align: center;
    margin-left: -30vw;
    margin-top: -8vw;
    .orange {
        margin-left: 40vw;
    }
}


#img2 {
    rotate: 5deg;
}

#img3 {
    rotate: -5deg;
    margin-left: calc(-150px + 15vw);
}

#img4 {
    rotate: 5deg;
    margin-left: clamp(2rem, 8vw, 0rem);
}

#img5 {
    rotate: -7deg;
    margin-left: calc(-200px + 20vw);
    margin-right: 5vw;
}

#img6 {
    rotate: -5deg;
}

#img7 {
    rotate: 8deg;
    margin-left: calc(-150px + 10vw);
    margin-right: 10vw;
}
#img8 {
    rotate: -5deg;
}

#img9 {
    rotate: 5deg;
    margin-left: calc(-100px + 10vw);
    margin-right: 10vw;
}

#img10 {
    rotate: 15deg;
    margin-top: 50px;
}

#img11 {
    rotate: -10deg;
    width: 90vw;
    margin-top: 5vw;
    margin-left: 2vw;
    margin-bottom: 10vw;
}

</style>