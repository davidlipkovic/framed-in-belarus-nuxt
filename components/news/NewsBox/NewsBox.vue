<script setup>
import { computed, onMounted, ref } from 'vue'
import { useCurrentLocale } from "@/composables/CurrentLocale"

const { getCurrentLocaleStringValue } = useCurrentLocale()

const props = defineProps({
  article: {
    type: Object,
    default: null
  },
})

const description = computed(() => {
  const d = getCurrentLocaleStringValue(props.article, 'description_')
  return d?.slice(0, 230) + '...'
})

const title = computed(() => {
  return getCurrentLocaleStringValue(props.article, 'title_')
})
</script>

<template>
  <div class="newsBoxWrapper flexColumnStart">
    <div class="categoryTag">
      {{ $t('newsPage.categories.' + article.category) }}
    </div>
    <a
      v-if="article.readMoreLink"
      :href="article.readMoreLink"
      target="_blank"
      class="newsImageWrapper"
    >
      <img 
        :src="article.photos[0].thumbnails.large.url"
        class="img" 
        :alt="article.photos[0].filename"
      />
    </a>
    <nuxt-link
      v-else-if="!article.readMoreLink"
      :to="localePath('/News/Article/' + article.id)"
      class="newsImageWrapper"
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
    <p>
      {{ description }}
    </p>
    <a
      v-if="article.readMoreLink"
      :href="article.readMoreLink"
      target="_blank"
      class="button"
    >
      {{ $t('buttons.readMore') }}
    </a>
    <nuxt-link
      v-else-if="!article.readMoreLink"
      :to="localePath('/News/Article/' + article.id)"
      class="button"
    >
      {{ $t('buttons.readMore') }}
    </nuxt-link>
  </div>
</template>

<style src="./NewsBox.scss" lang="scss" scoped></style>
