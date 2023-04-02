<script>
// import { onMounted, ref } from 'vue'
//
//   const { locale, locales } = useI18n()
//   const switchLocalePath = useSwitchLocalePath()
//   const availableLocales = computed(() => {
//     return (locales.value).filter(i => i.code !== locale.value)
//   })
//
//   onMounted(() => {
//     console.log(availableLocales)
//   })
import MainLogo from '@/components/general/MainLogo'

export default {
  components: {
    MainLogo
  },
}
</script>

<template>
  <div>
    <input type="checkbox" id="Burger" class="Burger-checker visually-hidden">
    <header class="Header">
      <div class="content">
        <MainLogo/>
        <label for="Burger" class="Burger-button" role="button" aria-role="button">
          <span class="Burger-button-item">—</span>
          <span class="Burger-button-item">—</span>
          <span class="Burger-button-item">—</span>
        </label>
        <nav class="Burger-menu">
          <div class="Burger-menu-group">
            <nuxt-link
              to="/"
              class="Burger-menu-item"
            >
              Home
            </nuxt-link>
            <nuxt-link
              to="/Gallery"
              class="Burger-menu-item"
            >
              {{ $t('linkGallery') }}
            </nuxt-link>
            <nuxt-link
              to="/News"
              class="Burger-menu-item"
            >
              {{ $t('linkNews') }}
            </nuxt-link>
            <nuxt-link
              to="/AboutUs"
              class="Burger-menu-item"
            >
              {{ $t('linkAboutUs') }}
            </nuxt-link>
  <!--          <nuxt-link -->
  <!--            to="FAQ"-->
  <!--            class="Burger-menu-item"-->
  <!--          >-->
  <!--            {{ $t('linkFAQ') }}-->
  <!--          </nuxt-link>-->
          </div>
          <div class="Burger-menu-group Burger-menu-group-lang">
            <nuxt-link
              to="/SignIn"
              class="Burger-menu-item Login"
            >
              {{ $t('linkLogin') }}
            </nuxt-link>
            <nuxt-link
              to="/SignIn"
              class="Burger-menu-item button bg_red"
            >
              {{ $t('participateBtnMsg') }}
            </nuxt-link>
           <details class="Lang">
             <summary class="Lang-button Burger-menu-item">
               ENG<img class="arrow" src="@/assets/media/img/arrow.svg" alt="Arrow">
             </summary>
             <div class="Lang-select">
  <!--              <nuxt-link-->
  <!--                v-for="locale in availableLocales"-->
  <!--                :key="locale.code"-->
  <!--                :to="switchLocalePath(locale.code)"-->
  <!--                class="Lang-link"-->
  <!--              >-->
  <!--                {{ locale.name }}-->
  <!--              </nuxt-link>-->
             </div>
            </details>
          </div>
        </nav>
      </div>
    </header>
  </div>
</template>

<style src="./MainMenu.scss" lang="scss"></style>
