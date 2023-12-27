<script setup>
import { ref } from 'vue'

definePageMeta({
  layout: "embroidery"
})

const route = ref(null)
const shipNow = ref(null)

const enableButton = computed(() => {
  return shipNow.value === false || route.value
})
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
      <section>
        <div class="chooseShipping chooseSecondEmbroideryShipping flexColumnStart">
          <p>
            {{ $t('embroidery.step6Page.sectionOptions.secondEmbroiderydescription.content1') }}
            EMBROIDERY_NAME
            {{ $t('embroidery.step6Page.sectionOptions.secondEmbroiderydescription.content2') }}
          </p>
          <h3 class="title">
            {{ $t('embroidery.step6Page.sectionOptions.secondEmbroiderydeTitle') }}:
          </h3>
          <label 
            for="chooseShippingNow" 
            class="flexRowStart"
          >
            <input
              type="radio"
              name="chooseShippingNow"
              :value="true"
              id="chooseShippingNow"
              required
              v-model="shipNow"
            />
            {{ $t('embroidery.step6Page.sectionOptions.secondEmbroideryOption1') }}
          </label>
          <label 
            for="chooseShippingLater" 
            class="flexRowStart"
          >
            <input
              type="radio"
              name="chooseShippingLater"
              :value="false"
              id="chooseShippingLater"
              required
              v-model="shipNow"
            />
            {{ $t('embroidery.step6Page.sectionOptions.secondEmbroideryOption2') }}
          </label>
          <template v-if="shipNow">
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
          </template>
        </div>
        <div class="buttons flexColumnCenter">
          <nuxt-link 
            to="/Embroidery/Step-5-comment" 
            class="button"
          >
            {{ $t('embroidery.step6Page.sectionOptions.backButton') }}
          </nuxt-link>
          <nuxt-link 
            :to="localePath('/Embroidery/Step-6-' + route)" 
            class="button" 
            :class="enableButton ? 'bg_black' : 'button_disabled'" 
          >
            {{ $t('embroidery.step6Page.sectionOptions.forwardButton') }}
          </nuxt-link>
        </div>
      </section>
    </div>
  </main>
</template>

<style src="../../../assets/style/form.scss" lang="scss"></style>
<style src="./Step-6-choose-shipping-second-embroidery.scss" lang="scss" scoped></style>
