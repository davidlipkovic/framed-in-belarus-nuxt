<script setup>
import { ref } from 'vue'

definePageMeta({
  layout: "embroidery"
})
const route = ref("EU")
</script>

<template>
  <main class="Content">
    <Head>
      <Title>#Framed in Belarus / Step 6 — Shipping</Title>
      <Meta name="description" content="First step" />
    </Head>
    <div class="Title">
      <div class="content">
        <h1>
          <span class="subtitle"
          >Step 6 <span class="visually-hidden">— </span></span
          >Shipping
        </h1>
        <GeneralGoBack
          page="Profile"
        />
      </div>
    </div>
    <div class="content">
      <RegistrationNavSteps
        :currentStep="6"
      />

      <section class="Shipping">
        <!-- <div class="congratulation">
          <h2 class="title">Great job - you finished the embroidery!</h2>
          <p>
            Please pack it with the
            <strong class="b2">handwritten comment</strong> (if you have it) and
            send it to us. We look forward to having it in our hands. Thank you
            for your solidarity!
          </p>
        </div> -->
        <div class="choosePackageFrom">
          <h3 class="title">
            Please choose where you are sending the package from:
          </h3>
          <label for="choosePackageFromEU" class="choosePackageFrom-option">
            <input
              type="radio"
              name="choosePackageFrom"
              value="eu"
              id="choosePackageFromEU"
              class="choosePackageFrom-option-input"
              required
              @click="route = 'EU'"
            />
            <span class="choosePackageFrom-option-label">EU countries</span>
          </label>
          <label for="choosePackageFromNonEU" class="choosePackageFrom-option">
            <input
              type="radio"
              name="choosePackageFrom"
              value="nonEU"
              id="choosePackageFromNonEU"
              class="choosePackageFrom-option-input"
              required
              @click="route = 'non-EU'"
            />
            <span class="choosePackageFrom-option-label">Non-EU countries</span>
          </label>
          <label
            for="choosePackageFromBelarus"
            class="choosePackageFrom-option"
          >
            <input
              type="radio"
              name="choosePackageFrom"
              value="belarus"
              id="choosePackageFromBelarus"
              class="choosePackageFrom-option-input"
              required
              @click="route = 'Belarus'"
            />
            <span class="choosePackageFrom-option-label">Belarus</span>
          </label>
          <label for="choosePackageFromRussia" class="choosePackageFrom-option">
            <input
              type="radio"
              name="choosePackageFrom"
              value="russia"
              id="choosePackageFromRussia"
              class="choosePackageFrom-option-input"
              required
              @click="route = 'in-person'"
            />
            <span class="choosePackageFrom-option-label">Hand over in person</span>
          </label>
          <p class="mistake defaultNone">Please choose one option</p>
        </div>

        <div class="buttons">
          <!-- <nuxt-link to="/Embroidery/Step-5-comment" class="button"
          >Previous step</nuxt-link
          > -->
          <nuxt-link :to="`/Embroidery/Step6-${route}`" class="button bg_black" id="save">
            Get instruction
          </nuxt-link>
        </div>
      </section>
    </div>
  </main>
</template>

<style src="../../../assets/style/form.scss" lang="scss"></style>
<style src="../Steps.scss" lang="scss" scoped></style>
<style src="./Step6.scss" lang="scss" scoped></style>
