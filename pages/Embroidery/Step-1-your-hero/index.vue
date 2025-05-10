<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

import useHeroesStore from "@/stores/heroes"
import { useChosenHeroData } from "@/composables/ChosenHeroData"
import { useConvertDate } from "@/composables/ConvertDate"

const router = useRouter()
const heroesStore = useHeroesStore()
const { penalty, prisonerCaseDescription, prisonerCaseName } = useChosenHeroData()
const { convertDateToReadable } = useConvertDate()

definePageMeta({
  layout: "embroidery",
  middleware: [
    'prechosen-hero',
    'auth-registration',
  ],
})

const handleCreateStitchingActivity = async() => {
  heroesStore.loading = true
  await heroesStore.createStitchingActivity(heroesStore.chosenHero.kit[0].id)
  heroesStore.loading = false
  router.push('/Embroidery/Step-2-preparation')
  heroesStore.chosenHero = null
}
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
          :isEmbroidery="true"
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
            v-if="!heroesStore.chosenHero.photo || heroesStore.chosenHero.photo === '' || heroesStore.chosenHero.photo === 'FALSE'"
            src="../../../assets/media/img/profileSymbolFramed.svg"
            :alt="'Photo of' + heroesStore.chosenHero.name"
          >
          <img 
            v-else
            :src="heroesStore.chosenHero.photo" 
            :alt="'Photo of' + heroesStore.chosenHero.name"
          >
        </div>
        <div class="Hero-Description">
          <p 
            v-if="prisonerCaseName"
            class="Hero-Description-case"
          >
            {{ $t('embroidery.steps.description.case') }}: {{ prisonerCaseName }}
          </p>
          <h2 class="Hero-Description-name">
            {{ heroesStore.chosenHero.name }}
          </h2>
          <div class="Hero-content-titleWrapper flexRowStart">
            <div
              v-if="heroesStore.chosenHero.dateOfBirth"
              class="Hero-Bio-info"
            >
              <h3 class="title">
                {{ $t('embroidery.steps.description.birth') }}:
              </h3>
              <p>
                {{ convertDateToReadable(heroesStore.chosenHero.dateOfBirth) }}
              </p>
            </div>
            <div 
              v-if="heroesStore.chosenHero.dateOfDetention" 
              class="Hero-Bio-info"
            >
              <h3 class="title">
                {{ $t('embroidery.steps.description.detention') }}:
              </h3>
              <p>
                {{ convertDateToReadable(heroesStore.chosenHero.dateOfDetention) }}
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
          <GeneralToggleText 
            v-if="prisonerCaseDescription"
            class="Hero-Description-data"
            :message="prisonerCaseDescription"
            :title="$t('embroidery.steps.description.descriptionCase') + ':'"
            :limit="500"
          />
          <GeneralToggleText 
            v-if="heroesStore.chosenHero.description"
            class="Hero-Description-data"
            :message="heroesStore.chosenHero.description"
            :title="$t('embroidery.steps.description.descriptionPrisoner') + ':'"
            :limit="500"
          />
          <div 
            v-if="heroesStore.chosenHero.prisonAddress"
            class="Hero-Description-data Hero-Description-prison-address"
          >
            <h3 class="title">
              {{ $t('embroidery.steps.description.address') }}:
            </h3>
            <p>
              {{ heroesStore.chosenHero.prisonAddress }}
            </p>
          </div>
          <a
            :href="heroesStore.chosenHero.viasnaUrl" 
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
          <div class="buttons">
            <nuxt-link
              :to="$localePath('/Embroidery/Step-1-choose-hero')"
              id="save"
              class="button"
            >
              {{ $t("embroidery.step1Page.backButton") }}
            </nuxt-link>
            <button
              id="save"
              class="button bg_black"
              @click="handleCreateStitchingActivity()"
            >
              {{ $t("embroidery.step1Page.forwardButton") }}
            </button>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<style src="./Step-1-your-hero.scss" lang="scss" scoped></style>
