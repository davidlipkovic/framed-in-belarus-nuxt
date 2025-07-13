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

const currentGallerySlide = ref(0)
const showGallerySwiper = ref(false)

const handleGallerySwiper = (i) => {
  showGallerySwiper.value = true
  currentGallerySlide.value = i

  console.log(showGallerySwiper, currentGallerySlide)
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
          <GeneralGoBack
            page="Events"
          />
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
            v-for="(photo, i) in article.photos"
            :key="photo.alt"
            :src="photo.thumbnails.large.url"
            :alt="photo.filename"
            @click="handleGallerySwiper(i)"
          />
        </div>
        <NewsFullScreenSwiper
          :initialSlide="currentGallerySlide"
          :showSwiper="showGallerySwiper"
          :slides="article.photos"
          @closeSwiper="showGallerySwiper = false"
        />
      </article>
    </div>
  </main>
</template>

<style src="./Article.scss" lang="scss"></style>
