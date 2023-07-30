<script setup>
import { ref } from 'vue'

import { useHeroesStore } from "@/stores/heroes"

const heroesStore = useHeroesStore();

// const hero = {
//   case: "Seizure of power",
//   name: "Maryia Kalesnikava",
//   dateOfBirth: "24 April 1982",
//   dateOfDetention: "7 September 2020",
//   sentence: "11 years",
//   prisonAddress: "Penal colony No. 4. 246035, Homieĺ, vulica Antoshkina 3"
// }

const hero = heroesStore.chosenHero()
</script>

<template>
  <article class="Hero HeroWrapper">
    <input type="checkbox" class="visually-hidden" id="heroMore" />
    <div class="Hero-header">
      <div class="Hero-header-photo">
        <img
          :src="hero.photo"
          :alt="'Photo of ' + hero.name"
        />
      </div>
      <div class="Hero-header-title">
        <p class="Hero-header-case">
          {{ $t('embroidery.steps.description.case') }}: {{ hero.case }}
        </p>
        <h2 class="Hero-header-name">
          {{ hero.name }}
        </h2>
      </div>
      <label class="Hero-more-button flexRowStart" for="heroMore">
        <span class="Hero-more-button-text">
          {{ $t('embroidery.steps.description.moreButton') }}
        </span>
        <SvgArrowDown class="Hero-more-button-img"/>
      </label>
    </div>
    <label for="HeroHidden" class="Hero-close">
      <img
        src="../../../assets/media/img/close.svg"
        alt="Close"
        class="Hero-close-img"
      />
    </label>
    <div class="Hero-content">
      <div class="Hero-content-titleWrapper">
        <div class="Hero-Bio-info">
          <h3 class="title">
            {{ $t('embroidery.steps.description.birth') }}:
          </h3>
          <p>{{ hero.birthday }}</p>
        </div>
        <div class="Hero-Bio-info">
          <h3 class="title">
            {{ $t('embroidery.steps.description.detention') }}:
          </h3>
          <p>
            {{ hero.arrested }}
          </p>
        </div>
        <div class="Hero-Bio-info">
          <h3 class="title">
            {{ $t('embroidery.steps.description.sentence') }}:
          </h3>
          <p>
            {{ hero.decision }}
          </p>
        </div>
      </div>
      <div class="Hero-Description-data">
        <h3 class="title">
          {{ $t('embroidery.steps.description.descriptionPrisoner') }}:
        </h3>
        <p>
          Maryia Kalesnikava is a member of the presidium of the Coordination Council, head of the campaign headquarters of former presidential nominee Viktar Babaryka.
        </p>
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
          The case description is the same as the political prisoner’s
          description because this is an individual case, not a collective
          one.
        </p>
      </div>
      <div class="Hero-Description-data">
        <h3 class="title">
          {{ $t('embroidery.steps.description.address') }}:
        </h3>
        <p>
          {{ hero.prisonAddress }}
        </p>
      </div>
      <label class="Hero-less-button flexRowStart" for="heroMore">
        <span class="Hero-less-button-text">
          {{ $t('embroidery.steps.description.lessButton') }}
        </span>
        <SvgArrowDown class="Hero-less-button-img"/>
      </label>
    </div>
  </article>
</template>

<style src="./HeroBio.scss" lang="scss" scoped></style>
