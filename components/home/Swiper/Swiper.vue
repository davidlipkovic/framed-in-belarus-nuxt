<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
import { Autoplay, Pagination } from 'swiper/modules'

const props = defineProps({
  fullscreen: {
    type: Boolean,
    default: false
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

const globJpg1x = import.meta.glob('@/assets/media/img/swiper/*-1x.jpg', { eager: true })
const globJpg2x = import.meta.glob('@/assets/media/img/swiper/*-2x.jpg', { eager: true })
const globWebp1x = import.meta.glob('@/assets/media/img/swiper/*-1x.webp', { eager: true })
const globWebp2x = import.meta.glob('@/assets/media/img/swiper/*-2x.webp', { eager: true })

const images = Object.entries(globJpg1x).map(([path, module]) => {
  const jpg2xPath = path.replace('1x', '2x');
  const webp1xPath = path.replace(/\.jpg$/, '.webp')
  const webp2xPath = jpg2xPath.replace(/\.jpg$/, '.webp')

  return {
    'jpg-1x': { path, module },
    'jpg-2x': { path: jpg2xPath, module: globJpg2x[jpg2xPath] },
    'webp-1x': { path: webp1xPath, module: globWebp1x[webp1xPath] },
    'webp-2x': { path: webp2xPath, module: globWebp2x[webp2xPath] },
  }
})
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
      v-for="(slide, i) in images"
      :key="slide.alt"
    >
      <picture>
        <source 
          :srcset="slide['webp-1x'].module.default + ' 1x, ' + slide['webp-2x'].module.default + ' 2x'"
          type="image/webp"
        >
        <source
          :srcset="slide['jpg-1x'].module.default + ' 1x, ' + slide['jpg-2x'].module.default + ' 2x'"
          type="image/jpg"
        />
        <img
          :src="slide['jpg-1x'].module.default"
          :alt="`${slide.alt}`"
          @click="handleFullscreen(i)"
          width="448" 
          height="448"
        >
      </picture>
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
