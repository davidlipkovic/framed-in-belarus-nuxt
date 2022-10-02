<style src="./AboutUs.scss" lang="scss"></style>

<template>
  <main class="Content">
    <h1 class="title Title">
        <span class="content">
          {{ $t('aboutUsPageTitle') }}
        </span>
      </h1>
      <div class="content">
        <h2 class="title">
          {{ $t('aboutUsPage1') }}
        </h2>
        <p>
          <strong>
            {{ $t('aboutUsPage2') }}
          </strong>
          {{ $t('aboutUsPage3') }}
        </p>
        <p>
          {{ $t('aboutUsPage4') }}
        </p>
        <p>
          <strong>
            {{ $t('aboutUsPage5') }}
          </strong>
          {{ $t('aboutUsPage6') }}
        </p>
        <ul>
          <li>
            <a href="https://www.facebook.com/rufinartist">
              {{ $t('linkFacebook') }}
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/rufinabazlova/">
              {{ $t('linkInstagram') }}
            </a>
          </li>
        </ul>
        <p>
          {{ $t('aboutUsPage7') }}
          <a href="mailto:framedinbelarus@gmail.com">framedinbelarus@gmail.com</a>.
        </p>
      </div>
  </main>
</template>

<script>
export default {
}
</script>
