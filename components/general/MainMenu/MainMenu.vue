<script setup>
import { onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const { locale, locales } = useI18n()

const route = useRoute()

const props = defineProps({
  showUser: {
    type: Boolean,
    default: false
  }
})

const displayProfileModal = ref(false)
const displayQuestionModal = ref(false)

const switchLocalePath = useSwitchLocalePath()
const availableLocales = computed(() => {
  return (locales.value).filter(i => i.code !== locale.value)
})

watch(route, n => {
  displayProfileModal.value = false
  displayQuestionModal.value = false
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
              {{ $t('linkSignin') }}
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
              @click="displayQuestionModal = !displayQuestionModal"
            >
              <img
                src="../../../assets/media/img/help-circle.svg"
              >
              <span class="pattern-button-text">
                Ask a question
              </span>
            </button>
            <button
              v-if="showUser"
              class="Burger-menu-item profileLink flexRowCenter"
              @click="displayProfileModal = !displayProfileModal"
            >
              <img
                src="../../../assets/media/img/profileSymbolFramed.svg"
              >
              <span class="pattern-button-text">
                Profile
              </span>
            </button>
            <div
              v-if="displayProfileModal"
              class="profileMenuWrapper flexColumnStart"
            >
              <img
                src="../../../assets/media/img/profileSymbolFramed.svg"
              >
              <span
                class="profileMenuWrapper__name"
              >
                Tiffany Chin
              </span>
              <nuxt-link
                to="/Profile"
                class="profileMenuWrapper__profileLink flexRowStart"
              >
                <span>
                  My embroideries
                </span>
              </nuxt-link>
              <nuxt-link
                to="/"
                class="profileMenuWrapper__signOut flexRowStart"
              >
                <span>
                  Sign Out
                </span>
              </nuxt-link>
            </div>
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
  <GeneralModal
    @closeModal="displayQuestionModal = false"
    :displayModal="displayQuestionModal"
    class="questionModal"
  >
    <div class="Settings content">
      <div class="Settings-header">
        <h2>
          Ask a question
        </h2>
      </div>
      <div class="Settings-body">
        <div class="Settings-item Settings-item_reason">
          <div class="Settings-item-main">
            <label for="reason" class="Settings-item-title">
              Ask a question
            </label>
            <textarea class="Settings-item-input" id="reason" name="reason" />
            <p class="textAreaDescription">
              If you have an urgent question, please ask us and we will send you an email.
            </p>
          </div>
        </div>
        <div class="Settings-item Settings-item_buttons">
          <div class="Settings-item-main">
            <button 
              class="button" 
              @click="displayQuestionModal = false"
            >
              Cancel
            </button>
            <button 
              class="button bg_black"
              @click="displayQuestionModal = false"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  </GeneralModal>
</template>

<style src="./MainMenu.scss" lang="scss"></style>
<style src="../../../pages/Profile/Settings.scss" lang="scss" scoped></style>