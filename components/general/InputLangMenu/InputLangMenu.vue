<script setup>
import { onMounted, ref, watch } from 'vue'
const { locales } = useI18n()

const emit = defineEmits([
  'chooseLanguage',
])

const props = defineProps({
  isRegistration: {
    type: Boolean,
    default: false
  },
  chosenLanguage: {
    type: String,
    default: null
  }
})

const inputLangMenu = ref(null)
const toggleinputLangMenu = ref(false)

onClickOutside(inputLangMenu, () => {
  toggleinputLangMenu.value = false
})

const handleChooseLanguage = (lang) => {
  emit('chooseLanguage', lang)
  toggleinputLangMenu.value = false
}
</script>

<template>
  <div 
    class="inputLangMenu"
    ref="inputLangMenu"
  >
    <span 
      class="langButton flexRowCenter"
      :class="{'langButtonPlaceholder' : !props.chosenLanguage}"
      @click="toggleinputLangMenu = !toggleinputLangMenu"
    >
      {{ props.chosenLanguage ? props.chosenLanguage : isRegistration ? $t('placeholders.chooseCommunicationLanguage') + '*' : $t('placeholders.chooseCommunicationLanguage')}}
      <SvgArrowDown/>
    </span>
    <ul 
      v-if="toggleinputLangMenu"
      class="inputLangMenuWrapper flexColumnStart"
    >
      <li
        v-for="locale in locales"
        :key="locale.code"
      >
        <button @click="handleChooseLanguage(locale.name)">
          {{ locale.name }}
        </button>
      </li>
    </ul>
  </div>
</template>

<style src="./InputLangMenu.scss" lang="scss"></style>
