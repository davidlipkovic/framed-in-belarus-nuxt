<script setup>
import { onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import useUserStore from "@/stores/user"
import { useCheckCurrentRoute } from "@/composables/CheckCurrentRoute";
import { useWindowSize } from '@vueuse/core'

const userStore = useUserStore()
const { checkCurrentRoute, checkHomeRoute } = useCheckCurrentRoute()

const route = useRoute()

const toggleProfileModal = ref(false)
const toggleQuestionModal = ref(false)
const toggleMenu = ref(false)
const { width } = useWindowSize()

watch(route, n => {
  toggleProfileModal.value = false
  toggleQuestionModal.value = false
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
      'mainMenuWrapperLogged' : userStore.isLogged,
      'mainMenuWrapperNotLogged' : !userStore.isLogged
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
              :to="$localePath('/Gallery')"
              :class="{ 'redImportatnt' : checkCurrentRoute('Gallery') }"
            >
              {{ $t('links.gallery') }}
            </nuxt-link>
            <nuxt-link
              :to="$localePath('/Events')"
              :class="{ 'redImportatnt' : checkCurrentRoute('Events') }"
            >
              {{ $t('links.news') }}
            </nuxt-link>
            <nuxt-link
              :to="$localePath('/AboutUs')"
              :class="{ 'redImportatnt' : checkCurrentRoute('AboutUs') }"
            >
              {{ $t('links.aboutUs') }}
            </nuxt-link>
            <nuxt-link
              v-if="!userStore.isLogged"
              :to="$localePath('/SignIn')"
              class="signInMobile"
            >
              {{ $t('links.signIn') }}
            </nuxt-link>
            <button
              v-if="userStore.isLogged"
              class="helpButtonMobile flexRowCenter"
              @click="toggleQuestionModal = !toggleQuestionModal"
            >
              {{ $t('mainMenu.question.label') }}
            </button>
            <nuxt-link
              v-if="userStore.isLogged"
              :to="$localePath('/')"
              @click.prevent="signOut()"
              class="signOutMobile"
            >
              {{ $t('links.signOut') }}
            </nuxt-link>
          </div>
          <div class="menuUserLinksWrapper flexRowStart">
            <nuxt-link
              v-if="!userStore.isLogged"
              :to="$localePath('/SignIn')"
              class="Login"
            >
              {{ $t('links.signIn') }}
            </nuxt-link>
            <nuxt-link
              v-if="!userStore.isLogged"
              :to="$localePath('/SignUp')"
              class="participateButton button bg_red"
            >
              {{ $t('links.participate') }}
            </nuxt-link>
            <button
              v-if="userStore.isLogged"
              class="helpButtonDesktop flexRowCenter"
              @click="toggleQuestionModal = !toggleQuestionModal"
              v-tooltip="$t('mainMenu.question.label')"
            >
              <SvgHelpCircle/>
            </button>
            <button
              v-if="userStore.isLogged"
              class="profileButton profileButtonDesktop flexRowCenter"
              :class="{'pointer-events-none': toggleProfileModal}"
              @click="toggleProfileModal = !toggleProfileModal"
              v-tooltip="$t('toolTips.profile')"
            >
              <div class="flexRowCenter">
                <img
                  src="../../../assets/media/img/profileSymbolFramed.svg"
                >
              </div>
              <span>
                {{ userStore.currentUser.username }}
              </span>
            </button>
            <nuxt-link
              v-if="userStore.isLogged"
              class="profileButton profileButtonMobile flexRowCenter"
              :to="$localePath('/Profile')"
            >
              <div class="flexRowCenter">
                <img
                  src="../../../assets/media/img/profileSymbolFramed.svg"
                >
              </div>
              <span>
                {{ userStore.currentUser.username }}
              </span>
            </nuxt-link>
            <GeneralProfileModal
              v-if="toggleProfileModal"
              class="profileModalHeader"
              @closeModal="toggleProfileModal = !toggleProfileModal"
            />
          </div>
          <GeneralLangMenu/>
          <nuxt-link
            :to="$localePath('/SignUp')"
            class="participateButton participateButtonMobile button bg_red"
          >
            {{ $t('links.participate') }}
          </nuxt-link>
        </nav>
      </div>
    </div>
  </header>
  <GeneralQuestionModal
    :displayModal="toggleQuestionModal"
    @closeModal="toggleQuestionModal = !toggleQuestionModal"
  />
</template>

<style src="./MainMenu.scss" lang="scss"></style>
