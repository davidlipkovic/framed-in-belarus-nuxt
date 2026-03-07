<script setup>
import { onMounted, ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { useWindowSize } from '@vueuse/core'
import useGalleryStore from "@/stores/gallery"
import useUserStore from "@/stores/user"
import { useCheckImage } from "@/composables/CheckImage"
import { useConvertDate } from "@/composables/ConvertDate"
import { useCurrentLocale } from "@/composables/CurrentLocale"
import { useRemoveNull } from "@/composables/RemoveNull"

const { t } = useI18n()
const { width } = useWindowSize()
const galleryStore = useGalleryStore()
const userStore = useUserStore()
const { checkImage } = useCheckImage()
const { convertDateToReadable, convertToEventDate } = useConvertDate()
const { getCurrentLocaleStringValue } = useCurrentLocale()
const { removeNullItems } = useRemoveNull()

definePageMeta({
  middleware: [
    'auth-general',
    'gallery-embroidery',
  ],
})

const currentFullScreenSlide = ref(0)
const showFullScreenSwiper = ref(false)
const showPrisonerImage = ref(false)
const caseHeaderWrapper = ref(null)
const toggleTextScrollToTop = ref(null)

// Corections
const success = ref(false)
const successPublish = ref(false)
const publishStudioPhotosSignature = ref(null)
const publishComments = ref(null)
const publishProcessPhotosPersonalData = ref(null)
const exhibitSignature = ref(null)

const handleFullScreenSwiper = (i) => {
  showFullScreenSwiper.value = true
  currentFullScreenSlide.value = i
}

const caseName = computed(() => {
  return getCurrentLocaleStringValue(galleryStore.currentEmbroidery.prisoner.prisonerCase, 'caseName_')
})

const caseDescription = computed(() => {
  return getCurrentLocaleStringValue(galleryStore.currentEmbroidery.prisoner.prisonerCase, 'description_')
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
  ]).map((photo) => {
    return {
      small: photo.small,
      large: photo.large,
      full: photo.url,
      alt: null,
    }
  })
})

const processSlides = computed(() => {
  const author = galleryStore.currentEmbroidery.name ? galleryStore.currentEmbroidery.name : t('casePage.swiper.anonymous').toLowerCase()
  const alt = t('descriptions.photo.part1') + author + t('descriptions.photo.part2')

  const authorSlides = removeNullItems(galleryStore.currentEmbroidery.imagesData ?? []).map((photo) => {
    return {
      small: photo.small,
      large: photo.large,
      full: photo.url,
      alt
    }
  })

  if (!Array.isArray(galleryStore.currentEmbroidery.comment.imagesData) || !galleryStore.currentEmbroidery.comment.imagesData.length) {
    return authorSlides
  }

  const commentSlides = removeNullItems([...galleryStore.currentEmbroidery.comment.imagesData]).map((photo) => {
    return {
      small: photo.small,
      large: photo.large,
      full: photo.url,
      alt: null,
    }
  })

  return [
    ...authorSlides,
    ...commentSlides,
  ]
})

const showComment = computed(() => {
  return Boolean(
    galleryStore.currentEmbroidery.reason ||
    galleryStore.currentEmbroidery.comment.text_eng ||
    galleryStore.currentEmbroidery.comment.text_original ||
    (processSlides.value && processSlides.value.length > 0)
  )
})

const slides = computed(() => {
  return removeNullItems([
    ...embroiderySlides.value,
    ...processSlides.value,
  ])
})

const notification = computed(() => {
  if (
    !userStore.isUsersEmbroidery ||
    !['Prepublished', 'Editing', 'Published'].includes(galleryStore.currentEmbroidery.status)
  ) {
    return
  }

  const notification = {
    status: galleryStore.currentEmbroidery.status
  }

  if (galleryStore.currentEmbroidery.status === 'Prepublished') {
    notification.icon = resolveComponent('SvgTriangleWarning')
    notification.message = t('casePage.notification.prepublished')
  } else if (galleryStore.currentEmbroidery.status === 'Editing') {
    notification.icon = resolveComponent('SvgQuestionCircle')
    notification.message = t('casePage.notification.editing')
  } else if (galleryStore.currentEmbroidery.status === 'Published') {
    notification.icon = resolveComponent('SvgQuestionCircle')
    notification.message = t('casePage.notification.published')
  }

  return notification
})

onMounted(() => {
  if (!galleryStore.currentEmbroidery.prisoner.photo || galleryStore.currentEmbroidery.prisoner.photo === '' || galleryStore.currentEmbroidery.prisoner.photo === 'FALSE') {
    return
  }

  checkImage(galleryStore.currentEmbroidery.prisoner.photo, showPrisonerImage)

  let paddingTop = 30

  if (width.value < 800) {
    paddingTop = 65
  }

  toggleTextScrollToTop.value = caseHeaderWrapper.value.offsetTop - paddingTop
})

watch(width, (newWidth) => {
  if (!caseHeaderWrapper.value) {
    return
  }

  let paddingTop = 30

  if (newWidth < 800) {
    paddingTop = 65
  }

  toggleTextScrollToTop.value = caseHeaderWrapper.value.offsetTop - paddingTop
})

const publish = () => {
  const isPublished = userStore.publishEmbroidery(galleryStore.currentEmbroidery.id)

  if (!isPublished) {
    return
  }

  galleryStore.updateCurrentEmbroideryStatus('Published')
}
</script>

<template>
  <main class="Content galleryCaseWrapper">
    <div 
      v-if="notification"
      class="notificationWrapper flexRowCenter"
    >
      <div class="contentWrapper flexRowCenter">
        <div class="flexRowCenter">
          <component :is="notification.icon"/>
          <p>
            {{ notification.message }}
          </p>
        </div>
        <div class="btnsWrapper flexColumnCenter">
          <nuxt-link 
            :to="$localePath('/Corrections?id=' + galleryStore.currentEmbroidery.id)"
            class="button"
            target="_blank"
          >
            {{ $t('buttons.correctionsNeeded') }}
          </nuxt-link >
          <button 
            v-if="notification.status === 'Prepublished'"
            class="button bg_black"
            @click="publish()"
          >
            {{ $t('buttons.publish') }}
          </button>
        </div>
      </div>
    </div>
    <div class="Title">
      <div class="content">
        <h1>
          <span class="subtitle">
            {{ $t('casePage.description.case') }}: {{ caseName }}
          <span class="visually-hidden">— </span></span>
          {{ prisonerName }}
        </h1>
        <GeneralGoBack/>
      </div>
    </div>
    <div class="content galleryCaseContent">
      <article class="galleryCaseSwiperWrapper">
        <!-- WIP -->
        <GeneralSwiper 
          class="galleryCaseSwiper"
          :fullscreen="true"
          :slides="embroiderySlides"
          @openFullscreen="handleFullScreenSwiper"
        />
        <p class="swiperDescription flexRowStart">
          {{ $t('casePage.swiper.stitching') }}: {{ galleryStore.currentEmbroidery.stitchingSize }} mm | {{ $t('casePage.swiper.canvas') }}: {{ galleryStore.currentEmbroidery.canvasSize }} mm
        </p>
        <p class="swiperDescriptionInfo">
          <span>
            {{ $t('casePage.swiper.author') }}: 
          </span>&nbsp;
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
          class="swiperDescriptionInfo"
        >
          <span>
            {{ $t('placeholders.country') }}:
          </span>&nbsp;
          <span class="b1">
            {{ galleryStore.currentEmbroidery.countryOfResidence }}
          </span>
        </p>
        <p 
          v-if="galleryStore.currentEmbroidery.instagram"
          class="swiperDescriptionInfo"
        >
          <span>
            {{ $t('placeholders.instagram') }}:
          </span>&nbsp;
          <span class="b1">
            {{ galleryStore.currentEmbroidery.instagram }}
          </span>
        </p>
      </article>
      <article>
        <div 
          ref="caseHeaderWrapper"
          class="caseHeaderWrapper flexColumnCenter"
        >
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
          :link="galleryStore.currentEmbroidery.prisoner.prisonerCase.materialsUrl"
          :linkTitle="getCurrentLocaleStringValue(galleryStore.currentEmbroidery.prisoner.prisonerCase, 'mediaComment_')"
          :scrollToTop="toggleTextScrollToTop"
        />
        <GeneralToggleText 
          v-if="prisonerDescription && prisonerDescription.length > 2"
          class="Description-item"
          :message="prisonerDescription"
          :title="$t('casePage.description.descriptionPrisoner')"
          :link="galleryStore.currentEmbroidery.prisoner.viasnaUrl"
          :linkTitle="$t('casePage.description.goToSource')"
          :scrollToTop="toggleTextScrollToTop"
        >
          <div 
            v-if="galleryStore.currentEmbroidery.prisoner.prison && galleryStore.currentEmbroidery.prisoner.prisonAddress"
            class="Description-item"
          >
            <h3 class="title">
              {{ $t('casePage.description.address') }}:
            </h3>
            <p>
              {{ galleryStore.currentEmbroidery.prisoner.prison }}
              {{ galleryStore.currentEmbroidery.prisoner.prisonAddress }}
            </p>
          </div>
        </GeneralToggleText>
        <h2 
          v-if="showComment"
          class="Description-item Description-item_title"
        >
          {{ $t('casePage.author.title') }}
        </h2>
        <GeneralToggleText 
          v-if="galleryStore.currentEmbroidery.reason"
          class="Description-item"
          :message="galleryStore.currentEmbroidery.reason"
          :title="$t('casePage.author.reason')"
          :scrollToTop="toggleTextScrollToTop"
        />
        <GeneralToggleText 
          v-if="galleryStore.currentEmbroidery.comment.text_eng"
          class="Description-item"
          :message="galleryStore.currentEmbroidery.comment.text_eng"
          :title="$t('casePage.author.comment')"
          :scrollToTop="toggleTextScrollToTop"
        />
        <GeneralToggleText 
          v-if="galleryStore.currentEmbroidery.comment.text_original"
          class="Description-item"
          :message="galleryStore.currentEmbroidery.comment.text_original"
          :title="$t('casePage.author.nativeComment')"
          :scrollToTop="toggleTextScrollToTop"
        />
        <div 
          v-if="processSlides && processSlides.length > 0"
          class="galleryWrapper"
        >
          <div
            v-for="(slide, i) in processSlides"
            :key="i"
          >
            <img
              :src="slide.small"
              :alt="`${slide?.alt}`"
              @click="handleFullScreenSwiper(i + embroiderySlides.length)"
            />
          </div>
        </div>
        <div 
          v-if="galleryStore.currentEmbroidery.news.length > 0"
          class="Description-item exhibitionsWrapper"
        >
          <h2 class="Description-item Description-item_title">
            {{ $t('casePage.exhibitions.title') }}
          </h2>
          <ul class="ExhibitionList">
            <li 
              v-for="event in galleryStore.currentEmbroidery.news"
              :key="event.id"
              class="ExhibitionList-item"
            >
              <h4 class="ExhibitionListItem-title">
                <nuxt-link :to="$localePath('/Events/Article/' + event.id)">
                  {{ getCurrentLocaleStringValue(event, 'title_') }}
                </nuxt-link>
              </h4>
              <p 
                v-if="event.startDate && event.endDate"
                class="ExhibitionListItem-descript flexRowStart"
              >
                <SvgCalendar class="ExhibitionListItem-descript-icon descriptIcon"/>
                {{ convertToEventDate(event.startDate, event.endDate) }}
              </p>
              <p 
                v-if="event.place"
                class="ExhibitionListItem-descript flexRowStart"
              >
                <SvgLocation class="ExhibitionListItem-descript-icon descriptIcon"/>
                {{ event.place }}
                <!-- <span>
                  Weserburg Museum für Moderne Kunst.
                </span>
                <span class="museumCountry">
                  Bremen, <b class="b2">Germany</b>
                </span> -->
              </p>
            </li>
          </ul>
        </div>
        <GeneralFullScreenSwiper
          v-if="showFullScreenSwiper"
          :initialSlide="currentFullScreenSlide"
          :slides="slides"
          @closeSwiper="showFullScreenSwiper = false"
        />
      </article>
    </div>
  </main>
</template>

<style src="./Embroidery.scss" lang="scss"></style>

