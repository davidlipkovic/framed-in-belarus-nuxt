<script setup>
// wip
import { computed, onMounted, ref, watch } from 'vue'
import useNewsStore from "@/stores/news"
import { useRoute, useRouter } from 'vue-router'

definePageMeta({
  middleware: [
    'news',
    'auth-general',
  ],
})

const route = useRoute()
const router = useRouter()
const newsStore = useNewsStore()

const currentTag = ref(null)

const filteredArticles = computed(() => {
  const mergedArticles = newsStore.articlesPublication
  if (!currentTag.value) return mergedArticles
  return mergedArticles.filter((article) => article.category.toLowerCase() === currentTag.value)
})

const tags = computed(() => {
  const tagsAcc = new Map()

  tagsAcc.set('allItems', {
    value: undefined,
    translationKey: 'allItems',
  })

  newsStore.articlesPublication.forEach(article => {
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
    router.replace({ })
  } else {
    router.replace({ 
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
    <Head>
      <Title>#Framed in Belarus — Events</Title>
      <Meta name="description" content="Events"/>
      <Meta name="robots" content="noindex" />
    </Head>
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
