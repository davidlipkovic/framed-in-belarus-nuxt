<script setup>
import { computed, onMounted, reactive, ref, watch } from "vue"
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
  handleSearch,
  numberOfPages,
  parseData,
  rangePerPage,
  searchQuery,
  temporarySearchQuery,
  toggleActiveMenuIndex,
  updateSortOrder,
  updateTags,
} = useSearch();

definePageMeta({
  layout: "embroidery"
})

const localTags = computed(() => heroesStore.tags.value)
const parsedHeroes = computed(() => parseData(heroesStore, 'heroes'))

onMounted(() => {
  numberOfPages.value = Number((heroesStore.originalHeroes.value.length / rangePerPage.value + 0.5).toFixed())
})

const alreadyChosen = computed(() => {
  return parsedHeroes.value.some(hero => hero.chosen) || (searchQuery.value === 'alreadyChosen' && searchQuery.value !== 'noPattern' && searchQuery.value !== 'notInDatabase')
})

const linkToAlreadyChosen = computed(() => {
  return 'aa'
})

const noPattern = computed(() => {
  return parsedHeroes.value.some(hero => hero.hasPattern) || (searchQuery.value !== 'alreadyChosen' && searchQuery.value === 'noPattern' && searchQuery.value !== 'notInDatabase')
})

const notInDatabase = computed(() => {
  return !parsedHeroes.value.length || (searchQuery.value !== 'alreadyChosen' && searchQuery.value !== 'noPattern' && searchQuery.value === 'notInDatabase')
})

const displayRequestModal = ref(false)
const requestDescription = ref(null)
const requestName = ref(null)
const requestNotSent = ref(true)

watch(route, () => {
  if (route.query.order) {
    currentOrder.value = route.query.order
  }

  if (route.query.search !== null) {
    searchQuery.value = route.query.search
    temporarySearchQuery.value = route.query.search
  }

  for (const key in route.query) {
    if (key === 'order' || key === 'search') continue
    currentTags.value[key] = route.query[key]
  }
}, { immediate: true })
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
                v-model="temporarySearchQuery"
                @input="handleSearch()"
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
              @checkForTag="updateTags"
              @checkForStatus="toggleActiveMenuIndex(2)"
              @closeTagsMenu="closeTagsMenu(2)"
            />
            <GeneralTagsMenu
              :currentTag="currentTags.status"
              :menuStatus="activeMenuIndex === 3"
              type="status"
              :tags="localTags.status"
              @checkForTag="updateTags"
              @checkForStatus="toggleActiveMenuIndex(3)"
              @closeTagsMenu="closeTagsMenu(3)"
            />
            <GeneralTagsMenu
              :currentTag="currentTags.gender"
              :menuStatus="activeMenuIndex === 4"
              type="gender"
              :tags="localTags.gender"
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
          <button 
            class="button"
            @click="displayRequestModal = true"
          >
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
    <GeneralInputModal
      class="requestModal"
      @closeModal="displayRequestModal = false"
      :displayModal="displayRequestModal"
    >
      <div class="inputModalContentWrapper">
        <div class="inputModalHeader flexRowStart">
          <h2 
            v-if="requestNotSent"
            class="title"
          >
            {{ $t('embroidery.step1Page.requestModal.request.title') }}
          </h2>
          <button
            @click="displayRequestModal = false"
            class="closeButton"
          >
            <SvgClose/>
          </button>
        </div>
        <div class="inputModalBody flexColumnCenter">
          <template v-if="requestNotSent">
            <div class="inputModalRow flexRowStart">
              <div class="inputModalItem inputModalItemFullWidth inputModalItemTextarea flexColumnStart">
                <textarea 
                  type="text" 
                  name="requestName" 
                  id="requestName"
                  :placeholder="$t('embroidery.step1Page.requestModal.request.requestName')" 
                  class="contentInput requestNameInput"
                  v-model="requestName"
                />
              </div>
            </div>
            <div class="inputModalRow flexRowStart">
              <div class="inputModalItem inputModalItemFullWidth inputModalItemTextarea flexColumnStart">
                <textarea 
                  type="text" 
                  name="requestDescription" 
                  id="requestDescription"
                  :placeholder="$t('embroidery.step1Page.requestModal.request.requestDescription')" 
                  class="contentInput requestDescriptionInput"
                  v-model="requestDescription"
                />
              </div>
            </div>
          </template>
          <template v-else>
            <div 
              class="inputModalItem inputModalItemFullWidth flexColumnCenter"
              :class="{'requestModalItemSentWrapper' : !requestNotSent}"
            >
              <SvgCheckMark class="checkMarkIconWrapper flexColumnCenter"/>
              <h2 class="title">
                {{ $t('embroidery.step1Page.requestModal.success.title') }}
              </h2>
              <span>
                {{ $t('embroidery.step1Page.requestModal.success.content') }}
              </span>
            </div>
          </template>
        </div>
        <div class="inputModalFooter buttons">
          <template v-if="requestNotSent">
            <button 
              class="button" 
              @click="displayRequestModal = false"
            >
              {{ $t('buttons.cancel') }}
            </button>
            <button 
              class="button"
              :class="{'button_disabled': !(requestName && requestDescription), 'bg_black': requestName && requestDescription}" 
              @click="requestNotSent = false"
            >
              {{ $t('buttons.send') }}
            </button>
          </template>
          <template v-else>
            <nuxt-link
              :to="localePath('/Profile')"
              class="button"
            >
              {{ $t('embroidery.step1Page.requestModal.success.button1') }}
            </nuxt-link>
            <button
              class="button bg_black"
              @click="displayRequestModal = false"
            >
              {{ $t('embroidery.step1Page.requestModal.success.button2') }}
            </button>
          </template>
        </div>
      </div>
    </GeneralInputModal>
  </main>
</template>

<style src="../../../assets/style/search.scss" lang="scss" scoped></style>
<style src="./Step-1-choose-hero.scss" lang="scss" scoped></style>
