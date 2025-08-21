<script setup>
import { ref, watch } from "vue"
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
  updatePageIndex,
  currentOrder,
  currentTags,
  updateSearch,
  numberOfItems,
  numberOfPages,
  rangeIndex,
  rangePerPage,
  sliceDisplayed,
  updateSortOrder,
  updateTags,
} = useSearch()

const { getCurrentLocaleStringValue } = useCurrentLocale()

const currentPage = ref(1)
const parsedEmbroideries = ref(null)
const searchQuery = ref(null)

watch(
  [
    () => route.query,
    () => width.value,
  ],
  ([newQuery, newWidth]) => {
    if (newQuery.o) {
      currentOrder.value = newQuery.o
    }

    if (newQuery.p) {
      currentPage.value = parseInt(newQuery.p)
      rangeIndex.value = (currentPage.value - 1) * rangePerPage.value
    }

    if (newQuery.c) {
      if (newQuery.c === 'all' || newQuery.c === 'individual') {
        currentTags.value.case = newQuery.c
      } else {
        currentTags.value.case = {
          id: newQuery.c,
          translation: getCurrentLocaleStringValue(galleryStore.groupCasesMap.get(newQuery.c), 'caseName_')
        }
      }
    }

    if (newQuery.s) {
      currentTags.value.status = newQuery.s
    }

    if (newQuery.g) {
      currentTags.value.gender = newQuery.g
    }

    const areEmptyTags = Object.values(currentTags.value).every(value => value === 'all')

    let dataAccumulator = galleryStore['embroideries' + currentOrder.value]

    if (!areEmptyTags) {
      dataAccumulator = dataAccumulator.filter(embroidery => {
        return Object.entries(currentTags.value).every(([type, tag]) => {
          if (tag === 'all') return true

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
    }

    if (newQuery.search) {
      searchQuery.value = newQuery.search
      dataAccumulator = search(
        dataAccumulator, 
        [
          'case.caseName_bel', 
          'case.caseName_eng',
          'case.caseName_rus', 
          'prisoner.name_bel', 
          'prisoner.name_eng', 
          'prisoner.name_rus', 
        ],
        searchQuery.value
      )    
    }

    if (newWidth >= 1142) {
      rangePerPage.value = 16
    } else {
      rangePerPage.value = 12
    }

    numberOfPages.value = Math.ceil(dataAccumulator.length / rangePerPage.value)
    numberOfItems.value = dataAccumulator.length
    parsedEmbroideries.value = sliceDisplayed(dataAccumulator)

    if (currentPage.value > numberOfPages.value) {
      updatePageIndex(1)
    }
  }, 
  { immediate: true }
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
            @input="updateSearch(searchQuery)"
          />
        </div>
        <div class="tagsMenusWrapper flexRowStart">
          <GeneralTagsMenu
            :currentTag="currentTags.case"
            type="case"
            :tags="galleryStore.tags.case.options"
            :groupCases="galleryStore.tags.case.group"
            class="tagsMenusGalleryWrapper"
            @checkForTag="updateTags"
          />
          <GeneralTagsMenu
            :currentTag="currentTags.status"
            type="status"
            :tags="galleryStore.tags.status.options"
            class="tagsMenusGalleryWrapper"
            @checkForTag="updateTags"
          />
          <GeneralTagsMenu
            :currentTag="currentTags.gender"
            type="gender"
            :tags="galleryStore.tags.gender.options"
            class="tagsMenusGalleryWrapper"
            @checkForTag="updateTags"
          />
          <GeneralSortMenu 
            :currentOrder="currentOrder"
            class="sortMenusGalleryWrapper"
            @checkForOrder="updateSortOrder"
          />
        </div>
      </div>
      <template v-if="numberOfItems > 0">
        <section class="searchResultsWrapper">
          <GeneralResultBox
            v-for="item in parsedEmbroideries"
            :key="item.id"
            :result="item"
          />
        </section>
        <GeneralPagination
          v-if="numberOfPages"
          :currentPage="currentPage"
          :numberOfPages="numberOfPages"
          class="paginationGalleryWrapper"
          @updatePageIndex="updatePageIndex"
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
