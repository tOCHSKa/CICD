<template>
    <div class="login">
        <NavigationBar />
        <h1 class="titre">CONNECTEZ-VOUS !</h1>

        <form @submit.prevent="login" class="input-groupe">
            <div>
                <Icon name="ph:user-light" size="30" class="iconInput" />
                <input class="input" type="text" placeholder="Email ou nom d'utilisateur" v-model="username">
            </div>
            <div class="passwordInput">
                <Icon name="streamline:padlock-square-1" size="30" class="iconInput" />
                <input class="input" :type="isPasswordVisible ? 'text' : 'password'" placeholder="Mot de passe" ref="passwordInput" v-model="mdp">
                <button type="button" class="iconMdp" @click="togglePassword">
                    <Icon :name="isPasswordVisible ? 'mdi-light:eye' : 'mdi-light:eye-off'" size="30"/>
                </button>
            </div>
            <div class="mdp">
                <NuxtLink>Mot de passe oublié ?</NuxtLink>
            </div>

            <div class="checkbox-container">
                <label class="content">
                    <input type="checkbox">
                    <span class="checkmark"></span>
                    <p class="seSouvenir">Se souvenir de moi</p>
                </label>
            </div>
            <BoutonText class="buttonLogin" textColor="var(--textcolorBlanc)" background="var(--colorbgGradientRouge)"
                borderSolid="var(--borderNone)">
                Se Connecter
            </BoutonText>

            <div class="connectGoogle">
                <img src="assets\img\logoGoogle.png" class="googleLogo" />
                <p class="textGoogle">Se connecter avec Google</p>
            </div>

            <div>
                <p class="textRegister">Vous n'avez pas de compte ?</p>
                <BoutonText 
                    class="boutonRegister" textColor="var(--textcolorBlanc)" background="var(--colorbgNoir)" borderSolid="var(--borderRouge)">
                    <NuxtLink to="/Register">Créer un compte</NuxtLink>
                </BoutonText>
            </div>

            <!-- Affichage des messages d'erreur -->
            <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
        </form>
    </div>
</template>

<script setup>
import { ref, nextTick, computed } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const username = ref('user');
const mdp = ref('User123456789*');
const isPasswordVisible = ref(false);
const passwordInput = ref(null);
const errorMessage = ref('');

const togglePassword = () => {
    isPasswordVisible.value = !isPasswordVisible.value;
    
    nextTick(() => {
        const input = passwordInput.value;
        input.focus();
        input.setSelectionRange(mdp.value.length, mdp.value.length);
    });
};

const login = async () => {
    errorMessage.value = '';

    if (!username.value || !mdp.value) {
        errorMessage.value = 'Veuillez remplir tous les champs.';
        return;
    }

    try {
        const body = {
            username: username.value,
            mdp: mdp.value,
        };

        const data = await $fetch('http://localhost:3001/api/users/login', {
            method: 'POST',
            body,
        });

        if (data.error) {
            errorMessage.value = data.error; // Affiche le message d'erreur retourné par l'API
            return;
        }

        router.push('/2fa');
    } catch (error) {
        console.error('Erreur lors de la connexion:', error.response || error);
        errorMessage.value = 'Erreur de connexion. Veuillez réessayer.';
    }
};
</script>



<style scoped>
.login {
    background-color: black;
    height: 100vh;
}
.titre {
    color: white;
    font-family: var(--fontFamilyImpact);
    text-align: center;
    font-weight: 100;
    margin-top: 70px;
    margin-bottom: 20px;
}

.input-groupe {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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

.passwordInput {
    position: relative;
}
.iconMdp {
    position: absolute;
    color: white;
    background: none;
    border: none;
    opacity: .6;
    right: 5px;
    margin-top: 8px;
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
    height: 15px;
    width: 15px;
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
    font-size: 14px;
    font-family: var(--fontFamilyAndale);
    margin-bottom: 5px;
}

.buttonLogin {
    width: 300px;
    height: 60px;
    font-family: var(--fontFamilyImpact);
}

.connectGoogle {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-top: 15px;
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

.textRegister {
    color: white;
    opacity: 0.7;
    margin-top: 30px;
    text-align: center;
    font-family: var(--fontFamilyAndale);
}
.boutonRegister {
    width: 330px;
    height: 60px;
}
.boutonRegister a {
    text-decoration: none;
    color: inherit;
}
</style>




// const login = async () => {
    //     try {
    //         const body = {
    //             username: username.value,
    //             mdp: mdp.value
    //         }
    //         const response = await fetch('/api/login', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify(body)
    //         })
    
    //         if (!response.ok) {
    //             throw new Error ('Login échoué')
    //         }
    
    //         const data = await response.json()
    
    //         router.push('/2fa')
    
    //     } catch (error) {
    //         console.error("Erreur lors de la connexion: ", error)
    //     }
    // }