<style src="./AboutUs.scss" lang="scss"></style>

<template>
  <main class="Content">
    <div class="title Title">
        <h1 class="content">
          {{ $t('aboutUsPageTitle') }}
        </h1>
      </div>
      <div class="content">
        <h2 class="title">
          {{ $t('aboutUsSubTitle') }}
        </h2>
        <p>
          {{ $t('aboutUsPage1') }}          
        </p>
        <p>
          {{ $t('aboutUsPage2') }} <a href="mailto:framedinbelarus@gmail.com">framedinbelarus@gmail.com</a>.
        </p>
        
        <a href="https://www.instagram.com/rufinabazlova/" class="button">
          {{ $t('linkInstagram') }}
        </a>
        <a href="https://www.facebook.com/rufinartist" class="button">
          {{ $t('linkFacebook') }}
        </a>
      </div>
  </main>
</template>

<script>
export default {
}
</script>
