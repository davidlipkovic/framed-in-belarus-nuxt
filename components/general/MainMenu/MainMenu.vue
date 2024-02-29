<script>
import MainLogo from '@/components/general/MainLogo'

export default {
  components: {
    MainLogo
  },
  data() {
    return {
      toggleMenu: false
    }
  }
}
</script>

<template>
  <header 
    class="mainMenuWrapper flexRowCenter"
    :class="toggleMenu ? 'mainMenuWrapperOpened' : 'mainMenuWrapperClosed'"
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
        <main-logo/>
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
            >
              {{ $t('links.home') }}
            </nuxt-link>
            <nuxt-link
              :to="localePath('/AboutUs')"
            >
              {{ $t('links.aboutUs') }}
            </nuxt-link>
          </div>
          <div class="menuUserLinksWrapper flexRowCenter">
            <a
              href="https://forms.gle/SKCcvWGzRkQxx2fH9"
              class="button bg_red"
            >
              {{ $t('links.participate') }}
            </a>
          </div>
        </nav>
      </div>
    </div>
  </header>
</template>

<style src="../../../assets/style/settings.scss" lang="scss" scoped></style>
<style src="./MainMenu.scss" lang="scss" scoped></style>
