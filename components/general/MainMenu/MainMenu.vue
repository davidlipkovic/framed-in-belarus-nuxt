<script setup>
import { onMounted, ref } from 'vue'

const { locale, locales } = useI18n()

const props = defineProps({
  showUser: {
    type: Boolean,
    default: false
  }
})

const switchLocalePath = useSwitchLocalePath()
const availableLocales = computed(() => {
  return (locales.value).filter(i => i.code !== locale.value)
})

onMounted(() => {
})
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
  <!--          <nuxt-link -->
  <!--            to="FAQ"-->
  <!--            class="Burger-menu-item"-->
  <!--          >-->
  <!--            {{ $t('linkFAQ') }}-->
  <!--          </nuxt-link>-->
          </div>
          <div class="Burger-menu-group Burger-menu-group-lang flexRowCenter">
            <nuxt-link
              v-if="!showUser"
              to="/SignIn"
              class="Burger-menu-item Login"
            >
              {{ $t('linkLogin') }}
            </nuxt-link>
            <nuxt-link
              v-if="!showUser"
              to="/SignUp"
              class="Burger-menu-item button bg_red"
            >
              {{ $t('participateBtnMsg') }}
            </nuxt-link>
            <button
              v-if="showUser"
              class="Burger-menu-item askButton flexRowCenter"
              @click="showQuestionModal = !showQuestionModal"
            >
              <img
                src="../../../assets/media/img/help-circle.svg"
              >
              <span class="pattern-button-text">
                Ask a question
              </span>
            </button>
            <nuxt-link
              v-if="showUser"
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

<style src="./MainMenu.scss" lang="scss"></style>
