<script setup>
definePageMeta({
  layout: "embroidery"
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

      <section class="FindHero">
        <div class="FindHero-form">
          <input type="text" class="FindHero-input" placeholder="Search for a hero by name" aria-placeholder="Search for a hero by name">
          <button class="FindHero-input-btn" hidden><img src="../../../assets/media/img/close.svg" alt="Reset" class="FindHero-input-btn--img"></button>
          <div class="FindHero-select" hidden>
            <p class="FindHero-select-item">Smirnov</p>
            <p class="FindHero-select-item">Smirnova</p>
          </div>
        </div>
      </section>

      <section class="FoundHero" hidden>
        <div class="Hero-Photo">
          <img src="../../../assets/media/img/case1/prisoner_full.jpg" alt="Hero's name" class="Hero-Photo-img">
          <!-- <p class="Hero-Photo-text">This hero has been chosen automatically</p> -->
        </div>
        <div class="Hero-Description">
          <p class="Hero-Description-case">
            Case: Seizure of power
          </p>
          <h2 class="Hero-Description-name">
            Maryia Kalesnikava
          </h2>
          <div class="Hero-Description-data">
            <h3 class="title">Date of birth:</h3>
            <p>24 April 1982</p>
          </div>
          <div class="Hero-Description-data">
            <h3 class="title">Date of detention:</h3>
            <p>7 September 2020</p>
          </div>
          <div class="Hero-Description-data">
            <h3 class="title">Sentence:</h3>
            <p>11 years</p>
          </div>
          <div class="Hero-Description-data">
            <h3 class="title">Description of the Political prisoner:</h3>
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
            <h3 class="title">Description of the case:</h3>
            <p>The case description is the same as the political prisoner’s description because this is an individual case, not a collective one.</p>
          </div>
          <div class="Hero-Description-data">
            <h3 class="title">Address of the prison:</h3>
            <p>Penal colony No. 4. 246035, Homieĺ, vulica Antoshkina 3</p>
          </div>
        </div>
        <div class="buttons">
          <nuxt-link
            to="/Embroidery/Step2"
            id="save"
            class="button bg_black"
          >
            Choose this hero
          </nuxt-link>
        </div>
      </section>
    </div>
  </main>
</template>

<style src="../Steps.scss" lang="scss" scoped></style>
<style src="./Step1.scss" lang="scss" scoped></style>
<style src="../../../assets/style/form.scss" lang="scss" scoped></style>
