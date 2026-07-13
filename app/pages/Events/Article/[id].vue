<script setup>
import { computed, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import VueMarkdown from 'vue-markdown-render'
import useNewsStore from "@/stores/news"
import { useCurrentLocale } from "@/composables/CurrentLocale"
import { useConvertDate } from "@/composables/ConvertDate"
import { useApi } from "@/composables/Api"

const route = useRoute()
const { t } = useI18n()
const newsStore = useNewsStore()
const { getCurrentLocaleStringValue } = useCurrentLocale()
const { convertToEventDate } = useConvertDate()
const { createAsyncDataOptions } = useApi()

definePageMeta({
  middleware: [
    'auth-general',
  ],
})

const cachedData = toRef(newsStore.articles)
const asyncDataOptions = createAsyncDataOptions(cachedData)

await useAsyncData(
  'articles',
  () => newsStore.getArticles(),
  asyncDataOptions,
)

newsStore.setCurentArticle(route.params.id)

const newsDetailWrapper = ref(null)

const date = computed(() => {
  return convertToEventDate(newsStore.currentArticle.startDate, newsStore.currentArticle.endDate)
})

const description = computed(() => {
  return getCurrentLocaleStringValue(newsStore.currentArticle, 'description_')
})

const title = computed(() => {
  return getCurrentLocaleStringValue(newsStore.currentArticle, 'title_')
})

const perex = computed(() => {
  return getCurrentLocaleStringValue(newsStore.currentArticle, 'perex_')
})

const slides = computed(() => {
  return newsStore.currentArticle.photos.map((photo) => {
    return {
      small: photo.thumbnails.small.url,
      large: photo.thumbnails.large.url,
      full: photo.thumbnails.full.url,
      alt: photo.filename,
      description: photo.filename,
    }
  })
})

const currentGallerySlide = ref(0)
const showGallerySwiper = ref(false)

const handleGallerySwiper = (i) => {
  showGallerySwiper.value = true
  currentGallerySlide.value = i
}

useHead({
  title,
  meta: [
    { name: 'description', content: perex },
    { name: 'keywords', content: t('newsDetailPage.meta.keywords', { eventNameRus: newsStore.currentArticle.title_rus, place: newsStore.currentArticle.place, city: newsStore.currentArticle.city, category: newsStore.currentArticle.category }) },
    { property: 'og:title', content: title.value },
    { property: 'og:description', content: perex },
    { property: 'og:image', content: newsStore.currentArticle.photo },
  ],
})

onMounted(() => {
  const anchors = newsDetailWrapper.value.querySelectorAll('a')

  for (var i=0; i<anchors.length; i++){
    anchors[i].setAttribute('target', '_blank')
  }
})
</script>

<template>
  <main class="Content newsArticleContentWrapper">
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
            {{ newsStore.currentArticle.place }}, {{ newsStore.currentArticle.city }}, {{ newsStore.currentArticle.country }}
          </b>
        </p>
        <div ref="newsDetailWrapper">
          <vue-markdown 
            class="newsDetailWrapper"
            :source="description" 
          />
        </div>
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
