<script>
import MainLogo from '@/components/general/MainLogo'

export default {
  components: {
    MainLogo
  },
}
</script>

<template>
  <footer class="Footer">
    <div class="bg_black">
      <div class="content Info">
        <div class="Info-project">
          <MainLogo/>
          <a href="mailto:framedinbelarus@gmail.com" class="Info-Project-email">framedinbelarus@gmail.com</a>
          <div class="Info-Project-social">
            <a href="https://www.facebook.com/hashtag/framedinbelarus" target="_blank" class="Facebook"><img src="@/assets/media/img/facebook.svg" alt="Facebook"></a>
            <a href="https://www.instagram.com/explore/tags/framedinbelarus/" target="_blank" class="Instagram"><img src="@/assets/media/img/instagram.svg" alt="Instagram"></a>
          </div>
        </div>
        <nav class="Info-menu">
          <div class="Info-menu-group">
            <div class="Info-menu-group">
              <nuxt-link
                to="/"
                class="Info-menu-item">
                Home
              </nuxt-link>
              <nuxt-link
                to="/Gallery"
                class="Info-menu-item">
                {{ $t('linkGallery') }}
              </nuxt-link>
              <nuxt-link
                to="/News"
                class="Info-menu-item">
                {{ $t('linkNews') }}
              </nuxt-link>
              <nuxt-link
              to="/AboutUs"
              class="Info-menu-item">
                {{ $t('linkAboutUs') }}
              </nuxt-link>
              <!-- <nuxt-link
              to="FAQ"
              class="Info-menu-item">
                {{ $t('linkFAQ') }}
              </nuxt-link> -->
            </div>
            <div class="Info-menu-group">
              <!-- <a href="#" class="Info-menu-item Login">Log in</a> -->
            </div>
          </div>
          <div class="Info-menu-group">
            <img
              src="../../../assets/media/img/help-circle.svg"
              class="Info-menu-item"
            >
            <nuxt-link
              to="/Profile"
              class="Info-menu-item profileLink flexRowCenter"
            >
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 18.1 20">
                <path d="M9.1,2c-1.7,0-3,1.3-3,3s1.3,3,3,3c1.7,0,3-1.3,3-3S10.7,2,9.1,2z M4.1,5c0-2.8,2.2-5,5-5c2.8,0,5,2.2,5,5
                  s-2.2,5-5,5C6.3,10,4.1,7.8,4.1,5z M1.5,13.5C2.5,12.5,3.7,12,5.1,12h8c1.3,0,2.6,0.5,3.5,1.5c0.9,0.9,1.5,2.2,1.5,3.5v2
                  c0,0.6-0.4,1-1,1s-1-0.4-1-1v-2c0-0.8-0.3-1.6-0.9-2.1S13.8,14,13.1,14h-8c-0.8,0-1.6,0.3-2.1,0.9S2.1,16.2,2.1,17v2
                  c0,0.6-0.4,1-1,1c-0.6,0-1-0.4-1-1v-2C0.1,15.7,0.6,14.4,1.5,13.5z"/>
              </svg>
            </nuxt-link>
          </div>
        </nav>
      </div>
    </div>
  </footer>
</template>

<style src="./EmbroideryFooter.scss" lang="scss"></style>
