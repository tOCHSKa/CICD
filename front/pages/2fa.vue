<template>
    <div class="fa2">
        <h1 class="titre">Merci de vérifier votre adresse email</h1>

        <form @submit.prevent="fa2" class="input-groupe">
            <p class="textRenvoyer">
                Nous avons envoyé un email, merci de saisir le code reçu
                ci-dessous
            </p>
            <br>
            <div>
                <Icon name="ph:user-light" size="30" class="iconInput" />
                <input class="input" type="text" placeholder="Email ou nom d'utilisateur" v-model="username">
            </div>
            <div class="otpinput">
                <p class="textInput">Entrez votre code</p>
                <v-otp-input class="custom-otp-input" focus-all focused color="white" v-model="code">
                </v-otp-input>
            </div>

            <BoutonText class="buttonLogin" @click="fa2" textColor="var(--textcolorBlanc)"
                background="var(--colorbgGradientRouge)" borderSolid="var(--borderNone)">
                Créer un compte
            </BoutonText>

            <p class="textRenvoyer">Vous n'avez rien reçu ?</p>
            <p class="lienRenvoyer">Renvoyer le mail</p>
        </form>
    </div>
</template>

<script setup>
const router = useRouter()
const code = ref('')
const username = ref('')


const fa2 = async () => {
    try {
        const body = {
            username: username.value,
            code: code.value
        };
        const token = localStorage.getItem('token')

        const data = await $fetch('http://localhost:3001/api/users/verify-2fa', {
            method: 'POST',
            body,
            headers: { Authorization: `Bearer ${token}` }
        })
        
        if (data && data.token) {
            localStorage.setItem('jwtToken', data.token);
            router.push(`/profil/${data.userId}`)
        } else {
            console.error('Token non reçu après authentification', data);
        }
    } catch (error) {
        console.error('Erreur lors de la connexion', error);
    }
};



</script>



<style scoped>
.fa2 {
    background-color: black;
    height: 100vh;
}

.titre {
    color: white;
    font-family: var(--fontFamilyImpact);
    text-align: center;
    font-weight: 100;
    margin-top: 70px;
    line-height: 0.99;
}

.input-groupe {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.textInput {
    font-size: 14px;
    color: white;
    opacity: 0.7;
    margin-top: 15px;
    margin-bottom: 0;
    text-align: left;
    font-family: var(--fontFamilyAndale);
    margin-left: 10px;
}

.custom-otp-input {
    padding: 0;
    margin-bottom: 20px;
}

.buttonLogin {
    width: 330px;
    height: 60px;
    font-family: var(--fontFamilyImpact);
}

.textRenvoyer {
    font-size: 12px;
    color: white;
    opacity: 0.7;
    margin-top: 15px;
    margin-bottom: 0;
    text-align: center;
    font-family: var(--fontFamilyAndale);
}

.lienRenvoyer {
    font-size: 14px;
    color: white;
    opacity: 0.7;
    font-family: var(--fontFamilyAndale);
    text-decoration: underline;
    margin: 0;
}

.input {
    width: 300px;
    padding: 16px 14px;
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

.iconInput {
    color: white;
    opacity: 0.6;
    position: absolute;
    margin-left: 10px;
    margin-top: 8px;
}
</style>