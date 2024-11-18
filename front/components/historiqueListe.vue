<template>
  <div class="historiqueListe">
    <Card v-for="(film, index) in horrorFilms" :key="film.imdb_id" :imdbTitle="film.title" :imdbTime="film.movie_length"
      :imdbBanner="film.banner" :imdbRating="String(film.rating)" :imdbAge="String(-16)" />
  </div>
</template>



<script setup>
const route = useRoute()

const historique = ref([])
const horrorFilms = ref([])



const historiqueId = async () => {
  try {
    const data = await $fetch(`http://localhost:3001/api/users/historiqueTout/${route.params.id}`, {
      method: 'GET'
    })
    historique.value = data.historique

  } catch (error) {
    console.error('Erreur lors de la connexion:', error)
  }
}



const fetchFilmDetails = async () => {
  const filmPromises = historique.value.map(film =>
    fetch(`http://localhost:3001/api/search/film/idFilm/${film.id_filmAPI}`).then(res => res.json())
  )

  try {
    const filmResponses = await Promise.all(filmPromises);
    horrorFilms.value = filmResponses.map(response => response.results).flat()
  } catch (error) {
    console.error('Erreur lors de la récupération des détails des films:', error);
  }
}



onMounted(async () => {
  await historiqueId()
  await fetchFilmDetails()
})
</script>



<style scoped>
.historiqueListe {
  background-color: black;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 16px;
  padding: 10px;
  margin-top: 30px;
}
</style>