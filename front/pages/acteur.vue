<template>
    <NavigationBar />
    <div v-if="personnalInfo" class="acteur-container">
        <div class="acteur-info">
            <div class="acteur-img"><img :src="personnalInfo.image_url" :alt="personnalInfo.name"></div>
            <div class="acteur-name">
                <div>{{ personnalInfo.name }}</div>
                <div class="acteur-desc">{{ personnalInfo.birth_date }}</div>
                <div class="acteur-desc">{{ personnalInfo.birth_place }}</div>
            </div>
        </div>
        <div class="acteur-filmo">
            {{ personnalInfo.partial_bio }}
        </div>
        <hr class="hr">
    </div>
    <div class="filmographie">
        SA FILMOGRAPHIE
    </div>
    <div class="filmographieList">
        <Card v-for="(film, index) in infoActeur" :key="film.results.imdb_id" :imdbTitle="film.results.title"
            :imdbTime="film.results.movie_length" :imdbBanner="film.results.banner" :imdbRating="film.results.rating"
            :imdbAge="-16" />
    </div>
    <Catalogue :row="2" :col="2" :thirdRowShow="false" text="PLUS DE 10000 FILMS" />
    <Footer />
</template>

<script setup>

const router = useRoute();
const infoActeur = ref([]);
const personnalInfo = ref([])

const actorName = 'oscar isaac';
const idActeur = ref('');


const fetchActorInfo = async () => {
    const encodedName = encodeURIComponent(actorName);

    try {
        const response = await fetch(`http://localhost:3001/api/search/filmbyactorname/${encodedName}`);

        // Vérifie si la réponse est correcte
        if (!response.ok) throw new Error('Erreur lors de la récupération des données');

        const data = await response.json();
        console.log(data); // Affiche la réponse pour vérification

        // Vérifie si 'resultat' existe dans les données
        if (data.resultat) {
            infoActeur.value = data.resultat.film;
            idActeur.value = data.resultat.idActor;
        } else {
            console.warn('Aucun résultat trouvé dans la réponse:', data);
        }

        console.log('COUCOU', infoActeur.value); // Affiche le contenu de infoActeur
        console.log('ID de l\'acteur:', idActeur.value); // Affiche l'ID de l'acteur

        try {
            const response = await fetch(`http://localhost:3001/api/search/filmbyactorname/id/${idActeur.value}`)
            // Vérifie si la réponse est correcte
            if (!response.ok) throw new Error('Erreur lors de la récupération des données');

            const data = await response.json();
            console.log("new DATA", data); // Affiche la réponse pour vérification

            if (data.results) {
                personnalInfo.value = data.results
            } else {
                console.warn('Aucun résultat trouvé dans la réponse:', data)
            }
            console.log('Coucou', personnalInfo)
        } catch {

        }
    } catch (error) {
        console.error('Erreur lors de la récupération des données:', error);
    }
};


// Appeler la fonction lors du montage du composant
onMounted(() => {
    fetchActorInfo();
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
    /* Sépare les éléments avec espace */
    width: 100%;
    font-family: var(--fontFamilyImpact);
    font-size: 26px;
    color: var(--textcolorBlanc);
    margin: 10px;
}

.acteur-img,
.acteur-name {
    width: 50%;
}

.acteur-name {
    display: flex;
    align-items: left;
    justify-content: center;
    flex-direction: column;
    margin-left: 10px;
}

.acteur-img img {
    width: 100%;
    height: auto;
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
    text-wrap: balance;
}

.hr {
    width: 70%;
    /* Fait en sorte que le hr prenne toute la largeur de son conteneur */
    border: none;
    /* Supprime la bordure par défaut */
    height: 1px;
    /* Définit l'épaisseur de la ligne */
    background-color: var(--textcolorBlanc);
    /* Change la couleur de fond pour l'apparence de la ligne */
    margin: 20px 0 15px 0;
    /* Ajoute des marges autour de la ligne */
}

.filmographie {
    font-family: var(--fontFamilyAndale);
    font-size: 20px;
    color: var(--textcolorBlanc);
    display: flex;
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
