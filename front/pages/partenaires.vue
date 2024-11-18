<template>
    <NavigationBar />
        <div class="container">
            <img src="../assets/img/partenairePAGE.png" alt="" class="backgroundimg">
            <img src="../assets/img/PARTENAIRES.svg" alt="" class="svgimg">
        </div>
        <div>
            <p class="container-title">ils rendent Chills encore plus chill !</p>
        </div>
        <div class="container-text">
            <p>Chez Chills, on sait s’entourer des meilleurs !</p>
            <br>
            <p>On a réuni une équipe de partenaires aussi divers qu’indispensables : entre une rencontre amoureuse (ou deux), une bonne dose de détente (merci le CBD), un brunch gourmand, une pâtisserie qui fond dans la bouche et une galerie d’art qui éblouit les yeux… disons qu’on sait comment chiller avec style !
            </p>
            <br>
            Découvrez nos partenaires qui, comme nous, ont le super pouvoir de transformer votre quotidien en moments de pur plaisir. Si vous cherchez à vous détendre, à vous régaler ou à vous émerveiller, vous êtes au bon endroit !
            <p></p>
        </div>

        <div class="container-img">
            <img src="../assets/img/brunch.png" alt="">
            <img src="../assets/img/yoome.png" alt="">
            <img src="../assets/img/sucre.png" alt="">
            <img src="../assets/img/osmose.png" alt="">
            <img src="../assets/img/cbd.png" alt="">
        </div>
        <Footer />

</template>
<script setup>

</script>
<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');

.container {
    height: 280px;
    width: auto;
    position: relative;
    z-index: 0;
}

.backgroundimg {
    width: 100%;
    height: 100%;
}

.svgimg {
    position: absolute;
    top: 92%;
    left: 20%;
    width: 60%;
}

.container-title {
    position: absolute;
    top: 19%;
    width: 100%;
    display: flex;
    align-items:center;
    justify-content: center;
    color: #70F0F2;
    text-transform: uppercase;
    font-size: 14px;
    font-family: var(--fontFamilyAndale);
}
.container-text{
    color: var(--textcolorBlanc);
    background-color: var(--colorbgNoir);
    padding: 80px 17px;
    font-size: 12px;
    font-family: "Inter", sans-serif;

}
.container-img {
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
    align-items: center;
    flex-direction: column;
    background-color: var(--colorbgNoir);
}

.container-img img {
    width: 60%;
    max-width: 100%;
    height: auto;
    object-fit: cover;
}

</style>
