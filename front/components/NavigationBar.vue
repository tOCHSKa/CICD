<template>
  <div class="tout" :class="[!isClosed || navbarFixed ? 'navbar-fixed' : '']"
    :style="{ backgroundColor: `${navbarOpacity}` }">
    <div @click="openMenu">
      <div v-if="isClosed">
        <div class="iconDiv">
          <Icon name="ic:round-menu" size="30" class="icon" />
        </div>
      </div>
      <div v-else>
        <div>
          <div class="iconDiv">
            <Icon name="material-symbols-light:close" size="30" class="icon" />
          </div>
          <nav class="nav">
            <div class="navAlignement">
              <NuxtLink to="/">Accueil</NuxtLink>
              <NuxtLink to="/categories">Categories</NuxtLink>
              <NuxtLink to="/horreur">Notre Sélection</NuxtLink>
              <NuxtLink to="/offre">Notre Offre</NuxtLink>
            </div>
          </nav>
        </div>
      </div>
    </div>
    <div class="logo">
      <NuxtLink to="/">
        <img src="/assets/img/logoLettres.png" width="85px">
      </NuxtLink>
    </div>
    <div class="navDroite">
      <div class="iconDivSearch" @click="toggleSearch">
        <Icon name="lsicon:search-filled" size="25" class="icon" />
      </div>
      <div class="iconDiv">
        <NuxtLink to="/Login">
          <Icon name="mdi:account" size="30" class="icon" />
        </NuxtLink>
      </div>
    </div>
  </div>


  <div :class="isSearchVisible ? 'transition transitionActive' : 'transition'">
    <div class="search-container">
      <h1>Rechercher</h1>
      <div class="search-bar">
        <div class="iconDivBar">
          <Icon name="lsicon:search-filled" size="25" class="icon" />
        </div>
        <input type="text" v-model="searchQuery" @keyup="searchFilm" placeholder="Films, acteur...">

        <div v-if="filmDetails.length" class="filmIndex">
          <div class="film-container">
            <div class="film" v-for="(film, index) in filmDetails.slice(0, 5)" :key="index"
              @click="directionFilm(film.results.imdb_id)">
              <div class="film-banner">
                <img :src="film.results.banner" alt="" />
              </div>
              <div>
                <div class="film-title">{{ film.results.title }}</div>
                <div class="film-info">
                  <div class="film-length">{{ film.results.movie_length }} min</div>
                  <div class="film-year">{{ film.results.year }}</div>
                </div>
              </div>
              <div class="film-classification">{{ film.results.content_rating }}</div>
            </div>
          </div>


          <div v-if="filmDetails.length > 5">
            <button @click="showMoreFilms = !showMoreFilms" class="boutonShow">
              {{ showMoreFilms ? 'Voir moins' : `Voir les ${filmDetails.length - 5} films supplémentaires` }}
            </button>


            <div v-if="showMoreFilms" class="film-container">
              <div class="film" v-for="(film, index) in filmDetails.slice(5)" :key="index"
                @click="directionFilm(film.results.imdb_id)">
                <div class="film-banner">
                  <img :src="film.results.banner" alt="" />
                </div>
                <div>
                  <div class="film-title">{{ film.results.title }}</div>
                  <div class="film-info">
                    <div class="film-length">{{ film.results.movie_length }} min</div>
                    <div class="film-year">{{ film.results.year }}</div>
                  </div>
                </div>
                <div class="film-classification">{{ film.results.content_rating }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

// Contrôle de l'affichage du menu
const isClosed = ref(true)
const navbarOpacity = ref('rgba(0,0,0,1)')
const navbarFixed = ref(false)
const isSearchVisible = ref(false)
const showMoreFilms = ref(false);
const searchQuery = ref('');
const router = useRouter()

const filmTitle = ref([]); // Pour stocker les films avec tous les détails
const imdbIds = ref([]); // Pour stocker uniquement les IMDb IDs
const filmDetails = ref([]); // Pour stocker les détails des films

const genre = ref(['War', 'Mystery', 'Horror', 'Crime', 'Sci-Fi', 'Thriller']);
const apiUrl = process.env.API_URL
const openMenu = () => {
  isClosed.value = !isClosed.value

  if (!isClosed.value) {
    navbarOpacity.value = "rgba(0, 0, 0, .7)"
    navbarFixed.value = true
  } else {
    navbarOpacity.value = 1
    navbarFixed.value = false
  }
}

const scrollEvent = (e) => {
  const scrollTop = document.documentElement.scrollTop

  if (scrollTop === 0) {
    navbarOpacity.value = 'rgba(0,0,0,1)'
    navbarFixed.value = false
  } else {
    navbarOpacity.value = "rgba(0, 0, 0, .7)"
    navbarFixed.value = true
  }
}

onMounted(() => {
  window.addEventListener('scroll', scrollEvent)
})

const toggleSearch = () => {
  isSearchVisible.value = !isSearchVisible.value
}


const searchFilm = async () => {
  if (searchQuery.value.length <= 3) {
    filmTitle.value = [];
    imdbIds.value = []; // Réinitialiser aussi le tableau des IDs
    filmDetails.value = []; // Réinitialiser les détails des films
  } else if (searchQuery.value.length > 3) {
    await fetchFilmByTitle(searchQuery.value); // Attendre que les films soient récupérés
    await fetchFilmDetails(imdbIds.value); // Passer imdbIds.value à fetchFilmDetails
    console.log(searchQuery.value);
  }
};

const fetchFilmByTitle = async (title) => {
  try {
    const response = await fetch(`${apiUrl}/api/search/film/${title}`);
    if (!response.ok) throw new Error(`Erreur lors de la récupération du film ${title}`);

    const data = await response.json();
    filmTitle.value = data.results; // Met à jour filmTitle

    // Mettre à jour le tableau des IMDb IDs
    imdbIds.value = data.results.map(film => film.imdb_id); // Récupère seulement les imdb_id
    console.log('IDs récupérés:', imdbIds.value); // Affiche les IMDb IDs récupérés

  } catch (error) {
    console.error(`Erreur lors de la récupération des films ou des détails pour le titre ${title}:`, error);
  }
};

const fetchFilmDetails = async (imdbIdsArray) => {
  filmDetails.value = []; // Réinitialiser le tableau pour de nouvelles requêtes

  const fetchFilm = async (imdb_id) => {
    try {
      const responseFromApi = await fetch(`${apiUrl}/api/search/film/idFilm/${imdb_id}`);
      if (!responseFromApi.ok) throw new Error(`Erreur lors de la récupération du film avec l'ID ${imdb_id}`);
      const dataFromApi = await responseFromApi.json();
      filmDetails.value.push(dataFromApi); // Ajoute les détails à filmDetails
    } catch (error) {
      console.error(`Erreur lors de la récupération des détails pour le film ID ${imdb_id}:`, error);
    }
  };

  await Promise.all(imdbIdsArray.map(imdb_id => fetchFilm(imdb_id)));
  console.log('Détails des films:', filmDetails.value); // Affiche les détails récupérés
};

const directionFilm = (imdb_id) => {
  router.push(`/pageFilm/${imdb_id}`)
} 
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  background-color: #000;
}

.v-enter-from,
.v-leave-to {
  background-color: #000;
}

.tout {
  display: flex;
  justify-content: space-between;
  background-color: #000;
  padding: 15px 0;
  position: relative;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  background-color: #000;

  transition: max-height 0.5s ease, opacity 0.5s ease;
  overflow: hidden;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  background-color: #000;

  max-height: 0;
  opacity: 0;
}

.slide-fade-enter-to,
.slide-fade-leave-from {
  background-color: #000;

  max-height: 1000px;
  opacity: 1;
}

.navbar-fixed {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
}

.iconDiv {
  display: flex;
  padding: 3px 8px;
}

.icon {
  cursor: pointer;
  color: white;
}

.iconDivSearch {
  display: flex;
  padding: 6px 3px;
}

.nav {
  margin-top: 10px;
  width: 100vw;
  display: flex;
  justify-content: center;
}

.navAlignement {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  max-width: 300px;
}

.navAlignement a {
  text-decoration: none;
  color: white;
  font-family: var(--fontFamilyImpact);
  font-size: 18px;
  padding: 10px 0;
  text-align: left;
  padding-left: 10px;
}

@media screen and (min-width: 1000px) {
  .navAlignement {
    align-items: center;
  }

  .navAlignement a {
    font-size: 30px;
  }
}

.logo {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.navDroite {
  display: flex;
}


.search-container {
  text-align: center;
  color: #fff;
  background: var(--colorbgNoir);
  font-size: 12px;
  letter-spacing: 1px;
  font-family: var(--fontFamilyImpact);
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
}

.search-bar {
  display: inline-block;
}

.search-bar input {
  width: 300px;
  padding: 10px 15px 10px 50px;
  border: none;
  outline: none;
  font-size: 16px;
  background-color: #333;
  color: #aaa;
  margin-bottom: 8px;
}

.search-bar input::placeholder {
  color: #aaa;
}

@media screen and (min-width: 1000px) {
  .search-bar input {
    width: 800px;
  }
}

/* Positionner l'icône dans l'input */
.iconDivBar {
  position: absolute;
  left: 55px;
  top: 62px;
  transform: translateY(-50%);
}

.icon {
  color: #aaa;
  font-size: 20px;
  /* Ajuster la taille de l'icône si nécessaire */
}

.filmIndex {
  position: relative;
  z-index: 874954894984;
}

.film-container {
  margin-top: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: var(--colorbgNoir);
  width: 100%;
}

.film {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 300px;
  width: 100%;
  padding: 5px;
  background-color: #333;
  cursor: pointer;
  margin-bottom: 8px;

}

.film-info {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  font-family: var(--fontFamilyAndale);
}

.film-banner {
  width: auto;
  height: 50px;
}

.film-banner img {
  width: 100%;
  height: 100%;
}

.film-title {
  font-family: var(--fontFamilyImpact);
  font-size: 12px;

}

.boutonShow {
  margin-bottom: 8px;
}

.transition {
  height: 0px;
  transition: .3s;
  overflow: hidden;
}

.transitionActive {
  height: 87px;
  overflow: visible;
}
</style>