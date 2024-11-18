<template>
    <NavigationBar />
    <div class="container">
        <img src="../assets/img/guerrePage.png" alt="" class="backgroundimg">
        <img src="../assets/img/GUERRE.svg" alt="" class="svgimg">
    </div>
    <div class="selector-container">

        <div class="selector-text">
            <p>FORMAT</p>
            <AkChevronDown class="icon" />
        </div>
        <div class="selector-text">
            <p>GENRE</p>
            <AkChevronDown class="icon" />
        </div>
        <div class="selector-text">
            <p>PAYS</p>
            <AkChevronDown class="icon" />
        </div>
        <div class="selector-text">
            <p>ANNEE</p>
            <AkChevronDown class="icon" />
        </div>
    </div>
    <div class="card-containner">
        <Card v-for="(film, index) in thrillerFilms" :key="film.imdb_id" :imdbTitle="film.title"
            :imdbTime="film.movie_length" :imdbBanner="film.banner" :imdbRating="String(film.rating)"
            :imdbAge="String(-16)" @click="goToFilm(film.imdb_id)" />
    </div>
    <Subtitle title="NOUS VOUS CONSEILLONS" :showImage="true" :centeredTitle="true" />
    <BannerFilm />
    <Catalogue :rows="3" :cols="2" :thirdRowShow="true" text="PLUS DE 10000 FILMS" />
    <Footer />
</template>
<script setup>
import { AkChevronDown } from '@kalimahapps/vue-icons';

const thrillers = ref([]);
const thrillerFilms = ref([]);
const router = useRouter()

const goToFilm = (imdb_id) => {
    router.push(`/pageFilm/${imdb_id}`)
}

const fetchThrillerGenres = async () => {
    try {
        const response = await fetch('http://localhost:3001/api/search/genre/War');
        if (!response.ok) throw new Error('Erreur lors de la récupération des genres');
        const data = await response.json();
        thrillers.value = data.results ? data.results.slice(0, 27) : [];
    } catch (error) {
        console.error('Erreur lors de la récupération des données:', error);
    }
};

const fetchThrillerFilmDetails = async () => {
    const filmPromises = thrillers.value.map(film =>
        fetch(`http://localhost:3001/api/search/film/idFilm/${film.imdb_id}`).then(res => res.json())
    );

    try {
        const filmResponses = await Promise.all(filmPromises);
        thrillerFilms.value = filmResponses.map(response => response.results);
    } catch (error) {
        console.error('Erreur lors de la récupération des détails des films:', error);
    }
};

await fetchThrillerGenres();
await fetchThrillerFilmDetails();

</script>
<style scoped>
.container {
    height: 280px;
    width: auto;
    position: relative;
    z-index: 0;
}

.backgroundimg {
    width: 100%;
    height: 100%;
}

.svgimg {
    position: absolute;
    top: 70%;
    left: 25%;
    width: 49%;
}

.selector-container {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    min-height: 30px;
    background-color: var(--colorbgNoir);
    color: var(--textcolorBlanc);
    font-size: 12px;
    font-family: var(--fontFamilyAndale);
    padding: 0 17px;
    -webkit-box-shadow: 0px 0px 50px 0px #FF0000;
    box-shadow: 0px 0px 15px 0px #ff00008c;
    overflow: visible;
    z-index: 2;
}

.selector-text {
    display: flex;
    gap: 5px;
    cursor: pointer;
}

.icon {
    color: var(--textcolorBlanc);
    font-size: 1.3em;
    margin-right: 0.5em;
    cursor: pointer;
}

.card-containner {
    background-color: black;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding: 40px 0;
}
</style>