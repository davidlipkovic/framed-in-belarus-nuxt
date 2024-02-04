<script setup>
import { onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
const { locale, locales, localeProperties } = useI18n()

const route = useRoute()

const langMenu = ref(null)
const switchLocalePath = useSwitchLocalePath()
const toggleLangMenu = ref(false)

const availableLocales = computed(() => {
  return (locales.value).filter(i => i.code !== locale.value)
})

const currentLocale = computed(() => {
  return localeProperties.value.name
})

watch(route, n => {
  toggleLangMenu.value = false
})

onClickOutside(langMenu, () => {
  toggleLangMenu.value = false
})
</script>

<template>
  <div 
    class="langMenu"
    ref="langMenu"
  >
    <button 
      class="langButton flexRowCenter"
      @click="toggleLangMenu = !toggleLangMenu"
    >
      {{ currentLocale }}
      <SvgArrowDown/>
    </button>
    <ul 
      v-if="toggleLangMenu"
      class="langMenuWrapper flexColumnStart"
    >
      <li
        v-for="locale in availableLocales"
        :key="locale.code"
      >
        <nuxt-link :to="switchLocalePath(locale.code)">
          {{ locale.name }}
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<style src="./LangMenu.scss" lang="scss"></style>
