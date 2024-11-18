<template>
  <button class="button" :style="buttonStyle" >
    <slot></slot>
  </button>
  <!-- <Icon name="icon-park-outline:right-c" size="20" /> Icone fleche-->
  <!-- <Icon name="bi:play-btn" size="20"/> bouton ecran -->
</template>

<script setup>
const props = defineProps({
  textColor: {
    type: String,
    default: ''
  },
  background: {
    type: String,
    default: ''
  },
  borderSolid: {
    type: String,
    default: ''
  }
})

const buttonStyle = computed(() => ({
  color: props.textColor,
  background: props.background,
  border: `${props.borderSolid}`,
}))
</script>

<style scoped>
.button {
  cursor: pointer;
  padding: 10px 24px;
  border-radius: 4px;
  font-family: Impact;
  font-size: 18px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 1px;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1px;
}
</style>