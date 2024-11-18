<template>
    <div class="card">
      <!-- Badge d'âge en haut à gauche -->
      <div class="badge-age">
        <div class="circle">
          <span>{{props.imdbAge}}</span>
        </div>
      </div>
  
      <!-- Badge IMDB en haut à droite -->
      <div class="badge-imdb">
        <span>{{props.imdbRating}} IMDB</span>
      </div>
  
      <!-- Image principale du film -->
      <div class="card-image">
        <img :src="props.imdbBanner || '/assets/img/ban3.jpg'" :alt="props.imdbTitle" />
      </div>
  
      <!-- Informations du film -->
      <div class="card-info">
        <p class="movie-title">{{props.imdbTitle}}</p>
        <p class="movie-duration">{{props.imdbTime}} MIN</p>
      </div>
    </div>
</template>
  

<script setup>

const props = defineProps({
    imdbRating: {
  type: String,
  default: 'N/A'
},
imdbAge: {
  type: String,
  default: '0'
},
imdbTitle: {
  type: String,
  default: 'Untitled'
},
imdbTime: {
  type: [String, Number],
  default: 'N/A'
},
imdbBanner: {
  type: String,
  default: '/assets/img/ban3.jpg'
}

})

</script>
<style scoped>
.card {
    position: relative;
    width: 142px;
    height: 233px;
    min-height: 233px;
    min-width: 142px;
    overflow: hidden;
    font-family: var(--fontFamily);
    cursor: pointer;
  }
  @media screen and (min-width: 1000px) {
    .card {
      min-width: 1px;
      margin-bottom: 50px;
    }
  }
  
  .card-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .badge-age {
    position: absolute;
    top: 0;
    left: 0;
    background-color: var(--colorbgNoir);
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .circle {
    width: 16px; 
    height: 16px;
    background-color: white;
    border-radius: 50%; 
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .circle span {
    color: var(--colorbgNoir);
    font-size: 10px;
    font-family: var(--fontFamilyAndale);
    letter-spacing: -1px;
    margin-right: 6px;
    font-weight: 800;
  }
  
  .badge-imdb {
    position: absolute;
    top: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.5);
    color: #ffcc00;
    font-family: var(--fontFamilyImpact);
    font-size: 10px;
    padding: 2px 6px;
  }
  
  .card-info {
    position: absolute;
    bottom: 20px;
    left: 0;
    width: 100%;
    padding: 5px;
    min-height: 30px;
    background: rgba(255, 255, 255, 0.3); 
    color: white;
    display: flex;
    flex-direction: column;
    align-items: left;
  }
  
  .movie-title {
    font-size: 12px;
    font-weight: 400;
    margin: 0;
  }
  
  .movie-duration {
    font-size: 10px;
    margin: 0;
    opacity: 0.8;
  }
  
</style>
