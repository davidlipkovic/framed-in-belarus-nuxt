<script setup>
import { onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useCheckCurrentRoute } from "@/composables/CheckCurrentRoute";
import { useWindowSize } from '@vueuse/core'

const { checkCurrentRoute, checkHomeRoute } = useCheckCurrentRoute()

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
    class="mainMenuWrapper flexRowCenter"
    :class="{
      'mainMenuWrapperOpened' : toggleMenu,
      'mainMenuWrapperClosed' : !toggleMenu,
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
          <div class="menuLinksWrapper flexColumnStart">
            <nuxt-link
              :to="$localePath('/')"
              :class="{ 'redImportatnt' : checkHomeRoute('/') }"
            >
              {{ $t('links.home') }}
            </nuxt-link>
            <nuxt-link
              :to="$localePath('/Events')"
              :class="{ 'redImportatnt' : checkCurrentRoute('Events') }"
            >
              {{ $t('links.news') }}
            </nuxt-link>
            <!-- <nuxt-link
              :to="$localePath('/AboutUs')"
              :class="{ 'redImportatnt' : checkCurrentRoute('AboutUs') }"
            >
              {{ $t('links.aboutUs') }}
            </nuxt-link> -->
          </div>
          <div class="menuUserLinksWrapper flexRowStart">
            <a
              href="https://donorbox.org/framedinbelarus"
              class="supportButton button"
            >
              {{ $t('links.supportUs') }}
            </a>
            <a
              href="https://forms.gle/SKCcvWGzRkQxx2fH9"
              class="participateButton button bg_red"
            >
              {{ $t('links.participate') }}
            </a>
          </div>
          <GeneralLangMenu/>
          <a
            href="https://donorbox.org/framedinbelarus"
            class="supportButton supportButtonMobile button"
          >
            {{ $t('links.supportUs') }}
          </a>
          <a
            href="https://forms.gle/SKCcvWGzRkQxx2fH9"
            class="participateButton participateButtonMobile button bg_red"
          >
            {{ $t('links.participate') }}
          </a>
        </nav>
      </div>
    </div>
  </header>
</template>

<style src="./MainMenu.scss" lang="scss"></style>
