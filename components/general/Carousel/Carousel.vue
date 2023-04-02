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
        {
          alt: "Photo credit: Sergei Shabohin",
          show: false
        },
        {
          alt: "Photo credit: Sergei Shabohin",
          show: false
        },
        {
          alt: "Photo credit: Sergei Shabohin",
          show: false
        },
        {
          alt: "Photo credit: Sergei Shabohin",
          show: false
        },
        {
          alt: "Photo credit: Sergei Shabohin",
          show: false
        },
        {
          alt: "Photo credit: Sergei Shabohin",
          show: false
        },
        {
          alt: "Photo credit: Sergei Shabohin",
          show: false
        },
        {
          alt: "Photo credit: Sergei Shabohin",
          show: false
        },
        {
          alt: "Photo credit: Sergei Shabohin",
          show: false
        },
        {
          alt: "Photo credit: Sergei Shabohin",
          show: false
        },
        {
          alt: "Photo credit: Sergei Shabohin",
          show: false
        },
        {
          alt: "Photo credit: Sergei Shabohin",
          show: false
        },
        {
          alt: "Photo credit: Sergei Shabohin",
          show: false
        }
      ]
    }
  },
  methods: {
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
    // setInterval(this.nextSlide, 2500)
  }
}
</script>

<template>
  <div class="Slider">
    <div class="Slider-items-wrapper">
      <div
          v-for="(slide, i) in slides"
          :key="slide.alt"
          class="Slider-item"
          :class="i === index? 'active' : ''"
      >
        <img 
          class="img big" 
          :alt="`${slide.alt}`"
          :src="`https://televizeestrada.cz/framed-in-belarus/the-little-bird-must-be-caught/${index+1}.jpg`"
        >
        <!-- <div class="credits">
          <p>
            {{slide.alt}}
          </p>
        </div> -->
      </div>
    </div>
    <div class="Slider-switcher">
      <button
        id="btn-prev"
        class="Slider-switcher-arrow Slider-switcher-arrow_left"
        @click="prevSlide()"
      >
        <svg viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M23.7205 32.3732L16.2441 24.8722L23.7205 17.3711" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M17.2812 24.8711H32.442" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M42.4212 24.8691C42.4212 14.9316 34.3226 6.86914 24.3405 6.86914C14.3584 6.86914 6.25977 14.9316 6.25977 24.8691C6.25977 34.8066 14.3584 42.8691 24.3405 42.8691C34.3226 42.8691 42.4212 34.8066 42.4212 24.8691Z" stroke-width="2" stroke-miterlimit="10"/>
        </svg>
      </button>
      <button
        id="btn-next"
        class="Slider-switcher-arrow Slider-switcher-arrow_right"
        @click="nextSlide()"
      >
        <svg viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24.8518 17.3397L32.3281 24.8407L24.8518 32.3418" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M31.291 24.8418L16.1302 24.8418" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M6.15104 24.8437C6.15104 34.7812 14.2497 42.8438 24.2318 42.8438C34.2138 42.8438 42.3125 34.7812 42.3125 24.8437C42.3125 14.9062 34.2138 6.84375 24.2318 6.84375C14.2497 6.84375 6.15104 14.9062 6.15104 24.8437Z" stroke-width="2" stroke-miterlimit="10"/>
        </svg>
      </button>
    </div>
  </div>
</template>

<style src="./Carousel.scss" lang="scss" scoped></style>
