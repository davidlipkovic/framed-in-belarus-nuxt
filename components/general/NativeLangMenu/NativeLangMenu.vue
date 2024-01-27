<script setup>
import { nextTick, onMounted, onUnmounted, ref, watch } from 'vue'
import languagesJSON from '../../../assets/json/languages.json'

const emit = defineEmits([
  'chooseLanguage',
])

const props = defineProps({
  chosenLanguage: {
    type: String,
    default: null
  }
})

const nativeLangMenu = ref(null)
const nativeLangMenuWrapper = ref(null)
const togglenativeLangMenu = ref(false)

onClickOutside(nativeLangMenu, () => {
  togglenativeLangMenu.value = false
})

const handleChooseLanguage = (lang) => {
  emit('chooseLanguage', lang)
  togglenativeLangMenu.value = false
}

const languages = languagesJSON

const scrollToLanguage = (event) => {
  console.log(event.key)

  const noSpecialChar = /^[^\d\s!@#$%^&*()+=[\]{};:'".,<>?`~_|\\]+$/;
  if (!noSpecialChar.test(event.key) || !togglenativeLangMenu.value || !props.chosenLanguage) {
    return
  }
  
  const match = languages.find(language => language.name.toLowerCase().startsWith(event.key.toLowerCase()))
  if (match) {
    const firstMatch = nativeLangMenuWrapper.value.querySelector('.langLink--' + match.name)
    if (firstMatch) {
      firstMatch.scrollIntoView()
    }
  }
}

const simplifiedName = (name) => {
  const parts = name.split(/[ ,]/)
  return parts[0]
}

watch(togglenativeLangMenu, (n, o) => {
  if (n && props.chosenLanguage) {
    const match = languages.find(language => language.name.startsWith(props.chosenLanguage))
    if (match) {
      nextTick(() => {
        const firstMatch = nativeLangMenuWrapper.value.querySelector('.langLink--' + simplifiedName(match.name))
        if (firstMatch) {
          firstMatch.scrollIntoView()
        }
      })
    }
  }
})

onMounted(() => {
  addEventListener("keypress", scrollToLanguage)
})

onUnmounted(() => {
  removeEventListener("keypress", scrollToLanguage)
})
</script>

<template>
  <div 
    class="nativeLangMenu"
    ref="nativeLangMenu"
  >
    <span 
      class="langButton flexRowCenter"
      :class="{'langButtonPlaceholder' : !props.chosenLanguage}"
      @click="togglenativeLangMenu = !togglenativeLangMenu"
    >
      {{ props.chosenLanguage ? props.chosenLanguage : 'English'}}
      <SvgArrowDown/>
    </span>
    <ul 
      v-if="togglenativeLangMenu"
      class="nativeLangMenuWrapper flexColumnStart"
      ref="nativeLangMenuWrapper"
    >
      <li
        v-for="language in languages"
        :key="language.code"
        :class="'langLink--' + simplifiedName(language.name)"
      >
        <button @click="handleChooseLanguage(language)">
          {{ language.name }}
        </button>
      </li>
    </ul>
  </div>
</template>

<style src="./NativeLangMenu.scss" lang="scss"></style>
