<script setup>
import { onMounted, ref, watch } from 'vue'
import useGalleryStore from "@/stores/gallery"
import { useCheckImage } from "@/composables/CheckImage"
import { useConvertDate } from "@/composables/ConvertDate"
import { useCurrentLocale } from "@/composables/CurrentLocale"
import { useRemoveNull } from "@/composables/RemoveNull"

const galleryStore = useGalleryStore()
const { checkImage } = useCheckImage()
const { convertDateToReadable } = useConvertDate()
const { getCurrentLocaleStringValue } = useCurrentLocale()
const { removeNullItems } = useRemoveNull()

definePageMeta({
  middleware: [
    'auth-general',
    'gallery-embroidery',
  ],
})

const currentFullScreenEmbroiderySlide = ref(0)
const showFullScreenEmbroiderySwiper = ref(false)
const showPrisonerImage = ref(false)

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

const caseName = computed(() => {
  // WIP placeholder
  if (!galleryStore.currentEmbroidery.prisoner.prisonerCase[0]['caseName_eng']) {
    return 'Seizure of power'
  }

  return getCurrentLocaleStringValue(galleryStore.currentEmbroidery.prisoner.prisonerCase[0], 'caseName_')
})

const caseDescription = computed(() => {
  return getCurrentLocaleStringValue(galleryStore.currentEmbroidery.prisoner.prisonerCase[0], 'description_')
})

const prisonerName = computed(() => {
  return getCurrentLocaleStringValue(galleryStore.currentEmbroidery.prisoner, 'name_')
})

const prisonerDescription = computed(() => {
  return getCurrentLocaleStringValue(galleryStore.currentEmbroidery.prisoner, 'description_')
})

const prisonerSentence = computed(() => {
  return getCurrentLocaleStringValue(galleryStore.currentEmbroidery.prisoner, 'sentence_')
})

const embroiderySlides = computed(() => {
  return removeNullItems([
    galleryStore.currentEmbroidery.imageData,
    galleryStore.currentEmbroidery.imageBackedData,
  ])
})

const processSlides = computed(() => {
  return removeNullItems([
    ...galleryStore.currentEmbroidery.imagesData,
    galleryStore.currentEmbroidery.comment.ApprovedHandwrittenAll[0].thumbnails,
  ])
})

const slides = computed(() => {
  return removeNullItems([
    ...embroiderySlides.value,
    ...processSlides.value,
  ])
})

onMounted(() => {
  if (!galleryStore.currentEmbroidery.prisoner.photo || galleryStore.currentEmbroidery.prisoner.photo === '' || galleryStore.currentEmbroidery.prisoner.photo === 'FALSE') {
    return
  }

  checkImage(galleryStore.currentEmbroidery.prisoner.photo, showPrisonerImage)
})
</script>

<template>
  <main class="Content galleryCaseWrapper">
    <div class="Title">
      <div class="content">
        <h1>
          <span class="subtitle">
            {{ $t('casePage.description.case') }}: {{ caseName }}
          <span class="visually-hidden">— </span></span>
          {{ prisonerName }}
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
          :slides="embroiderySlides"
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
          <span class="b1">
            <template v-if="galleryStore.currentEmbroidery.name">
              {{ galleryStore.currentEmbroidery.name }}
            </template>
            <template v-else>
              {{ $t('casePage.swiper.anonymous') }}
            </template>
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
          <!-- <img 
            v-if="!showPrisonerImage || !galleryStore.currentEmbroidery.prisoner.photo || galleryStore.currentEmbroidery.prisoner.photo === '' || galleryStore.currentEmbroidery.prisoner.photo === 'FALSE'"
            src="../../../assets/media/img/profileSymbolFramed.svg"
            :alt="'Photo of' + galleryStore.currentEmbroidery.prisoner.name"
            class="Description-item Hero-photo"
          > -->
          <GeneralImageModal
            v-if="!(!showPrisonerImage || !galleryStore.currentEmbroidery.prisoner.photo || galleryStore.currentEmbroidery.prisoner.photo === '' || galleryStore.currentEmbroidery.prisoner.photo === 'FALSE')"
            alt=""
            :fullImageUrl="galleryStore.currentEmbroidery.prisoner.photo"
            :iconImageUrl="galleryStore.currentEmbroidery.prisoner.photo"
            class="Description-item Hero-photo Hero-photoModal"
          />
          <div class="caseBioWrapper flexColumnStart">
            <p 
              v-if="galleryStore.currentEmbroidery.prisoner.dateOfBirth"
              class="Description-item"
            >
              <span class="title">
                {{ $t('casePage.description.birth') }}:&nbsp;
              </span>
              {{ convertDateToReadable(galleryStore.currentEmbroidery.prisoner.dateOfBirth) }}
            </p>
            <p 
              v-if="galleryStore.currentEmbroidery.prisoner.dateOfDetention"
              class="Description-item"
            >
              <span class="title">
                {{ $t('casePage.description.detention') }}:&nbsp;
              </span>
              {{ convertDateToReadable(galleryStore.currentEmbroidery.prisoner.dateOfDetention) }}
            </p>
            <p 
              v-if="prisonerSentence"
              class="Description-item"
            >
              <span class="title">
                {{ $t('casePage.description.sentence') }}:&nbsp;
              </span>
              {{ prisonerSentence }}
            </p>
            <p 
              v-if="galleryStore.currentEmbroidery.prisoner.dateOfRelease"
              class="Description-item"
            >
              <span class="title">
                {{ $t('casePage.description.release') }}:&nbsp;
              </span>
              {{ convertDateToReadable(galleryStore.currentEmbroidery.prisoner.dateOfRelease) }}
            </p>
          </div>
        </div>
        <GeneralToggleText 
          v-if="caseDescription && caseDescription.length > 2"
          class="Description-item"
          :message="caseDescription"
          :title="$t('casePage.description.descriptionCase')"
          :source="{
            title: 'See more',
            link: '#',
          }"
        />
        <GeneralToggleText 
          v-if="prisonerDescription && prisonerDescription.length > 2"
          class="Description-item"
          :message="prisonerDescription"
          :title="$t('casePage.description.descriptionPrisoner')"
          :source="{
            title: $t('casePage.description.goToSource'),
            link: galleryStore.currentEmbroidery.prisoner.viasnaUrl,
          }"
        >
          <div 
            v-if="galleryStore.currentEmbroidery.prisoner.viasnaUrl"
            class="Description-item"
          >
            <h3 class="title">
              {{ $t('casePage.description.address') }}:
            </h3>
            <p>
              {{ galleryStore.currentEmbroidery.prisoner.viasnaUrl }}
            </p>
          </div>
        </GeneralToggleText>
        <h2 class="Description-item Description-item_title">
          {{ $t('casePage.author.title') }}
        </h2>
        <GeneralToggleText 
          v-if="galleryStore.currentEmbroidery.reason"
          class="Description-item"
          :message="galleryStore.currentEmbroidery.reason"
          :title="$t('casePage.author.reason')"
        />
        <GeneralToggleText 
          v-if="galleryStore.currentEmbroidery.comment.eng"
          class="Description-item"
          :message="galleryStore.currentEmbroidery.comment.eng"
          :title="$t('casePage.author.comment')"
        />
        <GeneralToggleText 
          v-if="galleryStore.currentEmbroidery.comment.native"
          class="Description-item"
          :message="galleryStore.currentEmbroidery.comment.native"
          :title="$t('casePage.author.nativeComment')"
        />
        <div class="galleryWrapper">
          <img
            v-for="(slide, i) in processSlides"
            :key="i"
            :src="slide.small"
            :alt="`${slide?.alt}`"
            @click="handleGallerySwiper(i + embroiderySlides.length)"
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

