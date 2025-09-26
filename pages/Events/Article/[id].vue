<script setup>
import { computed, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import VueMarkdown from 'vue-markdown-render'
import useNewsStore from "@/stores/news"
import { useCurrentLocale } from "@/composables/CurrentLocale"
import { useConvertDate } from "@/composables/ConvertDate"

definePageMeta({
  middleware: [
    'news',
  ],
})

const route = useRoute()
const newsStore = useNewsStore()
const { getCurrentLocaleStringValue } = useCurrentLocale()
const { convertToEventDate } = useConvertDate()

const article = computed(() => {
  return newsStore.articles.find(article => article.id === route.params.id)
})

const date = computed(() => {
  return convertToEventDate(article.value.startDate, article.value.endDate)
})

const description = computed(() => {
  return getCurrentLocaleStringValue(article.value, 'description_')
})

const title = computed(() => {
  return getCurrentLocaleStringValue(article.value, 'title_')
})

const slides = computed(() => {
  return article.value.photos.map((photo) => {
    return {
      small: photo.thumbnails.small.url,
      large: photo.thumbnails.large.url,
      full: photo.thumbnails.full.url,
      alt: photo.filename.substring(0, photo.filename.lastIndexOf('.'))
    }
  })
})

const currentGallerySlide = ref(0)
const showGallerySwiper = ref(false)

const handleGallerySwiper = (i) => {
  showGallerySwiper.value = true
  currentGallerySlide.value = i
}
</script>

<template>
  <main class="Content newsArticleContentWrapper">
    <Head>
      <Title>
        #Framed in Belarus - {{ title }}
      </Title>
    </Head>
    <div>
      <div class="Title">
        <div class="content">
          <h1 class="content News">
            {{ title }}
          </h1>
          <GeneralGoBack/>
        </div>
      </div>
      <article class="content newsArticleContent">
        <p 
          v-if="date"
          class="infoWrapper infoWrapperCalendar flexRowStart"
        >
          <SvgCalendar class="ExhibitionListItem-descript-icon descriptIcon"/>
          <b class="b2">
            {{ date }}
          </b>
        </p>
        <p class="infoWrapper infoWrapperPlace flexRowStart">
          <SvgLocation class="ExhibitionListItem-descript-icon descriptIcon"/>
          <b class="b2">
            {{ article.place }}, {{ article.city }}, {{ article.country }}
          </b>
        </p>
        <vue-markdown 
          class="newsDetailWrapper"
          :source="description" 
        />
        <div class="galleryWrapper">
          <img
            v-for="(photo, i) in slides"
            :key="photo.alt"
            :src="photo.large"
            :alt="photo.alt"
            @click="handleGallerySwiper(i)"
          />
        </div>
        <GeneralFullScreenSwiper
          v-if="showGallerySwiper"
          :initialSlide="currentGallerySlide"
          :slides="slides"
          @closeSwiper="showGallerySwiper = false"
        />
      </article>
    </div>
  </main>
</template>

<style src="./Article.scss" lang="scss"></style>
