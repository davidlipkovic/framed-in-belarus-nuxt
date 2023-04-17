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
              <img
                src="../../../assets/media/img/profileSymbolFramed.svg"
              >
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
