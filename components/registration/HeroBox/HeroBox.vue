<script setup>
import { ref } from 'vue'

const props = defineProps({
  hero: {
    type: Object,
    default: null
  },
})

const isHovered = ref(false)
</script>

<template>
  <div
    class="heroBoxWrapper"
  >
    <nuxt-link
      @mouseover="isHovered = true"
      @mouseleave="isHovered = false"
      :to="localePath('/Embroidery/Step-1-your-hero')"
      class="heroImageWrapper"
      :class="isHovered ? 'heroBoxWrapperHovered' : ''"
    >
      <img 
        :src="hero.photo" 
        :alt="'Photo of' + hero.name"
      >
    </nuxt-link>
    <div
      class="heroNameWrapper"
      :class="isHovered ? 'heroBoxWrapperHovered' : ''"
    >
      <nuxt-link
        @mouseover="isHovered = true"
        @mouseleave="isHovered = false"
        :to="localePath('/Embroidery/Step-1-your-hero')"
      >
        <h2>
          {{ hero.name }}
        </h2>
      </nuxt-link>
    </div>
  </div>
</template>

<style src="./HeroBox.scss" lang="scss" scoped></style>
