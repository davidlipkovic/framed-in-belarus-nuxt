<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

definePageMeta({
  layout: "embroidery",
  middleware: [
    'auth-registration',
    'stitching',
  ],
})

useHead({
  title: t('embroidery.step7Page.title'),
  meta: [
    { property: 'og:title', content: t('embroidery.step7Page.title'), },
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
              {{ $t('embroidery.steps.step') }} 7
            <span class="visually-hidden">— </span></span>
            {{ $t('embroidery.step7Page.title') }}
          </h1>
        <GeneralGoBack
          :isEmbroidery="true"
        />
        </div>
      </div>
      <div class="content">
        <EmbroideryNavSteps
          :currentStep="7"
        />
        <section class="thankYou Done limitedTextWidthLg">
          <div class="thankYouContent">
            <h2 class="title">
              {{ $t('embroidery.step7Page.section1.title') }}
            </h2>
            <br>
            <p>
              <strong class="b2">{{ $t('embroidery.step7Page.section1.paragraph1.highlight') }}</strong> {{ $t('embroidery.step7Page.section1.paragraph1.content') }}
            </p>
            <p>
              {{ $t('embroidery.step7Page.section1.paragraph2.content1') }} <strong class="b2">{{ $t('embroidery.step7Page.section1.paragraph2.highlight') }}</strong> {{ $t('embroidery.step7Page.section1.paragraph2.content2') }}
            </p>
            <br>
            <p>
              {{ $t('embroidery.step7Page.section1.paragraph3') }}
            </p>
            <p>
              {{ $t('embroidery.step7Page.section1.paragraph4') }}
            </p>
          </div>
          <div class="buttons">
            <nuxt-link
              to="/Embroidery/Step-1-your-hero"
              class="button bg_black"
            >
              {{ $t('embroidery.step7Page.forwardButton') }}
            </nuxt-link>
          </div>
        </section>
      </div>
    </main>
</template>

<style src="./Step-7-success.scss" lang="scss" scoped></style>
