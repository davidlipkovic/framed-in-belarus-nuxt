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
          <main-logo/>
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
                :to="localePath('/')"
                class="Info-menu-item"
              >
                {{ $t('links.home') }}
              </nuxt-link>
              <!-- <nuxt-link
                :to="localePath('/Gallery')"
                class="Info-menu-item"
              >
                {{ $t('links.gallery') }}
              </nuxt-link>
              <nuxt-link
                :to="localePath('/News')"
                class="Info-menu-item"
              >
                {{ $t('links.news') }}
              </nuxt-link> -->
              <nuxt-link
                :to="localePath('/AboutUs')"
                class="Info-menu-item"
              >
                {{ $t('links.aboutUs') }}
              </nuxt-link>
              <!-- <nuxt-link
                :to="localePath('/FAQ')"
                class="Info-menu-item"
              >
                {{ $t('links.FAQ') }}
              </nuxt-link> -->
            </div>
            <div class="Info-menu-group">
<!--              <nuxt-link-->
<!--                :to="localePath('/SignIn')" -->
<!--                class="Info-menu-item Login"-->
<!--              >-->
<!--                {{ $t('links.signIn') }} -->
<!--              </nuxt-link>-->
            </div>
          </div>
        </nav>
      </div>
    </div>
  </footer>
</template>

<style src="./MainFooter.scss" lang="scss"></style>
