<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

definePageMeta({
  layout: "embroidery",
  middleware: [
    'heroes',
    'auth-registration',
    'stitching',
    'user-summary',
  ],
})

useHead({
  title: t('embroidery.step6Page.title'),
  meta: [
    { property: 'og:title', content: t('embroidery.step6Page.title'), },
    { name: 'robots', content: 'noindex' }
  ],
})
</script>

<template>
  <main class="Content">
    <div class="Title">
      <div class="content">
        <h1>
          <span class="subtitle">
            {{ $t('embroidery.steps.step') }} 6
          <span class="visually-hidden">— </span></span>
          {{ $t('embroidery.step6Page.title') }}
        </h1>
        <GeneralGoBack
          :isEmbroidery="true"
        />
      </div>
    </div>
    <div class="content">
      <EmbroideryNavSteps
        :currentStep="6"
      />
      <section class="thankYou Waiting limitedTextWidthLg">
        <div class="thankYouContent">
          <h2 class="title">
            {{ $t('embroidery.step6Page.sectionSent.title') }}
          </h2>
          <br>
          <p>
            {{ $t('embroidery.step6Page.sectionSent.content1') }}
          </p>
          <p>
            {{ $t('embroidery.step6Page.sectionSent.content2') }}
          </p>
          <p>
            {{ $t('embroidery.step6Page.sectionSent.content3') }}
          </p>
        </div>
        <div class="buttons">
          <nuxt-link 
            :to="$localePath('/Profile')"
            class="button"
          >
            {{ $t('embroidery.step6Page.sectionSent.forwardButton') }}
          </nuxt-link>
        </div>
      </section>
    </div>
  </main>
</template>

<style src="./Step-6-processing-shipping.scss" lang="scss" scoped></style>
