<template>
    <div class="checkout">
        <NavigationBar />
        <h2 class="titre">PAIEMENT</h2>

        <div class="divGoogle">
            <div class="connectGoogle">
                <img src="assets\img\logoGoogle.png" class="googleLogo" />
                <p class="textGoogle">Pay</p>
            </div>
        </div>
        <br>
        <div class="hrou">
            <hr class="hr2">
            <p class="ou">ou</p>
            <hr class="hr2">
        </div>

        <label class="userInput">
            <input class="input" type="text" placeholder="Nom...">
        </label>
        <label class="userInput">
            <input class="input" type="text" placeholder="Prénom...">
        </label>
        <label class="userInput">
            <input class="input" type="text" placeholder="Adresse...">
        </label>
        <label class="userInput">
            <input class="input" type="text" placeholder="Adresse...">
        </label>
        <label class="userInput">
            <input class="input" type="number" placeholder="Code postal...">
        </label>
        <label class="userInput">
            <input class="input" type="number" placeholder="Telephone...">
        </label>


        <div class="divCheckbox">
            <div class="checkbox-container">
                <label class="content">
                    <input type="checkbox">
                    <span class="checkmark"></span>
                    <p class="seSouvenir">Enregistrer mes informations de paiement pour les prochains achats</p>
                </label>
            </div>
            <div class="checkbox-container2">
                <label class="content2">
                    <input type="checkbox">
                    <span class="checkmark2"></span>
                    <p class="seSouvenir2">Recevoir nos prochaines promotion par SMS</p>
                </label>
            </div>
        </div>

        <div class="divDivExpedition">
            <div class="divExpedition">
                <hr class="hr">
                <p class="expedition2">Mode d'expedition</p>
                <p class="expedition3">
                    Une fois la commande validée et le paiement effectué, les contenus sont disponibles immédiatement
                    sur votre compte utilisateur.
                    Vous pouvez les visionner en streaming directement depuis notre plateforme.
                </p>
                <hr class="hr">
                <p class="expedition5">Paiement</p>
            </div>
        </div>

        <div class="divDivPaiement">
            <p class="paiementTitre">Toutes les transactions sont sécurisées et chiffrées</p>
            <div class="divPaiement">
                <div class="userInput">
                    <Icon name="logos:mastercard" size="15" class="iconInput1" />
                    <Icon name="logos:visaelectron" size="15" class="iconInput2" />
                    <Icon name="cib:american-express" size="15" class="iconInput3" />
                    <input class="inputPaie" placeholder="CARTE DE CREDIT">
                </div>
                <div class="userInput">
                    <input class="inputPaie" type="number" placeholder="NUMRO DE CARTE">
                </div>
                <div class="userInput">
                    <input class="inputPaie" type="number" placeholder="DATE DEXPIRATION (MM/YYY)">
                </div>
                <div class="userInput">
                    <input class="inputPaie" type="text" placeholder="NOM SUR LA CARTE">
                </div>
                <div class="userInput">
                    <input class="inputPaie2" type="text" placeholder="CVC">
                </div>

                <BoutonText class="buttonLogin" textColor="var(--textcolorBlanc)"
                    background="var(--colorbgGradientRouge)" borderSolid="var(--borderNone)">
                    Payer
                </BoutonText>
            </div>
        </div>
    </div>
</template>



<script setup>


</script>


<style scoped>
.checkout {
    background-color: black;
}

.titre {
    color: white;
    font-family: var(--fontFamilyAndale);
    text-align: center;
    font-size: 18px;
}

.divGoogle {
    display: flex;
    justify-content: center;
}

.connectGoogle {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin: 15px 0;
    border: 1px solid red;
    width: 300px;
    padding-top: 10px;
    padding-bottom: 10px;
}

.googleLogo {
    width: 23px;
    height: 23px;
}

.textGoogle {
    color: white;
    opacity: 0.9;
    font-family: var(--fontFamilyAndale);
}

.ou {
    color: white;
    font-family: var(--fontFamilyAndale);
    text-align: center;
    font-size: 18px;
    margin-bottom: 40px;
}

.userInput {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    margin-bottom: 10px
}

.labelText {
    font-family: var(--fontFamilyAndale);
    opacity: .6;
    margin: 5px 0
}

.input {
    width: 300px;
    padding: 11px 14px;
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
    text-align: left;
    font-family: var(--fontFamilyAndale);
    color: white;
    opacity: 0.6;
    font-size: 13px;
}

.divCheckbox {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
    height: 15px;
    width: 19px;
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
    font-size: 9px;
    font-family: var(--fontFamilyAndale);
    margin-bottom: 5px;
}


.checkbox-container2 {
    display: flex;
    margin-top: 10px;
    width: 300px;
}

.content2 {
    display: flex;
    align-items: center;
    position: relative;
    cursor: pointer;
    font-size: 22px;
}

.content2 input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
}

.checkmark2 {
    position: relative;
    height: 15px;
    width: 15px;
    background-color: #000000;
    border: 1px solid white;
    border-radius: 5px;
    margin-right: 10px;
}

.content2 input:checked~.checkmark2 {
    background-color: #ee3902;
}

.checkmark2:after {
    content: "";
    position: absolute;
    display: none;
}

.content2 input:checked~.checkmark2:after {
    display: block;
}

.content2 .checkmark2:after {
    left: 5px;
    top: 2px;
    width: 3px;
    height: 6px;
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
}

.seSouvenir2 {
    color: white;
    opacity: 0.7;
    font-size: 9px;
    font-family: var(--fontFamilyAndale);
    margin-bottom: 5px;
}

.divDivExpedition {
    display: flex;
    align-items: center;
    justify-content: center;
}

.divExpedition {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 280px;
}

.expedition1 {
    color: white;
    text-align: center;
    font-size: 12px;
    margin-bottom: 10px;
    margin-top: 20px;
    font-family: var(--fontFamilyAndale);
}

.expedition2 {
    color: white;
    text-align: center;
    font-size: 12px;
    margin-bottom: 10px;
    font-family: var(--fontFamilyAndale);
}

.expedition3 {
    color: white;
    text-align: left;
    font-size: 12px;
    margin-bottom: 10px;
    font-family: var(--fontFamilyAndale);
}

.expedition4 {
    color: white;
    text-align: center;
    font-size: 12px;
    font-family: var(--fontFamilyAndale);
}

.expedition5 {
    color: white;
    text-align: center;
    font-size: 12px;
    margin-bottom: 10px;
    font-family: var(--fontFamilyAndale);
}

.divDivPaiement {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;
    margin-top: 50px;
}

.divPaiement {
    border: 2px solid white;
    width: 300px;
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.paiementTitre {
    color: white;
    font-family: var(--fontFamilyAndale);
    text-transform: uppercase;
    font-size: 9px;
    text-align: center;
    margin-bottom: 10px;
}

.inputPaie {
    width: 260px;
    padding: 6px 14px;
    margin-bottom: 10px;
    border: 1px solid white;
    background-color: black;
    border-radius: 4px;
    color: white;
    font-family: var(--fontFamilyAndale);
    text-align: center;
}

.inputPaie:focus {
    outline: 1px solid white;
}

.inputPaie::placeholder {
    text-align: left;
    font-family: var(--fontFamilyAndale);
    color: white;
    opacity: 0.6;
    font-size: 13px;
}

.iconInput1 {
    position: absolute;
    margin-left: 110px;
}

.iconInput2 {
    position: absolute;
    margin-left: 160px;
}

.iconInput3 {
    position: absolute;
    margin-left: 220px;
}

.inputPaie2 {
    width: 100px;
    padding: 6px 14px;
    margin-bottom: 10px;
    border: 1px solid white;
    background-color: black;
    border-radius: 4px;
    color: white;
    font-family: var(--fontFamilyAndale);
    text-align: center;
}

.inputPaie2:focus {
    outline: 1px solid white;
}

.inputPaie2::placeholder {
    text-align: left;
    font-family: var(--fontFamilyAndale);
    color: white;
    opacity: 0.6;
    font-size: 13px;
}

.hr {
    width: 70%;
    border: none;
    height: 1px;
    background-color: var(--textcolorBlanc);
    margin: 20px 0 15px 0;
}

.hrou {
    display: flex;
    gap: 10px;
    justify-content: center;
}.hr2 {
    width: 30%;
    height: 1px;
    background-color: var(--textcolorBlanc);
    margin-top: 15px;
}
</style>