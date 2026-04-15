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

const signOut = async () => {
  toggleMenu.value = false
  userStore.signOut()
}

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
            <button
              v-if="userStore.user"
              :to="$localePath('/')"
              @click.prevent="signOut()"
              class="signOutMobile"
            >
              {{ $t('links.signOut') }}
            </button>
          </div>
          <div class="menuUserLinksWrapper flexRowStart">
            <a
              v-if="!userStore.user"
              href="https://donorbox.org/framedinbelarus"
              class="supportButton button"
            >
              {{ $t('links.supportUs') }}
            </a>
            <a
              v-if="!userStore.user"
              href="https://forms.gle/SKCcvWGzRkQxx2fH9"
              class="participateButton button bg_red"
            >
              {{ $t('links.participate') }}
            </a>
            <button
              v-if="userStore.user"
              class="helpButtonDesktop flexRowCenter"
              @click="toggleQuestionModal = !toggleQuestionModal"
              v-tooltip="$t('mainMenu.question.label')"
            >
              <SvgHelpCircle/>
            </button>
            <button
              v-if="userStore.user"
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
                {{ userStore.user.username }}
              </span>
            </button>
            <nuxt-link
              v-if="userStore.user"
              class="profileButton profileButtonMobile flexRowCenter"
              :to="$localePath('/Profile')"
            >
              <div class="flexRowCenter">
                <img
                  src="../../../assets/media/img/profileSymbolFramed.svg"
                >
              </div>
              <span>
                {{ userStore.user.username }}
              </span>
            </nuxt-link>
            <GeneralProfileModal
              v-if="toggleProfileModal"
              class="profileModalHeader"
              @closeModal="toggleProfileModal = !toggleProfileModal"
            />
          </div>
          <GeneralLangMenu/>
          <a
            v-if="!userStore.user"
            href="https://donorbox.org/framedinbelarus"
            class="supportButton supportButtonMobile button"
          >
            {{ $t('links.supportUs') }}
          </a>
          <a
            v-if="!userStore.user"
            href="https://forms.gle/SKCcvWGzRkQxx2fH9"
            class="participateButton participateButtonMobile button bg_red"
          >
            {{ $t('links.participate') }}
          </a>
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
