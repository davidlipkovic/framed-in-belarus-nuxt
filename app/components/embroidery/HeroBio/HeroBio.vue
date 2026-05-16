<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

import usePrisonersStore from "@/stores/prisoners"
import { useChosenHeroData } from "@/composables/ChosenHeroData"
import { useConvertDate } from "@/composables/ConvertDate"

const prisonersStore = usePrisonersStore()
const { penalty, prisonerCaseDescription, prisonerCaseName } = useChosenHeroData()
const { convertDateToReadable } = useConvertDate()

const emit = defineEmits([
  'removeComponent',
])

const buttonMessage = computed(() => {
  if (showMore.value) {
    return t("embroidery.steps.description.lessButton")
  } else {
    return t("embroidery.steps.description.moreButton")
  }
})

const hideComponent = ref(false)
const showMore = ref(false)
</script>

<template>
  <article 
    v-show="!hideComponent"
    class="Hero HeroWrapper flexColumnStart"
  >
    <button 
      @click="hideComponent = true" 
      class="Hero-close"
    >
      <SvgClose/>
    </button>
    <div class="Hero-header">
      <div class="Hero-header-photo">
        <img 
          v-if="!prisonersStore.chosenHero.photo || prisonersStore.chosenHero.photo === '' || prisonersStore.chosenHero.photo === 'FALSE'"
          src="../../../assets/media/img/profileSymbolFramed.svg"
          :alt="'Photo of' + prisonersStore.chosenHero.name"
        >
        <img 
          v-else
          :src="prisonersStore.chosenHero.photo" 
          :alt="'Photo of' + prisonersStore.chosenHero.name"
        >
      </div>
      <div class="Hero-header-title">
        <p 
          v-if="prisonerCaseName"
          class="Hero-header-case"
        >
          {{ $t('embroidery.steps.description.case') }}: {{ prisonerCaseName }}
        </p>
        <h2 class="Hero-header-name">
          {{ prisonersStore.chosenHero.name }}
        </h2>
      </div>
    </div>
    <div 
      v-if="showMore"
      class="Hero-content flexColumnStart"
    >
      <div class="Hero-Bio-Wrapper flexColumnStart">
        <div 
          v-if="prisonersStore.chosenHero.dateOfBirth"
          class="Hero-Bio-info"
        >
          <h3 class="title">
            {{ $t('embroidery.steps.description.birth') }}:
          </h3>
          <p>
            {{ convertDateToReadable(prisonersStore.chosenHero.dateOfBirth) }}
          </p>
        </div>
        <div 
          v-if="prisonersStore.chosenHero.dateOfDetention" 
          class="Hero-Bio-info"
        >
          <h3 class="title">
            {{ $t('embroidery.steps.description.detention') }}:
          </h3>
          <p>
            {{ convertDateToReadable(prisonersStore.chosenHero.dateOfDetention) }}
          </p>
        </div>
        <div 
          class="Hero-Bio-info"
          v-if="penalty"
        >
          <h3 class="title">
            {{ $t('embroidery.steps.description.sentence') }}:
          </h3>
          <p>
            {{ penalty }}
          </p>
        </div>
      </div>
      <div 
        v-if="prisonersStore.chosenHero.description"
        class="Hero-Description-data"
      >
        <h3 class="title">
          {{ $t('embroidery.steps.description.descriptionPrisoner') }}:
        </h3>
        <p>
          {{ prisonersStore.chosenHero.description }}
        </p>
      </div>
      <div 
        v-if="prisonerCaseDescription"
        class="Hero-Description-data"
      >
        <h3 class="title">
          {{ $t('embroidery.steps.description.descriptionCase') }}:
        </h3>
        <p>
          {{ prisonerCaseDescription }}
        </p>
      </div>
      <div 
        v-if="prisonersStore.chosenHero.prisonAddress"
        class="Hero-Description-data"
      >
        <h3 class="title">
          {{ $t('embroidery.steps.description.address') }}:
        </h3>
        <p>
          {{ prisonersStore.chosenHero.prisonAddress }}
        </p>
      </div>
    </div>
    <button
      @click="showMore = !showMore" 
      class="showMoreBtn flexRowStart red"
      :class="{'showMoreBtnActive': showMore}"
    >
      {{ buttonMessage }}
      <SvgArrowDown/>
    </button>
  </article>
</template>

<style src="./HeroBio.scss" lang="scss" scoped></style>
