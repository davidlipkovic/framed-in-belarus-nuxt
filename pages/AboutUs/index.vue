<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

definePageMeta({
  middleware: [
    'auth-general',
  ],
})

useHead({
  title: t('aboutUsPage.title'),
  meta: [
    { property: 'og:title', content: t('aboutUsPage.title'), },
    // wip, needs additional tags
  ],
})
</script>

<template>
  <main class="Content">
    <div class="Title">
      <h1 class="content News">
        {{ $t("aboutUsPage.title") }}
      </h1>
    </div>
    <div class="content News">
      <h2 class="title alignCenter">
        {{ $t("aboutUsPage.section.title") }}
      </h2>
      <div class="aboutUs flexRowCenter">
        <picture class="logo">
          <source 
            srcset="../../assets/media/img/logo_stitchit.png, ../../assets/media/img/logo_stitchit@2x.png 2x, ../../assets/media/img/logo_stitchit@3x.png 3x" 
            type="image/png"
          >
          <img 
            src="../../assets/media/img/logo_stitchit.png" 
            :alt="`Logotype ${$t('aboutUsPage.section.title')}`"
          >
        </picture>
        <div class="text">
          <p>
            {{ $t("aboutUsPage.section.paragraph1") }}
          </p>
          <br>
          <p>
            {{ $t("aboutUsPage.section.paragraph2") }}
          </p>
          <br>
          <p>
            {{ $t("aboutUsPage.section.paragraph3.content") }}
            <a href="mailto:framedinbelarus@gmail.com">
              {{ $t("aboutUsPage.section.paragraph3.highlight") }}
            </a>
          </p>
          <br>
          <div class="buttons">
            <a 
              href="https://www.instagram.com/rufinabazlova/" 
              target="_blank" 
              class="button"
            >
              {{ $t("aboutUsPage.igButton") }}
            </a>
            <a 
              href="https://www.facebook.com/rufinartist" 
              target="_blank" 
              class="button"
            >
              {{ $t("aboutUsPage.fbButton") }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style src="./AboutUs.scss" lang="scss" scoped></style>
