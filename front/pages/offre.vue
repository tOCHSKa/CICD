<template>
    <div class="tout">
        <NavigationBar />

        <h1 class="titre">NOS OFFRES CHILLS</h1>

        <div class="divLcation">
            <h2 class="h2">LOCATION</h2>
            <h3 class="h3">Louez vos<br /> films ou séries</h3>
            <p class="subtitle">POUR 48 HEURES</p>
            <p class="aPartir">à partir de</p>
            <p class="prix">1€99</p>

            <BoutonText class="butonLoue" textColor="var(--textcolorBlanc)" background="var(--colorbgGradientRouge)"
                borderSolid="var(--borderNone)">
                <NuxtLink to="/Checkout">Je loue</NuxtLink>
            </BoutonText>
            <BoutonText class="boutonInfos" textColor="var(--textcolorBlanc)" background="var(--colorbgNoir)"
                borderSolid="var(--borderRouge)">
                <NuxtLink to="">Plus d'infos</NuxtLink>
            </BoutonText>
        </div>
        <div class="divLcation">
            <h2 class="h2">ACHAT</h2>
            <h3 class="h3">Achetez vos<br /> films ou séries<br /> préférés</h3>
            <p class="aPartir">à partir de</p>
            <p class="prix">2€99</p>

            <BoutonText class="butonLoue" textColor="var(--textcolorBlanc)" background="var(--colorbgGradientRouge)"
                borderSolid="var(--borderNone)">
                <NuxtLink to="/Checkout">J'achete</NuxtLink>
            </BoutonText>
            <BoutonText class="boutonInfos" textColor="var(--textcolorBlanc)" background="var(--colorbgNoir)"
                borderSolid="var(--borderRouge)">
                <NuxtLink to="">Plus d'infos</NuxtLink>
            </BoutonText>
        </div>

        <div class="etapes">
            <h1 class="titre2">COMMENT CA MARCHE ?</h1>
            <div class="etape">
                <img class="imgChoisir" src="/assets/img/offreEtapes/choisirFilm.png">
                <p class="textEtapes">
                    ----------------<br />
                    Parcourez notre vaste catalogue d'horreur
                    et sélectionnez le film ou la série qui vous intéresse.
                    Nous proposons des titres exclusifs et des classiques incontournables pour satisfaire tous les
                    amateurs de frissons.
                </p>
            </div>
            <div class="etape">
                <img class="imgChoisir" src="/assets/img/offreEtapes/louezFilm.png">
                <p class="textEtapes">
                    ----------------<br />
                    Une fois votre sélection faite, vous pouvez choisir de louer ou d'acheter selon vos envies.
                    La location vous donne accès au contenu pendant 48h, tandis que l'achat vous permet de le
                    visionner à tout moment.
                </p>
            </div>
            <div class="etape">
                <img class="imgChoisir" src="/assets/img/offreEtapes/visionFilm.png">
                <p class="textEtapes">
                    ----------------<br />
                    Après avoir complété votre achat ou location, commencez à regarder instantanément sur votre
                    appareil préféré. Préparez-vous pour une expérience horrifique immersive, où que vous soyez !
                </p>
            </div>
        </div>

        <Newsletter />
        <Arm />
        <Footer />
    </div>
</template>



<script setup>

</script>



<style scoped>
.tout {
    background-color: black;
}

.titre {
    color: white;
    font-family: var(--fontFamilyImpact);
    text-align: center;
}

.divLcation {
    border: 1px solid red;
    margin: 30px 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.h2 {
    color: white;
    font-family: var(--fontFamilyImpact);
    text-align: center;
}

.h3 {
    font-family: var(--fontFamilyAndale);
    color: white;
    text-align: center;
    font-size: 18px;
    line-height: 17px;
    margin-top: 15px;
    text-transform: uppercase;
}

.subtitle {
    font-family: var(--fontFamilyAndale);
    color: white;
    text-align: center;
    font-size: 12px;
    line-height: 17px;
    margin-top: 2px;
}

.aPartir {
    font-family: var(--fontFamilyImpact);
    color: white;
    text-align: center;
    font-size: 12px;
    line-height: 17px;
    margin-top: 18px;
}

.prix {
    font-family: var(--fontFamilyImpact);
    color: white;
    text-align: center;
    font-size: 30px;
    line-height: 17px;
    margin-top: 10px;
    margin-bottom: 25px;
}

.butonLoue {
    width: 150px;
}

.butonLoue a {
    color: inherit;
    text-decoration: none;
}

.boutonInfos {
    margin: 10px 0;
    width: 150px;
    font-size: 12px;
    padding: 5px 14px
}

.titre2 {
    color: white;
    font-family: var(--fontFamilyImpact);
    text-align: center;
    margin-top: 50px;
}

.etapes {
    display: flex;
    flex-direction: column;
    margin-bottom: 80px
}

.etape {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.imgChoisir {
    width: 275px;
    margin-top: 30px
}

.textEtapes {
    color: white;
    text-align: center;
    font-size: 12px;
    padding: 0 18px;
}

@media screen and (min-width: 1000px) {
    .textEtapes {
        font-size: 20px;
        padding: 0 30px;

    }
}
</style>