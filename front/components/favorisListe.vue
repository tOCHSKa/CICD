<template>
  <div class="favorisListe">
    <Card v-for="(film, index) in horrorFilms" :key="film.imdb_id" :imdbTitle="film.title" :imdbTime="film.movie_length"
      :imdbBanner="film.banner" :imdbRating="String(film.rating)" :imdbAge="String(-16)" />
  </div>
</template>



<script setup>
const route = useRoute()

const favoris = ref([])
const horrorFilms = ref([])

const apiUrl = process.env.API_URL

const favorisId = async () => {
  try {
    const data = await $fetch(`${apiUrl}/api/users/favorisTout/${route.params.id}`, {
      method: 'GET'
    })
    favoris.value = data.favoris

  } catch (error) {
    console.error('Erreur lors de la connexion:', error)
  }
}



const fetchFilmDetails = async () => {
  const filmPromises = favoris.value.map(film =>
    fetch(`${apiUrl}/api/search/film/idFilm/${film.id_filmAPI}`).then(res => res.json())
  )

  try {
    const filmResponses = await Promise.all(filmPromises);
    horrorFilms.value = filmResponses.map(response => response.results).flat()
  } catch (error) {
    console.error('Erreur lors de la récupération des détails des films:', error);
  }
}



onMounted(async () => {
  await favorisId()
  await fetchFilmDetails()
})
</script>



<style scoped>
.favorisListe {
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