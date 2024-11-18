<template>
  <div class="footer">
    <div class="footer-img">
      <img src="/assets/img/Plan de travail 347_1.png" width="170px" alt="logo" />
    </div>
    <div class="footer-icon-social">
      <div><PhThinInstagramLogo class="icon" /></div>
      <div><PhThinFacebookLogo class="icon" /></div>
      <div><img src="/assets/img/discord.png" alt="discord" width="45px" class="icon" /></div>
    </div>
    <div class="footer-question">
      <p>UNE QUESTION ? <span><NuxtLink to="/contact">CONTACTEZ-NOUS !</NuxtLink></span></p>
    </div>

    <!-- NOTRE CATALOGUE -->
    <div class="footer-link-content" @click="toggleCatalogue">
      <div class="footer-link-p">
        <u>NOTRE CATALOGUE</u>
      </div>
      <component :is="isCatalogueOpen ? AkMinus : AnOutlinedPlus" class="footer-link-icon" />
      </div>
      <transition name="slide-fade">
        <div class="footer-link-clicked" v-show="isCatalogueOpen">
          <div class="footer-link-clicked-item"><NuxtLink class="aLink" to="/horreur"> NOUVEAUTES</NuxtLink></div>
          <div class="footer-link-clicked-item"><NuxtLink class="aLink" to="/horreur">NOTRE SELECTION HALLOWEEN</NuxtLink></div>
          <div class="footer-link-clicked-item"><NuxtLink class="aLink" to="/thriller"> FILMS CULTES</NuxtLink></div>
        </div>
      </transition>

      <!-- FAQ  -->
    <div class="footer-link-content" @click="toggleFaq">
      <div class="footer-link-p">
        <u>FOIRE AUX QUESTIONS</u>
      </div>
      <component :is="isFaqOpen ? AkMinus : AnOutlinedPlus" class="footer-link-icon" />
    </div>
    <transition name="slide-fade">
      <div class="footer-link-clicked" v-show="isFaqOpen">
        <div class="footer-link-clicked-item"><NuxtLink class="aLink" to="">LIEN 1</NuxtLink></div>
        <div class="footer-link-clicked-item"><NuxtLink class="aLink" to="">LIEN 2</NuxtLink></div>
        <div class="footer-link-clicked-item"><NuxtLink class="aLink" to="">LIEN 3</NuxtLink></div>
        <div class="footer-link-clicked-item"><NuxtLink class="aLink" to="">LIEN 4</NuxtLink></div>
      </div>
    </transition>

    <!-- lien utile -->
    <div class="footer-link-content" @click="toggleLienUtile">
      <div class="footer-link-p">
        <u>LIENS UTILES</u>
      </div>
      <component :is="isLienUtileOpen ? AkMinus : AnOutlinedPlus" class="footer-link-icon" />
    </div>
    <transition name="slide-fade">
      <div class="footer-link-clicked" v-show="isLienUtileOpen">
        <NuxtLink to="/partenaires" class="footer-link-clicked-item">
          PARTENAIRES
        </NuxtLink>
        <div class="footer-link-clicked-item"><NuxtLink class="aLink" to="/regles">Regles</NuxtLink></div>
        <div class="footer-link-clicked-item"><NuxtLink class="aLink" to="/mentions">Mentions legales</NuxtLink></div>
      </div>
    </transition>

    <!-- Mentions légales -->
    <div class="footer-mention">
      <div class="footer-mention-line">Informations legales</div>
      <div class="footer-mention-lineTwo">
        <div>Mentions legales</div>
        <div>|</div>
        <div>Protection des donnees</div>
        <div>|</div>
        <div>Politique des cookies</div>
      </div>
      <div class="footer-mention-lineTwo">
        <div>Conditions generales de vente</div>
        <div>|</div>
        <div>Conditions d'utilisation</div>
      </div>
      <div class="footer-mention-lineThree">
          <p>
            Tous droits reserves. Reproduction interdite.
          </p>
          <p>
            Created with fun by Kevin, Mohamed, Denis & Cecile.
          </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { PhThinInstagramLogo } from '@kalimahapps/vue-icons';
import { PhThinFacebookLogo } from '@kalimahapps/vue-icons';
import { AnOutlinedPlus , AkMinus } from '@kalimahapps/vue-icons';

// Déclare des variables réactives pour chaque section
const isCatalogueOpen = ref(false);
const isFaqOpen = ref(false);
const isLienUtileOpen = ref(false);

// Fonctions pour basculer les sections
const toggleCatalogue = () => {
  isCatalogueOpen.value = !isCatalogueOpen.value;
};

const toggleFaq = () => {
  isFaqOpen.value = !isFaqOpen.value;
};

const toggleLienUtile = () => {
  isLienUtileOpen.value = !isLienUtileOpen.value;
};
</script>

<style scoped>
.footer {
  background: var(--colorbgNoir);
}

.footer-img {
  text-align: center;
}

.footer-icon-social {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 5px;
}

.icon {
  color: #ffffff;
  font-size: 2.8125rem;
  cursor: pointer;
}

.footer-question {
  color: var(--colorbgBlanc);
  font-family: var(--fontFamily);
  letter-spacing: -1px;
  font-size: 12px;
  text-align: center;
}

.footer-question p {
  font-weight: 800;
}
.footer-question a {
  cursor: pointer;
  font-weight: 500;
  color: white
}

.footer-link-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--colorbgNoir);
  color: var(--textcolorBlanc);
  font-family: var(--fontFamily);
  font-size: 12px;
  width: 100%;
  min-height: 40px;
  cursor: pointer;
}
.footer-link-p {
  text-align: center;
  flex-grow: 1;
  margin-left: 48px;
}
.footer-link-icon {
  font-size: 2rem;
  padding: 0 20px 0 0;
  color: #ffffff;
}

.footer-link-clicked {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--textcolorBlanc);
  font-family: var(--fontFamily);
  background: var(--colorbgGray);
  width: 100%;
}

.footer-link-clicked-item {
  width: 100%;
  min-height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: inherit;
  text-decoration: none;
}

.footer-link-clicked-item a {
  color: inherit;
}

.footer-mention {
  font-family: var(--fontFamilyMention);
  color: var(--textcolorBlanc);
  font-size: 12px;
  margin: 12px 0;
}
.footer-mention-line {
  text-align: center;
}

.footer-mention-lineTwo {
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--fontFamilyMention);
  color: var(--textcolorBlanc);
  gap: 12px;
}

.footer-mention-lineThree {
  text-align: center;
  margin-top: 12px;
  font-family: var(--fontFamilyMention);
  color: var(--textcolorBlanc);
  font-size: 10px;

}

/* Transition sur la hauteur et l'opacité */
.slide-fade-enter-active, .slide-fade-leave-active {
  transition: max-height 0.5s ease, opacity 0.5s ease;
}

.slide-fade-enter-from, .slide-fade-leave-to {
  max-height: 0;
  opacity: 0;
  overflow: hidden;
}

.slide-fade-enter-to, .slide-fade-leave-from {
  max-height: 500px;
  opacity: 1;
}
.aLink {
  color: inherit;
  text-decoration: none
}


</style>
