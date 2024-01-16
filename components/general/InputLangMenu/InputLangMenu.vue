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

const currentLocale = ref(props.chosenLanguage)

onClickOutside(inputLangMenu, () => {
  toggleinputLangMenu.value = false
})

const handleChooseLanguage = (lang) => {
  emit('chooseLanguage', lang)
  currentLocale.value = lang
  toggleinputLangMenu.value = false
}
</script>

<template>
  <div 
    class="inputLangMenu"
    ref="inputLangMenu"
    @click="toggleinputLangMenu = !toggleinputLangMenu"
  >
    <span 
      class="langButton flexRowCenter"
      :class="{'langButtonPlaceholder' : !currentLocale}"
    >
      {{ currentLocale ? currentLocale : isRegistration ? $t('placeholders.chooseCommunicationLanguage') + '*' : $t('placeholders.chooseCommunicationLanguage')}}
      <SvgArrowDown/>
    </span>
    <div 
      v-if="toggleinputLangMenu"
      class="inputLangMenuWrapper flexColumnStart"
    >
      <button
        v-for="locale in locales"
        :key="locale.code"
        class="langLink"
        @click="handleChooseLanguage(locale.name)"
      >
        {{ locale.name }}
      </button>
    </div>
  </div>
</template>

<style src="./InputLangMenu.scss" lang="scss"></style>
