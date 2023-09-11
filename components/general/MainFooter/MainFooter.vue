<script setup>
import { useUserStore } from "@/stores/user"

const userStore = useUserStore()
</script>

<template>
  <footer class="Footer">
    <div class="bg_black">
      <div class="content Info">
        <div class="Info-project">
          <GeneralMainLogo/>
          <a href="mailto:framedinbelarus@gmail.com" class="Info-Project-email">framedinbelarus@gmail.com</a>
          <div class="Info-Project-social">
            <a href="https://www.facebook.com/hashtag/framedinbelarus" target="_blank" class="Facebook"><img src="@/assets/media/img/facebook.svg" alt="Facebook"></a>
            <a href="https://www.instagram.com/rufinabazlova/?hl=en" target="_blank" class="Instagram"><img src="@/assets/media/img/instagram.svg" alt="Instagram"></a>
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
              <nuxt-link
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
              </nuxt-link>
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
          <div class="Info-menu-group flexRowCenter">
            <nuxt-link
              v-if="!userStore.isLogged"
              :to="localePath('/SignUp')"
              class="Info-menu-item button bg_red"
            >
              {{ $t('links.participate') }}
            </nuxt-link>
            <img
              v-if="userStore.isLogged"
              src="../../../assets/media/img/help-circle.svg"
              class="Info-menu-item"
            >
            <nuxt-link
              v-if="userStore.isLogged"
              :to="localePath('/Profile')"
              class="Info-menu-item profileLink flexRowCenter"
            >
              <img
                src="../../../assets/media/img/profileSymbolFramed.svg"
              >
            </nuxt-link>
          </div>
        </nav>
      </div>
    </div>
  </footer>
</template>

<style src="./MainFooter.scss" lang="scss"></style>
