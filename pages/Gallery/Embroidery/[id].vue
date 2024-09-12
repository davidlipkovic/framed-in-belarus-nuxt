<script setup>
import { onMounted, ref, watch } from 'vue'

import useGalleryStore from "@/stores/gallery"
import { useCurrentLocale } from "@/composables/CurrentLocale"

const galleryStore = useGalleryStore()
const { getCurrentLocaleStringValue } = useCurrentLocale()

definePageMeta({
  middleware: [
    'auth-general',
    'gallery-embroidery',
  ],
})

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
const author = {
  comment: 'I chose to participate in this project not only because I was an avid stitcher, but the 2020 protests in Belarus reminded me of the 2019 protests in Hong Kong, my father\'s hometown. Although their protest origins were slightly different from each other, they both still share a common goal, which was to fight against authoritarian rule and government repression. The portrait I chose and stitched was of musician/politician Maria Kalesnikava, who was kidnapped by unidentified law enforcement officers in 2020 and sentenced to eleven years in prison in 2021 for her political activity. Rufina\'s Instagram stories clip of Maria creating a heart sign during her trial in Belarus appeared in my Instagram feed, reminded me very much of another well-known female politician in Hong Kong, who, along with 46 other lawmakers and politicians, were arrested under the National Security Law for "subversion", when they were only participating in primary elections for the 2020 LegCo elections. Stitching her portrait was therapeutic for me, particularly when I was in isolation due to a health issue, and I felt that I was contributing to both Belarus and Hong Kong.',
  nativeComment: 'I chose to participate in this project not only because I was an avid stitcher, but the 2020 protests in Belarus reminded me of the 2019 protests in Hong Kong, my father\'s hometown. Although their protest origins were slightly different from each other, they both still share a common goal, which was to fight against authoritarian rule and government repression. The portrait I chose and stitched was of musician/politician Maria Kalesnikava, who was kidnapped by unidentified law enforcement officers in 2020 and sentenced to eleven years in prison in 2021 for her political activity. Rufina\'s Instagram stories clip of Maria creating a heart sign during her trial in Belarus appeared in my Instagram feed, reminded me very much of another well-known female politician in Hong Kong, who, along with 46 other lawmakers and politicians, were arrested under the National Security Law for "subversion", when they were only participating in primary elections for the 2020 LegCo elections. Stitching her portrait was therapeutic for me, particularly when I was in isolation due to a health issue, and I felt that I was contributing to both Belarus and Hong Kong.',
  reason: 'I chose to participate in this project not only because I was an avid stitcher, but the 2020 protests in Belarus reminded me of the 2019 protests in Hong Kong, my father\'s hometown. Although their protest origins were slightly different from each other, they both still share a common goal, which was to fight against authoritarian rule and government repression. The portrait I chose and stitched was of musician/politician Maria Kalesnikava, who was kidnapped by unidentified law enforcement officers in 2020 and sentenced to eleven years in prison in 2021 for her political activity. Rufina\'s Instagram stories clip of Maria creating a heart sign during her trial in Belarus appeared in my Instagram feed, reminded me very much of another well-known female politician in Hong Kong, who, along with 46 other lawmakers and politicians, were arrested under the National Security Law for "subversion", when they were only participating in primary elections for the 2020 LegCo elections. Stitching her portrait was therapeutic for me, particularly when I was in isolation due to a health issue, and I felt that I was contributing to both Belarus and Hong Kong.',
}

const images = import.meta.glob('@/assets/media/img/swiper/*.jpg', { eager: true })

const caseName = computed(() => {
  return getCurrentLocaleStringValue(galleryStore.currentEmbroidery.prisoner.prisonerCase[0], 'caseName_')
})

const caseDescription = computed(() => {
  return getCurrentLocaleStringValue(galleryStore.currentEmbroidery.prisoner.prisonerCase[0], 'description_')
})

const prisonerDescription = computed(() => {
  return getCurrentLocaleStringValue(galleryStore.currentEmbroidery.prisoner, 'description_')
})
</script>

<template>
  <main class="Content galleryCaseWrapper">
    <div class="Title">
      <div class="content">
        <h1>
          <span class="subtitle">
          Case: Seizure of power
          {{ caseName }}
          <span class="visually-hidden">— </span></span>
          {{ galleryStore.currentEmbroidery.prisoner.name }}
        </h1>
        <GeneralGoBack
          page="Gallery"
        />
      </div>
    </div>
    <div class="content galleryCaseContent">
      <article class="galleryCaseSwiperWrapper">
        <!-- WIP -->
        <GeneralSwiper 
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
          {{ $t('casePage.swiper.stitching') }}: {{ galleryStore.currentEmbroidery.stitchingSize }} mm | Canvas: {{ galleryStore.currentEmbroidery.canvasSize }} mm
        </p>
        <p class="swiperDescriptionInfo flexRowStart">
          <span>
            {{ $t('casePage.swiper.author') }}: 
          </span>
          <span
            v-if="galleryStore.currentEmbroidery.name"
            class="b1"
          >
            {{ galleryStore.currentEmbroidery.name }}
          </span>
        </p>
        <p 
          v-if="galleryStore.currentEmbroidery.countryOfResidence"
          class="swiperDescriptionInfo flexRowStart"
        >
          <span>
            {{ $t('placeholders.country') }}:
          </span>
          <span class="b1">
            {{ galleryStore.currentEmbroidery.countryOfResidence }}
          </span>
        </p>
        <p 
          v-if="galleryStore.currentEmbroidery.instagram"
          class="swiperDescriptionInfo flexRowStart"
        >
          <span>
            {{ $t('placeholders.instagram') }}:
          </span>
          <span class="b1">
            {{ galleryStore.currentEmbroidery.instagram }}
          </span>
        </p>
      </article>
      <article>
        <div class="caseHeaderWrapper flexRowStart">
          <img 
            v-if="!galleryStore.currentEmbroidery.prisoner.photo || galleryStore.currentEmbroidery.prisoner.photo === '' || galleryStore.currentEmbroidery.prisoner.photo === 'FALSE'"
            src="../../../assets/media/img/profileSymbolFramed.svg"
            :alt="'Photo of' + galleryStore.currentEmbroidery.prisoner.name"
            class="Description-item Hero-photo"
          >
          <GeneralImageModal
            v-else
            alt=""
            :fullImageUrl="galleryStore.currentEmbroidery.prisoner.photo"
            :iconImageUrl="galleryStore.currentEmbroidery.prisoner.photo"
            class="Description-item Hero-photo Hero-photoModal"
          />
          <div class="caseBioWrapper flexCoulmnStart">
            <div 
              v-if="galleryStore.currentEmbroidery.prisoner.birthday"
              class="Description-item"
            >
              <h3 class="title">
                {{ $t('casePage.description.birth') }}:
              </h3>
              <p>
                {{ galleryStore.currentEmbroidery.prisoner.birthday }}
              </p>
            </div>
            <div 
              v-if="galleryStore.currentEmbroidery.prisoner.dateOfDetention"
              class="Description-item"
            >
              <h3 class="title">
                {{ $t('casePage.description.detention') }}:
              </h3>
              <p>
                {{ galleryStore.currentEmbroidery.prisoner.dateOfDetention }}
              </p>
            </div>
            <div 
              v-if="galleryStore.currentEmbroidery.prisoner.sentence"
              class="Description-item"
            >
              <h3 class="title">
                {{ $t('casePage.description.sentence') }}:
              </h3>
              <p>
                {{ galleryStore.currentEmbroidery.prisoner.sentence }}
              </p>
            </div>
          </div>
        </div>
        <div 
          v-if="caseDescription"
          class="Description-item"
        >
          <h3 class="title">
            {{ $t('casePage.description.descriptionCase') }}:
          </h3>
          <p>
            {{ caseDescription }}
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
        <div 
          v-if="prisonerDescription && prisonerDescription.length > 2"
          class="Description-item"
        >
          <h3 class="title">
            {{ $t('casePage.description.descriptionPrisoner') }}:
          </h3>
          <p>
            {{ prisonerDescription }}
          </p>
        </div>
        <div 
          v-if="galleryStore.currentEmbroidery.prisoner.address || galleryStore.currentEmbroidery.prisoner.viasnaUrl"
          class="Description-item"
        >
          <template v-if="galleryStore.currentEmbroidery.prisoner.address">
            <h3 class="title">
              {{ $t('casePage.description.address') }}:
            </h3>
            <p>
              {{ galleryStore.currentEmbroidery.prisoner.address }}
            </p>
          </template>
          <a 
            v-if="galleryStore.currentEmbroidery.prisoner.viasnaUrl"
            :href="galleryStore.currentEmbroidery.prisoner.viasnaUrl" 
            target="_blank" 
            class="additionalInfo red"
          >
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
            :src="images[`/assets/media/img/swiper/0${ i + 1 }-1x.jpg`].default"
            :alt="`${slide.alt}`"
            @click="handleGallerySwiper(i)"
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

<style src="./Embroidery.scss" lang="scss"></style>

