<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Keyboard, Pagination } from 'swiper/modules';

const props = defineProps({
  slides: {
    type: Array,
    default: []
  }
})

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
const modules = [Autoplay, Keyboard, Pagination]

const nextSlide = () => {
  localSwiper.slideNext()
};

const onSwiper = (swiper) => {
  localSwiper = swiper
};

const prevSlide = () => {
  localSwiper.slidePrev()
};
</script>

<template>
  <Swiper
    @swiper="onSwiper"
    :autoplay="autoplay"
    :keyboard="{
      enabled: true,
    }"
    :loop="true"
    :pagination="pagination"
    :slides-per-view="1"
    :spaceBetween="10"
    :modules="modules"
    class="basicSwiperWrapper"
  >
    <SwiperSlide 
      v-for="(slide, i) in slides"
      :key="slide.alt"
    >
      <img
        :src="`https://televizeestrada.cz/framed-in-belarus/slider/${i+1}.jpg`"
        :alt="`${slide.alt}`"
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
