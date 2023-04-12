<script setup>
import { ref } from 'vue'

import { VueFinalModal } from 'vue-final-modal'

const props = defineProps({
  alt: String,
  fullImageUrl: String,
  iconImageUrl: String,
})

const showModal = ref( false )

const getImageUrl = (url) => new URL(url, import.meta.url).href
</script>

<template>
  <div class="pattern">
    <img
      :src="iconImageUrl"
      :alt="alt"
      class="pattern-image"
    />
    <div class="pattern-buttons flexRowCenter">
      <button
        class="pattern-button pattern-button_look flexRowCenter"
        @click="showModal = true"
      >
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 20 13.6">
          <path d="M10,1.3c-3,0-6.2,1.8-8.6,5.3C1.3,6.6,1.3,6.8,1.3,6.9c0,0.1,0,0.2,0.1,0.3c1.9,3,5,5.3,8.6,5.3
            c3.6,0,6.8-2.3,8.7-5.3c0.1-0.1,0.1-0.2,0.1-0.3c0-0.1,0-0.2-0.1-0.3C16.8,3.6,13.6,1.3,10,1.3z"/>
          <path d="M10,10c1.7,0,3.1-1.4,3.1-3.1c0-1.7-1.4-3.1-3.1-3.1c-1.7,0-3.1,1.4-3.1,3.1C6.9,8.6,8.3,10,10,10z"/>
        </svg>
        <span class="pattern-button-text">See full image</span>
      </button>
      <a 
        class="pattern-button pattern-button_download flexRowCenter"
        :href="fullImageUrl"
        download=""
        target="_blank"
      >
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 16.6 20">
          <path d="M11.4,6.9H13c0.4,0,0.8,0.2,1.1,0.5c0.3,0.3,0.5,0.7,0.5,1.1v8.1c0,0.4-0.2,0.8-0.5,1.1
            c-0.3,0.3-0.7,0.5-1.1,0.5H3.6c-0.4,0-0.8-0.2-1.1-0.5c-0.3-0.3-0.5-0.7-0.5-1.1V8.4c0-0.4,0.2-0.8,0.5-1.1C2.8,7,3.2,6.9,3.6,6.9
            h1.6"/>
          <path d="M5.2,10.6l3.1,3.1l3.1-3.1"/>
          <path d="M8.3,1.9v11.2"/>
        </svg>
        <span class="pattern-button-text">Download full image</span>
      </a>
    </div>
    <!-- <div 
      v-if="showModal"
      class="fullModalWrapper"
    >
      <vue-final-modal
        v-model="showModal"
        @click-outside="showModal = false"
      >
        <button
          @click="showModal = false"
        >
          close
        </button>
        <img
          :src="fullImageUrl"
          :alt="alt"
          class="pattern-image"
        />
      </vue-final-modal>
    </div> -->
  </div>
</template>

<style src="./ImageModal.scss" lang="scss"></style>
