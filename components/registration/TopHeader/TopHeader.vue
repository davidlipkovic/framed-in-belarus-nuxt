<template>
  <header class="Header_sign">
    <div class="content">
      <a href="/" class="logo-project">
        <span class="firstSymbol">#</span><span class="text">
          {{ $t('title') }}
        </span>
      </a>
      <details class="Lang">
        <summary
          for="Lang"
          role="button"
          aria-role="button"
          class="Lang-button"
        >
          EN
          <img class="arrow" src="@/assets/media/img/arrow.svg" alt="Arrow">
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
          <a href="/ru" class="Lang-link">Russian</a>
        </div>
      </details>
    </div>
  </header>
</template>

<style src="./TopHeader.scss" lang="scss" scoped></style>
