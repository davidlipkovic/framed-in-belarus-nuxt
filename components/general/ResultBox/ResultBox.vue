<script setup>
import { computed, onMounted, ref } from 'vue'

const props = defineProps({
  isEmbroidery: {
    type: Boolean,
    default: false
  },
  result: {
    type: Object,
    default: null
  },
})

const isHovered = ref(false)

const link = computed(() => {
  if (props.isEmbroidery) return "/Embroidery/Step-1-your-hero"
  else return "/Gallery/Case"
})

const photo = computed(() => {
  if (props.isEmbroidery) return props.result.photo
  else return "https://televizeestrada.cz/framed-in-belarus/slider/1.jpg"
})
</script>

<template>
  <div 
    class="resultBoxWrapper"
    :class="isEmbroidery ? 'embroideryBoxWrapper' : 'galleryBoxWrapper'"
  >
    <nuxt-link
      @mouseover="isHovered = true"
      @mouseleave="isHovered = false"
      :to="localePath(link)"
      class="resultImageWrapper"
      :class="{'resultBoxWrapperHovered' : isHovered}"
    >
      <img 
        v-if="!photo || photo === '' || photo === 'FALSE'"
        src="../../../assets/media/img/profileSymbolFramed.svg"
        :alt="'Photo of' + result.name"
      >
      <img 
        v-else
        :src="photo" 
        :alt="'Photo of' + result.name"
      >
    </nuxt-link>
    <div
      class="resultNameWrapper"
      :class="isHovered ? 'resultBoxWrapperHovered' : ''"
    >
      <nuxt-link
        @mouseover="isHovered = true"
        @mouseleave="isHovered = false"
        :to="localePath(link)"
      >
        <h2>
          {{ result.name }}
        </h2>
      </nuxt-link>
    </div>
  </div>
</template>

<style src="./ResultBox.scss" lang="scss" scoped></style>
