<template>
    <div class="newsletter">
        <img src="../assets/img/newsletterBan.png" class="ban">

        <div class="divTire">
            <h1 class="titre">PLONGEZ DANS L'HORREUR</h1>
        </div>

        <p class="text">Rejoignez la communauté chills</p><br>

        <div class="divDivTextGriffe">
            <div class="divTextGriffe">
                <img src="../assets/img/griffeVerticale.png" class="griffeVerticale">
                <p class="textGriffe">
                    Dernières sorties <br/>
                    Sélections de films effrayants, <br/>
                    Offres exclusives sur Chills !
                </p>
            </div>
        </div>
        
        <div class="divDivInput">
            <div class="divInput">
                <Icon name="ic:outline-email" size="30" class="iconInput" />
                <input class="input" type="text" placeholder="Indiquez votre email" >
            </div>
        </div>

        <div class="divBouton">
            <BoutonText class="button" textColor="var(--textcolorBlanc)" background="var(--colorbgGradientRouge)"
            borderSolid="var(--borderNone)">
            Je m'inscris pour frissoner
            </BoutonText>
        </div>
    </div>
</template>



<script setup>


</script>


<style scoped>
.newsletter {
    background-color: black;
}

.ban {
    object-fit: cover;
    width: 100%;
}

.divTire {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center
}

.titre {
    color: var(--colorbgJaune);
    font-family: var(--fontFamilyImpact);
    text-align: center;
    font-size: 26px
}

.text {
    color: white;
    text-align: center;
    font-size: 15px;
    font-family: var(--fontFamilyAndale);
    margin: 0;
    line-height: 18px;
    text-transform: uppercase;
    margin-top: 10px;
}

.divDivTextGriffe {
    display: flex;
    align-items: center;
    justify-content: center;
}
.divTextGriffe {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
}
.griffeVerticale {
    min-width: 9px;
    height: 56px;
}
.textGriffe {
    color: white;
    text-align: left;
    font-size: 15px;
    font-family: var(--fontFamilyAndale);
    margin: 0;
    line-height: 18px;
    text-transform: uppercase;
}

.divDivInput {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.divInput {
    margin-top: 30px
}
.iconInput {
    color: white;
    opacity: 0.6;
    position: absolute;
    margin-left: 10px;
    margin-top: 8px;
}
.input {
    width: 300px;
    padding: 10px 14px;
    margin-bottom: 10px;
    border: 1px solid white;
    background-color: black;
    border-radius: 4px;
    color: white;
    font-family: var(--fontFamilyAndale);
    text-align: center;
}
.input:focus {
    outline: 1px solid white;
}
.input::placeholder {
    text-align: center;
    font-family: var(--fontFamilyAndale);
    color: white;
    opacity: 0.6;
    font-size: 13px;
}

.divBouton{
    display: flex;
    justify-content: center;
    margin-top: 15px;
}

@media screen and (min-width: 1000px) {
    .input {
        width: 500px;
    }
    .button {
        width: 500px;
    }
    .text {
        font-size: 26px
    }
    .titre {
        font-size: 50px;
    }
    .ban {
        overflow: hidden;
        height: 600px;
    }
}
</style>