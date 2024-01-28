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
const toggleNativeLangMenu = ref(false)

onClickOutside(nativeLangMenu, () => {
  toggleNativeLangMenu.value = false
})

const handleChooseLanguage = (lang) => {
  emit('chooseLanguage', lang)
  toggleNativeLangMenu.value = false
}

const languages = languagesJSON

const scrollToLanguage = (event) => {
  const noSpecialChar = /^[^\d\s!@#$%^&*()+=[\]{};:'".,<>?`~_|\\]+$/;
  if (!noSpecialChar.test(event.key) || !toggleNativeLangMenu.value) {
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

watch(toggleNativeLangMenu, (n, o) => {
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
      @click="toggleNativeLangMenu = !toggleNativeLangMenu"
    >
      {{ props.chosenLanguage ? props.chosenLanguage : 'English'}}
      <SvgArrowDown/>
    </span>
    <ul 
      v-if="toggleNativeLangMenu"
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
