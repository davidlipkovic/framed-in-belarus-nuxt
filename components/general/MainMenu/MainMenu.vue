<script setup>
  const { locale, locales } = useI18n()
  const switchLocalePath = useSwitchLocalePath()
  const availableLocales = computed(() => {
    return (locales.value).filter(i => i.code !== locale.value)
  })
</script>

<style src="./MainMenu.scss" lang="scss"></style>

<template>
  <input type="checkbox" id="Burger" class="Burger-checker visually-hidden">
  <header class="Header">
    <div class="content">
      <a href="/" class="logo-project">
        <span class="firstSymbol">#</span><span class="text">
          {{ $t('title') }}
        </span>
      </a>
      <label for="Burger" class="Burger-button" role="button" aria-role="button">
        <span class="Burger-button-item">—</span>
        <span class="Burger-button-item">—</span>
        <span class="Burger-button-item">—</span>
      </label>
      <nav class="Burger-menu">
        <div class="Burger-menu-group">
<!--          <nuxt-link -->
<!--            to="Gallery"-->
<!--            class="Burger-menu-item"-->
<!--          >-->
<!--            {{ $t('linkGallery') }}-->
<!--          </nuxt-link>-->
          <nuxt-link
            to="/News"
            class="Burger-menu-item"
          >
            {{ $t('linkNews') }}
          </nuxt-link>
          <nuxt-link
            to="/Contacts"
            class="Burger-menu-item"
          >
            {{ $t('linkContacts') }}
          </nuxt-link>
<!--          <nuxt-link -->
<!--            to="FAQ"-->
<!--            class="Burger-menu-item"-->
<!--          >-->
<!--            {{ $t('linkFAQ') }}-->
<!--          </nuxt-link>-->
        </div>
        <div class="Burger-menu-group">
<!--          <nuxt-link -->
<!--            to="Login" -->
<!--            class="Burger-menu-item Login"-->
<!--          >-->
<!--            {{ $t('linkLogin') }}-->
<!--          </nuxt-link> -->
          <a
            href="https://forms.gle/SKCcvWGzRkQxx2fH9"
            class="Burger-menu-item button bg_red"
          >
            {{ $t('participateBtnMsg') }}
          </a>
<!--          <nuxt-link-->
<!--            v-for="locale in availableLocales"-->
<!--            :key="locale.code"-->
<!--            :to="switchLocalePath(locale.code)"-->
<!--            class="Burger-menu-item Lang"-->
<!--          >-->
<!--            {{ locale.name }}-->
<!--          </nuxt-link>-->
<!--          <img class="arrow" src="@/assets/media/img/arrow.svg">-->
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  // data() {
  //   return {
  //     showMainMenu: false
  //   }
  // }
}
</script>
