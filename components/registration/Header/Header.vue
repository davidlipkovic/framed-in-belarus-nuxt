<style src="./Header.scss" lang="scss"></style>

<template>
  <header class="Header_sign">
    <div class="content">
      <a href="/" class="logo-project">
        <span class="firstSymbol">#</span><span class="text">
          {{ $t('title') }}
        </span>
      </a>
      <input type="checkbox" id="Lang" class="Lang-checker visually-hidden">
      <div class="Lang">
        <label for="Lang" role="button" aria-role="button"
          class="Lang-button"
          >
          EN<img class="arrow" src="@/assets/media/img/arrow.svg">
        </label>
        <div class="Lang-select">
          <a href="/en" class="Lang-item">English</a>
          <nuxt-link
              v-for="locale in availableLocales"
              :key="locale.code"
              :to="switchLocalePath(locale.code)"
              class="select-item"
            >
            {{ locale.name }}
          </nuxt-link>
        </div>
      </div>
    </div>
  </header>
</template>
