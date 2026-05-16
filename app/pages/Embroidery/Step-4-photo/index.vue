<script setup>
import { useI18n } from 'vue-i18n'
import useUserStore from "@/stores/user"

const { t } = useI18n()
const userStore = useUserStore()

definePageMeta({
  layout: "embroidery",
  middleware: [
    'auth-registration',
    'stitching',
    'user-summary',
  ],
})

useHead({
  title: t('embroidery.step4Page.title'),
  meta: [
    { property: 'og:title', content: t('embroidery.step4Page.title'), },
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
            {{ $t('embroidery.steps.step') }} 4
          <span class="visually-hidden">— </span></span>
          {{ $t('embroidery.step4Page.title') }}
        </h1>
        <GeneralGoBack
          :isEmbroidery="true"
        />
      </div>
    </div>
    <div class="content">
      <EmbroideryNavSteps
        :currentStep="4"
      />
      <section class="limitedTextWidthLg">
        <EmbroideryHeroBio />
        <h2 class="title">
          {{ $t('embroidery.step4Page.section1.title') }}
        </h2>
        <br>
        <p>
          {{ $t('embroidery.step4Page.section1.paragraph1') }}
        </p>
        <br>
        <p>
          {{ $t('embroidery.step4Page.section1.paragraph2') }}
        </p>
        <br>
        <p>
          {{ $t('embroidery.step4Page.section1.paragraph3.content1') }}
          <span class="b1">
            {{ $t('embroidery.step4Page.section1.paragraph3.highlight') }}
          </span>
          {{ $t('embroidery.step4Page.section1.paragraph3.content2') }}
        </p>
        <iframe
          class="airtable-embed" 
          :src="'https://airtable.com/embed/appFvPAAzsEUw1hf3/shrtgf5Wiblt7v9jf?prefill_stitchingId=' + userStore.userSummary[0].stitchingId + '&hide_stitchingId=true'"
          frameborder="0" 
          onmousewheel=""
          width="100%" 
          height="533" 
          style="background: transparent; border: 1px solid #ccc;"
        />
        <!-- <div class="uploadFiles" id="uploadFilesArea">
          <label class="uploadFiles-descript flexColumnCenter" for="uploadFiles">
            <span class="line">
              {{ $t('embroidery.step4Page.dropZone.content') }}
            </span>
            <span class="line b1 flexRowCenter">
              <SvgPlus/>
              {{ $t('embroidery.step4Page.dropZone.highlight') }}
            </span>
          </label>
          <input
            type="file"
            multiple="multiple"
            id="uploadFiles"
            class="visually-hidden"
          />
        </div>
        <div class="photos">
          <EmbroideryImagePreview/>
          <EmbroideryImagePreview/>
          <EmbroideryImagePreview/>
        </div> -->
        <div class="buttons">
          <nuxt-link 
            :to="$localePath('/Embroidery/Step-3-support')"
            class="button"
          >
            {{ $t('embroidery.step4Page.backButton') }}
          </nuxt-link>
          <nuxt-link 
            :to="$localePath('/Embroidery/Step-5-comment')"
            class="button bg_black" 
            id="save"
          >
            {{ $t('embroidery.step4Page.forwardButton') }}
          </nuxt-link>
        </div>
      </section>
    </div>
  </main>
</template>

<style src="./Step-4-photo.scss" lang="scss" scoped></style>
