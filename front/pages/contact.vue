<template>
    <div class="contact">
        <img src="/assets/img/banContact.png" class="banContact">
        <h1 class="titre">Contactez-nous !</h1>

        <form class="input-groupe" @submit.prevent="merci">
            <div>
                <Icon name="ph:user-light" size="30" class="iconInput" />
                <input class="input" type="text" placeholder="Nom et Prénom" required>
            </div>
            <div>
                <Icon name="ic:outline-email" size="30" class="iconInput" />
                <input class="input" type="text" placeholder="Indiquez votre email" required>
            </div>

            <div class="inputGoupList">
                <div class="divLabel">
                    <label class="labelListe">Vous nous contactez pour:</label>
                </div>
                <select class="inputListe">
                    <option class="optionList">Choisir la raison</option>
                    <option class="optionList">Renseignement</option>
                    <option class="optionList">Demande de partenariat</option>
                    <option class="optionList">Réclamation</option>
                    <option class="optionList">Autres</option>
                </select>
            </div>

            <textarea class="input2" rows="7" placeholder="Ecrivez votre message..." required>
        </textarea>

            <div class="checkbox-container">
                <label class="content">
                    <input type="checkbox" v-model="isChecked">
                    <span class="checkmark"></span>
                    <p class="seSouvenir">En créant ce compte, j'accepte les conditions générales d'utilisation</p>
                </label>
            </div>
            <div v-if="!succes">
                <BoutonText class="buttonLogin" textColor="var(--textcolorBlanc)"
                    background="var(--colorbgGradientRouge)" borderSolid="var(--borderNone)" :disabled="!isChecked">
                    Envoyer un message
                </BoutonText>
            </div>
            <div v-else>
                <div class="divTextSucces">
                <p class="textSucces">Merci !</p>
                <p class="textSucces">Votre message a bien été nvoyé</p>
            </div>
            </div>
        </form>
    </div>
</template>



<script setup>
const isChecked = ref(false)
const succes = ref(false)

const merci = () => {
    succes.value = true
}
</script>



<style scoped>
.contact {
    background-color: black;
}

.banContact {
    width: 100%;
    margin-top: 40px;
}

.titre {
    color: white;
    font-family: var(--fontFamilyImpact);
    text-align: center;
    font-weight: 100;
    margin-top: 20px;
}

.input-groupe {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;
    margin-top: 20px;
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
    padding: 12px 14px;
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

.input2 {
    width: 300px;
    padding: 16px 14px;
    margin-bottom: 10px;
    border: 1px solid white;
    background-color: black;
    border-radius: 4px;
    color: white;
    font-family: var(--fontFamilyAndale);
    text-align: left;
}

.input2:focus {
    outline: 1px solid white;
}

.input2::placeholder {
    text-align: center;
    font-family: var(--fontFamilyAndale);
    color: white;
    opacity: 0.6;
    font-size: 13px;
}

.inputGoupList {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.inputGoupList select option {
    width: 80px;
}

.inputGoupList select {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    text-align: left;
}

.optionList {
    font-size: 18px;
    padding: 10px;
}

.divLabel {
    width: 100%;
    margin-bottom: 2px;
}

.labelListe {
    font-family: var(--fontFamilyAndale);
    font-size: 18px;
    color: white;
    text-align: left;
}

.inputListe {
    width: 300px;
    padding: 14px 14px;
    margin-bottom: 10px;
    border: 1px solid white;
    background-color: black;
    border-radius: 4px;
    color: white;
    font-family: var(--fontFamilyAndale);
    text-align: center;
}

.mdp a {
    text-align: center;
    font-family: var(--fontFamilyAndale);
    color: white;
    font-size: 16px;
    text-decoration: underline;
    opacity: 0.7;
}

.checkbox-container {
    display: flex;
    margin-top: 10px;
    width: 300px;
}

.content {
    display: flex;
    align-items: center;
    position: relative;
    cursor: pointer;
    font-size: 22px;
}

.content input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
}

.checkmark {
    position: relative;
    height: 16px;
    width: 30px;
    background-color: #000000;
    border: 1px solid white;
    border-radius: 5px;
    margin-right: 10px;
}

.content input:checked~.checkmark {
    background-color: #ee3902;
}

.checkmark:after {
    content: "";
    position: absolute;
    display: none;
}

.content input:checked~.checkmark:after {
    display: block;
}

.content .checkmark:after {
    left: 5px;
    top: 2px;
    width: 3px;
    height: 6px;
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
}

.seSouvenir {
    color: white;
    opacity: 0.7;
    font-size: 13px;
    font-family: var(--fontFamilyAndale);
}

.buttonLogin {
    width: 330px;
    height: 60px;
    font-family: var(--fontFamilyImpact);
}
.divTextSucces {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
}
.textSucces {
    color: rgb(66, 227, 66);
}
</style>
