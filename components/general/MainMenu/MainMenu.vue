<script setup>
import { onMounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useUserStore } from "@/stores/user"
import { useCheckCurrentRoute } from "@/composables/CheckCurrentRoute";
import { useWindowSize } from '@vueuse/core'

const userStore = useUserStore()
const { checkCurrentRoute, checkHomeRoute } = useCheckCurrentRoute()

const route = useRoute()
const router = useRouter()

const displayProfileModal = ref(false)
const displayQuestionModal = ref(false)
const profileModal = ref(null)
const toggleMenu = ref(false)
const { width } = useWindowSize()

const signOut = () => {
  router.go(0)
  userStore.isLogged = false
  displayProfileModal.value = false
}

watch(route, n => {
  displayProfileModal.value = false
  displayQuestionModal.value = false
  toggleMenu.value = false
})

watch(width, n => {
  if (n > 800) {
    toggleMenu.value = false
  }
})

onClickOutside(profileModal, () => {
  displayProfileModal.value = false
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
              :to="localePath('/')"
              :class="{ 'redImportatnt' : checkHomeRoute('/') }"
            >
              {{ $t('links.home') }}
            </nuxt-link>
            <nuxt-link
              :to="localePath('/Gallery')"
              :class="{ 'redImportatnt' : checkCurrentRoute('Gallery') }"
            >
              {{ $t('links.gallery') }}
            </nuxt-link>
            <nuxt-link
              :to="localePath('/News')"
              :class="{ 'redImportatnt' : checkCurrentRoute('News') }"
            >
              {{ $t('links.news') }}
            </nuxt-link>
            <nuxt-link
              :to="localePath('/AboutUs')"
              :class="{ 'redImportatnt' : checkCurrentRoute('AboutUs') }"
            >
              {{ $t('links.aboutUs') }}
            </nuxt-link>
            <nuxt-link
              v-if="!userStore.isLogged"
              :to="localePath('/SignIn')"
              class="signInMobile"
            >
              {{ $t('links.signIn') }}
            </nuxt-link>
            <button
              v-if="userStore.isLogged"
              class="helpButtonMobile flexRowCenter"
              @click="displayQuestionModal = !displayQuestionModal"
            >
              Ask a question
            </button>
            <nuxt-link
              v-if="userStore.isLogged"
              :to="localePath('/')"
              @click.prevent="signOut()"
              class="signOutMobile"
            >
              {{ $t('links.signOut') }}
            </nuxt-link>
          </div>
          <div class="menuUserLinksWrapper flexRowStart">
            <nuxt-link
              v-if="!userStore.isLogged"
              :to="localePath('/SignIn')"
              class="Login"
            >
              {{ $t('links.signIn') }}
            </nuxt-link>
            <nuxt-link
              v-if="!userStore.isLogged"
              :to="localePath('/SignUp')"
              class="participateButton button bg_red"
            >
              {{ $t('links.participate') }}
            </nuxt-link>
            <button
              v-if="userStore.isLogged"
              class="helpButtonDesktop flexRowCenter"
              @click="displayQuestionModal = !displayQuestionModal"
              v-tooltip="$t('mainMenu.question.label')"
            >
              <SvgHelpCircle/>
            </button>
            <button
              v-if="userStore.isLogged && !displayProfileModal"
              class="profileButton flexRowCenter"
              @click="displayProfileModal = true"
              v-tooltip="$t('toolTips.profile')"
            >
              <div class="flexRowCenter">
                <img
                  src="../../../assets/media/img/profileSymbolFramed.svg"
                >
              </div>
              <span>
                {{ userStore.currentUser.name }}
              </span>
            </button>
            <button
              v-if="userStore.isLogged && displayProfileModal"
              class="profileButton flexRowCenter"
            >
              <div class="flexRowCenter">
                <img
                  src="../../../assets/media/img/profileSymbolFramed.svg"
                >
              </div>
              <span>
                {{ userStore.currentUser.name }}
              </span>
            </button>
            <div
              v-if="displayProfileModal"
              ref="profileModal"
              class="profileMenuWrapper dropdownMenuWrapper flexColumnStart"
            >
              <img
                src="../../../assets/media/img/profileSymbolFramed.svg"
              >
              <span
                class="profileMenuWrapperName"
              >
                {{ userStore.currentUser.name }}
              </span>
              <nuxt-link
                :to="localePath('/Profile')"
                class="profileMenuWrapperProfileLink flexRowStart"
              >
                <span>
                  {{ $t('links.profile') }}
                </span>
              </nuxt-link>
              <nuxt-link
                :to="localePath('/')"
                class="profileMenuWrapperSignOut flexRowStart"
                @click.prevent="signOut()"
              >
                <span>
                  {{ $t('links.signOut') }}
                </span>
              </nuxt-link>
            </div>
          </div>
          <GeneralLangMenu/>
          <nuxt-link
            :to="localePath('/SignUp')"
            class="participateButton participateButtonMobile button bg_red"
          >
            {{ $t('links.participate') }}
          </nuxt-link>
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
<style src="./MainMenu.scss" lang="scss"></style>
