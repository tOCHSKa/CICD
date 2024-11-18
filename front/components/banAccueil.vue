<template>
    <div class="test">
    <div class="ban">
        <div class="slider-container" @touchstart="startTouch" @touchmove="moveTouch" @touchend="endTouch">
            <div class="slider-tracker" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
                <img v-for="name in pictureName" :key="name" :src="`_nuxt/assets/img/${name}.jpg`" class="image" />
            </div>
        </div>
        <div class="overlay">
            <p class="textBan">
                ENTREZ<br />SI VOUS L'OSEZ...<br /><span class="textP">LES FRISSONS SONT GARANTIS</span>
            </p>
            <BoutonText class="bouton" textColor="var(--textcolorNoir)" background="var(--colorbgJaune)"
                borderSolid="var(--border-none)">
                PLONGEZ DANS LA TERREUR
            </BoutonText>
            <div class="dots">
                <div v-for="(dot, index) in pictureName" :key="index" :class="checkDotClass(index)"></div>
            </div>
        </div>
            <button @click="prevSlide" class="prevButton">
                <Icon name="ep:arrow-left" size="20"/>
            </button>
            <button @click="nextSlide" class="nextButton">
                <Icon name="hugeicons:arrow-right-01" size="20" />
            </button>
        </div>
    </div>
</template>



<script setup>
const pictureName = ref([ 'ban1', 'ban2', 'ban3', 'ban4', 'ban5',]);

const currentIndex = ref(0);
let slideInterval = null;

const nextSlide = () => {
    currentIndex.value = (currentIndex.value + 1) % pictureName.value.length;
};
const prevSlide = () => {
    currentIndex.value = (currentIndex.value - 1 + pictureName.value.length) % pictureName.value.length;
};

const slide = () => {
    slideInterval = setInterval(nextSlide, 5000);
};

let startX = 0;
let currentX = 0;

const startTouch = (e) => {
    startX = e.touches[0].clientX;
}
const moveTouch = (e) => {
    currentX = e.touches[0].clientX;
}
const endTouch = () => {
    const diff = startX - currentX;
    if (diff > 50) {
        nextSlide();
    } else if (diff < -50) {
        prevSlide();
    }
};

const checkDotClass = (index) => {
    return index === currentIndex.value ? 'activeDot' : 'dot';
};

onMounted(() => {
    slide();
});
</script>



<style scoped>
.test {
    z-index: 0;
}
.ban {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    background: var(--colorbgNoir);
}

.slider-container {
    display: flex;
    overflow: hidden;
    height: 600px;
    width: 100%;
}
.slider-tracker {
    display: flex;
    transition: .5s;
}
.image {
    width: 100%;
    object-fit: cover;
    flex-shrink: 0;
}

.nextButton {
    width: 50px;
    height: 600px;
    background-color: rgba(0, 0, 0, 0);
    position: absolute;
    right: 0;
    bottom: 0;
    border: none;
    color: white;
}
.prevButton {
    width: 50px;
    height: 600px;
    background-color: rgba(0, 0, 0, 0);
    position: absolute;
    left: 0;
    bottom: 0;
    border: none;
    color: white;
}

.overlay {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 32px;
    gap: 30px;
}

.textBan {
    color: white;
    text-align: center;
    font-size: 22px;
    font-family: var(--fontFamilyAndale);
    opacity: 0.7;
    margin: 0;
    line-height: 18px;
}
.textP {
    font-size: 18px
}

.dots {
    display: flex;
    gap: 4px;
}
.dot,.activeDot {
    background-color: #D9D9D966;
    height: 6px;
    width: 6px;
    border-radius: 50%;
}

.activeDot {
    background-color: #D9D9D9CC;
}

@media screen and (min-width: 1000px) {
    .image {
        object-position: 10px -320px;
    }
    .slider-container {
        height: 630px;
    }
 }
</style>


