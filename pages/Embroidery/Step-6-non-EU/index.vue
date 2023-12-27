<script setup>
import { ref } from 'vue'

definePageMeta({
  layout: "embroidery"
})

const adress = ref(null)
const name = ref(null)
const trackingNumber = ref(null)

const validData = computed(() => {
  return adress.value && name.value && trackingNumber.value
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
        <div class="shippingInstructionWrapper">
          <p class="title important">
            {{ $t('embroidery.step6Page.sectionNonEU.title') }}:
          </p>
          <p class="b2 important importantWarning">
            {{ $t('embroidery.step6Page.sectionNonEU.section1.warning') }}:
          </p>
          <ul>
            <li class="flexRowStart">
              {{ $t('embroidery.step6Page.sectionNonEU.section1.paragraph1') }}
            </li>
            <li class="flexRowStart">
              {{ $t('embroidery.step6Page.sectionNonEU.section1.paragraph2') }}
            </li>
            <li class="flexRowStart">
              {{ $t('embroidery.step6Page.sectionNonEU.section1.paragraph3') }}
            </li>
          </ul>
          <p class="explanation">
            {{ $t('embroidery.step6Page.sectionNonEU.section2.paragraph1.content1') }}
            <strong class="b1">
              {{ $t('embroidery.step6Page.sectionNonEU.section2.paragraph1.highlight') }}
            </strong>
            {{ $t('embroidery.step6Page.sectionNonEU.section2.paragraph1.content2') }}
            <br>
            {{ $t('embroidery.step6Page.sectionNonEU.section2.paragraph2') }}
          </p>
          <h2 class="title address">
            {{ $t('embroidery.step6Page.sectionNonEU.section3.title') }}:
          </h2>
          <p class="adress">
            {{ $t('embroidery.step6Page.sectionNonEU.section3.paragraph1.content1') }}<br/>
            {{ $t('embroidery.step6Page.sectionNonEU.section3.paragraph1.content2') }}<br/>
            {{ $t('embroidery.step6Page.sectionNonEU.section3.paragraph1.content3') }}<br/>
            {{ $t('embroidery.step6Page.sectionNonEU.section3.paragraph1.content4') }}<br/>
            {{ $t('embroidery.step6Page.sectionNonEU.section3.paragraph1.content5') }}<br/>
            {{ $t('embroidery.step6Page.sectionNonEU.section3.paragraph1.content6') }}
          </p>
          <p class="declaration">
            {{ $t('embroidery.step6Page.sectionNonEU.declaration.content') }}
          </p>
          <p class="declaration note">
            {{ $t('embroidery.step6Page.sectionNonEU.declaration.note') }}
          </p>
          <label 
            for="name" 
            class="b1"
          >
            {{ $t('embroidery.step6Page.sectionNonEU.inputName.label') }} *
          </label>
          <input
            type="text"
            id="name"
            :placeholder="$t('embroidery.step6Page.sectionNonEU.inputName.placeholder')" 
            class="instruction-input"
            v-model="name"
          />
          <p class="note">
            {{ $t('embroidery.step6Page.sectionNonEU.inputName.note') }}
          </p>
          <label 
            for="adress" 
            class="b1"
          >
            {{ $t('embroidery.step6Page.sectionNonEU.inputAdress.label') }} *
          </label>
          <input
            type="text"
            id="adress"
            :placeholder="$t('embroidery.step6Page.sectionNonEU.inputAdress.placeholder')" 
            class="instruction-input"
            v-model="adress"
          />
          <p class="note">
            {{ $t('embroidery.step6Page.sectionNonEU.inputAdress.note') }}
          </p>
          <label 
            for="trackingNumber" 
            class="b1"
          >
            {{ $t('embroidery.step6Page.sectionNonEU.inputTrackingNumber.label') }} *
          </label>
          <input
            type="text"
            id="trackingNumber"
            :placeholder="$t('embroidery.step6Page.sectionNonEU.inputTrackingNumber.placeholder')" 
            class="instruction-input"
            v-model="trackingNumber"
          />
          <p 
            v-if="trackingNumber && trackingNumber.length < 4"
            class="warning redLighter"
          >
            {{ $t('embroidery.step6Page.sectionNonEU.inputTrackingNumber.warning') }}
          </p>
        </div>
        <div class="buttons flexColumnCenter">
          <nuxt-link 
            to="/Embroidery/Step-6-choose-shipping" 
            class="button"
          >
            {{ $t('embroidery.step6Page.sectionNonEU.backButton') }}
          </nuxt-link>
          <nuxt-link 
            :to="localePath('/Embroidery/Step-6-processing-shipping')"
            class="button" 
            :class="{'button_disabled': !validData, 'bg_black': validData}" 
          >
            {{ $t('embroidery.step6Page.sectionNonEU.forwardButton') }}
          </nuxt-link>
        </div>
      </section>
    </div>
  </main>
</template>

<style src="../../../assets/style/form.scss" lang="scss"></style>
<style src="./Step-6-non-EU.scss" lang="scss" scoped></style>
