<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';

const props = defineProps({
  fullscreen: {
    type: Boolean,
    default: false
  },
  slides: {
    type: Array,
    default: []
  },
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

let localSwiper = null;
const modules = [Autoplay, Pagination]

const nextSlide = () => {
  localSwiper.slideNext()
};

const onSwiper = (swiper) => {
  localSwiper = swiper
};

const prevSlide = () => {
  localSwiper.slidePrev()
};

const handleFullscreen = (i) => {
  emit('openFullscreen', i)
}

const images = import.meta.glob('@/assets/media/img/swiper/*.jpg', { eager: true })
</script>

<template>
  <Swiper
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
      :key="slide.alt"
    >
      <img
        :src="images[`/assets/media/img/swiper/${ i + 1 }.jpg`].default"
        :alt="`${slide.alt}`"
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
</template>

<style src="./Swiper.scss" lang="scss"></style>
