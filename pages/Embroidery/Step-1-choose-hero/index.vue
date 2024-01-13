<script setup>
import { computed, onMounted, reactive, ref, watch } from "vue"
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

definePageMeta({
  layout: "embroidery"
})

const localTags = computed(() => heroesStore.tags.value)
const parsedHeroes = computed(() => parseData(sortedHeroes.value))
const sortedHeroes = computed(() => sortData(heroesStore, 'heroes'))

onMounted(() => {
  numberOfPages.value = Number((heroesStore.originalHeroes.value.length / rangePerPage.value + 0.5).toFixed())
})

const alreadyChosen = computed(() => {
  return parsedHeroes.value.some(hero => hero.chosen)
})

const linkToAlreadyChosen = computed(() => {
  return ''
})

const noPattern = computed(() => {
  return parsedHeroes.value.some(hero => hero.hasPattern)
})

const notInDatabase = computed(() => {
  return !parsedHeroes.value.length
})
</script>

<template>
  <main class="Content">
    <div class="Title">
      <div class="content">
        <h1>
          <span class="subtitle">
          {{ $t('embroidery.steps.step') }} 1 
          <span class="visually-hidden">— </span></span>
          {{ $t('embroidery.step1Page.title') }}
        </h1>
        <GeneralGoBack
          :isEmbroidery="true"
          page="Profile"
        />
      </div>
    </div>
    <div class="content">
      <RegistrationNavSteps
        :currentStep="1"
      />
      <section class="searchWrapper flexColumnnStart">
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
              @checkForOrder="updateSortOrder"
              @checkForStatus="toggleActiveMenuIndex(1)"
              @closeSortMenu="closeTagsMenu(1)"
            />
          </div>
          <div class="tagsMenusWrapper flexRowStart">
            <GeneralTagsMenu
              :menuStatus="activeMenuIndex === 2"
              :type="localTags.cases.type"
              :typeProgrammatic="localTags.cases.typeProgrammatic"
              :tags="localTags.cases.tags"
              @checkForTag="updateTags"
              @checkForStatus="toggleActiveMenuIndex(2)"
              @closeTagsMenu="closeTagsMenu(2)"
            />
            <GeneralTagsMenu
              :menuStatus="activeMenuIndex === 3"
              :type="localTags.statuses.type"
              :typeProgrammatic="localTags.statuses.typeProgrammatic"
              :tags="localTags.statuses.tags"
              @checkForTag="updateTags"
              @checkForStatus="toggleActiveMenuIndex(3)"
              @closeTagsMenu="closeTagsMenu(3)"
            />
            <GeneralTagsMenu
              :menuStatus="activeMenuIndex === 4"
              :type="localTags.genders.type"
              :typeProgrammatic="localTags.genders.typeProgrammatic"
              :tags="localTags.genders.tags"
              @checkForTag="updateTags"
              @checkForStatus="toggleActiveMenuIndex(4)"
              @closeTagsMenu="closeTagsMenu(4)"
            />
          </div>
        </div>
        <template v-if="!alreadyChosen && !noPattern && !notInDatabase">
          <div class="searchResultsWrapper">
            <GeneralResultBox
              v-for="hero in parsedHeroes" 
              :key="hero.id"
              :result="hero"
              :isEmbroidery="true"
              @click="heroesStore.setChosenHero(hero.id)"
            />
          </div>
          <GeneralPagination
            v-if="numberOfPages"
            :currentPage="currentPage"
            :numberOfPages="numberOfPages"
            @change-page-index-to="changePageIndex"
          />
        </template>
        <div 
          v-if="alreadyChosen"
          class="mistakeSearchResultsWrapper alreadyChosenWrapper flexColumnStart"
        >
          <SvgMistake/>
          <h2 class="title">
            {{ $t('embroidery.step1Page.alreadyChosen.title') }}
          </h2>
          <p v-if="linkToAlreadyChosen">
            {{ $t('embroidery.step1Page.alreadyChosen.paragraph1.content') }}
            <nuxt-link
              :to="localePath(linkToAlreadyChosen)"
              class="red b1"
            >
              {{ $t('embroidery.step1Page.alreadyChosen.paragraph1.highlight') }}
            </nuxt-link>
          </p>
          <p>
            {{ $t('embroidery.step1Page.alreadyChosen.paragraph2') }}
          </p>
        </div>
        <div 
          v-if="noPattern"
          class="mistakeSearchResultsWrapper noPatternWrapper flexColumnStart"
        >
          <SvgMistake/>
          <h2 class="title">
            {{ $t('embroidery.step1Page.noPattern.title') }}
          </h2>
          <p>
            {{ $t('embroidery.step1Page.noPattern.paragraph1.content1') }}<span class="b1">{{ $t('embroidery.step1Page.noPattern.paragraph1.highlight') }}</span>{{ $t('embroidery.step1Page.noPattern.paragraph1.content2') }}<br>
            {{ $t('embroidery.step1Page.noPattern.paragraph2') }}<br>
            {{ $t('embroidery.step1Page.noPattern.paragraph3') }}
          </p>
          <button class="button">
            {{ $t('embroidery.step1Page.noPattern.button') }}
          </button>
        </div>
        <div 
          v-if="notInDatabase"
          class="mistakeSearchResultsWrapper notInDatabaseWrapper flexColumnStart"
        >
          <SvgMistake/>
          <h2 class="title">
            {{ $t('embroidery.step1Page.notInDatabase.title') }}
          </h2>
          <p>
            {{ $t('embroidery.step1Page.notInDatabase.paragraph1') }}
          </p>
        </div>
      </section>
    </div>
  </main>
</template>

<style src="../../../assets/style/search.scss" lang="scss" scoped></style>
<style src="../../../assets/style/form.scss" lang="scss" scoped></style>
<style src="./Step-1-choose-hero.scss" lang="scss" scoped></style>
