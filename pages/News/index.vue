<script setup>
// wip
import { computed, onMounted, ref, watch } from 'vue'
import { useNewsStore } from "@/stores/news"

definePageMeta({
  middleware: [
    'news',
  ],
})

const newsStore = useNewsStore()

const currentTag = ref(null)

const filteredArticles = computed(() => {
  const mergedArticles = newsStore.articles.value
  if (!currentTag.value) return mergedArticles
  return mergedArticles.filter((article) => article.category.toLowerCase() === currentTag.value)
})

const updateCurrentTag = (val) => {
  currentTag.value = val
}
</script>

<template>
  <main class="Content">
    <Head>
      <Title>#Framed in Belarus — News</Title>
      <Meta name="description" content="News"/>
    </Head>
    <div class="Title">
      <h1 class="content">
        {{ $t('newsPage.title') }}
      </h1>
    </div>
    <div class="filterMenuWrapper content">
      <button 
        class="button"
        :class="{'bg_black' : currentTag === null}"
        @click="updateCurrentTag(null)"
      >
        {{ $t('newsPage.filters.allItems') }}
      </button>
      <button 
        class="button"
        :class="{'bg_black' : currentTag === 'workshop'}"
        @click="updateCurrentTag('workshop')"
      >
        {{ $t('newsPage.filters.workshops') }}
      </button>
      <button 
        class="button"
        :class="{'bg_black' : currentTag === 'exhibition'}"
        @click="updateCurrentTag('exhibition')"
      >
        {{ $t('newsPage.filters.exhibitions') }}
      </button>
      <button 
        class="button"
        :class="{'bg_black' : currentTag === 'other'}"
        @click="updateCurrentTag('other')"
      >
        {{ $t('newsPage.filters.other') }}
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
