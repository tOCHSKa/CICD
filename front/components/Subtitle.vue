<template>
    <div class="subtitle" :style="backgroundStyle">
        <p>
            {{ props.title }}
        </p>
    </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import griffeTitre from '@/assets/img/griffeTitre.png';

const props = defineProps({
    title: {
        type: String,
        default: 'N/A'
    },
    showImage: {
        type: Boolean,
        default: false
    },
    centeredTitle: {
        type: Boolean,
        default: false
    }
});

// Référence pour la largeur de l'écran
const screenWidth = ref(0);

// Mettre à jour la largeur de l'écran lors du redimensionnement
const handleResize = () => {
    screenWidth.value = window.innerWidth;
};

// Attacher l'événement resize
onMounted(() => {
    // Assurer que le code ne s'exécute que côté client
    if (typeof window !== 'undefined') {
        screenWidth.value = window.innerWidth;
        window.addEventListener('resize', handleResize);
    }
});

// Détacher l'événement lorsque le composant est détruit
onUnmounted(() => {
    if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
    }
});

// Style dynamique du background
const backgroundStyle = computed(() => {
    const shouldShowImage = props.showImage && screenWidth.value < 1000;
    
    return {
        backgroundImage: shouldShowImage ? `url(${griffeTitre})` : 'none',
        backgroundSize: 'cover',
        backgroundPosition: '-50px center',
        backgroundRepeat: 'no-repeat',
        height: '40px',
        color: 'var(--textcolorBlanc)',
        fontFamily: 'var(--fontFamily)',
        paddingLeft: '17px',
        position: 'relative',
        overflow: 'visible',
        display: 'flex',
        justifyContent: props.centeredTitle ? 'center' : 'none',
        backgroundColor: 'black',
    };
});

</script>

<style scoped>
.subtitle {
    display: flex;
}
.subtitle p {
    margin: 0;
    position: relative;
    display: flex;
    align-items: center;
}
</style>
