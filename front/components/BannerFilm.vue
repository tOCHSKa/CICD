<template>
    <div class="grid-container">
        <div class="item item1">
            <Card v-if="film" :key="film.imdb_id" :imdbTitle="film.title" :imdbTime="film.movie_length"
                :imdbBanner="film.banner" :imdbRating="String(film.rating)" :imdbAge="String(-16)"
                @click="goToFilm(film.imdb_id)" />
        </div>
        <div v-if="film">
            <div class="item item2">
                <div class="item2-title">
                    <p>{{ film.title }} \/</p>
                </div>
                <div class="item2-info">
                    <p>{{ film.movie_length }} MIN <span> | </span>Réalisateur</p>
                </div>
                <div class="item2-desc">
                    <p> {{ film.description }}</p>
                </div>
            </div>
        </div>
        <div class="item item3">
            <BoutonText class="bouton" textColor="var(--textcolorBlanc)" background="var(--colorbgNoir)"
                borderSolid="var(--borderRouge)" @click="goToFilm(film.imdb_id)">
                BANDE ANNONCE
            </BoutonText>
        </div>
        <div class="item item4">
            <BoutonText class="bouton" textColor="var(--textcolorBlanc)" background="var(--colorbgRouge)"
                borderSolid="var(--borderRouge)" @click="goToFilm(film.imdb_id)">
                VOIR LE FILM
            </BoutonText>
        </div>
    </div>
</template>

<script setup>
const router = useRouter()
const film = ref(null);

const goToFilm = (imdb_id) => {
    router.push(`/pageFilm/${imdb_id}`)
}

const fetchRecommendedFilm = async () => {
    try {
        const response = await fetch('http://localhost:3001/api/search/film/idFilm/tt1029234');
        if (!response.ok) throw new Error('Erreur lors de la récupération du film');
        const data = await response.json();
        film.value = data.results;

    } catch (error) {
        console.error('Erreur lors de la récupération des données:', error);
    }
};

await fetchRecommendedFilm();

</script>

<style scoped>
.grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto;
    gap: 10px;
    padding: 20px;
    background-color: var(--colorbgNoir);
}

.item {
    color: white;
    display: flex;
    flex-direction: column;
}

.item1,
.item2 {
    height: 233px;
    font-size: 10px;
    font-family: var(--fontFamilyAndale);
}

.item1 {
    display: flex;
    align-items: center;
}

.item2-title,
.item2-info {
    text-align: left;
    /* Aligne le texte à gauche */
}

.item2-title {
    font-size: 14px;
}

.item2-info {
    margin-bottom: 20px;
    font-size: 10px;
}

.item2-title p,
.item2-info p {
    margin: 0;
    /* Supprime les marges par défaut */
}

.item2-desc {
    font-family: var(--fontFamilyMention);
}

.item3,
.item4 {
    min-height: 50px;

    display: flex;
    align-items: center;
}

.bouton {
    font-size: 16px;
    padding: 10px 4px;
    width: 100%;
}
@media screen and (min-width: 1000px) {
    .item2-desc {
        font-size: 20px;
    }
    .item2-title {
        font-size: 30px;
    }
}

</style>
