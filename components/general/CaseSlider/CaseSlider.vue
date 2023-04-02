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
        {alt: ""},
        {alt: ""},
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
  <div id="sliderMain" class="Slider">
    <nuxt-picture
      v-for="(slide, i) in slides"
      :key="slide.alt"
      :src="`https://televizeestrada.cz/framed-in-belarus/case1/result${i+1}_full.jpg`"
      width="1374"
      height="1374"
      sizes="xs:458px md:916px lg:1374px"
      class="Slider-item"
      :class="i === index? 'active' : ''"
      :alt="`${slide.alt}`"
    />
    <div class="Slider-switcher">
      <button
        id="btn-prev"
        class="Slider-switcher-arrow Slider-switcher-arrow_left"
        @click="prevSlide()"
      >
        <ArrowLeft/>
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
        <ArrowRight/>
      </button>
    </div>
  </div>
</template>

<style src="./CaseSlider.scss" lang="scss"></style>
