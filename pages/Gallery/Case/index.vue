<script setup>
import { onMounted, ref, watch } from 'vue'

import { useHeroesStore } from "@/stores/heroes"
import { useUserStore } from "@/stores/user"

const heroesStore = useHeroesStore();
const userStore = useUserStore()

const slides = [
  {alt: ""},
  {alt: ""},
  {alt: ""},
  {alt: ""},
  {alt: ""},
]

const currentFullScreenEmbroiderySlide = ref(0)
const showFullScreenEmbroiderySwiper = ref(false)

const handleFullScreenEmbroiderySwiper = (i) => {
  showFullScreenEmbroiderySwiper.value = true
  currentFullScreenEmbroiderySlide.value = i
}

const currentGallerySlide = ref(0)
const showGallerySwiper = ref(false)

const handleGallerySwiper = (i) => {
  showGallerySwiper.value = true
  currentGallerySlide.value = i
}

// WIP
const localHero = computed(() => {
  return {
    "id": 215,
    "url": "https://prisoners.spring96.org/en/person/maryja-kalesnikava",
    "name": "Maryia Kalesnikava",
    "status": "active",
    "gender": "female",
    "photo": "https://spring96.org/files/images/kalesnikava.jpg",
    "description": "member of the presidium of the Coordination Council, head of the campaign headquarters of former presidential nominee Viktar Babaryka, sentenced to 11 years in prison",
    "birthday": "24 April 1982",
    "arrested": "7 September 2020",
    "articles/0": "Art. 361 of the Criminal Code — Calls for actions aimed at causing harm to the national security of the Republic of Belarus",
    "articles/1": "Art. 357 of the Criminal Code — Conspiracy to seize power in an unconstitutional way",
    "articles/2": "Art. 361-1 of the Criminal Code — Creation of an extremist formation, or participation in it",
    "articles/3": "",
    "prison/title": "Penal colony No. 4",
    "prison/address": "246035, Homieĺ, vulica Antoshkina 3",
    "declaration": "https://spring96.org/en/news/99460",
    "decision": "11 years",
    "penalty": "imprisonment in a general-security penal colony",
    "judge": "Siarhei Yepikhau",
    "councel": "",
    "penalty_start_date": "",
    "release_date": "",
    "verdict_date": "6 September 2021",
    "appeal_date": "24 December 2021",
    "articles": "",
    "prison": "",
    "articles/4": "",
    "articles/5": "",
    "articles/6": "",
    "articles/7": "",
    "articles/8": "",
    "articles/9": "",
    "articles/10": "",
    "articles/11": "",
    "articles/12": ""
  }
})

// WIP
const author = {
  comment: 'I chose to participate in this project not only because I was an avid stitcher, but the 2020 protests in Belarus reminded me of the 2019 protests in Hong Kong, my father\'s hometown. Although their protest origins were slightly different from each other, they both still share a common goal, which was to fight against authoritarian rule and government repression. The portrait I chose and stitched was of musician/politician Maria Kalesnikava, who was kidnapped by unidentified law enforcement officers in 2020 and sentenced to eleven years in prison in 2021 for her political activity. Rufina\'s Instagram stories clip of Maria creating a heart sign during her trial in Belarus appeared in my Instagram feed, reminded me very much of another well-known female politician in Hong Kong, who, along with 46 other lawmakers and politicians, were arrested under the National Security Law for "subversion", when they were only participating in primary elections for the 2020 LegCo elections. Stitching her portrait was therapeutic for me, particularly when I was in isolation due to a health issue, and I felt that I was contributing to both Belarus and Hong Kong.',
  nativeComment: 'I chose to participate in this project not only because I was an avid stitcher, but the 2020 protests in Belarus reminded me of the 2019 protests in Hong Kong, my father\'s hometown. Although their protest origins were slightly different from each other, they both still share a common goal, which was to fight against authoritarian rule and government repression. The portrait I chose and stitched was of musician/politician Maria Kalesnikava, who was kidnapped by unidentified law enforcement officers in 2020 and sentenced to eleven years in prison in 2021 for her political activity. Rufina\'s Instagram stories clip of Maria creating a heart sign during her trial in Belarus appeared in my Instagram feed, reminded me very much of another well-known female politician in Hong Kong, who, along with 46 other lawmakers and politicians, were arrested under the National Security Law for "subversion", when they were only participating in primary elections for the 2020 LegCo elections. Stitching her portrait was therapeutic for me, particularly when I was in isolation due to a health issue, and I felt that I was contributing to both Belarus and Hong Kong.',
  reason: 'I chose to participate in this project not only because I was an avid stitcher, but the 2020 protests in Belarus reminded me of the 2019 protests in Hong Kong, my father\'s hometown. Although their protest origins were slightly different from each other, they both still share a common goal, which was to fight against authoritarian rule and government repression. The portrait I chose and stitched was of musician/politician Maria Kalesnikava, who was kidnapped by unidentified law enforcement officers in 2020 and sentenced to eleven years in prison in 2021 for her political activity. Rufina\'s Instagram stories clip of Maria creating a heart sign during her trial in Belarus appeared in my Instagram feed, reminded me very much of another well-known female politician in Hong Kong, who, along with 46 other lawmakers and politicians, were arrested under the National Security Law for "subversion", when they were only participating in primary elections for the 2020 LegCo elections. Stitching her portrait was therapeutic for me, particularly when I was in isolation due to a health issue, and I felt that I was contributing to both Belarus and Hong Kong.',
}

const images = import.meta.glob('@/assets/media/img/swiper/*.jpg', { eager: true })
</script>

<template>
  <main class="Content galleryCaseWrapper">
    <div class="Title">
      <div class="content">
        <h1>
          <span class="subtitle">
          Case: Seizure of power
          <span class="visually-hidden">— </span></span>
          Maryia Kalesnikava
        </h1>
        <GeneralGoBack
          page="Gallery"
        />
      </div>
    </div>
    <div class="content galleryCaseContent">
      <article class="galleryCaseSwiperWrapper">
        <!-- WIP -->
        <HomeSwiper 
          class="galleryCaseSwiper"
          :fullscreen="true"
          @openFullscreen="handleFullScreenEmbroiderySwiper"
        />
        <GeneralFullScreenSwiper
          :initialSlide="currentFullScreenEmbroiderySlide"
          :showSwiper="showFullScreenEmbroiderySwiper"
          :slides="slides"
          @closeSwiper="showFullScreenEmbroiderySwiper = false"
        />
        <p class="swiperDescription flexRowStart">
          {{ $t('casePage.swiper.stitching') }}: 360 x 360 mm | Canvas: 450 x 500 mm
        </p>
        <p class="swiperDescriptionInfo flexRowStart">
          <span>
            {{ $t('casePage.swiper.author') }}: 
          </span>
          <span class="b1">
            {{ userStore.currentUser.username }}
          </span>
        </p>
        <p class="swiperDescriptionInfo flexRowStart">
          <span>
            {{ $t('placeholders.country') }}:
          </span>
          <span class="b1">
            {{ userStore.currentUser.countryOfResidence }}
          </span>
        </p>
        <p class="swiperDescriptionInfo flexRowStart">
          <span>
            {{ $t('placeholders.instagram') }}:
          </span>
          <span class="b1">
            {{ userStore.currentUser.instagram }}
          </span>
        </p>
      </article>
      <article>
        <div class="caseHeaderWrapper flexRowStart">
          <img 
            v-if="!localHero.photo || localHero.photo === '' || localHero.photo === 'FALSE'"
            src="../../../assets/media/img/profileSymbolFramed.svg"
            :alt="'Photo of' + localHero.name"
            class="Description-item Hero-photo"
          >
          <GeneralImageModal
            v-else
            alt=""
            :fullImageUrl="localHero.photo"
            :iconImageUrl="localHero.photo"
            class="Description-item Hero-photo Hero-photoModal"
          />
          <div class="caseBioWrapper flexCoulmnStart">
            <div class="Description-item">
              <h3 class="title">
                {{ $t('casePage.description.birth') }}:
              </h3>
              <p>
                {{ localHero.birthday }}
              </p>
            </div>
            <div class="Description-item">
              <h3 class="title">
                {{ $t('casePage.description.detention') }}:
              </h3>
              <p>
                {{ localHero.arrested }}
              </p>
            </div>
            <div class="Description-item">
              <h3 class="title">
                {{ $t('casePage.description.sentence') }}:
              </h3>
              <p>
                {{ localHero.decision }}
              </p>
            </div>
          </div>
        </div>
        <div class="Description-item">
          <h3 class="title">
            {{ $t('casePage.description.descriptionCase') }}:
          </h3>
          <p>
            The case description is the same as the political prisoner’s
            description because this is an individual case, not a collective
            one.
          </p>
          <p class="additionalInfo">
            {{ $t('casePage.description.seeMore.content') }}
            <a 
              href="#" 
              class="red"
            >
              {{ $t('casePage.description.seeMore.highlight') }}
              <SvgLink/>
            </a>
          </p>
        </div>
        <div class="Description-item">
          <h3 class="title">
            {{ $t('casePage.description.descriptionPrisoner') }}:
          </h3>
          <p>
            The case description is the same as the political prisoner’s
            description because this is an individual case, not a collective
            one.
          </p>
        </div>
        <div class="Description-item">
          <h3 class="title">
            {{ $t('casePage.description.address') }}:
          </h3>
          <p>
            {{ localHero['prison/title'] }}
          </p>
          <a href="#" target="_blank" class="additionalInfo red">
            {{ $t('casePage.description.goToSource') }} <SvgLink/>
          </a>
        </div>
        <h2 class="Description-item Description-item_title">
          {{ $t('casePage.author.title') }}
        </h2>
        <GeneralToggleText 
          v-if="author.reason"
          class="Description-item"
          :message="author.reason"
          :title="$t('casePage.author.reason')"
        />
        <GeneralToggleText 
          v-if="author.comment"
          class="Description-item"
          :message="author.comment"
          :title="$t('casePage.author.comment')"
        />
        <GeneralToggleText 
          v-if="author.nativeComment"
          class="Description-item"
          :message="author.nativeComment"
          :title="$t('casePage.author.nativeComment')"
        />
        <div class="galleryWrapper">
          <img
            v-for="(slide, i) in slides"
            :key="slide.alt"
            :src="images[`/assets/media/img/swiper/${ i + 1 }.jpg`].default"
            :alt="`${slide.alt}`"
            @click="handleGallerySwiper(showGallerySwiper, i)"
          />
        </div>
        <GeneralFullScreenSwiper
          :initialSlide="currentGallerySlide"
          :showSwiper="showGallerySwiper"
          :slides="slides"
          @closeSwiper="showGallerySwiper = false"
        />
        <div class="Description-item exhibitionsWrapper">
          <h2 class="Description-item Description-item_title">
            {{ $t('casePage.exhibitions.title') }}
          </h2>
          <ul class="ExhibitionList">
            <li class="ExhibitionList-item">
              <h4 class="ExhibitionListItem-title">
                <a href="#">
                  The little bird must be caught
                </a>
              </h4>
              <p class="ExhibitionListItem-descript flexRowStart">
                <SvgCalendar class="ExhibitionListItem-descript-icon descriptIcon"/>
                18.11.2022 - 23.04.2023
              </p>
              <p class="ExhibitionListItem-descript flexRowStart">
                <SvgLocation class="ExhibitionListItem-descript-icon descriptIcon"/>
                <span>
                  Weserburg Museum für Moderne Kunst.
                </span>
                <span class="museumCountry">
                  Bremen, <b class="b2">Germany</b>
                </span>
              </p>
            </li>
          </ul>
        </div>
      </article>
    </div>
  </main>
</template>

<style src="./Case.scss" lang="scss"></style>

