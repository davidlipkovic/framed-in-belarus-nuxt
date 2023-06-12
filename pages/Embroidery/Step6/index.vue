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
          <span class="subtitle">
            {{ $t('embroidery.steps.step') }} 6
          <span class="visually-hidden">— </span></span>
          {{ $t('embroidery.step6Page.title') }}
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
            {{ $t('embroidery.step6Page.sectionOptions.title') }}:
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
            <span class="choosePackageFrom-option-label">
              {{ $t('embroidery.step6Page.sectionOptions.content1') }}
            </span>
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
            <span class="choosePackageFrom-option-label">
              {{ $t('embroidery.step6Page.sectionOptions.content2') }}
            </span>
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
            <span class="choosePackageFrom-option-label">
              {{ $t('embroidery.step6Page.sectionOptions.content3') }}
            </span>
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
            <span class="choosePackageFrom-option-label">
              {{ $t('embroidery.step6Page.sectionOptions.content4') }}
            </span>
          </label>
          <p class="mistake defaultNone">
            {{ $t('embroidery.step6Page.sectionOptions.warning') }}
          </p>
        </div>
        <div class="buttons">
          <!-- 
          <nuxt-link 
            to="/Embroidery/Step-5-comment" 
            class="button"
          >
            {{ $t('embroidery.step6Page.sectionOptions.backButton') }}
          </nuxt-link>
          -->
          <nuxt-link 
            :to="`/Embroidery/Step6-${route}`" 
            class="button bg_black" 
            id="save"
          >
            {{ $t('embroidery.step6Page.sectionOptions.forwardButton') }}
          </nuxt-link>
        </div>
      </section>
    </div>
  </main>
</template>

<style src="../../../assets/style/form.scss" lang="scss"></style>
<style src="../Steps.scss" lang="scss" scoped></style>
<style src="./Step6.scss" lang="scss" scoped></style>
