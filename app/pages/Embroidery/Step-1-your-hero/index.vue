<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import usePrisonersStore from "@/stores/prisoners"
import { useChosenHeroData } from "@/composables/ChosenHeroData"
import { useConvertDate } from "@/composables/ConvertDate"

const router = useRouter()
const { t } = useI18n()
const prisonersStore = usePrisonersStore()
const { penalty, prisonerCaseDescription, prisonerCaseName } = useChosenHeroData()
const { convertDateToReadable } = useConvertDate()

definePageMeta({
  layout: "embroidery",
  middleware: [
    'prechosen-hero',
    'auth-registration',
  ],
})

useHead({
  title: t('embroidery.step1Page.title'),
  meta: [
    { property: 'og:title', content: t('embroidery.step1Page.title'), },
    { name: 'robots', content: 'noindex' }
  ],
})

const handleCreateStitchingActivity = async() => {
  prisonersStore.loading = true
  await prisonersStore.createStitchingActivity(prisonersStore.chosenHero.kit[0].id)
  prisonersStore.loading = false
  router.push('/Embroidery/Step-2-preparation')
  prisonersStore.chosenHero = null
}
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
        />
      </div>
    </div>
    <div class="content">
      <EmbroideryNavSteps
        :currentStep="1"
      />
      <section class="FoundHero" hidden>
        <div class="Hero-Photo">
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
        <div class="Hero-Description">
          <p 
            v-if="prisonerCaseName"
            class="Hero-Description-case"
          >
            {{ $t('embroidery.steps.description.case') }}: {{ prisonerCaseName }}
          </p>
          <h2 class="Hero-Description-name">
            {{ prisonersStore.chosenHero.name }}
          </h2>
          <div class="Hero-content-titleWrapper flexRowStart">
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
          <GeneralToggleText 
            v-if="prisonerCaseDescription"
            class="Hero-Description-data"
            :message="prisonerCaseDescription"
            :title="$t('embroidery.steps.description.descriptionCase') + ':'"
            :limit="500"
          />
          <GeneralToggleText 
            v-if="prisonersStore.chosenHero.description"
            class="Hero-Description-data"
            :message="prisonersStore.chosenHero.description"
            :title="$t('embroidery.steps.description.descriptionPrisoner') + ':'"
            :limit="500"
          />
          <div 
            v-if="prisonersStore.chosenHero.prisonAddress"
            class="Hero-Description-data Hero-Description-prison-address"
          >
            <h3 class="title">
              {{ $t('embroidery.steps.description.address') }}:
            </h3>
            <p>
              {{ prisonersStore.chosenHero.prisonAddress }}
            </p>
          </div>
          <a
            :href="prisonersStore.chosenHero.viasnaUrl" 
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
