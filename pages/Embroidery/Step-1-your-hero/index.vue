<script setup>
import { ref } from 'vue'

import { usePrisonersStore } from "@/stores/prisoners"

const prisonersStore = usePrisonersStore()

definePageMeta({
  layout: "embroidery"
})

const hero = prisonersStore.chosenHero()
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
          <span class="subtitle">Step 1 <span class="visually-hidden">— </span></span>Choose your Hero
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
            :src="hero.photo"
            :alt="'Photo of ' + hero.name"
            class="Hero-Photo-img"
          >
        </div>
        <div class="Hero-Description">
          <p class="Hero-Description-case">
            Case: {{ hero.case }}
          </p>
          <h2 class="Hero-Description-name">
            {{ hero.name }}
          </h2>
          <div class="Hero-content-titleWrapper flexRowStart">
            <div class="Hero-Bio-info">
              <h3 class="title">Date of birth:</h3>
              <p>{{ hero.birthday }}</p>
            </div>
            <div class="Hero-Bio-info">
              <h3 class="title">Date of detention:</h3>
              <p>{{ hero.arrested }}</p>
            </div>
            <div class="Hero-Bio-info">
              <h3 class="title">Sentence:</h3>
              <p>{{ hero.decision }}</p>
            </div>
          </div>
          <div class="Hero-Description-data">
            <h3 class="title">Description of the Political prisoner:</h3>
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
            <h3 class="title">Description of the case:</h3>
            <p>The case description is the same as the political prisoner’s description because this is an individual case, not a collective one.</p>
          </div>
          <div class="Hero-Description-data Hero-Description-prison-address">
            <h3 class="title">Address of the prison:</h3>
            <p>{{ hero.prisonAddress }}</p>
          </div>
          <div class="warning flexRowStart">
            <SvgWarning />
            <p>
              Once you choose a hero you can't change it
            </p>
          </div>
          <div class="buttons">
            <nuxt-link
              to="/Embroidery/Step-1-choose-hero"
              id="save"
              class="button"
            >
              Go back to all prisoners
            </nuxt-link>
            <nuxt-link
              to="/Embroidery/Step-2-preparation"
              id="save"
              class="button bg_black"
            >
              Choose this hero
            </nuxt-link>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<style src="../Steps.scss" lang="scss" scoped></style>
<style src="./Step-1-your-hero.scss" lang="scss" scoped></style>
