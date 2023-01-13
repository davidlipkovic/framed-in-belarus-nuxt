<script setup>
  const { locale, locales } = useI18n()
  const switchLocalePath = useSwitchLocalePath()
  const availableLocales = computed(() => {
    return (locales.value).filter(i => i.code !== locale.value)
  })
</script>

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
         <a
         href="/"
           class="Burger-menu-item"
         >
          {{ $t('linkHome') }}
         </a>
         <nuxt-link
           to="Gallery"
           class="Burger-menu-item"
          >
           {{ $t('linkGallery') }}
          </nuxt-link>
          <nuxt-link
            to="News"
            class="Burger-menu-item"
          >
            {{ $t('linkNews') }}
          </nuxt-link>
          <nuxt-link
            to="AboutUs"
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
          <details class="Lang">
            <summary class="Lang-button Burger-menu-item">
              EN<svg width="9" height="6" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg" class="arrow" alt="Arrow">
                <path d="M8.85522 0.878982L8.14812 0.171875L4.36684 3.95315L0.707107 0.293424L0 1.00053L3.65973 4.66026L3.65381 4.66617L4.36092 5.37328L8.85522 0.878982Z" fill="#4F4F4F"/>
                </svg>
            </summary>
            <div class="Lang-select">
              <nuxt-link
                  v-for="locale in availableLocales"
                  :key="locale.code"
                  :to="switchLocalePath(locale.code)"
                  class="Lang-link"
                >
                {{ locale.name }}
              </nuxt-link>
            </div>
          </details>
        </div>
      </nav>
    </div>
  </header>
</template>

<style src="./MainMenu.scss" lang="scss"></style>
