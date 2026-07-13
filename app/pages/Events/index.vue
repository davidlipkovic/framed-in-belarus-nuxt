<script setup>
// wip
import { computed, ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import useNewsStore from "@/stores/news"
import { useRoute, useRouter } from 'vue-router'
import { useApi } from "@/composables/Api"

const route = useRoute()
const router = useRouter()
const { t } = useI18n()
const newsStore = useNewsStore()
const { createAsyncDataOptions } = useApi()

definePageMeta({
  middleware: [
    'auth-general',
  ],
})

useHead({
  title: t('newsPage.title'),
  meta: [
    { name: 'description', content: t('newsPage.meta.description') },
    { name: 'keywords', content: t('newsPage.meta.keywords') },
    { property: 'og:title', content: t('newsPage.title'), },
    { property: 'og:description', content: t('newsPage.meta.ogDescription') },
  ],
})

const cachedData = toRef(newsStore.articles)
const asyncDataOptions = createAsyncDataOptions(cachedData)

const { error, refresh } = await useAsyncData(
  'articles',
  () => newsStore.getArticles(),
  asyncDataOptions,
)

if (error.value) {
  throw createError({ statusCode: 500, message: 'Failed to load events', fatal: false})
}

const currentTag = ref(null)

const filteredArticles = computed(() => {
  if (!currentTag.value) {
    return newsStore.articlesByDate
  }

  return newsStore.articlesByDate.filter((article) => article.category.toLowerCase() === currentTag.value)
})

const tags = computed(() => {
  if (!newsStore.articlesByDate) {
    return
  }

  const tagsAcc = new Map()

  tagsAcc.set('allItems', {
    value: undefined,
    translationKey: 'allItems',
  })

  newsStore.articlesByDate.forEach(article => {
    const value = {}

    if (article.category === 'Workshop') {
      value.value = 'workshop'
      value.translationKey = 'workshops'
    } else if (article.category === 'Exhibition') {
      value.value = 'exhibition'
      value.translationKey = 'exhibitions'
    } else {
      value.value = 'other'
      value.translationKey = 'other'
    }

    tagsAcc.set(article.category, value)
  })

  return tagsAcc
})

const updateCurrentTag = (tag) => {
  if (!tag) {
    router.push({ })
  } else {
    router.push({ 
      query: { 
        't': tag
      }
    })
  }
}

watch(() => route.query, (newQuery) => {
    currentTag.value = newQuery.t
  }, 
  { immediate: true }
)
</script>

<template>
  <main class="Content">
    <div class="Title">
      <h1 class="content">
        {{ $t('newsPage.title') }}
      </h1>
    </div>
    <div class="filterMenuWrapper content">
      <button 
        v-for="[key, value] in tags"
        :key="key"
        class="button"
        :class="{'bg_black' : currentTag === value.value}"
        @click="updateCurrentTag(value.value)"
      >
        {{ $t('newsPage.filters.' + value.translationKey) }}
      </button>
    </div>
    <div class="articlesWrapper content">
      <NewsArticleBox 
        v-for="article in filteredArticles"
        :key="article.id"
        :article="article"
      />
    </div>
  </main>
</template>

<style src="./News.scss" lang="scss" scoped></style>
