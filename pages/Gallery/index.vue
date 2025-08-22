<script setup>
import { computed, watch } from "vue"
import { useRoute } from 'vue-router'
import { search } from 'ss-search'
import { useWindowSize } from '@vueuse/core'
import useGalleryStore from "@/stores/gallery"
import { useSearch } from "@/composables/Search"
import { useCurrentLocale } from "@/composables/CurrentLocale"

definePageMeta({
  middleware: [
    'auth-general',
    'gallery',
  ],
})

useHead({
  title: '#Framed in Belarus / Gallery',
  meta: [
    { name: 'description', content: 'User cabinet — My embroideries description' }
  ]
})

const route = useRoute()
const { width } = useWindowSize()
const galleryStore = useGalleryStore()

const {
  currentOrder,
  currentPage,
  currentTags,
  handleFilterBySearch,
  rangeIndex,
  rangePerPage,
  searchQuery,
  sliceDisplayed,
  updateQuery,
} = useSearch()

const { getCurrentLocaleStringValue } = useCurrentLocale()

const sortedEmbroideries = computed(() => {
  if (!galleryStore.embroideriesAlphabetically) {
    return
  }

  if (!currentOrder.value) {
    return galleryStore.embroideriesAlphabetically
  }

  return galleryStore.embroideriesAlphabeticallyReversed
})

const filteredByTagsEmbroideries = computed(() => {
  if (!sortedEmbroideries.value) {
    return
  }

  if (Object.values(currentTags.value).every(value => !value)) {
    return sortedEmbroideries.value
  }

  return sortedEmbroideries.value.filter(embroidery => {
    return Object.entries(currentTags.value).every(([type, tag]) => {
      if (!tag) return true

      if (type === 'case') {
        if (tag === 'individual') {
          return embroidery.case.type === 'Individual'
        } else {
          return embroidery.case.id === tag.id
        }
      }

      if (type === 'status') {
        if (tag === 'active') {
          return embroidery.prisoner.status === 'in jail'
        } else if (tag === 'former') {
          return embroidery.prisoner.status === 'released'
        }
      }

      if (type === 'gender') {
        return embroidery.prisoner.gender === tag
      }

      return embroidery[type] === tag
    })
  })
})

const filteredBySearchEmbroideries = computed(() => {
  return handleFilterBySearch(filteredByTagsEmbroideries.value, [
    'case.caseName_bel', 
    'case.caseName_eng',
    'case.caseName_rus', 
    'prisoner.name_bel', 
    'prisoner.name_eng', 
    'prisoner.name_rus', 
  ])
})

const numberOfPages = computed(() =>  Math.ceil(filteredBySearchEmbroideries.value?.length / rangePerPage.value))

const displayedEmbroideries = computed(() => {
  if (!filteredBySearchEmbroideries.value) {
    return
  }

  return sliceDisplayed(filteredBySearchEmbroideries.value, rangeIndex.value, rangePerPage.value)
})

const handleUpdatePageIndex = (index) => {
  updateQuery('p', index)
}

const handleUpdateSortOrder = (sortOrder) => {
  updateQuery('o', sortOrder)
}

watch(
  [
    () => route.query,
    () => width.value,
  ],
  ([newQuery, newWidth], [oldQuery]) => {
    if (newQuery.p) {
      if (newQuery.p === oldQuery.p) {
        updateQuery('p', 1)
        return
      }

      currentPage.value = parseInt(newQuery.p)
    } else {
      currentPage.value = 1
    }

    if (newWidth >= 1142) {
      rangePerPage.value = 16
    } else {
      rangePerPage.value = 12
    }

    rangeIndex.value = (currentPage.value - 1) * rangePerPage.value

    currentOrder.value = newQuery.o

    if (newQuery.c === 'individual') {
      currentTags.value.case = newQuery.c
    } else if (newQuery.c) {
      currentTags.value.case = {
        id: newQuery.c,
        translation: getCurrentLocaleStringValue(galleryStore.groupCasesMap.get(newQuery.c), 'caseName_')
      }
    } else {
      currentTags.value.case = null
    }

    currentTags.value.status = newQuery.s
    currentTags.value.gender = newQuery.g

    if (newQuery.search) {
      searchQuery.value = newQuery.search
    }
  }, 
  { 
    immediate: true,
  }
)
</script>

<template>
  <main class="Content galleryContent">
    <div class="Title">
      <h1 class="content white">
        {{ $t('galleryPage.title')}}
      </h1>
    </div>
    <div class="content">
      <div class="searchMenuWrapper">
        <div class="searchInputWrapper flexRowCenter">
          <SvgSearch class="searchIcon"/>
          <input 
            type="text" 
            class="search" 
            :placeholder="$t('placeholders.searchHero')"
            :aria-placeholder="$t('placeholders.searchHero')"
            v-model="searchQuery"
            @input="updateQuery('search', searchQuery)"
          />
        </div>
        <div class="tagsMenusWrapper flexRowStart">
          <GeneralTagsMenu
            :currentTag="currentTags.case"
            type="case"
            :tags="galleryStore.tags.case.options"
            :groupCases="galleryStore.tags.case.group"
            class="tagsMenusGalleryWrapper"
            @checkForTag="updateQuery"
          />
          <GeneralTagsMenu
            :currentTag="currentTags.status"
            type="status"
            :tags="galleryStore.tags.status.options"
            class="tagsMenusGalleryWrapper"
            @checkForTag="updateQuery"
          />
          <GeneralTagsMenu
            :currentTag="currentTags.gender"
            type="gender"
            :tags="galleryStore.tags.gender.options"
            class="tagsMenusGalleryWrapper"
            @checkForTag="updateQuery"
          />
          <GeneralSortMenu 
            :currentOrder="currentOrder"
            class="sortMenusGalleryWrapper"
            @checkForOrder="handleUpdateSortOrder"
          />
        </div>
      </div>
      <template v-if="displayedEmbroideries?.length > 0">
        <section class="searchResultsWrapper">
          <GeneralResultBox
            v-for="item in displayedEmbroideries"
            :key="item.id"
            :result="item"
          />
        </section>
        <GeneralPagination
          v-if="numberOfPages"
          :currentPage="currentPage"
          :numberOfPages="numberOfPages"
          class="paginationGalleryWrapper"
          @updatePageIndex="handleUpdatePageIndex"
        />
      </template>
      <div 
        v-else
        class="noResultsWrapper flexColumnCenter"
      >
        <h3 class="title">
          {{ $t('galleryPage.noResults') }}
        </h3>
      </div>
    </div>
  </main>
</template>

<style src="../../assets/style/search.scss" lang="scss" scoped></style>
<style src="./Gallery.scss" lang="scss" scoped></style>
