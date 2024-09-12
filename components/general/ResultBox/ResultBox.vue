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
  if (props.isEmbroidery) {
    return "/Embroidery/Step-1-your-hero"
  }

  return "/Gallery/Embroidery/" + props.result.id 
})

const placeholderImage = import.meta.glob('@/assets/media/img/swiper/01-1x.jpg', { eager: true })

const photo = computed(() => {
  if (props.isEmbroidery) {
    return props.result.photo
  }
  
  if (props.result.image) {
    return props.result.image
  }

  return placeholderImage['/assets/media/img/swiper/01-1x.jpg'].default
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
        src="../../../assets/media/img/placeholderHero.png"
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
