<script setup>
import { computed, onMounted, reactive, ref } from "vue"

import { useHeroesStore } from "@/stores/heroes"
import { useTagsMenuHandler } from "@/composables/TagsMenuHandler";

const heroesStore = useHeroesStore();
const { activeMenuIndex, closeTagsMenu, toggleActiveMenuIndex } = useTagsMenuHandler();

useHead({
  title: '#Framed in Belarus / Gallery',
  meta: [
    { name: 'description', content: 'User cabinet — My embroideries description' }
  ]
})

const rangeIndex = ref(0)
const rangePerPage = ref(15)
const localTags = computed(() => heroesStore.tags.value)

const currentPage = computed(() => Number((rangeIndex.value / rangePerPage.value + 1).toFixed()))
const numberOfPages = ref(50)

const changePageIndex = (index) => {
   if (index === 'first') { 
    rangeIndex.value = 0
  } else if (index === -1) {
    rangeIndex.value = rangeIndex.value - rangePerPage.value
  } else if (index === 1) { 
    rangeIndex.value = rangeIndex.value + rangePerPage.value
  } else if (index === 'last') { 
    rangeIndex.value = heroesStore.originalHeroes.value.length - rangePerPage.value
  }
}
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
        <div class="searchInputWrapper">
          <input 
            type="text" 
            class="search" 
            :placeholder="$t('placeholders.searchHero')"
            :aria-placeholder="$t('placeholders.searchHero')"
          >
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
        <nuxt-link
          v-for="item in rangePerPage"
          :key="item"
          to="/Gallery/Case"
          class="galleryBox"
        >
          <img 
            src="../../assets/media/img/swiper/1.jpg" 
            alt="Case name" 
          >
        </nuxt-link>
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
