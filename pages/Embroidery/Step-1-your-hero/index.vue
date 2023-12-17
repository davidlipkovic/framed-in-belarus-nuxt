<script setup>
import { ref } from 'vue'

import { useHeroesStore } from "@/stores/heroes"

const changeDateFormat = (date) => date.getDay() + ' ' + date.toLocaleString('en-us', { month: 'long' }) + ' ' + date.getFullYear()

const heroesStore = useHeroesStore()

definePageMeta({
  layout: "embroidery"
})

const localHero = computed(() => {
  // WIP
  heroesStore.chosenHero.case = true
  heroesStore.chosenHero.prisonAddress = 'test'

  return heroesStore.chosenHero
})

// WIP
const description = `
  In April 2021, the initiative "Rabochy Ruh" was formed, uniting working people in Belarus to protect their civil and labour rights and freedoms. They put forward a number of demands to the current Belarusian authorities:
  1. Stop the use of violence and persecution by law enforcement agencies against peaceful citizens;
  2. To release all political prisoners and cancel court sentences handed down against them;
  2. To release all political prisoners and cancel court sentences handed down against them;
  2. To release all political prisoners and cancel court sentences handed down against them;
  2. To release all political prisoners and cancel court sentences handed down against them;
`
</script>

<template>
  <main class="Content">
    <Head>
      <Title>#Framed in Belarus / Step 1 — Choose your Hero</Title>
      <Meta name="description" content="First step" />
    </Head>
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
      <section class="FoundHero" hidden>
        <div class="Hero-Photo">
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
        <div class="Hero-Description">
          <p 
            v-if="localHero.case"
            class="Hero-Description-case"
          >
            {{ $t('embroidery.steps.description.case') }}: Example case
          </p>
          <h2 class="Hero-Description-name">
            {{ localHero.name }}
          </h2>
          <div class="Hero-content-titleWrapper flexRowStart">
            <div
              v-if="localHero.birthdayProgrammatic"
              class="Hero-Bio-info"
            >
              <h3 class="title">
                {{ $t('embroidery.steps.description.birth') }}:
              </h3>
              <p>
                {{ changeDateFormat(localHero.birthdayProgrammatic) }}
              </p>
            </div>
            <div 
              v-if="localHero.arrestedProgrammatic" 
              class="Hero-Bio-info"
            >
              <h3 class="title">
                {{ $t('embroidery.steps.description.detention') }}:
              </h3>
              <p>
                {{ changeDateFormat(localHero.arrestedProgrammatic) }}
              </p>
            </div>
            <div 
              class="Hero-Bio-info"
              v-if="localHero.decision"
            >
              <h3 class="title">
                {{ $t('embroidery.steps.description.sentence') }}:
              </h3>
              <p>
                {{ localHero.decision }}
              </p>
            </div>
          </div>
          <GeneralToggleText 
            v-if="localHero.description"
            class="Hero-Description-data"
            :message="description"
            :title="$t('embroidery.steps.description.descriptionCase') + ':'"
            :limit="500"
          />
          <GeneralToggleText 
            v-if="localHero.description"
            class="Hero-Description-data"
            :message="localHero.description"
            :title="$t('embroidery.steps.description.descriptionPrisoner') + ':'"
            :limit="500"
          />
          <div 
            v-if="localHero.prisonAddress"
            class="Hero-Description-data Hero-Description-prison-address"
          >
            <h3 class="title">
              {{ $t('embroidery.steps.description.address') }}:
            </h3>
            <p>
              {{ localHero.prisonAddress }}
            </p>
          </div>
          <a
            href="#" 
            target="_blank"
            class="linkToSource flexRowStart red"
          >
            {{ $t("links.source") }}
            <SvgLink/>
          </a>
          <div class="warning flexRowStart">
            <SvgWarning />
            <p>
              {{ $t("embroidery.step1Page.warning") }}
            </p>
          </div>
          <div class="buttons flexColumnCenter">
            <nuxt-link
              :to="localePath('/Embroidery/Step-1-choose-hero')"
              id="save"
              class="button"
            >
              {{ $t("embroidery.step1Page.backButton") }}
            </nuxt-link>
            <nuxt-link
              :to="localePath('/Embroidery/Step-2-preparation')"
              id="save"
              class="button bg_black"
            >
              {{ $t("embroidery.step1Page.forwardButton") }}
            </nuxt-link>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<style src="../../../assets/style/steps.scss" lang="scss" scoped></style>
<style src="./Step-1-your-hero.scss" lang="scss" scoped></style>
