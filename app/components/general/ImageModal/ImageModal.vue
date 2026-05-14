<script setup>
import { watch } from 'vue'

const props = defineProps({
  alt: String,
  fullImageUrl: String,
  iconImageUrl: String,
  showIcons: {
    type: Boolean,
    default: false
  },
})

const displayImageModal = ref( false )

const getImageUrl = (url) => new URL(url, import.meta.url).href

watch(displayImageModal, n => {
  n ? document.documentElement.classList.add('overflowHidden') : document.documentElement.classList.remove('overflowHidden')
})
</script>

<template>
  <div class="pattern">
    <img
      :src="iconImageUrl"
      :alt="alt"
      class="pattern-image"
      @click="displayImageModal = true"
    />
    <div 
      v-if="showIcons"
      class="pattern-buttons flexRowCenter"
    >
      <button
        class="pattern-button pattern-button_look flexRowCenter"
        @click="displayImageModal = true"
        v-tooltip="$t('toolTips.seeImage')"
      >
        <SvgEye/>
      </button>
      <a 
        class="pattern-button pattern-button_download flexRowCenter"
        :href="fullImageUrl"
        download=""
        target="_blank"
        v-tooltip="$t('toolTips.downloadImage')"
      >
        <SvgDownload/>
      </a>
    </div>
    <div
      class="imageModalWrapper flexRowCenter"
      v-if="displayImageModal"
    >
      <div
        class="imageModalBackgroundWrapper"
        @click="displayImageModal = false"
      />
      <div
        class="imageModalContentWrapper flexRowCenter"
      >
        <!-- <button
          @click="displayImageModal = false"
          class="closeButton"
        >
          <SvgClose />
        </button> -->
        <img
          :src="fullImageUrl"
          :alt="alt"
          class="imageModalFullImage"
        />
      </div>
    </div>
  </div>
</template>

<style src="./ImageModal.scss" lang="scss"></style>
