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

const articles = [
  {
    link: "News/holidays-wish",
    title: "Merry Christmas and a good, peaceful New Year",
    perex: "Dear fans and participants of the #FramedinBelarus project, We wish you a Merry Christmas and a good, peaceful New Year and fulfillment of your wishes!",
    imageUrl: "../../assets/media/img/news/holidays-wish/title.jpg",
    tag: "other"
  },
  {
    link: "News/the-little-bird-must-be-caught",
    title: "The little bird must be caught",
    perex: "The group exhibition \"The little bird must be caught\" presents a part of the project #FramedinBelarus on the 13th edition of the international contemporary art festival Survival Kit, which takes place inside an old bank building, in the heart of Dome Square (Pils iela 23, Riga) from 3rd of September to the 16th of October.",
    imageUrl: "../../assets/media/img/news/the-little-bird-must-be-caught/title.jpg",
    tag: "exhibition"
  },
  {
    link: "News/stitched-freedom-framed-in-belarus-project",
    title: "Stitched freedom: “Framed in Belarus” project",
    perex: "Stitchit art group is going to lead a workshop in Riga. On the 1st and 2nd of October at 2 pm EET you are invited to participate in a stitching workshop \"Stitched Freedom: ‘Framed in Belarus’ project\" led by art...",
    imageUrl: "../../assets/media/img/news/news.png",
    tag: "workshop"
  }
]

const filteredArticles = ref(articles)

const currentTag = ref(null)

// const filteredArticles = computed(() => {
//   console.log('halooo', currentTag.value)
//   if (!currentTag.value) return articles
//   return articles.filter((article) => article.tag === currentTag.value)
// })

const filterArticles = (tag) => {
  currentTag.value = tag
  if (!tag) {
    filteredArticles.value = articles
  } else {
    filteredArticles.value = articles.filter((article) => article.tag === tag)
  }
}

const news = computed(() => {
  return newsStore.news.value
})
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
        @click="filterArticles(null)"
      >
        {{ $t('newsPage.filters.allItems') }}
      </button>
      <button 
        class="button"
        :class="{'bg_black' : currentTag === 'workshop'}"
        @click="filterArticles('workshop')"
      >
        {{ $t('newsPage.filters.workshops') }}
      </button>
      <button 
        class="button"
        :class="{'bg_black' : currentTag === 'exhibition'}"
        @click="filterArticles('exhibition')"
      >
        {{ $t('newsPage.filters.exhibitions') }}
      </button>
      <button 
        class="button"
        :class="{'bg_black' : currentTag === 'other'}"
        @click="filterArticles('other')"
      >
        {{ $t('newsPage.filters.other') }}
      </button>
    </div>
    <div class="articlesWrapper content">
      <NewsNewsBox 
        v-for="(article, i) in newsStore.news.value"
        :key="i"
        :news="article"
      />
      <NewsNewsBox 
        v-for="article in filteredArticles"
        :key="article.link"
        :news="article"
      />
    </div>
  </main>
</template>

<style src="./News.scss" lang="scss" scoped></style>
