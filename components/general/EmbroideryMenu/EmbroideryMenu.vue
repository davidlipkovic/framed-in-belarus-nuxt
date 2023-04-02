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
<!--            <nuxt-link-->
<!--              to="/SignIn"-->
<!--              class="Burger-menu-item Login"-->
<!--            >-->
<!--              {{ $t('linkLogin') }}-->
<!--            </nuxt-link>-->
            <img
              src="../../../assets/media/img/help-circle.svg"
              class="Burger-menu-item"
            >
            <nuxt-link
              to="/Profile"
              class="Burger-menu-item profileLink"
            >
              <img src="../../../assets/media/img/embroiderer1/profile.jpg" class="userCard-avatar" alt="Avatar">
            </nuxt-link>
            <details class="Lang">
              <summary class="Lang-button Burger-menu-item">
                ENG
               <img class="arrow" src="@/assets/media/img/arrow.svg" alt="Arrow">
              </summary>
<!--              <div class="Lang-select">-->
<!--                <nuxt-link-->
<!--                  v-for="locale in availableLocales"-->
<!--                  :key="locale.code"-->
<!--                  :to="switchLocalePath(locale.code)"-->
<!--                  class="Lang-link"-->
<!--                >-->
<!--                  RU-->
<!--                </nuxt-link>-->
<!--              </div>-->
            </details>
          </div>
        </nav>
      </div>
    </header>
  </div>
</template>

<style src="./EmbroideryMenu.scss" lang="scss"></style>
