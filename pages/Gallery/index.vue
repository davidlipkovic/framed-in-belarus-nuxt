<script setup>
import { computed, onMounted, reactive, ref } from "vue"

import { useHeroesStore } from "@/stores/heroes"
import { useSearch } from "@/composables/Search";

const heroesStore = useHeroesStore();
const {
  activeMenuIndex,
  changePageIndex,
  closeTagsMenu,
  currentPage,
  numberOfPages,
  parseData,
  rangePerPage,
  search,
  sortData,
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
            @checkForStatus="toggleActiveMenuIndex(1)"
            @closeSortMenu="closeTagsMenu(1)"
          />
        </div>
        <div class="tagsMenusWrapper flexRowStart">
          <GeneralTagsMenu
            :menuStatus="activeMenuIndex === 2"
            :type="localTags.cases.type"
            :tags="localTags.cases.tags"
            class="tagsMenusGalleryWrapper"
            @checkForStatus="toggleActiveMenuIndex(2)"
            @closeTagsMenu="closeTagsMenu(2)"
          />
          <GeneralTagsMenu
            :menuStatus="activeMenuIndex === 3"
            :type="localTags.statuses.type"
            :tags="localTags.statuses.tags"
            class="tagsMenusGalleryWrapper"
            @checkForStatus="toggleActiveMenuIndex(3)"
            @closeTagsMenu="closeTagsMenu(3)"
          />
          <GeneralTagsMenu
            :menuStatus="activeMenuIndex === 4"
            :type="localTags.genders.type"
            :tags="localTags.genders.tags"
            class="tagsMenusGalleryWrapper"
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
