<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import { Keyboard, Pagination } from 'swiper/modules';

const props = defineProps({
  slides: {
    type: Array,
    default: []
  }
})

const pagination = {
  clickable: true,
  renderBullet: function (index, className) {
    return '<span class="' + className + '"></span>'
  },
}

let localSwiper = null;
const modules = [Keyboard, Pagination]

const nextSlide = () => {
  localSwiper.slideNext()
};

const onSwiper = (swiper) => {
  localSwiper = swiper
};

const prevSlide = () => {
  localSwiper.slidePrev()
};

const images = import.meta.glob('@/assets/media/img/news/the-little-bird-must-be-caught/*.jpg', { eager: true })
</script>

<template>
  <div class="newsSwiperWrapper flexRowCenter">
    <button
      class="swiperArrowBtn swiperArrowBtnLeft"
      @click="prevSlide()"
    >
      <SvgArrowLeftCircle/>
    </button>
    <Swiper
      @swiper="onSwiper"
      :keyboard="{
        enabled: true,
      }"
      :loop="true"
      :pagination="pagination"
      :slides-per-view="1"
      :spaceBetween="10"
      :modules="modules"
    >
      <SwiperSlide 
        v-for="(slide, i) in slides"
        :key="slide.alt"
        class="flexColumnCenter"
      >
        <img
          :src="images[`/assets/media/img/news/the-little-bird-must-be-caught/${ i + 1 }.jpg`].default"
          :alt="`${slide.alt}`"
        >
        <div class="slideDescriptionWrapper flexRowCenter">
          <span>
            the little bird must be caught
          </span>
        </div>
      </SwiperSlide>
    </Swiper>
    <button
      class="swiperArrowBtn swiperArrowBtnRight"
      @click="nextSlide()"
    >
      <SvgArrowRightCircle/>
    </button>
  </div>
</template>

<style src="./Swiper.scss" lang="scss"></style>
