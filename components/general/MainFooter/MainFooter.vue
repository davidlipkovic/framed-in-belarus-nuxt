<script setup>
import { computed, onMounted, ref, watch } from 'vue'
import { useCheckCurrentRoute } from "@/composables/CheckCurrentRoute";

const { checkCurrentRoute, checkHomeRoute } = useCheckCurrentRoute()
</script>

<template>
  <footer class="Footer mainFooterWrapper">
    <div class="bg_black flexRowCenter">
      <div class="content Info">
        <div class="Info-project">
          <GeneralMainLogo/>
          <a 
            href="mailto:framedinbelarus@gmail.com" 
            class="Info-Project-email"
          >
            framedinbelarus@gmail.com
          </a>
          <div class="Info-Project-social">
            <a 
              href="https://www.facebook.com/hashtag/framedinbelarus" 
              target="_blank" 
              class="Facebook"
            >
              <SvgFacebook/>
            </a>
            <a 
              href="https://www.instagram.com/rufinabazlova/?hl=en" 
              target="_blank" 
              class="Instagram"
            >
              <SvgInstagram/>
            </a>
          </div>
        </div>
        <nav class="Info-menu">
          <div class="Info-menu-group flexColumnCenter">
            <div class="Info-menu-group footerLinksWrapper">
              <nuxt-link
                :to="localePath('/')"
                class="Info-menu-item"
                :class="{ 'redImportatnt' : checkHomeRoute('/') }"
              >
                {{ $t('links.home') }}
              </nuxt-link>
              <!-- <nuxt-link
                :to="localePath('/News')"
                class="Info-menu-item"
                :class="{ 'redImportatnt' : checkCurrentRoute('News') }"
              >
                {{ $t('links.news') }}
              </nuxt-link> -->
              <nuxt-link
                :to="localePath('/AboutUs')"
                class="Info-menu-item"
                :class="{ 'redImportatnt' : checkCurrentRoute('AboutUs') }"
              >
                {{ $t('links.aboutUs') }}
              </nuxt-link>
            </div>
          </div>
          <div
            class="Info-menu-group flexRowCenter"
          >
            <a
              href="https://forms.gle/SKCcvWGzRkQxx2fH9"
              class="Info-menu-item button bg_red"
            >
              {{ $t('links.participate') }}
            </a>
          </div>
        </nav>
      </div>
    </div>
  </footer>
</template>

<style src="./MainFooter.scss" lang="scss"></style>
