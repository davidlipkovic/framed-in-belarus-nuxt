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
              class="Info-menu-item"
            >
              <img src="../../../assets/media/img/embroiderer1/profile.jpg" class="userCard-avatar" alt="Avatar">
            </nuxt-link>
          </div>
        </nav>
      </div>
    </div>
  </footer>
</template>

<style src="./EmbroideryFooter.scss" lang="scss"></style>
