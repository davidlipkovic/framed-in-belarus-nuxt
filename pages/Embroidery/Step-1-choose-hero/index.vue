<script setup>
import { computed, onMounted, reactive, ref, watch } from "vue"
import { useRoute } from 'vue-router'
import { useHeroesStore } from "@/stores/heroes"
import { useSearch } from "@/composables/Search";

const route = useRoute()

const heroesStore = useHeroesStore();
const {
  activeMenuIndex,
  changePageIndex,
  closeTagsMenu,
  currentOrder,
  currentPage,
  currentTags,
  handleSearch,
  handleSearchRouteWatch,
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

const noAccess = computed(() => {
  return false
})

const noMoreRequest = computed(() => {
  return false
})

const testRequestable = [
  {
      "id": 523,
      "url": "https://prisoners.spring96.org/en/person/ala-lapatka",
      "name": "Ala Lapatka",
      "status": "former",
      "gender": "female",
      "photo": "https://spring96.org/files/images/lopatko_alla.jpg",
      "description": "chief engineer at TUT.BY",
      "birthday": "1964-04-09",
      "arrested": "2021-05-18",
      "articles/0": "Art. 243 of the Criminal Code — Evasion of taxes and fees",
      "articles/1": "",
      "articles/2": "",
      "articles/3": "",
      "prison/title": "",
      "prison/address": "",
      "declaration": "https://spring96.org/en/news/103530",
      "decision": "",
      "penalty": "",
      "judge": "",
      "councel": "",
      "penalty_start_date": "",
      "release_date": "",
      "verdict_date": "",
      "appeal_date": "",
      "articles": "",
      "prison": "FALSE",
      "articles/4": "",
      "articles/5": "",
      "articles/6": "",
      "articles/7": "",
      "articles/8": "",
      "articles/9": "",
      "articles/10": "",
      "articles/11": "",
      "articles/12": "",
      "arrestedProgrammatic": "2021-05-18T00:00:00.000Z",
      "birthdayProgrammatic": "1964-04-09T00:00:00.000Z"
  },
  {
      "id": 523,
      "url": "https://prisoners.spring96.org/en/person/ala-lapatka",
      "name": "Ala Lapatka",
      "status": "former",
      "gender": "female",
      "photo": "https://spring96.org/files/images/lopatko_alla.jpg",
      "description": "chief engineer at TUT.BY",
      "birthday": "1964-04-09",
      "arrested": "2021-05-18",
      "articles/0": "Art. 243 of the Criminal Code — Evasion of taxes and fees",
      "articles/1": "",
      "articles/2": "",
      "articles/3": "",
      "prison/title": "",
      "prison/address": "",
      "declaration": "https://spring96.org/en/news/103530",
      "decision": "",
      "penalty": "",
      "judge": "",
      "councel": "",
      "penalty_start_date": "",
      "release_date": "",
      "verdict_date": "",
      "appeal_date": "",
      "articles": "",
      "prison": "FALSE",
      "articles/4": "",
      "articles/5": "",
      "articles/6": "",
      "articles/7": "",
      "articles/8": "",
      "articles/9": "",
      "articles/10": "",
      "articles/11": "",
      "articles/12": "",
      "arrestedProgrammatic": "2021-05-18T00:00:00.000Z",
      "birthdayProgrammatic": "1964-04-09T00:00:00.000Z"
  },
  {
      "id": 259,
      "url": "https://prisoners.spring96.org/en/person/ala-szarko",
      "name": "Ala Sharko",
      "status": "former",
      "gender": "female",
      "photo": "https://spring96.org/files/images/sharko_hanna.jpg",
      "description": "program director of Press Club Belarus, released",
      "birthday": "1977-08-24",
      "arrested": "2020-12-22",
      "articles/0": "Art. 243 of the Criminal Code — Evasion of taxes and fees",
      "articles/1": "",
      "articles/2": "",
      "articles/3": "",
      "prison/title": "",
      "prison/address": "",
      "declaration": "https://spring96.org/en/news/101305",
      "decision": "",
      "penalty": "",
      "judge": "",
      "councel": "",
      "penalty_start_date": "",
      "release_date": "",
      "verdict_date": "",
      "appeal_date": "",
      "articles": "",
      "prison": "FALSE",
      "articles/4": "",
      "articles/5": "",
      "articles/6": "",
      "articles/7": "",
      "articles/8": "",
      "articles/9": "",
      "articles/10": "",
      "articles/11": "",
      "articles/12": "",
      "arrestedProgrammatic": "2020-12-22T00:00:00.000Z",
      "birthdayProgrammatic": "1977-08-24T00:00:00.000Z"
  },
]

const displayRequestModal = ref(false)
const requestDescription = ref(null)
const requestName = ref(null)
const requestNotSent = ref(true)

watch(route, () => {
  handleSearchRouteWatch()
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
    <div class="content step1ChooseHeroContent">
      <RegistrationNavSteps
        :currentStep="1"
      />
      <section class="searchWrapper flexColumnnStart">
        <div class="searchMenuWrapper">
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
            <ul 
              v-if="temporarySearchQuery.length > 3"
              class="dropdownWrapper requestableSearchDropdown flexColumnStart"
              ref="dropdownWrapper"
            >
              <li
                v-for="(hero, i) in testRequestable"
                :key="i"
                class="flexRowStart"
              >
                <img 
                  :src="hero.photo" 
                  :alt="'Photo of' + hero.name"
                >
                <button>
                  {{ hero.name }}
                </button>
              </li>
            </ul>
          </div>
          <h2 class="subTitle">
            {{ $t('embroidery.step1Page.subTitle') }}
          </h2>
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
            <GeneralSortMenu 
              :menuStatus="activeMenuIndex === 1"
              :currentOrder="currentOrder"
              @checkForOrder="updateSortOrder"
              @checkForStatus="toggleActiveMenuIndex(1)"
              @closeSortMenu="closeTagsMenu(1)"
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
          v-else-if="alreadyChosen"
          class="mistakeSearchResultsWrapper alreadyChosenWrapper flexColumnStart"
        >
          <SvgMistake/>
          <h3 class="title">
            {{ $t('embroidery.step1Page.alreadyChosen.title') }}
          </h3>
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
          v-else-if="noPattern"
          class="mistakeSearchResultsWrapper noPatternWrapper flexColumnStart"
        >
          <SvgMistake/>
          <h3 class="title">
            {{ $t('embroidery.step1Page.noPattern.title') }}
          </h3>
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
          v-else-if="notInDatabase"
          class="mistakeSearchResultsWrapper notInDatabaseWrapper flexColumnStart"
        >
          <SvgMistake/>
          <h3 class="title">
            {{ $t('embroidery.step1Page.notInDatabase.title') }}
          </h3>
          <p>
            {{ $t('embroidery.step1Page.notInDatabase.paragraph1') }}
          </p>
        </div>
        <div 
          v-else-if="noAccess"
          class="mistakeSearchResultsWrapper noAccessWrapper flexColumnStart"
        >
          <SvgMistake/>
          <h3 class="title">
            {{ $t('embroidery.step1Page.noAccess.title') }}
          </h3>
          <p>
            {{ $t('embroidery.step1Page.noAccess.paragraph1') }}
          </p>
        </div>
        <div 
          v-else-if="noMoreRequest"
          class="mistakeSearchResultsWrapper noAccessWrapper flexColumnStart"
        >
          <SvgMistake/>
          <h3 class="title">
            {{ $t('embroidery.step1Page.noMoreRequest.title') }}
          </h3>
          <p>
            {{ $t('embroidery.step1Page.noMoreRequest.paragraph1') }}
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
          <h3
            v-if="requestNotSent"
            class="title"
          >
            {{ $t('embroidery.step1Page.requestModal.request.title') }}
          </h3>
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
              <h3 class="title">
                {{ $t('embroidery.step1Page.requestModal.success.title') }}
              </h3>
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
