<script setup>
// WIP
import { computed, onMounted, reactive, ref, watch } from "vue"
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
import { Autoplay, Pagination } from 'swiper/modules'

const props = defineProps({
  fullscreen: {
    type: Boolean,
    default: false
  },
  slides: {
    type: Array,
    default: []
  }
})

const emit = defineEmits([
  'openFullscreen',
])

const autoplay = {
  delay: 250000,
  disableOnInteraction: false
}

const pagination = {
  clickable: true,
  renderBullet: function (index, className) {
    return '<span class="' + className + '"></span>'
  },
}

let localSwiper = null
const modules = [Autoplay, Pagination]

const nextSlide = () => {
  localSwiper.slideNext()
}

const onSwiper = (swiper) => {
  localSwiper = swiper
}

const prevSlide = () => {
  localSwiper.slidePrev()
}

const handleFullscreen = (i) => {
  emit('openFullscreen', i)
}

const globJpg = import.meta.glob('@/assets/media/img/swiper/*.jpg', { eager: true })
// const globWebp = import.meta.glob('@/assets/media/img/swiper/*.webp', { eager: true })

const allImages = { ...globJpg }

const images = Object.entries(allImages).map(([path, module]) => {
  const extension = path.split('.').pop() // Get the file extension
  return { [extension]: { path, module } }
})
</script>

<template>
  <Swiper
    v-if="slides.length > 1"
    @swiper="onSwiper"
    :autoplay="autoplay"
    :loop="true"
    :pagination="pagination"
    :slides-per-view="1"
    :spaceBetween="10"
    :modules="modules"
    class="basicSwiperWrapper"
    :class="{'enableFullscreen': fullscreen}"
  >
    <SwiperSlide 
      v-for="(slide, i) in slides"
      :key="i"
    >
      <img
        :src="slide.large"
        :alt="`${slide?.alt}`"
        @click="handleFullscreen(i)"
      >
    </SwiperSlide>
    <div class="swiperControls flexRowCenter">
      <button
        class="swiperArrowBtn swiperArrowBtnLeft"
        @click="prevSlide()"
      >
        <SvgArrowLeft/>
      </button>
      <button
        class="swiperArrowBtn swiperArrowBtnRight"
        @click="nextSlide()"
      >
        <SvgArrowRight/>
      </button>
    </div>
  </Swiper>
  <div
    v-else-if="slides.length === 1"
    class="basicSwiperWrapper swiper swiper-initialized swiper-horizontal"
    :class="{'enableFullscreen': fullscreen}"
  >
    <div class="swiper-wrapper">
      <div class="swiper-slide swiper-slide-active">
        <img
          :src="slides[0].large"
          :alt="`${slides[0]?.alt}`"
          @click="handleFullscreen(0)"
        >
      </div>
    </div>
  </div>
</template>

<style src="./Swiper.scss" lang="scss"></style>
