<script setup lang="ts">
import Logo from '~/assets/icons/logo_vagabond.svg'
import IconEllipse from 'assets/icons/decoration/icon_ellipse.svg'
import IconLosange from 'assets/icons/decoration/icon_losange.svg'
import IconTireBouchon from 'assets/icons/decoration/icon_tirebouchon.svg'
import IconZguigui from 'assets/icons/decoration/icon_zguigui.svg'
</script>

<template>
    <div id="home">
        <div id="row1">
            <img id="img1" src="~/assets/images/home/img1.webp" alt="Backpacker family" />
            <IconEllipse class="icon" :filled="true" />
            <div class="orange italic subtitle">
                <p class="">Walk</p>
                <p class="bold">Ride</p>
                <p class="bolder">Slide</p>
            </div>
        </div>
        <div id="row2">
            <p class="orange italic subtitle">
                <Logo class="logo" :filled="true" /> journey accessible <span class="black">to all :</span> coming together, sharing, and traveling gently
            </p>
            <img id="img2" src="~/assets/images/home/img2.webp" alt="Couple riding bikes" />
            <IconZguigui class="icon" :filled="true" />
        </div>
        <div id="row3">
            <img id="img3" src="~/assets/images/home/img3.webp" alt="Rollerblading" />
            <IconLosange class="icon" :filled="true" />
        </div>
        <div id="row4">
            <p class="italic">Sparkling, Dynamic, and Mobile !</p>
        </div>
        <div id="row5">
            <p>An invitation to <span class="italic bolder">distance oneself</span></p>
            <p id="from-phones" class="orange italic bolder">from phones</p>
            <img id="img4" src="~/assets/images/home/img4.webp" alt="Road sign" />
            <img id="img5" src="~/assets/images/home/img5.webp" alt="Walking stick and backpack" />
            <img id="img6" src="~/assets/images/home/img6.webp" alt="Bike in forest" />
            <IconZguigui class="icon zguigui" :filled="true" />
            <IconEllipse class="icon ellipse" :filled="true" />
            <p class="bottom-text italic">and to meet <span class="bolder">new people,</span></p>
        </div>
    </div>

</template>

<style lang="scss" scoped>
#home {
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    font-family: 'Cormorant Garamond', serif;

    @media (min-width: 768px) {
        width: 50%;
        place-items: center;
    }
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
    position: absolute;
    z-index: 10;
}

img {
    opacity: 0.7;
}

#row1 {
    display: flex;
    flex-direction: row;
    align-items: center;

    #img1 {
        position: relative;
        left: -20px;
        rotate: -80deg;
        height: 200px;
    }

    .subtitle {
        position: relative;
        left: -50px;
        font-size: 3rem;
        margin: 0;

        p {
            margin: 1rem;
        }
    }

    .icon {
        left: 70px;
        top: 270px
    }
}

#row2 {
    position: relative;
    top: 5%;

    #img2 {
        position: relative;
        left: 50%;
        top: -50%;
        rotate: 5deg;
        height: 150px;
    }

    .subtitle {
        width: 40%;
        font-size: 1.4rem;
        margin-left: 20px;

        .logo {
            font-size: 5rem;
            height: auto;
            margin: 0;
        }
    }

    .icon {
        left: 60%;
        top: 35%;
    }
}

#row3 {
    position: relative;
    top: -2%;

    #img3 {
        position: relative;
        left: 0;
        top: -10px;
        rotate: -5deg;
        height: 180px;
    }

    .icon {
        left: 250px;
        top: 140px;
    }
}

#row4 {
    position: relative;
    top: -2%;

    p {
        font-size: 1.3rem;
        margin-right: 5%;
        text-align: right;
    }
}

#row5 {
    position: relative;
    top: 0;

    p {
        font-size: 1.6rem;
        margin: 0 0 0 5%;
        width: 40%;
    }

    .bottom-text {
        font-size: 1.3rem;
        margin: 0 0 0 5%;
        width: 40%;
        position: relative;
        top: 290px;
    }

    #from-phones {
        font-size: 2rem;
        margin: 0 0 0 10%;
    }

    #img4 {
        position: absolute;
        left: 60%;
        top: 0;
        rotate: 5deg;
        height: 200px;
    }

    #img5 {
        position: absolute;
        left: -10px;
        top: 200px;
        rotate: -7deg;
        height: 200px;
    }

    #img6 {
        position: absolute;
        left: 45%;
        top: 250px;
        rotate: -5deg;
        height: 200px;
    }

    .zguigui {
        left: 50%;
        top: 80%;
    }

    .ellipse {
        left: 100px;
        top: 350px;
    }
}

#img7 {
    rotate: -80deg;
    height: 200px;
}
</style>