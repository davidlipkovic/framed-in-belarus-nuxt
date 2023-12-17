<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

import { useHeroesStore } from "@/stores/heroes"

const heroesStore = useHeroesStore();

const localHero = computed(() => {
  return heroesStore.chosenHero
})

const buttonMessage = computed(() => {
  if (showMore.value) {
    return t("embroidery.steps.description.lessButton")
  } else {
    return t("embroidery.steps.description.moreButton")
  }
})

const showMore = ref(false)
</script>

<template>
  <article class="Hero HeroWrapper flexColumnStart">
    <button 
      @click="showMore = false" 
      class="Hero-close"
    >
      <SvgClose/>
    </button>
    <div class="Hero-header">
      <div class="Hero-header-photo">
        <img 
          v-if="!localHero.photo || localHero.photo === '' || localHero.photo === 'FALSE'"
          src="../../../assets/media/img/profileSymbolFramed.svg"
          :alt="'Photo of' + localHero.name"
        >
        <img 
          v-else
          :src="localHero.photo" 
          :alt="'Photo of' + localHero.name"
        >
      </div>
      <div class="Hero-header-title">
        <p 
          v-if="localHero.case"
          class="Hero-header-case"
        >
          {{ $t('embroidery.steps.description.case') }}: {{ localHero.case }}
        </p>
        <h2 class="Hero-header-name">
          {{ localHero.name }}
        </h2>
      </div>
    </div>
    <div 
      v-if="showMore"
      class="Hero-content flexColumnStart"
    >
      <div class="Hero-Bio-Wrapper flexColumnStart">
        <div 
          v-if="localHero.birthday"
          class="Hero-Bio-info"
        >
          <h3 class="title">
            {{ $t('embroidery.steps.description.birth') }}:
          </h3>
          <p>{{ localHero.birthday }}</p>
        </div>
        <div 
          v-if="localHero.arrested"
          class="Hero-Bio-info"
        >
          <h3 class="title">
            {{ $t('embroidery.steps.description.detention') }}:
          </h3>
          <p>
            {{ localHero.arrested }}
          </p>
        </div>
        <div 
          v-if="localHero.decision"
          class="Hero-Bio-info"
        >
          <h3 class="title">
            {{ $t('embroidery.steps.description.sentence') }}:
          </h3>
          <p>
            {{ localHero.decision }}
          </p>
        </div>
      </div>
      <div 
        v-if="localHero.description"
        class="Hero-Description-data"
      >
        <h3 class="title">
          {{ $t('embroidery.steps.description.descriptionPrisoner') }}:
        </h3>
        <p>
          {{ localHero.description }}
        </p>
      </div>
      <div 
        v-if="localHero.description"
        class="Hero-Description-data"
      >
        <h3 class="title">
          {{ $t('embroidery.steps.description.descriptionCase') }}:
        </h3>
        <p>
          The case description is the same as the political prisoner’s
          description because this is an individual case, not a collective
          one.
        </p>
      </div>
      <div 
        v-if="localHero.prisonAddress"
        class="Hero-Description-data"
      >
        <h3 class="title">
          {{ $t('embroidery.steps.description.address') }}:
        </h3>
        <p>
          {{ localHero.prisonAddress }}
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
