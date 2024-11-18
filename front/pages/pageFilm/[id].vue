<template>
    <div class="tout">
        <NavigationBar />

        <div class="filmPage">
            <div v-if="selectedFilm">
                <div class="filmContainer">
                    <div class="divBaniere">
                        <img :src="selectedFilm.banner" class="banniere" />
                    </div>
                    <div class="container">
                        <div class="infoEtCoeur">
                            <div>
                                <h1 class="titreFilm">{{ selectedFilm.title }}</h1>
                                <p class="duration">{{ selectedFilm.movie_length }} <strong>min</strong></p>
                                <p class="annee">{{ selectedFilm.year }}</p>
                                <p class="rating">{{ selectedFilm.rating }}</p>
                            </div>
                            <Icon name="mdi:heart" size="30" class="iconCoeur" @click="toggleFavorite"
                                :class="{ redCoeur: isFavorite }" />
                        </div>


                        <BoutonText class="buttonVoir" textColor="var(--textcolorBlanc)"
                            background="var(--colorbgGradientRouge)" borderSolid="var(--borderNone)">
                            <NuxtLink to="/offre">Voir Film</NuxtLink>
                        </BoutonText>
                        <BoutonText class="boutonTrailer" textColor="var(--textcolorBlanc)"
                            background="var(--colorbgTransparent)" borderSolid="var(--borderRouge)" @click="toggleShow">
                            Bande anonce
                        </BoutonText>
                    </div>
                </div>
                <div v-if="!isVisible">
                    <div class="video">
                        <iframe width="330" height="200" :src="selectedFilm.trailer" frameborder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen>
                        </iframe>
                    </div>
                </div>
                <div class="divDescription">
                    <p class="description">
                        {{ selectedFilm.description }}
                    </p>
                </div>
                <div @click="toggleActeur">
                    <div class="buttonCasting">
                        <Icon name="icon-park-outline:movie" size="15" class="iconInput" />
                        <p>CASTING +</p>
                    </div>
                </div>
                <div v-if="!isVsibleActeur">
                    <ul class="displayCasting">
                        <li v-for="acteur in ActeursFilm" :key="acteur.name">
                            <div class="divImageCasting">
                                <img class="imageCasting" :src="acteur.image" @click="goToActor(acteur.imdb_id)" />
                            </div>
                            <p class="nameCasting">{{ acteur.name }}</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div v-else>
                <div class="chargement">
                    <p>Chargement du film...</p>
                </div>
            </div>
        </div>


        <div class="card-container">
            <Card v-for="(film, index) in horrorFilms" :key="film.imdb_id" :imdbTitle="film.title"
                :imdbTime="film.movie_length" :imdbBanner="film.banner" :imdbRating="String(film.rating)"
                :imdbAge="String(-16)" @click="goToFilm(film.imdb_id)" />
        </div>
        <Arm />
        <Subtitle title="VOUS AIMEREZ AUSSI" :showImage="false" :centeredTitle="true" />
        <BannerFilm />
        <Catalogue />
        <Footer />
    </div>
</template>



<script setup>
const route = useRoute()
const router = useRouter()
const horrors = ref([]);
const horrorFilms = ref([]);
const ActeursFilm = ref([]);
const selectedFilm = ref(null);
const isVisible = ref(true)
const isVsibleActeur = ref(true)
const isFavorite = ref(false)

const goToFilm = (imdb_id) => {
    router.push(`/pageFilm/${imdb_id}`)
}
const goToActor = (imdb_id) => {
    router.push(`/acteur/${imdb_id}`);
}

const toggleFavorite = () => {
    isFavorite.value = !isFavorite.value
}
const toggleShow = () => {
    isVisible.value = !isVisible.value
}
const toggleActeur = () => {
    isVsibleActeur.value = !isVsibleActeur.value
}



const fetchActor = async () => {
    try {
        const response = await fetch(`http://localhost:3001/api/search/castInfoByMovie/${route.params.id}`);
        const data = await response.json();

        const sixActeurs = data.cast.slice(0, 6)

        ActeursFilm.value = sixActeurs

    } catch (error) {
        console.error(`Erreur lors de la récupération des acteurs avec l'ID ${route.params.id}:`, error);
    }
}

const fetchFilm = async () => {
    try {
        const response = await fetch(`http://localhost:3001/api/search/film/idFilm/${route.params.id}`);
        const data = await response.json();
        selectedFilm.value = data.results;
    } catch (error) {
        console.error(`Erreur lors de la récupération du film avec l'ID ${route.params.id}:`, error);
    }
};


const fetchHorrorGenres = async () => {
    try {
        const response = await fetch('http://localhost:3001/api/search/genre/Horror');
        if (!response.ok) throw new Error('Erreur lors de la récupération des genres');
        const data = await response.json();
        horrors.value = data.results ? data.results.slice(0, 11) : [];
    } catch (error) {
        console.error('Erreur lors de la récupération des données:', error);
    }
};
const fetchFilmDetails = async () => {
    const filmPromises = horrors.value.map(film =>
        fetch(`http://localhost:3001/api/search/film/idFilm/${film.imdb_id}`).then(res => res.json())
    )

    try {
        const filmResponses = await Promise.all(filmPromises);
        horrorFilms.value = filmResponses.map(response => response.results);
    } catch (error) {
        console.error('Erreur lors de la récupération des détails des films:', error);
    }
};


// const favoris = async () => {
//   try {
//     const body = {
//       username: username.value,
//       mdp: mdp.value,
//     }

//     const data = await $fetch(`http://localhost:3001/api/users/favoris/${route.params.id}`, {
//       method: 'POST',
//       body,
//     })

//   } catch (error) {
//     console.error('Erreur lors de la connexion:', error)
//   }
// }


onMounted(async () => {
    await fetchFilm();
    await fetchActor()
    await fetchActorInfo()
    await fetchHorrorGenres();
    await fetchFilmDetails();
});
</script>




<style scoped>
.tout {
    background-color: black;
}

.filmPage {
    color: white;
    text-align: center;
    display: flex;
    flex-direction: column;
    position: relative;
    margin-bottom: 40px;
}

.filmContainer {
    margin-top: 275px;
    width: 100%;
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
}

.divBaniere {
    height: 80vh;
    width: 100%;
}

.banniere {
    height: 100%;
    width: 100%;
    opacity: 0.4;
    object-fit: cover;
    overflow: hidden;
}

.container {
    position: absolute;
    width: 100%;
    height: 100px
}

.rating {
    position: absolute;
    bottom: 0;
    left: 0;
    margin-left: 20px;
    margin-bottom: 190px;
    font-family: var(--fontFamilyAndale);
    z-index: 10;
    text-shadow:
        2px 2px 0px black,
        -2px 2px 0px black,
        2px -2px 0px black,
        -2px -2px 0px black;
}

.titreFilm {
    display: flex;
    flex-direction: column;
    position: absolute;
    bottom: 0;
    left: 0;
    margin-left: 20px;
    margin-bottom: 150px;
    font-family: var(--fontFamilyImpact);
    z-index: 10;
    text-shadow:
        2px 2px 0px black,
        -2px 2px 0px black,
        2px -2px 0px black,
        -2px -2px 0px black;
}

.annee {
    position: absolute;
    bottom: 0;
    left: 0;
    margin-left: 20px;
    margin-bottom: 135px;
    font-family: var(--fontFamilyAndale);
    font-size: 15px;
    z-index: 10;
    text-shadow:
        2px 2px 0px black,
        -2px 2px 0px black,
        2px -2px 0px black,
        -2px -2px 0px black;
}

.duration {
    position: absolute;
    bottom: 0;
    margin-left: 70px;
    margin-bottom: 135px;
    font-family: var(--fontFamilyAndale);
    font-size: 15px;
    z-index: 10;
    text-shadow:
        2px 2px 0px black,
        -2px 2px 0px black,
        2px -2px 0px black,
        -2px -2px 0px black;
}

.buttonVoir {
    position: absolute;
    bottom: 0;
    left: 0;
    margin-left: 220px;
    margin-bottom: 20px;
}

.buttonVoir a {
    color: inherit;
    text-decoration: none;
}

.boutonTrailer {
    bottom: 0;
    left: 0;
    position: absolute;
    margin-left: 20px;
    margin-bottom: 20px;
}

.boutonTrailer a {
    text-decoration: none;
    color: inherit;
}

.divDescription {
    position: relative;
    padding: 16px;
    width: 100%;

}

.description {
    color: white;
    line-height: 1.5;
    font-size: 14px;
}

.card-container {
    display: flex;
    overflow-x: auto;
    gap: 16px;
    padding: 10px;
    background-color: black;
}

.chargement {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
}

.chargement p {
    display: flex;
    justify-content: center;
    align-items: center;
}

.video {
    margin-top: 20px;
}

.displayCasting {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 50px;
}

.divImageCasting {
    height: 10vh;
    width: 100%;
}

.imageCasting {
    width: 60px;
    overflow: hidden;
    height: 60px;
    object-fit: cover;
    border-radius: 50%;
}

.nameCasting {
    font-size: 9px;
}

.buttonCasting {
    display: flex;
    justify-content: flex-end;
    margin-right: 40px;
    margin-bottom: 10px;
}

.iconInput {
    margin-top: 5px;
    margin-right: 5px;
}
.infoEtCoeur {
    display: block;
}


.iconCoeur {
    color: grey;
    display: flex;
    flex-direction: column;
    position: absolute;
    bottom: 0;
    left: 0;
    margin-left: 20px;
    margin-bottom: 85px;
    z-index: 10;
}
.redCoeur {
    color: red;
}
</style>
