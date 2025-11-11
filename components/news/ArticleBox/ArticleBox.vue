<script setup>
import { computed, onMounted, ref } from 'vue'
import VueMarkdown from 'vue-markdown-render'
import { useCurrentLocale } from "@/composables/CurrentLocale"

const { getCurrentLocaleStringValue } = useCurrentLocale()

const props = defineProps({
  article: {
    type: Object,
    default: null
  },
})

const perex = computed(() => {
  return getCurrentLocaleStringValue(props.article, 'perex_')
})

const title = computed(() => {
  return getCurrentLocaleStringValue(props.article, 'title_')
})

const status = computed(() => {
  const currentDate = new Date()
  const startDate = new Date(props.article.startDate)
  const endDate = new Date(props.article.endDate)

  if (currentDate < startDate) {
    return 'upcoming'
  } else if (currentDate > endDate) {
    return 'passed'
  } else {
    return 'ongoing'
  }
})
</script>

<template>
  <div class="articleBoxWrapper flexColumnStart">
    <div class="typeTagsWrapper flexColumnStart">
      <div class="typeTag capitalize">
        {{ $t('newsPage.categories.' + article.category) }}
      </div>
      <div class="typeTag capitalize">
        {{ status }}
      </div>
    </div>
    <!-- <a
      v-if="article.readMoreLink"
      :href="article.readMoreLink"
      target="_blank"
      class="articleImageWrapper"
    >
      <img 
        :src="article.photos[0].thumbnails.large.url"
        class="img" 
        :alt="article.photos[0].filename"
      />
    </a> -->
    <nuxt-link
      :to="$localePath('/Events/Article/' + article.id)"
      class="articleImageWrapper"
    >
      <img 
        :src="article.photo"
        class="img" 
        :alt="title"
      />
    </nuxt-link>
    <h2 class="title b1">
      {{ title }}
    </h2>
    <vue-markdown 
      class="articleBoxPerex"
      :source="perex" 
    />
    <!-- <a
      v-if="article.readMoreLink"
      :href="article.readMoreLink"
      target="_blank"
      class="button"
    >
      {{ $t('buttons.readMore') }}
    </a> -->
    <nuxt-link
      :to="$localePath('/Events/Article/' + article.id)"
      class="button"
    >
      {{ $t('buttons.readMore') }}
    </nuxt-link>
  </div>
</template>

<style src="./ArticleBox.scss" lang="scss"></style>
