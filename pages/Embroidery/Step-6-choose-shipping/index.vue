<script setup>
import { ref } from 'vue'

definePageMeta({
  layout: "embroidery",
  middleware: [
    'heroes',
    'auth-registration',
    'stitching',
  ],
})

const route = ref(null)
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
          :isEmbroidery="true"
        />
      </div>
    </div>
    <div class="content">
      <RegistrationNavSteps
        :currentStep="6"
      />
      <section>
        <div class="chooseShipping flexColumnStart">
          <h3 class="title">
            {{ $t('embroidery.step6Page.sectionOptions.title') }}:
          </h3>
          <label 
            for="chooseShippingEU" 
            class="flexRowStart"
          >
            <input
              type="radio"
              name="chooseShippingEU"
              value="EU"
              id="chooseShippingEU"
              required
              v-model="route"
            />
            {{ $t('embroidery.step6Page.sectionOptions.option1') }}
          </label>
          <label 
            for="chooseShippingNonEU" 
            class="flexRowStart"
          >
            <input
              type="radio"
              name="chooseShippingNonEU"
              value="non-EU"
              id="chooseShippingNonEU"
              required
              v-model="route"
            />
            {{ $t('embroidery.step6Page.sectionOptions.option2') }}
          </label>
          <label 
            for="chooseShippingBelarus" 
            class="flexRowStart"
          >
            <input
              type="radio"
              name="chooseShippingBelarus"
              value="Belarus"
              id="chooseShippingBelarus"
              required
              v-model="route"
            />
            {{ $t('embroidery.step6Page.sectionOptions.option3') }}
          </label>
          <label 
            for="chooseShippingInPerson" 
            class="flexRowStart"
          >
            <input
              type="radio"
              name="chooseShippingInPerson"
              value="personally"
              id="chooseShippingInPerson"
              required
              v-model="route"
            />
            {{ $t('embroidery.step6Page.sectionOptions.option4') }}
          </label>
        </div>
        <div class="buttons">
          <nuxt-link 
            to="/Embroidery/Step-5-comment" 
            class="button"
          >
            {{ $t('embroidery.step6Page.sectionOptions.backButton') }}
          </nuxt-link>
          <nuxt-link 
            :to="$localePath('/Embroidery/Step-6-' + route)" 
            class="button" 
            :class="{'button_disabled': !route, 'bg_black': route}" 
          >
            {{ $t('embroidery.step6Page.sectionOptions.forwardButton') }}
          </nuxt-link>
        </div>
      </section>
    </div>
  </main>
</template>

<style src="./Step-6-choose-shipping.scss" lang="scss" scoped></style>
