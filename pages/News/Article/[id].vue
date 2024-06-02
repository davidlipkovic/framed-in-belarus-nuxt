<script setup>
import { computed, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import MarkdownIt from 'markdown-it'
import useNewsStore from "@/stores/news"
import { useCurrentLocale } from "@/composables/CurrentLocale"

definePageMeta({
  middleware: [
    'news',
  ],
})

const route = useRoute()
const newsStore = useNewsStore()
const { getCurrentLocaleStringValue } = useCurrentLocale()

const article = computed(() => {
  return newsStore.articles.find(article => article.id === route.params.id)
})

const description = computed(() => {
  const md = new MarkdownIt()
  return md.render(getCurrentLocaleStringValue(article.value, 'description_'))
  // return getCurrentLocaleStringValue(article.value, 'description_')
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
            page="News"
          />
        </div>
      </div>
      <article class="content newsArticleContent">
        <p class="infoWrapper infoWrapperCalendar flexRowStart">
          <SvgCalendar class="ExhibitionListItem-descript-icon descriptIcon"/>
          <b class="b2">
            {{ article.startDate }} - {{ article.endDate }}
          </b>
        </p>
        <p class="infoWrapper infoWrapperPlace flexRowStart">
          <SvgLocation class="ExhibitionListItem-descript-icon descriptIcon"/>
          <b class="b2">
            {{ article.place }}, {{ article.city }}, {{ article.country }}
          </b>
        </p>
        <div 
          class="newsDetailWrapper"
          v-html="description"
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

        <!-- <p>
          The list of exhibeted embroideries:<br>
          <a href="https://lcca.lv/en/survival-kit/" target="_blank">Ivan Ivanov</a>, 
          <a href="https://lcca.lv/en/survival-kit/" target="_blank">Ivan Ivanov</a>, 
          <a href="https://lcca.lv/en/survival-kit/" target="_blank">Ivan Ivanov</a>, 
          <a href="https://lcca.lv/en/survival-kit/" target="_blank">Ivan Ivanov</a>, 
          <a href="https://lcca.lv/en/survival-kit/" target="_blank">Ivan Ivanov</a>
        </p> -->
      </article>
    </div>
  </main>
</template>

<style src="./Article.scss" lang="scss"></style>
