<template>
    <div class="register">
        <h1 class="titre">Créez votre compte !</h1>

        <form class="input-groupe" @submit.prevent="register">
            <label class="userInput">
                <p class="labelText">Adresse mail</p>
                <input class="input" type="text" placeholder="exemple@gmail.com" v-model="email">
            </label>
            <label class="userInput">
                <p class="labelText">Nom d'utilisateur</p>
                <input class="input" type="text" placeholder="Créez un pseudo horroifique" v-model="username">
            </label>
            <label class="userInput">
                <p class="labelText">Nom</p>
                <input class="input" type="text" placeholder="Votre nom" v-model="nom">
            </label>
            <label class="userInput">
                <p class="labelText">Prenom</p>
                <input class="input" type="text" placeholder="Votre prenom" v-model="prenom">
            </label>
            <label class="userInput">
                <p class="labelText">Age</p>
                <input class="input" type="number" placeholder="Votre âge" v-model="age">
            </label>
            <label class="passwordInput">
                <p class="labelText">Mot de passe</p>
                <input class="input" :type="isPasswordVisible ? 'text' : 'password'" placeholder="8 caractères minimum"
                    ref="passwordInput" v-model="mdp">
                <button type="button" class="iconMdp" @click="togglePassword">
                    <Icon :name="isPasswordVisible ? 'mdi-light:eye' : 'mdi-light:eye-off'" size="30" />
                </button>
            </label>

            <div>
                <div class="checkbox-container">
                    <label class="content">
                        <input type="checkbox">
                        <span class="checkmark"></span>
                        <p class="textCoche">Je souhaite recevoir les nouveautés et actualités par email</p>
                    </label>
                </div>
                <div class="checkbox-container">
                    <label class="content">
                        <input type="checkbox">
                        <span class="checkmark"></span>
                        <p class="textCoche">
                            En créant ce compte, j'accepte les conditions générales d'utilisation
                        </p>
                    </label>
                </div>
            </div>

            <BoutonText class="buttonRegister" textColor="var(--textcolorBlanc)"
                background="var(--colorbgGradientRouge)" borderSolid="var(--borderNone)" @click="register">
                Créer un compte
            </BoutonText>

            <div>
                <p class="textLogin">Vous avez déjà un compte ?</p>
                <BoutonText class="butonLogin" textColor="var(--textcolorBlanc)" background="var(--colorbgNoir)"
                    borderSolid="var(--borderRouge)">
                    <NuxtLink to="/Login">Connectez-Vous</NuxtLink>
                </BoutonText>
            </div>
        </form>
    </div>
</template>



<script setup>
const router = useRouter()

const email = ref('')
const username = ref('')
const nom = ref('')
const prenom = ref('')
const age = ref('')
const mdp = ref('')

const isPasswordVisible = ref(false)

const passwordInput = ref(null)

const togglePassword = () => {
    isPasswordVisible.value = !isPasswordVisible.value

    nextTick(() => {
        const input = passwordInput.value
        input.focus()
        input.setSelectionRange(mdp.value.length, mdp.value.length)
    })
}

const apiUrl = process.env.API_URL

const register = async () => {
    try {
        const body = {
            username: username.value,
            nom: nom.value,
            prenom: prenom.value,
            age: age.value,
            email: email.value,
            mdp: mdp.value,
        };


        const data = await $fetch(`${apiUrl}/api/users/register`, {
            method: 'POST',
            body,
        });

        router.push('/login');
    } catch (error) {
        console.error('Erreur lors de la création de compte:', error);
    }
};



</script>



<style scoped>
.register {
    background-color: black;
    height: 100vh;
}

.titre {
    color: white;
    font-family: var(--fontFamilyImpact);
    text-align: center;
    font-weight: 100;
    margin-top: 70px;
    text-transform: uppercase;
}

.input-groupe {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: black;
}

.userInput {
    display: flex;
    flex-direction: column;
    color: white;
}

.passwordInput {
    display: flex;
    flex-direction: column;
    position: relative;
    color: white;
}

.labelText {
    font-family: var(--fontFamilyAndale);
    opacity: .6;
    margin: 5px 0
}

.iconMdp {
    position: absolute;
    color: white;
    background: none;
    border: none;
    opacity: .6;
    right: 5px;
    margin-top: 38px;
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

.checkbox-container {
    display: flex;
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
    width: 27px;
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

.textCoche {
    color: white;
    margin: 7px 0;
    opacity: 0.7;
    font-size: 12px;
    font-family: var(--fontFamilyAndale);
}

.buttonRegister {
    width: 330px;
    height: 60px;
    font-family: var(--fontFamilyImpact);
    margin-top: 15px;
}

.textLogin {
    font-size: 12px;
    color: white;
    opacity: 0.7;
    margin-top: 30px;
    text-align: center;
    font-family: var(--fontFamilyAndale);
}

.butonLogin {
    width: 330px;
    height: 47px;
    margin-bottom: 30px
}

.butonLogin a {
    text-decoration: none;
    color: inherit;
}
</style>
