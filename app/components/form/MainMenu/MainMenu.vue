<script setup>
import { onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useWindowSize } from '@vueuse/core'

const route = useRoute()

const toggleMenu = ref(false)
const { width } = useWindowSize()

watch(route, n => {
  toggleMenu.value = false
})

watch(width, n => {
  if (n > 800) {
    toggleMenu.value = false
  }
})
</script>

<template>
  <header 
    class="formMainMenuWrapper flexRowCenter"
    :class="{
      'formMainMenuWrapperOpened' : toggleMenu,
      'formMainMenuWrapperClosed' : !toggleMenu
    }"
  >
    <div class="content flexRowStart">
      <div class="mainMenuTopWrapper flexRowCenter">
        <button 
          class="menuButton"
          @click="toggleMenu = !toggleMenu"
        >
          <div 
            v-if="!toggleMenu"
            class="menuButtonOpen flexColumnCenter"
          >
            <div/>
            <div/>
            <div/>
          </div>
          <div 
            v-if="toggleMenu"
            class="menuButtonClose flexColumnCenter"
          >
            <div/>
            <div/>
          </div>
        </button>
        <GeneralMainLogo/>
      </div>
      <div class="menuContentWrapper flexColumnStart">
        <div 
          class="menuContentBackground"
          @click="toggleMenu = !toggleMenu"
        />
        <nav class="menuAllLinksWrapper flexColumnStart">
          <GeneralLangMenu/>
        </nav>
      </div>
    </div>
  </header>
</template>

<style src="./MainMenu.scss" lang="scss"></style>
