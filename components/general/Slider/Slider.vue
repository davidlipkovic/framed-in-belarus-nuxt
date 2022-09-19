<style src="./Slider.scss" lang="scss"></style>

<template>
  <div class="Slider" id="sliderMain">
    <div class="bg_red"></div>
    <!--      <source srcset="@/assets/media/img/swiper/1.jpg, @/assets/media/img/swiper/1@2x.jpg 2x, @/assets/media/img/swiper/1@3x.jpg 3x">-->
    <picture
      v-for="(slide, i) in slides"
      class="Slider-item"
      :class="i === index? 'active' : ''"
    >
      <img
        :src="`../assets/media/img/swiper/${i+1}.jpg`"
      >
    </picture>
    <div class="Slider-switcher">
      <button
        id="btn-prev"
        class="Slider-switcher-arrow Slider-switcher-arrow_left"
        @click="prevSlide()"
      >
        <arrow-left/>
      </button>
      <div class="Slider-switcher-dots">
        <button
          v-for="(slide, i) in slides"
          class="Slider-switcher-item"
          :class="i === index? 'active' : ''"
          @click="updateIndex(i)"
        >
        </button>
<!--        <button class="Slider-switcher-item active"></button>-->
      </div>
      <button
        id="btn-next"
        class="Slider-switcher-arrow Slider-switcher-arrow_right"
        @click="nextSlide()"
      >
        <arrow-right/>
      </button>
    </div>
  </div>
</template>

<script>
import ArrowLeft from '@/components/svg/ArrowLeft'
import ArrowRight from '@/components/svg/ArrowRight'

export default {
  components: {
    ArrowLeft,
    ArrowRight,
  },
  data() {
    return {
      index: 0,
      slides: [
        {alt: "Ala Lapatka"},
        {alt: "Siarhey Hatskevich"},
        {alt: "Tatsiana Kaneuskaya"},
        {alt: "Pyatro Marchanka"},
        {alt: "Vladzmir Zmurauka"},
        {alt: "Marina Kirilchyk"},
        {alt: "Dmitry Kubarau"},
        {alt: "Dmitriy Dubkou"},
        {alt: "Viacheslav Rahanchuk"},
        {alt: "Ales Pushkin"}
      ]
    }
  },
  methods: {
    updateIndex(i) {
      this.index = i
    },
    prevSlide() {
      if (this.index === 0) {
        this.index = this.slides.length - 1
      } else {
        this.index--
      }
    },
    nextSlide() {
      if (this.index === this.slides.length - 1) {
        this.index = 0
      } else {
        this.index++
      }
    }
  },
  mounted() {
    setInterval(this.nextSlide, 2500)
  }
}
</script>
