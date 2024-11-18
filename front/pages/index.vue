<template>
    <div class="tout">
        <NavigationBar />
        <BanAccueil />
        <Subtitle title="LES DERNIERES FRAYEURS" :showImage="true" />
        <div class="card-container">
            <Card v-for="(film, index) in horrorFilms" :key="film.imdb_id" :imdbTitle="film.title"
                :imdbTime="film.movie_length" :imdbBanner="film.banner" :imdbRating="String(film.rating)"
                :imdbAge="String(-16)" @click="goTofilm(film.imdb_id)" />
        </div>
        <Subtitle title="VOS FAVORIS" :showImage="false" />
        <div class="card-container">
            <Card v-for="(film, index) in cultesFilms" :key="film.imdb_id" :imdbTitle="film.title"
                :imdbTime="film.movie_length" :imdbBanner="film.banner" :imdbRating="String(film.rating)"
                :imdbAge="String(-16)" @click="goTofilm(film.imdb_id)" />
        </div>
        <Subtitle title="NOS FILMS CULTES" :showImage="false" />
        <div class="card-container">
            <Card v-for="(film, index) in cultesFilms" :key="film.imdb_id" :imdbTitle="film.title"
                :imdbTime="film.movie_length" :imdbBanner="film.banner" :imdbRating="String(film.rating)"
                :imdbAge="String(-16)" @click="goTofilm(film.imdb_id)" />
        </div>
        <Subtitle title="NOS MEILLEURS THRILLER" :showImage="false" />
        <div class="card-container">
            <Card v-for="(film, index) in thrillerFilms" :key="film.imdb_id" :imdbTitle="film.title"
                :imdbTime="film.movie_length" :imdbBanner="film.banner" :imdbRating="String(film.rating)"
                :imdbAge="String(-16)" @click="goTofilm(film.imdb_id)" />
        </div>
        <Banner />
        <Arm />
        <Subtitle title="A DECOUVRIR SUR CHILLS" :showImage="true" :centeredTitle="true" />
        <BannerFilm />
        <Catalogue :rows="3" :cols="2" :thirdRowShow="true" text="PLUS DE 10000 FILMS" />
        <Newsletter />
        <ArmDown />
        <Footer />
    </div>
</template>

<script setup>
const router = useRouter()

const horrors = ref([]);
const horrorFilms = ref([]);
const thrillers = ref([]);
const thrillerFilms = ref([]);

const goTofilm = (imdb_id) => {
    router.push(`/pageFilm/${imdb_id}`)
}
const apiUrl = process.env.API_URL;

const fetchHorrorGenres = async () => {
    const config = useRuntimeConfig(); // Récupérer la configuration runtime
    try {
        const response = await fetch(`${apiUrl}/api/search/genre/Horror`);
        if (!response.ok) throw new Error('Erreur lors de la récupération des genres');
        const data = await response.json();
        horrors.value = data.results ? data.results.slice(0, 11) : [];
    } catch (error) {
        console.error('Erreur lors de la récupération des données:', error);
    }
};

const fetchFilmDetails = async () => {
    const filmPromises = horrors.value.map(film =>
        fetch(`${apiUrl}/api/search/film/idFilm/${film.imdb_id}`).then(res => res.json())
    );

    try {
        const filmResponses = await Promise.all(filmPromises);
        horrorFilms.value = filmResponses.map(response => response.results);
    } catch (error) {
        console.error('Erreur lors de la récupération des détails des films:', error);
    }
};


const fetchThrillerGenres = async () => {
    try {
        const response = await fetch(`${apiUrl}/api/search/genre/Thriller`);
        if (!response.ok) throw new Error('Erreur lors de la récupération des genres');
        const data = await response.json();
        thrillers.value = data.results ? data.results.slice(0, 11) : [];
    } catch (error) {
        console.error('Erreur lors de la récupération des données:', error);
    }
};

const fetchThrillerFilmDetails = async () => {
    const filmPromises = thrillers.value.map(film =>
        fetch(`${apiUrl}/api/search/film/idFilm/${film.imdb_id}`).then(res => res.json())
    );

    try {
        const filmResponses = await Promise.all(filmPromises);
        thrillerFilms.value = filmResponses.map(response => response.results);
    } catch (error) {
        console.error('Erreur lors de la récupération des détails des films:', error);
    }
};


const cultes = ref([]);
const cultesFilms = ref([]);

const fetchCultesGenres = async () => {
    try {
        const response = await fetch(`${apiUrl}/api/search/filmbyrating`);
        if (!response.ok) throw new Error('Erreur lors de la récupération des genres');
        const data = await response.json();
        cultes.value = data.results ? data.results.slice(1, 11) : [];
    } catch (error) {
        console.error('Erreur lors de la récupération des données:', error);
    }
};

const fetchCultesFilmDetails = async () => {
    const filmPromises = cultes.value.map(film =>
        fetch(`${apiUrl}/api/search/film/idFilm/${film.imdb_id}`).then(res => res.json())
    );

    try {
        const filmResponses = await Promise.all(filmPromises);
        cultesFilms.value = filmResponses.map(response => response.results);
    } catch (error) {
        console.error('Erreur lors de la récupération des détails des films:', error);
    }
};

await fetchHorrorGenres();
await fetchFilmDetails();
await fetchThrillerGenres();
await fetchThrillerFilmDetails();
await fetchCultesGenres();
await fetchCultesFilmDetails();


</script>

<style scoped>
.tout {
    background-color: black;
}

.card-container {
    display: flex;
    overflow-x: auto;
    gap: 16px;
    padding: 10px;
    background-color: black;
}
</style>
