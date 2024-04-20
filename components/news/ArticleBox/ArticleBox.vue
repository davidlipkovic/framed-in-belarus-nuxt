<script setup>
import { computed, onMounted, ref } from 'vue'
import MarkdownIt from 'markdown-it'
import { useCurrentLocale } from "@/composables/CurrentLocale"

const { getCurrentLocaleStringValue } = useCurrentLocale()

const props = defineProps({
  article: {
    type: Object,
    default: null
  },
})

const description = computed(() => {
  const md = new MarkdownIt()
  return md.render(getCurrentLocaleStringValue(props.article, 'description_'))
})

const title = computed(() => {
  return getCurrentLocaleStringValue(props.article, 'title_')
})
</script>

<template>
  <div class="articleBoxWrapper flexColumnStart">
    <div class="categoryTag">
      {{ $t('newsPage.categories.' + article.category) }}
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
      :to="localePath('/News/Article/' + article.id)"
      class="articleImageWrapper"
    >
      <img 
        :src="article.photos[0].thumbnails.large.url"
        class="img" 
        :alt="article.photos[0].filename"
      />
    </nuxt-link>
    <h2 class="title b1">
      {{ title }}
    </h2>
    <div 
      class="articleBoxPerex"
      v-html="description"
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
      :to="localePath('/News/Article/' + article.id)"
      class="button"
    >
      {{ $t('buttons.readMore') }}
    </nuxt-link>
  </div>
</template>

<style src="./ArticleBox.scss" lang="scss"></style>
