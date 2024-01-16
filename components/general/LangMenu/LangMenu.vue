<script setup>
import { onMounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
const { locale, locales, localeProperties } = useI18n()

const route = useRoute()
const router = useRouter()

const langMenuWrapper = ref(null)
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

onClickOutside(langMenuWrapper, () => {
  toggleLangMenu.value = false
})
</script>

<template>
  <div class="langMenu">
    <button 
      v-if="!toggleLangMenu"
      class="langButton flexRowCenter"
      @click="toggleLangMenu = !toggleLangMenu"
    >
      {{ currentLocale }}
      <SvgArrowDown/>
    </button>
    <button 
      v-if="toggleLangMenu"
      class="langButton flexRowCenter"
    >
      {{ currentLocale }}
      <SvgArrowTop/>
    </button>
    <div 
      v-if="toggleLangMenu"
      class="langMenuWrapper flexColumnStart"
      ref="langMenuWrapper"
    >
      <nuxt-link
        v-for="locale in availableLocales"
        :key="locale.code"
        :to="switchLocalePath(locale.code)"
        class="langLink"
      >
        {{ locale.name }}
      </nuxt-link>
    </div>
  </div>
</template>

<style src="./LangMenu.scss" lang="scss"></style>
