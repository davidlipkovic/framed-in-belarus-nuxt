<script setup>
import { computed, ref } from 'vue'
import { useValidateInputs } from "@/composables/ValidateInputs";

const { validateLatinCharacters, validateNameAndSurname, validateText} = useValidateInputs()

definePageMeta({
  layout: "embroidery",
  middleware: [
    'auth-registration',
  ],
})

const adress = ref(null)
const adressInput = ref(null)
const adressTypingStarted = ref(false)
const name = ref(null)
const nameInput = ref(null)
const nameTypingStarted = ref(false)
const trackingNumber = ref(null)
const trackingNumberInput = ref(null)
const trackingNumberTypingStarted = ref(false)

const validAdress = computed(() => validateLatinCharacters(adress.value))
const validName = computed(() => validateLatinCharacters(name.value) && validateNameAndSurname(name.value))
const validTrackingNumber = computed(() => validateLatinCharacters(trackingNumber.value) && validateText(trackingNumber.value))

const validData = computed(() => validAdress.value && validName.value && validTrackingNumber.value)

onClickOutside(adressInput, () => {
  if (adress.value) {
    adressTypingStarted.value = true
  }
})

onClickOutside(nameInput, () => {
  if (name.value) {
    nameTypingStarted.value = true
  }
})

onClickOutside(trackingNumberInput, () => {
  if (trackingNumber.value) {
    trackingNumberTypingStarted.value = true
  }
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
          :isEmbroidery="true"
          page="Profile"
        />
      </div>
    </div>
    <div class="content">
      <RegistrationNavSteps
        :currentStep="6"
      />
      <section>
        <div class="shippingInstructionWrapper flexColumnStart">
          <p class="title important">
            {{ $t('embroidery.step6Page.sectionBelarusPost.title') }}:
          </p>
          <p class="b2 important importantWarning">
            {{ $t('embroidery.step6Page.sectionBelarusPost.section1.warning') }}:
          </p>
          <ul>
            <li class="flexRowStart">
              {{ $t('embroidery.step6Page.sectionBelarusPost.section1.paragraph1') }}
            </li>
            <li class="flexRowStart">
              {{ $t('embroidery.step6Page.sectionBelarusPost.section1.paragraph2') }}
            </li>
            <li class="flexRowStart">
              {{ $t('embroidery.step6Page.sectionBelarusPost.section1.paragraph3') }}
            </li>
          </ul>
          <p class="explanation">
            {{ $t('embroidery.step6Page.sectionBelarusPost.section2.paragraph1.content1') }}
            <strong class="b1">
              {{ $t('embroidery.step6Page.sectionBelarusPost.section2.paragraph1.highlight') }}
            </strong>
            {{ $t('embroidery.step6Page.sectionBelarusPost.section2.paragraph1.content2') }}
            <br>
            {{ $t('embroidery.step6Page.sectionBelarusPost.section2.paragraph2') }}
          </p>
          <h2 class="title address">
            {{ $t('embroidery.step6Page.sectionBelarusPost.section3.title') }}:
          </h2>
          <p class="adress">
            {{ $t('embroidery.step6Page.sectionBelarusPost.section3.paragraph1.content1') }}<br/>
            {{ $t('embroidery.step6Page.sectionBelarusPost.section3.paragraph1.content2') }}<br/>
            {{ $t('embroidery.step6Page.sectionBelarusPost.section3.paragraph1.content3') }}<br/>
            {{ $t('embroidery.step6Page.sectionBelarusPost.section3.paragraph1.content4') }}<br/>
            {{ $t('embroidery.step6Page.sectionBelarusPost.section3.paragraph1.content5') }}<br/>
            {{ $t('embroidery.step6Page.sectionBelarusPost.section3.paragraph1.content6') }}
          </p>
          <p class="declaration">
            {{ $t('embroidery.step6Page.sectionBelarusPost.declaration.content') }}
          </p>
          <p class="declaration note">
            {{ $t('embroidery.step6Page.sectionBelarusPost.declaration.note') }}
          </p>
          <label 
            for="name" 
            class="b1"
          >
            {{ $t('embroidery.step6Page.sectionBelarusPost.inputName.label') }} *
          </label>
          <input
            type="text"
            id="name"
            :placeholder="$t('embroidery.step6Page.sectionBelarusPost.inputName.placeholder')" 
            class="instruction-input"
            :class="{'invalidInput': !validName && nameTypingStarted}" 
            v-model="name"
            ref="nameInput"
          />
          <span
            v-if="!validName && nameTypingStarted"
            class="warningNotification note warning redLighter"
          >
            {{ $t('invalidInputs.pleaseEnterYourNameAndSurname') }}
          </span>
          <p class="note">
            {{ $t('embroidery.step6Page.sectionBelarusPost.inputName.note') }}
          </p>
          <label 
            for="adress" 
            class="b1"
          >
            {{ $t('embroidery.step6Page.sectionBelarusPost.inputAdress.label') }} *
          </label>
          <input
            type="text"
            id="adress"
            :placeholder="$t('embroidery.step6Page.sectionBelarusPost.inputAdress.placeholder')" 
            class="instruction-input"
            :class="{'invalidInput': !validAdress && adressTypingStarted}" 
            v-model="adress"
            ref="adressInput"
          />
          <span
            v-if="!validAdress && adressTypingStarted"
            class="warningNotification note warning redLighter"
          >
            {{ $t('invalidInputs.pleaseEnterYourAdress') }}
          </span>
          <p class="note">
            {{ $t('embroidery.step6Page.sectionBelarusPost.inputAdress.note') }}
          </p>
          <label 
            for="trackingNumber" 
            class="b1"
          >
            {{ $t('embroidery.step6Page.sectionBelarusPost.inputTrackingNumber.label') }} *
          </label>
          <input
            type="text"
            id="trackingNumber"
            :placeholder="$t('embroidery.step6Page.sectionBelarusPost.inputTrackingNumber.placeholder')" 
            class="instruction-input"
            :class="{'invalidInput': !validTrackingNumber && trackingNumberTypingStarted}" 
            v-model="trackingNumber"
            ref="trackingNumberInput"
          />
          <span
            v-if="!validTrackingNumber && trackingNumberTypingStarted"
            class="warningNotification note warning redLighter"
          >
            {{ $t('embroidery.step6Page.sectionEU.inputTrackingNumber.warning') }}
          </span>
        </div>
        <div class="buttons">
          <nuxt-link 
            :to="localePath('/Embroidery/Step-6-processing-shipping')"
            class="button"
            :class="validData ? 'bg_black' : 'button_disabled'"
          >
            {{ $t('embroidery.step6Page.sectionBelarusPost.forwardButton') }}
          </nuxt-link>
        </div>
      </section>
    </div>
  </main>
</template>

<style src="./Step-6-Belarus-post.scss" lang="scss" scoped></style>
