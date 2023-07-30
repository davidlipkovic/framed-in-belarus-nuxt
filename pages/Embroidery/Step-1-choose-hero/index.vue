<script setup>
import { computed, onMounted, reactive, ref } from "vue"

import { useHeroesStore } from "@/stores/heroes"
import { useTagsMenuHandler } from "@/composables/TagsMenuHandler";

const heroesStore = useHeroesStore();
const { activeMenuIndex, closeTagsMenu, toggleActiveMenuIndex } = useTagsMenuHandler();

definePageMeta({
  layout: "embroidery"
})

const rangeIndex = ref(0)
const rangePerPage = ref(16)
const localHeroes = computed(() => heroesStore.originalHeroes.value.slice(rangeIndex.value, rangeIndex.value + rangePerPage.value))
const localTags = computed(() => heroesStore.tags.value)

const heroesAlphabetically = computed(() => localHeroes.value.sort((a, b) => a.name - b.name))
const heroesAlphabeticallyReversed = computed(() => localHeroes.value.sort((a, b) => a.name - b.name))
// const heroesAlphabetically = computed(() => localHeroes.value.sort((a, b) => a.name - b.name))
// const heroesAlphabeticallyReversed = computed(() => localHeroes.value.sort((a, b) => a.name - b.name))

const currentPage = computed(() => Number((rangeIndex.value / rangePerPage.value + 1).toFixed()))
const numberOfPages = computed(() => Number((heroesStore.originalHeroes.value.length / rangePerPage.value + 0.5).toFixed()))

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
              @checkForStatus="toggleActiveMenuIndex(2)"
              @closeTagsMenu="closeTagsMenu(2)"
            />
            <GeneralTagsMenu
              :menuStatus="activeMenuIndex === 3"
              :type="localTags.statuses.type"
              :tags="localTags.statuses.tags"
              @checkForStatus="toggleActiveMenuIndex(3)"
              @closeTagsMenu="closeTagsMenu(3)"
            />
            <GeneralTagsMenu
              :menuStatus="activeMenuIndex === 4"
              :type="localTags.genders.type"
              :tags="localTags.genders.tags"
              @checkForStatus="toggleActiveMenuIndex(4)"
              @closeTagsMenu="closeTagsMenu(4)"
            />
          </div>
        </div>
        <div class="searchResultsWrapper">
          <RegistrationHeroBox
            v-for="hero in localHeroes" 
            :key="hero.id"
            :hero="hero"
          />
        </div>
        <GeneralPagination
          :currentPage="currentPage"
          :numberOfPages="numberOfPages"
          @change-page-index-to="changePageIndex"
        />
        <!-- <div id="default">
          <p class="alignCenter">
            <span class="block">OR</span>
            You can let us choose a hero for you automatically
          </p>
          <div class="buttons">
            <nuxt-link
              to="/Embroidery/Step-1-your-hero"
              class="button randomHero"
            >
              Choose a hero automatically
            </nuxt-link>
          </div>
        </div>

        <div class="mistake" id="heroHasBeenChosen" hidden>
          <h2>Sorry, this hero has already been chosen</h2>
          <p>You can see the embroidery <nuxt-link to="/Gallery">here</nuxt-link></p>
          <p>Please choose another hero.</p>
          <div class="buttons">
            <button class="button randomHero">Choose a hero automatically</button>
          </div>
        </div>

        <div class="mistake" id="heroDontHavePattern" hidden>
          <h2>Sorry, we don't have a pattern for this hero yet</h2>
          <p>If you really want this hero, please <strong>leave a request for a pattern</strong> in this section.</p>
          <p>To create a pattern  please help us by telling the hero's story. </p>
          <p>What he/she is into, what their work was, whether he/she has children or pets, etc.</p>
          <p>Often one-sided information can be found from Belarusian government sources, describing only the side of the prosecution. If you know the details and reasons for your hero's detention, please provide them. This may also help in creating a pattern.</p>
          <p>Rufina creates all the patterns by herself, so the process of creating a new pattern can take 2-3 months.</p>
          <p>Thank you for your understanding!</p>
          <div class="buttons">
            <button class="button">Leave a request</button>
            <button class="button randomHero">Choose a hero automatically</button>
          </div>
        </div> -->
      </section>
    </div>
  </main>
</template>

<style src="../../../assets/style/search.scss" lang="scss" scoped></style>
<style src="../../../assets/style/form.scss" lang="scss" scoped></style>
<style src="../../../assets/style/steps.scss" lang="scss" scoped></style>
<style src="./Step-1-choose-hero.scss" lang="scss" scoped></style>
