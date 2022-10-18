<style src="./AboutUs.scss" lang="scss"></style>

<template>
  <main class="Content">
    <div class="Title">
        <h1 class="content News">
          {{ $t('aboutUsPageTitle') }}
        </h1>
      </div>
      <div class="content News">
        <h2 class="title alignCenter">
          {{ $t('aboutUsSubTitle') }}
        </h2>
        <div class="aboutUs">
          <picture class="logo">
            <source srcset="../../assets/media/img/logo_stitchit.png, ../../assets/media/img/logo_stitchit@2x.png 2x, ../../assets/media/img/logo_stitchit@3x.png 3x" type="image/png">
            <img src="../../assets/media/img/logo_stitchit.png" alt="Logotype {{ $t('aboutUsSubTitle') }}">
          </picture>
          <div class="text">
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
        </div>
      </div>
  </main>
</template>

<script>
export default {
}
</script>
