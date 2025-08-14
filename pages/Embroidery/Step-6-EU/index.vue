<script setup>
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import useUserStore from "@/stores/user"
import { useValidateInputs } from "@/composables/ValidateInputs";

const router = useRouter()
const userStore = useUserStore()
const { validateLatinCharacters, validateText} = useValidateInputs()

definePageMeta({
  layout: "embroidery",
  middleware: [
    'heroes',
    'auth-registration',
    'stitching',
    'user-summary',
  ],
})

const trackingNumber = ref(null)
const trackingNumberInput = ref(null)
const trackingNumberTypingStarted = ref(false)

const validTrackingNumber = computed(() => validateLatinCharacters(trackingNumber.value) && validateText(trackingNumber.value))

onClickOutside(trackingNumberInput, () => {
  if (trackingNumber.value) {
    trackingNumberTypingStarted.value = true
  }
})

const handleCreateShipping = async () => {
  userStore.loading = true

  const body = {
    from: 'EU',
    trackingNumber: trackingNumber.value,
  }

  await userStore.createShipping(body)
  userStore.loading = false
  router.push('/Embroidery/Step-6-processing-shipping')
}
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
        <div class="shippingInstructionWrapper">
          <p class="title important">
            {{ $t('embroidery.step6Page.sectionEU.title') }}:
          </p>
          <p class="b2 important importantWarning">
            {{ $t('embroidery.step6Page.sectionEU.section1.warning') }}:
          </p>
          <ul>
            <li class="flexRowStart">
              {{ $t('embroidery.step6Page.sectionEU.section1.paragraph1') }}
            </li>
            <li class="flexRowStart">
              {{ $t('embroidery.step6Page.sectionEU.section1.paragraph2') }}
            </li>
          </ul>
          <p class="explanation">
            {{ $t('embroidery.step6Page.sectionEU.section2.paragraph1.content1') }}
            <strong class="b1">
              {{ $t('embroidery.step6Page.sectionEU.section2.paragraph1.highlight') }}
            </strong>
            {{ $t('embroidery.step6Page.sectionEU.section2.paragraph1.content2') }}
            <br>
            {{ $t('embroidery.step6Page.sectionEU.section2.paragraph2') }}
          </p>
          <h2 class="title address">
            {{ $t('embroidery.step6Page.sectionEU.section3.title') }}:
          </h2>
          <p class="adress">
            {{ $t('embroidery.step6Page.sectionEU.section3.paragraph1.content1') }}<br/>
            {{ $t('embroidery.step6Page.sectionEU.section3.paragraph1.content2') }}<br/>
            {{ $t('embroidery.step6Page.sectionEU.section3.paragraph1.content3') }}<br/>
            {{ $t('embroidery.step6Page.sectionEU.section3.paragraph1.content4') }}<br/>
            {{ $t('embroidery.step6Page.sectionEU.section3.paragraph1.content5') }}<br/>
            {{ $t('embroidery.step6Page.sectionEU.section3.paragraph1.content6') }}
          </p>
          <label 
            for="trackingNumber" 
            class="b1"
          >
            {{ $t('embroidery.step6Page.sectionEU.inputTrackingNumber.label') }} *
          </label>
          <input
            type="text"
            id="trackingNumber"
            :placeholder="$t('embroidery.step6Page.sectionEU.inputTrackingNumber.placeholder')" 
            class="instruction-input"
            :class="{'invalidInput': !validTrackingNumber && trackingNumberTypingStarted}" 
            v-model="trackingNumber"
            ref="trackingNumberInput"
          />
          <span
            v-if="!validTrackingNumber && trackingNumberTypingStarted"
            class="warningNotification note warning redLight"
          >
            {{ $t('embroidery.step6Page.sectionEU.inputTrackingNumber.warning') }}
          </span>
        </div>
        <div class="buttons">
          <nuxt-link 
            to="/Embroidery/Step-6-choose-shipping" 
            class="button"
          >
            {{ $t('embroidery.step6Page.sectionEU.backButton') }}
          </nuxt-link>
          <button 
            class="button" 
            :class="validTrackingNumber ? 'bg_black' : 'button_disabled'"
            @click="handleCreateShipping()"
          >
            {{ $t('embroidery.step6Page.sectionEU.forwardButton') }}
          </button>
        </div>
      </section>
    </div>
  </main>
</template>

<style src="./Step-6-EU.scss" lang="scss" scoped></style>
