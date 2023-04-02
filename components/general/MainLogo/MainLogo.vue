<template>
  <nuxt-link to="/" class="logo-project mainLogoWrapper">
    <svg width="14" height="16" class="firstSymbol" viewBox="0 0 14 16" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.512 5.508L1.656 4.116H4.584L5.28 0.204H6.72L6.024 4.116H9.432L10.128 0.204H11.568L10.872 4.116H13.44L13.296 5.508H10.632L9.912 9.612H12.48L12.336 11.004H9.672L8.904 15.444H7.464L8.232 11.004H4.824L4.056 15.444H2.616L3.384 11.004H0.552L0.696 9.612H3.624L4.344 5.508H1.512ZM5.784 5.508L5.064 9.612H8.472L9.192 5.508H5.784Z"/>
    </svg>
    <span class="text">
      {{ $t('title') }}
    </span>
  </nuxt-link>
</template>

<style src="./MainLogo.scss" lang="scss"></style>
