<template>
  <NavigationBar />
  <div v-if="personnalInfo" class="acteur-container">
    <div class="acteur-info">
      <div class="divImgActeur">
        <img class="imgActeur" :src="personnalInfo.image_url" :alt="personnalInfo.name" />
      </div>
      <div class="acteur-name">
        <div>{{ personnalInfo.name }}</div>
        <div class="acteur-desc">{{ personnalInfo.birth_date }}</div>
        <div class="acteur-desc">{{ personnalInfo.birth_place }}</div>
      </div>
    </div>
    <div class="acteur-filmo">
      {{ personnalInfo.partial_bio }}
    </div>
    <hr class="hr" />
  </div>
  <div class="filmographie">
    SA FILMOGRAPHIE
  </div>
  <div class="filmographieList">
    <Card v-for="(film, index) in filmoActeur" :key="film.results.imdb_id" :imdbTitle="film.results.title"
      :imdbTime="film.results.movie_length" :imdbBanner="film.results.banner" :imdbRating="film.results.rating"
      :imdbAge="film.results.age_rating" @click="goToFilmPage(film.results.imdb_id)" />
  </div>
  <Catalogue :row="2" :col="2" :thirdRowShow="false" text="PLUS DE 10000 FILMS" />
  <Footer />
</template>

<script setup>
const route = useRoute();
const router = useRouter();
const actorId = decodeURIComponent(route.params.id)

const personnalInfo = ref(null)
const filmoActeur = ref([])

const goToFilmPage = (imdbId) => {
  erh
  router.push(`/pageFilm/${imdbId}`)
}
const apiUrl = process.env.API_URL


const fetchActorInfo = async () => {
  try {
    const response = await fetch(`${apiUrl}/api/search/actorDetail/${actorId}`);
    if (!response.ok) throw new Error('Erreur lors de la récupération des données de l\'acteur');

    const data = await response.json();

    if (data.results) {
      personnalInfo.value = data.results;
    }
  } catch (error) {
    console.error('Erreur lors de la récupération des données:', error);
  }
}


const fetchActorMovies = async (actorId) => {
  try {
    const response = await fetch(`${apiUrl}/api/movies/byActor/${actorId}`);
    if (!response.ok) throw new Error('Erreur lors de la récupération des films de l\'acteur');

    const data = await response.json();

    if (data.resultat && data.resultat.film) {
      return data.resultat.film; // Retourne la liste des films
    } else {
      console.error('Aucun film trouvé pour cet acteur.');
      return [];
    }
  } catch (error) {
    console.error('Erreur lors de la récupération des films:', error);
    return [];
  }
};

onMounted(async () => {
  await fetchActorInfo()
  filmoActeur.value = await fetchActorMovies(actorId)
});
</script>

<style scoped>
.acteur-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: var(--colorbgNoir);
  padding: 15px;
}

.acteur-info {
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-family: var(--fontFamilyImpact);
  font-size: 26px;
  color: var(--textcolorBlanc);
  margin: 10px;
}

.acteur-name {
  width: 60%;
}

.acteur-name {
  display: flex;
  align-items: left;
  justify-content: center;
  flex-direction: column;
  margin-left: 5px;
}

.divImgActeur {
  height: 35vh;
  width: 100%;
}

.divImgActeur img {
  width: 80%;
  height: 100%;
  overflow: hidden;
  object-fit: cover;
}

.acteur-desc {
  font-family: var(--fontFamilyAndale);
  font-size: 14px;
}

.acteur-filmo {
  color: var(--textcolorBlanc);
  margin: 10px 0;
  font-size: 14px;
  font-family: var(--fontFamilyMention);
}

.hr {
  width: 1000%;
  border: none;
  height: 1px;
  background-color: var(--textcolorBlanc);
  margin: 20px 0 15px 0;
}

.filmographie {
  font-family: var(--fontFamilyAndale);
  font-size: 20px;
  color: var(--textcolorBlanc);
  text-align: left;
  background-color: var(--colorbgNoir);
  padding: 0 15px;
}

.filmographieList {
  background-color: black;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 16px;
  padding: 10px;
}
</style>