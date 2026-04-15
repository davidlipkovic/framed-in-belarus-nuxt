<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import { Keyboard } from 'swiper/modules'

const emit = defineEmits([
  'closeSwiper',
])

const props = defineProps({
  initialSlide: {
    type: Number,
    default: 0
  },
  slides: {
    type: Array,
    default: []
  },
})

let localSwiper = null
const modules = [Keyboard]

const nextSlide = () => {
  localSwiper.slideNext()
}

const onSwiper = (swiper) => {
  localSwiper = swiper
}

const prevSlide = () => {
  localSwiper.slidePrev()
}
</script>

<template>
  <div class="fullScreenSwiperWrapper">
    <div 
      class="swiperBackground"
      @click="$emit('closeSwiper')"
    />
    <Swiper
      @swiper="onSwiper"
      :initialSlide="initialSlide"
      :keyboard="{
        enabled: true,
      }"
      :loop="true"
      :slides-per-view="1"
      :spaceBetween="0"
      :modules="modules"
      class="fullScreenSwiper"
    >
      <SwiperSlide 
        v-for="slide in slides"
        :key="slide.full"
      >
        <div>
          <img
            :src="slide.full"
            :alt="slide.alt"
          >
          <div v-if="slide.description">
            <span>
              {{ slide.description }}
            </span>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
    <button
      class="swiperArrowBtn swiperArrowBtnLeft flexRowCenter"
      @click="prevSlide()"
    >
      <SvgArrowLeftCircle/>
    </button>
    <button
      class="swiperArrowBtn swiperArrowBtnRight flexRowCenter"
      @click="nextSlide()"
    >
      <SvgArrowRightCircle/>
    </button>
  </div>
</template>

<style src="./FullScreenSwiper.scss" lang="scss"></style>
