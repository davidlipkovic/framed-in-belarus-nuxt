<script setup>
import { computed, onMounted, reactive, ref } from "vue"
import { useRoute, useRouter } from 'vue-router'
import { useHeroesStore } from "@/stores/heroes"
import { useSearch } from "@/composables/Search";

const route = useRoute()
const router = useRouter()

const heroesStore = useHeroesStore();
const {
  activeMenuIndex,
  changePageIndex,
  closeTagsMenu,
  currentOrder,
  currentPage,
  currentTags,
  numberOfPages,
  parseData,
  rangePerPage,
  search,
  toggleActiveMenuIndex,
  updateSortOrder,
  updateTags,
} = useSearch();

useHead({
  title: '#Framed in Belarus / Gallery',
  meta: [
    { name: 'description', content: 'User cabinet — My embroideries description' }
  ]
})

const localTags = computed(() => heroesStore.tags.value)

const placeholderResult = {
  name: 'Name Surname',
  photo: '../../../assets/media/img/swiper/1.jpg'
}

onMounted(() => {
  numberOfPages.value = 1
})

watch(route, () => {
  if (route.query.order) {
    currentOrder.value = route.query.order
  }
  for (const key in route.query) {
    if (key === 'order') continue
    currentTags.value[key] = route.query[key]
  }
}, { immediate: true })
</script>

<template>
  <main class="Content galleryContent">
    <div class="Title">
      <h1 class="content">
        Gallery
      </h1>
    </div>
    <div class="content">
      <div class="searchMenuWrapper">
        <div class="searchSortInputWrapper">
          <div class="searchInputWrapper flexRowCenter">
            <SvgSearch class="searchIcon"/>
            <input 
              type="text" 
              class="search" 
              :placeholder="$t('placeholders.searchHero')"
              :aria-placeholder="$t('placeholders.searchHero')"
              v-model="search"
            />
          </div>
          <GeneralSortMenu 
            :menuStatus="activeMenuIndex === 1"
            :currentOrder="currentOrder"
            @checkForOrder="updateSortOrder"
            @checkForStatus="toggleActiveMenuIndex(1)"
            @closeSortMenu="closeTagsMenu(1)"
          />
        </div>
        <div class="tagsMenusWrapper flexRowStart">
          <GeneralTagsMenu
            :currentTag="currentTags.case"
            :menuStatus="activeMenuIndex === 2"
            type="case"
            :tags="localTags.case"
            class="tagsMenusGalleryWrapper"
            @checkForTag="updateTags"
            @checkForStatus="toggleActiveMenuIndex(2)"
            @closeTagsMenu="closeTagsMenu(2)"
          />
          <GeneralTagsMenu
            :currentTag="currentTags.status"
            :menuStatus="activeMenuIndex === 3"
            type="status"
            :tags="localTags.status"
            class="tagsMenusGalleryWrapper"
            @checkForTag="updateTags"
            @checkForStatus="toggleActiveMenuIndex(3)"
            @closeTagsMenu="closeTagsMenu(3)"
          />
          <GeneralTagsMenu
            :currentTag="currentTags.gender"
            :menuStatus="activeMenuIndex === 4"
            type="gender"
            :tags="localTags.gender"
            class="tagsMenusGalleryWrapper"
            @checkForTag="updateTags"
            @checkForStatus="toggleActiveMenuIndex(4)"
            @closeTagsMenu="closeTagsMenu(4)"
          />
        </div>
      </div>
      <section class="searchResultsWrapper">
        <GeneralResultBox
          v-for="item in rangePerPage"
          :key="item"
          :result="placeholderResult"
        />
      </section>
      <GeneralPagination
        v-if="numberOfPages"
        :currentPage="currentPage"
        :numberOfPages="numberOfPages"
        class="paginationGalleryWrapper"
        @change-page-index-to="changePageIndex"
      />
    </div>
  </main>
</template>

<style src="../../assets/style/search.scss" lang="scss" scoped></style>
<style src="../../assets/style/form.scss" lang="scss" scoped></style>
<style src="./Gallery.scss" lang="scss" scoped></style>
