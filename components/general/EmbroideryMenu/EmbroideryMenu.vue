<script setup>
import { onMounted, ref } from 'vue'

import { VueFinalModal } from 'vue-final-modal'

const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const availableLocales = computed(() => {
  return (locales.value).filter(i => i.code !== locale.value)
})

const showQuestionModal = ref( false )
</script>

<template>
  <div>
    <input type="checkbox" id="Burger" class="Burger-checker visually-hidden">
    <header class="Header">
      <div class="content">
        <GeneralMainLogo/>
        <label for="Burger" class="Burger-button" role="button" aria-role="button">
          <span class="Burger-button-item">—</span>
          <span class="Burger-button-item">—</span>
          <span class="Burger-button-item">—</span>
        </label>
        <nav class="Burger-menu">
          <div class="Burger-menu-group">
            <nuxt-link
              to="/"
              class="Burger-menu-item"
            >
              Home
            </nuxt-link>
            <nuxt-link
              to="/Gallery"
              class="Burger-menu-item"
            >
              {{ $t('linkGallery') }}
            </nuxt-link>
            <nuxt-link
              to="/News"
              class="Burger-menu-item"
            >
              {{ $t('linkNews') }}
            </nuxt-link>
            <nuxt-link
              to="/AboutUs"
              class="Burger-menu-item"
            >
              {{ $t('linkAboutUs') }}
            </nuxt-link>
          </div>
          <div class="Burger-menu-group Burger-menu-group-lang">
            <button
              class="Burger-menu-item askButton"
              @click="showQuestionModal = !showQuestionModal"
            >
              <img
                src="../../../assets/media/img/help-circle.svg"
              >
              <span class="pattern-button-text">
                Ask a question
              </span>
            </button>
            <!-- <vue-final-modal
              v-model="showQuestionModal"
              @click-outside="showQuestionModal = false"
            >
              <div>
                <p class="title">Ask a question</p>
              </div>
            </vue-final-modal> -->
            <nuxt-link
              to="/Profile"
              class="Burger-menu-item profileLink flexRowCenter"
            >
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 18.1 20">
                <path d="M9.1,2c-1.7,0-3,1.3-3,3s1.3,3,3,3c1.7,0,3-1.3,3-3S10.7,2,9.1,2z M4.1,5c0-2.8,2.2-5,5-5c2.8,0,5,2.2,5,5
                  s-2.2,5-5,5C6.3,10,4.1,7.8,4.1,5z M1.5,13.5C2.5,12.5,3.7,12,5.1,12h8c1.3,0,2.6,0.5,3.5,1.5c0.9,0.9,1.5,2.2,1.5,3.5v2
                  c0,0.6-0.4,1-1,1s-1-0.4-1-1v-2c0-0.8-0.3-1.6-0.9-2.1S13.8,14,13.1,14h-8c-0.8,0-1.6,0.3-2.1,0.9S2.1,16.2,2.1,17v2
                  c0,0.6-0.4,1-1,1c-0.6,0-1-0.4-1-1v-2C0.1,15.7,0.6,14.4,1.5,13.5z"/>
              </svg>
              <span class="pattern-button-text">
                Profile
              </span>
            </nuxt-link>
            <div class="Lang">
              <div class="Lang-button Burger-menu-item">
                ENG
                <img 
                  class="arrow" 
                  src="@/assets/media/img/arrow.svg" 
                  alt="Arrow"
                >
              </div>
              <div class="Lang-select">
                <nuxt-link
                  v-for="locale in availableLocales"
                  :key="locale.code"
                  :to="switchLocalePath(locale.code)"
                  class="Lang-link"
                >
                  {{ locale.name }}
                </nuxt-link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  </div>
</template>

<style src="./EmbroideryMenu.scss" lang="scss"></style>
