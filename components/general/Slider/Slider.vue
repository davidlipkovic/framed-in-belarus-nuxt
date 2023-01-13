<script setup>
import { onMounted, ref } from 'vue'

const index = ref(0)

const slides = [
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

const updateIndex = (i) => {
  index.value = i
}

const prevSlide = () => {
  if (index.value === 0) {
    index.value = slides.length - 1
  } else {
    index.value--
  }
}

const nextSlide = () => {
  if (index.value === slides.length - 1) {
    index.value = 0
  } else {
    index.value++
  }
}

onMounted(() => {
  setInterval(nextSlide, 2500)
})
</script>

<template>
  <div class="Slider" id="sliderMain">
    <div class="bg_red"></div>
    <div class="Slider-content">
      <nuxt-picture
        v-for="(slide, i) in slides"
        :src="`https://televizeestrada.cz/framed-in-belarus/slider/${i+1}.jpg`"
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
          <SvgArrowLeft/>
        </button>
        <div class="Slider-switcher-dots">
          <button
            v-for="(slide, i) in slides"
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
          <SvgArrowRight/>
        </button>
      </div>
    </div>
  </div>
</template>

<style src="./Slider.scss" lang="scss"></style>
