<script setup>
import { onMounted, ref } from 'vue'

import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import "swiper/css/free-mode"
import "swiper/css/navigation"
import "swiper/css/thumbs"
import { Autoplay, FreeMode, Keyboard, Thumbs} from 'swiper/modules';

const props = defineProps({
  slides: {
    type: Array,
    default: []
  }
})

const autoplay = {
  delay: 2500,
  disableOnInteraction: false
}

const modules = [Autoplay, FreeMode, Keyboard, Thumbs]

let mainSwiper = null;
let thumbsSwiper = null;

const nextSlide = () => {
  mainSwiper.slideNext()
};

const nextThumb = () => {
  thumbsSwiper.slideNext()
};

const onMainSwiper = (swiper) => {
  mainSwiper = swiper
};

const onThumbsSwiper = (swiper) => {
  thumbsSwiper = swiper
}

const thumbsLoaded = ref(false)

const checkThumbsLoaded = () => {
  const localTimeOut = setTimeout(() => {
    if (!thumbsSwiper) {
      checkThumbsLoaded()
    } else {
      thumbsLoaded.value = true
      clearTimeout(localTimeOut)
    }
  }, 50)
}

const prevSlide = () => {
  mainSwiper.slidePrev()
};

const prevThumb = () => {
  thumbsSwiper.slidePrev()
};

onMounted(() => {
  checkThumbsLoaded()
})

const images = import.meta.glob('@/assets/media/img/news/the-little-bird-must-be-caught/*.jpg', { eager: true })
</script>

<template>
  <div class="thumbGallerySwiperWrapper flexColumnCenter">
    <div 
      v-if="thumbsLoaded"
      class="mainSwiperWrapper flexColumnCenter"
    >
      <button
        class="swiperArrowBtn swiperArrowBtnLeft"
        @click="prevSlide()"
      >
        <SvgArrowLeftCircle/>
      </button>
      <Swiper
        @swiper="onMainSwiper"
        :autoplay="autoplay"
        :keyboard="{
          enabled: true,
        }"
        :loop="true"
        :modules="modules"
        :spaceBetween="10"
        :thumbs="{ swiper: thumbsSwiper }"
        class="mainSwiper"
      >
        <SwiperSlide 
          v-for="(slide, i) in slides"
          :key="slide.alt"
        >
          <div class="slideWrapper">
            <img
              :src="images[`/assets/media/img/news/the-little-bird-must-be-caught/${ i + 1 }.jpg`].default"
              :alt="`${slide.alt}`"
            >
            <div class="slideDescriptionWrapper flexRowCenter">
              <span>
                the little bird must be caught
              </span>
            </div>
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
    <div class="thumbsSwiperWrapper flexColumnCenter">
      <button
        class="swiperArrowBtn swiperArrowBtnLeft flexColumnCenter"
        @click="prevThumb()"
      >
        <SvgArrowLeftFull/>
      </button>
      <Swiper
        @swiper="onThumbsSwiper"
        :autoplay="autoplay"
        :freeMode="true"
        :loop="true"
        :modules="modules"
        :spaceBetween="24"
        :slidesPerView="4"
        :watchSlidesProgress="true"
        class="thumbsSwiper"
      >
        <SwiperSlide 
          v-for="(slide, i) in slides"
          :key="slide.alt"
        >
          <img
            :src="images[`/assets/media/img/news/the-little-bird-must-be-caught/${ i + 1 }.jpg`].default"
            :alt="`${slide.alt}`"
          >
        </SwiperSlide>
      </Swiper>
      <button
        class="swiperArrowBtn swiperArrowBtnRight flexColumnCenter"
        @click="nextThumb()"
      >
        <SvgArrowRightFull/>
      </button>
    </div>
  </div>
</template>

<style src="./ThumbGallerySwiper.scss" lang="scss"></style>
