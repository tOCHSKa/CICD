<template>
    <div class="infosProfil">
        <div class="divFreddy">
            <img src="/assets/img/freddy.jpg" class="freddy">
        </div>

        <form class="divInput">
            <div>
                <Icon name="ph:user-light" size="30" class="iconInput" />
                <input class="input" type="text" v-model="username">
            </div>

            <div>
                <Icon name="ic:outline-email" size="30" class="iconInput" />
                <input class="input" type="text" v-model="email">
            </div>

            <div class="passwordInput">
                <Icon name="streamline:padlock-square-1" size="30" class="iconInput" />
                <input class="input" :type="isPasswordVisible ? 'text' : 'password'" ref="oldPasswordInput"
                    v-model="oldMdp" placeholder="Ancien mot de passe">
                <button type="button" class="iconMdp" @click="togglePassword">
                    <Icon :name="isPasswordVisible ? 'mdi-light:eye' : 'mdi-light:eye-off'" size="30" />
                </button>
            </div>
            <div class="passwordInput">
                <Icon name="streamline:padlock-square-1" size="30" class="iconInput" />
                <input class="input" :type="isPasswordVisibleNew ? 'text' : 'password'"
                    placeholder="Nouveau mot de passe" ref="newPasswordInput" v-model="newMdp">
                <button type="button" class="iconMdp" @click="togglePasswordNew">
                    <Icon :name="isPasswordVisibleNew ? 'mdi-light:eye' : 'mdi-light:eye-off'" size="30" />
                </button>
            </div>

            <div class="checkbox-container">
                <label class="content">
                    <input type="checkbox">
                    <span class="checkmark"></span>
                    <p class="textCoche">Je souhaite recevoir les nouveautés et actualités par email</p>
                </label>
            </div>

            <BoutonText class="sauvegarder" textColor="var(--textcolorBlanc)" background="var(--colorbgGradientRouge)"
                borderSolid="var(--borderNone)" @click="saveChanges">
                Sauvegarder
            </BoutonText>

            <BoutonText class="modifierInfos" textColor="var(--textcolorBlanc)" background="var(--colorbgNoir)"
                borderSolid="var(--borderRouge)" @click="deleteCompte(route.params.id)">
                Supprimer mon compte
                <Icon name="zondicons:close-outline" size="25" class="iconBouton" />
            </BoutonText>

        </form>
    </div>
</template>


<script setup>
const route = useRoute()
const router = useRouter()

const username = ref('')
const email = ref('')

const oldMdp = ref('')
const newMdp = ref('')
const isPasswordVisible = ref(false)
const isPasswordVisibleNew = ref(false)
const oldPasswordInput = ref(null)
const newPasswordInput = ref(null)

const togglePassword = () => {
    isPasswordVisible.value = !isPasswordVisible.value

    nextTick(() => {
        const input = oldPasswordInput.value
        if (input) {
            input.focus()
            input.setSelectionRange(oldMdp.value.length, oldMdp.value.length)
        }
    })

}
const togglePasswordNew = () => {
    isPasswordVisibleNew.value = !isPasswordVisibleNew.value

    nextTick(() => {
        const input = newPasswordInput.value
        if (input) {
            input.focus()
            input.setSelectionRange(newMdp.value.length, newMdp.value.length)
        }
    })

}

const apiUrl = process.env.API_URL

const fetchUserProfile = async (userId) => {
    try {
        const data = await $fetch(`${apiUrl}/api/users/profile/${userId}`, {
            method: 'GET'
        })
        username.value = data.username
        email.value = data.email

    } catch (error) {
        console.error('Erreur lors de la récupération du profil :', error)
    }
}



const modifyProfil = async () => {
    const userId = route.params.id
    try {
        const data = await $fetch(`${apiUrl}L/api/users/profile/${userId}`, {
            method: 'PUT',
            body: { username: username.value, email: email.value }
        })

    } catch (error) {
        console.error('Erreur lors de la modification du profil :', error)
    }
}


const modifyMdp = async (userId) => {
    try {
        const data = await $fetch(`${apiUrl}/api/users/profile/mdp/${userId}`, {
            method: 'PUT'
        })
    } catch (error) {
        console.error('Erreur lors de la modifivation du profil :', error)
    }
}



const deleteCompte = async (userId) => {
    try {
        const data = await $fetch(`${apiUrl}/api/users/profile/supprimerCompte/${userId}`, {
            method: 'DELETE'
        })
        router.push('/')
    } catch (error) {
        console.error('Erreur lors de la modifivation du profil :', error)
    }
}



const saveChanges = async () => {
    const userId = route.params.id
    try {
        await modifyProfil()
        await modifyMdp(userId);
        location.reload()
    } catch (error) {
        console.error('Erreur lors de la sauvegarde et de la modification du mot de passe :', error);
    }
}



onMounted(() => {
    const userId = route.params.id
    if (userId) {
        fetchUserProfile(userId)
    }
})
</script>


<style scoped>
.infosProfil {
    background-color: black;
}

.divFreddy {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
    width: 100%;
}

.freddy {
    border-radius: 50%;
    width: 125px;
}

.divInput {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    background-color: black;
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
    color: rgba(255, 255, 255, 0.6);
}

.input:focus {
    outline: 1px solid white;
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

.checkbox-container {
    display: flex;
    width: 300px;
    margin-bottom: 20px;
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
    width: 23px;
    background-color: #000000;
    border: 1px solid white;
    border-radius: 5px;
    margin-right: 10px;
    margin-bottom: 10px
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

.modifierInfos {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 300px;
    height: 47px;
    margin-bottom: 10px
}

.modifierInfos a {
    text-decoration: none;
    color: inherit;
    font-size: 14px;
}

.sauvegarder {
    width: 300px;
    height: 60px;
    font-family: var(--fontFamilyImpact);
    margin-bottom: 50px
}

.iconBouton {
    color: red;
    opacity: 0.6;
    position: absolute;
    margin-left: 250px;
}
</style>