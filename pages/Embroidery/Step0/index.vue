<script setup>
definePageMeta({
  layout: "embroidery"
})

const heroes = [
  "Maryia Kalesnikava",
  "Maryia Kalesnikava",
  "Maryia Kalesnikava",
  "Maryia Kalesnikava",
  "Maryia Kalesnikava",
  "Maryia Kalesnikava",
  "Maryia Kalesnikava",
  "Maryia Kalesnikava",
  "Maryia Kalesnikava",
  "Maryia Kalesnikava",
  "Maryia Kalesnikava",
  "Maryia Kalesnikava",
  "Maryia Kalesnikava",
  "Maryia Kalesnikava",
  "Maryia Kalesnikava",
  "Maryia Kalesnikava",
]
</script>

<template>
  <main class="Content">

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
          <div class="searchWrapper">
            <input type="text" class="FindHero-input" placeholder="Search for a hero by name" aria-placeholder="Search for a hero by name">
            <!-- <input type="text" class="FindHero-input" placeholder="Search for a hero by name" aria-placeholder="Search for a hero by name"> -->
            <button class="sortButton">
              <img src="../../../assets/media/img/swap.svg" alt="">
              Sort By
              <SvgArrowDown/>
            </button>
          </div>
          <button class="FindHero-input-btn" hidden><img src="../../../assets/media/img/close.svg" alt="Reset" class="FindHero-input-btn--img"></button>
          <div class="FindHero-select" hidden>
            <p class="FindHero-select-item">Smirnov</p>
            <p class="FindHero-select-item">Smirnova</p>
          </div>
        </div>
        
        <div class="heroIconsWrapper">
          <div 
            class="heroIconWrapper"
          >
            <img src="../../../assets/media/img/defaultHero.svg" alt="">
          </div>
          <div
            v-for="hero in heroes" 
            :key="hero"
            class="heroIconWrapper"
          >
            <nuxt-link
              to="/Embroidery/Step1" 
            >
              <img src="../../../assets/media/img/case1/prisoner_full_square.jpg" alt="">
            <nuxt-link/>
            <h2>
              {{ hero }}
            </h2>
          </div>
        </div>

        <!-- <div id="default">
          <p class="alignCenter">
            <span class="block">OR</span>
            You can let us choose a hero for you automatically
          </p>
          <div class="buttons">
            <nuxt-link
              to="/Embroidery/Step1"
              class="button randomHero"
            >
              Choose a hero automatically
            </nuxt-link>
          </div>
        </div>

        <div class="mistake" id="heroHasBeenChosen" hidden>
          <h2>Sorry, this hero has already been chosen</h2>
          <p>You can see the embroidery <nuxt-link to="/Gallery">here</nuxt-link></p>
          <p>Please choose another hero.</p>
          <div class="buttons">
            <button class="button randomHero">Choose a hero automatically</button>
          </div>
        </div>

        <div class="mistake" id="heroDontHavePattern" hidden>
          <h2>Sorry, we don't have a pattern for this hero yet</h2>
          <p>If you really want this hero, please <strong>leave a request for a pattern</strong> in this section.</p>
          <p>To create a pattern  please help us by telling the hero's story. </p>
          <p>What he/she is into, what their work was, whether he/she has children or pets, etc.</p>
          <p>Often one-sided information can be found from Belarusian government sources, describing only the side of the prosecution. If you know the details and reasons for your hero's detention, please provide them. This may also help in creating a pattern.</p>
          <p>Rufina creates all the patterns by herself, so the process of creating a new pattern can take 2-3 months.</p>
          <p>Thank you for your understanding!</p>
          <div class="buttons">
            <button class="button">Leave a request</button>
            <button class="button randomHero">Choose a hero automatically</button>
          </div>
        </div> -->
      </section>
    </div>
  </main>
</template>

<style src="../Steps.scss" lang="scss" scoped></style>
<style src="./Step1.scss" lang="scss" scoped></style>
<style src="../../../assets/style/form.scss" lang="scss" scoped></style>
