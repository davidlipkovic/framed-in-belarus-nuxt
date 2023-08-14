<script setup>
import { ref } from 'vue'

import { useHeroesStore } from "@/stores/heroes"

const changeDateFormat = (date) => date.getDay() + ' ' + date.toLocaleString('en-us', { month: 'long' }) + ' ' + date.getFullYear()

const heroesStore = useHeroesStore()

definePageMeta({
  layout: "embroidery"
})

const localHero = computed(() => {
  return heroesStore.chosenHero
})
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
            class="Hero-Photo-img"
          >
          <img 
            v-else
            :src="localHero.photo" 
            :alt="'Photo of' + localHero.name"
            class="Hero-Photo-img"
          >
        </div>
        <div class="Hero-Description">
          <p 
            v-if="localHero.case"
            class="Hero-Description-case"
          >
            {{ $t('embroidery.steps.description.case') }}: {{ localHero.case }}
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
          <div class="Hero-Description-data">
            <h3 class="title">
              {{ $t('embroidery.steps.description.descriptionPrisoner') }}:
            </h3>
            <p>
              Maryia Kalesnikava is a member of the presidium of the Coordination Council, head of the campaign headquarters of former presidential nominee Viktar Babaryka.
            </p><br>
            <p>
              She was abducted on September 7, 2020 in Minsk and, along with two other members of the Coordination Council, Anton Radniankou and Ivan Krautsou, forcibly brought to the Ukrainian border to be expelled from the country. However, by tearing her passport and jumping out of the car, Kalesnikava foiled the special operation of deportation organized by the security forces.
            </p>
            <p>
              On September 9, it became known that the woman had been arrested and was suspected of a criminal offense under Part 3 of Art. 361 of the Criminal Code (appeals to actions aimed at harming the national security of the Republic of Belarus).
            </p>
            <p>
              Kalesnikava was held in pre-trial detention center No. 1 in Minsk. On September 11, she was transferred to the pre-trial prison in Žodzina.
            </p>
            <p>
              On September 16, she faced formal charges under Part 3 of Art. 361 of the Criminal Code.
            </p>
            <p>
              On February 10, 2021, Kalesnikava faced additional charges of "conspiracy to seize power with unconstitutional means" (Part 1 of Article 357) and "creating and managing an extremist formation" (Part 1 of Article 361-1).
            </p>
            <p>
              On September 6, 2021, the Minsk Regional Court sentenced Kalesnikava to 11 years in a general-security penal colony.
            </p>
            <p>
              On December 24, 2021, the Supreme Court upheld the sentences of Maryia Kalesnikava and Maksim Znak.
            </p>
            <p>
              On January 11, 2022, Kalesnikava was transferred to penal colony No. 4 in Homieĺ.
            </p>
          </div>
          <div class="Hero-Description-data">
            <h3 class="title">
              {{ $t('embroidery.steps.description.descriptionCase') }}:
            </h3>
            <p>
              The case description is the same as the political prisoner’s description because this is an individual case, not a collective one.
            </p>
          </div>
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
          <div class="warning flexRowStart">
            <SvgWarning />
            <p>
              {{ $t("embroidery.step1Page.warning") }}
            </p>
          </div>
          <div class="buttons">
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
