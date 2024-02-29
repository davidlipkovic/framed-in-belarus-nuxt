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

<template>
  <div class="Slider" id="sliderMain">
    <div class="bg_red"></div>
    <div class="Slider-content">
      <img
        v-for="(slide, i) in slides"
        :key="slide.alt"
        :src="getStaticMediaLink('media/img/slider', i+1, 'jpg')"
        class="Slider-item"
        :class="i === index? 'active' : ''"
        :alt="`${slide.alt}`"
      >
      <!-- <nuxt-picture
        v-for="(slide, i) in slides"
        :key="slide.alt"
        :src="`https://televizeestrada.cz/framed-in-belarus/slider/${i+1}.jpg`"
        width="1374"
        height="1374"
        sizes="xs:458px md:916px lg:1374px"
        class="Slider-item"
        :class="i === index? 'active' : ''"
        :alt="`${slide.alt}`"
      /> -->
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
            :key="slide.alt"
            class="Slider-switcher-item"
            :class="i === index? 'active' : ''"
            @click="updateIndex(i)"
          >
          </button>
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
  </div>
</template>

<style src="./Slider.scss" lang="scss"></style>
