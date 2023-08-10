<script setup>
import { onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
const { locale, locales, localeProperties } = useI18n()

const route = useRoute()

const props = defineProps({
  showUser: {
    type: Boolean,
    default: false
  }
})

const currentLocale = ref(null)

const displayProfileModal = ref(false)
const displayQuestionModal = ref(false)
const langMenu = ref(null)
const switchLocalePath = useSwitchLocalePath()
const toggleMenu = ref(false)
const toggleLangMenu = ref(false)

const availableLocales = computed(() => {
  return (locales.value).filter(i => i.code !== locale.value)
})

watch(route, n => {
  displayProfileModal.value = false
  displayQuestionModal.value = false
  toggleMenu.value = false
  toggleLangMenu.value = false
})

onMounted(() => {
  currentLocale.value = localeProperties.value.name
})

onClickOutside(langMenu, () => {
  toggleLangMenu.value = false
})
</script>

<template>
  <header 
    class="mainMenuWrapper flexRowCenter"
    :class="toggleMenu ? 'mainMenuWrapperOpened' : 'mainMenuWrapperClosed'"
  >
    <div class="content flexRowStart">
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
      <div class="menuContentWrapper flexColumnStart">
        <div 
          class="menuContentBackground"
          @click="toggleMenu = !toggleMenu"
        />
        <nav class="menuAllLinksWrapper flexColumnStart">
          <div class="menuLinksWrapper flexColumnStart">
            <nuxt-link
              :to="localePath('/')"
            >
              {{ $t('links.home') }}
            </nuxt-link>
            <nuxt-link
              :to="localePath('/Gallery')"
            >
              {{ $t('links.gallery') }}
            </nuxt-link>
            <nuxt-link
              :to="localePath('/News')"
            >
              {{ $t('links.news') }}
            </nuxt-link>
            <nuxt-link
              :to="localePath('/AboutUs')"
            >
              {{ $t('links.aboutUs') }}
            </nuxt-link>
  <!--          <nuxt-link -->
  <!--            :to="localePath('/FAQ')" -->
  <!--          >-->
  <!--            {{ $t('links.FAQ') }}-->
  <!--          </nuxt-link>-->
          </div>
          <div class="menuUserLinksWrapper flexRowCenter">
            <nuxt-link
              v-if="!showUser"
              :to="localePath('/SignIn')"
              class="Login"
            >
              {{ $t('links.signIn') }}
            </nuxt-link>
            <nuxt-link
              v-if="!showUser"
              :to="localePath('/SignUp')"
              class="button bg_red"
            >
              {{ $t('links.participate') }}
            </nuxt-link>
            <button
              v-if="showUser"
              class="helpButton flexRowCenter"
              @click="displayQuestionModal = !displayQuestionModal"
            >
              <SvgHelpCircle/>
              <!-- <span class="pattern-button-text">
                {{ $t('mainMenu.question.label') }}
              </span> -->
            </button>
            <button
              v-if="showUser"
              class="profileButton flexRowCenter"
              @click="displayProfileModal = !displayProfileModal"
            >
              <img
                src="../../../assets/media/img/profileSymbolFramed.svg"
              >
              <!-- <span class="pattern-button-text">
                {{ $t('links.profile') }}
              </span> -->
            </button>
            <div
              v-if="displayProfileModal"
              class="profileMenuWrapper dropdownMenuWrapper flexColumnStart"
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
                :to="localePath('/Profile')"
                class="profileMenuWrapper__profileLink flexRowStart"
              >
                <span>
                  {{ $t('links.myEmbroideries') }}
                </span>
              </nuxt-link>
              <nuxt-link
                :to="localePath('/')"
                class="profileMenuWrapper__signOut flexRowStart"
              >
                <span>
                  {{ $t('links.signOut') }}
                </span>
              </nuxt-link>
            </div>
            <div class="langWrapper">
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
                class="langMenu dropdownMenuWrapper flexColumnStart"
                ref="langMenu"
              >
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
    </div>
  </header>
  <GeneralModal
    @closeModal="displayQuestionModal = false"
    :displayModal="displayQuestionModal"
    class="questionModal"
  >
    <div class="Settings content">
      <div class="Settings-header">
        <h2>
          {{ $t('mainMenu.question.label') }}
        </h2>
      </div>
      <div class="Settings-body">
        <div class="Settings-item Settings-item_reason">
          <div class="Settings-item-main">
            <label for="reason" class="Settings-item-title">
              {{ $t('mainMenu.question.label') }}
            </label>
            <textarea class="Settings-item-input" id="reason" name="reason" />
            <p class="textAreaDescription">
              {{ $t('mainMenu.question.content') }}
            </p>
          </div>
        </div>
        <div class="Settings-item Settings-item_buttons">
          <div class="Settings-item-main">
            <button 
              class="button" 
              @click="displayQuestionModal = false"
            >
              {{ $t('buttons.cancel') }}
            </button>
            <button 
              class="button bg_black"
              @click="displayQuestionModal = false"
            >
              {{ $t('buttons.send') }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </GeneralModal>
</template>

<style src="../../../assets/style/settings.scss" lang="scss" scoped></style>
<style src="./MainMenu.scss" lang="scss" scoped></style>
