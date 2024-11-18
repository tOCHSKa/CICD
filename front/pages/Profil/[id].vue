<template>
    <div class="profil">
        <NavigationBar />

        <h1 class="titre">MON COMPTE</h1>

        <div class="navCompte">
            <button @click="selectioner('profil')" class="lienCompte">
                <p>MON PROFIL</p>
                <img v-if="boutonSelectionne === 'profil'" src="/assets/img/griffeLien.png" class="griffe">
            </button>
            <button @click="selectioner('favoris')" class="lienCompte">
                <p>Mes favoris</p>
                <img v-if="boutonSelectionne === 'favoris'" src="/assets/img/griffeLien.png" class="griffe">
            </button>
            <button @click="selectioner('historique')" class="lienCompte">
                <p>Mon historique</p>
                <img v-if="boutonSelectionne === 'historique'" src="/assets/img/griffeLien.png" class="griffe">
            </button>
        </div>
        <div v-if="composantActif">
            <div class="contenu">
                <component :is="composantActif" />
            </div>
        </div>
        <Footer />
    </div>
</template>

<script setup>
const route = useRoute()

const profilInfos = markRaw(resolveComponent('infosProfil'));
const favorisInfos = markRaw(resolveComponent('favorisListe'));
const historiqueInfos = markRaw(resolveComponent('historiqueListe'));

const boutonSelectionne = ref('profil')
const composantActif = ref(profilInfos)

const selectioner = (butonClick) => {
    boutonSelectionne.value = butonClick

    if (butonClick === 'profil') {
        composantActif.value = profilInfos
    }
    if (butonClick === 'favoris') {
        composantActif.value = favorisInfos
    }
    if (butonClick === 'historique') {
        composantActif.value = historiqueInfos
    }
    
}

</script>


<style scoped>
.profil {
    background-color: black;
    height: 100vh;
    display: flex;
    flex-direction: column;
}

.titre {
    color: white;
    font-family: var(--fontFamilyImpact);
    text-align: center;
    font-weight: 100;
    margin-top: 10px;
}

.navCompte {
    display: flex;
    justify-content: center;
    gap: 30px;
}

.lienCompte {
    color: white;
    font-size: 14px;
    font-family: var(--fontFamilyImpact);
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.griffe {
    width: 85px;
    position: absolute;
    bottom: -10px;
}

.p {
    color: white;
    display: flex;
    justify-content: center;
}

.contenu {
    flex-grow: 1;
    display: block
}
</style>