<script setup>
import { computed, onMounted, ref } from 'vue'

const props = defineProps({
  news: {
    type: Object,
    default: null
  },
})
</script>

<template>
  <div class="newsBoxWrapper flexColumnStart">
    <nuxt-link
      :to="news.link"
      class="newsImageWrapper"
    >
      <img 
        src="../../../assets/media/img/news/holidays-wish/title.jpg"
        class="img" 
        alt="Holiday's wish" 
      />
    </nuxt-link>
    <h2 class="title b1">
      {{ news.title }}
    </h2>
    <p>
      {{ news.perex }}
    </p>
    <nuxt-link
      :to="news.link"
      class="button"
    >
      {{ $t('buttons.readMore') }}
    </nuxt-link>
  </div>
</template>

<style src="./NewsBox.scss" lang="scss" scoped></style>
