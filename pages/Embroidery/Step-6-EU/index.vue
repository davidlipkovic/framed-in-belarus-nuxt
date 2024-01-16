<script setup>
import { ref } from 'vue'

definePageMeta({
  layout: "embroidery"
})

const trackingNumber = ref(null)
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
            v-model="trackingNumber"
          />
          <p 
            v-if="trackingNumber && trackingNumber.length < 4"
            class="warning redLighter"
          >
            {{ $t('embroidery.step6Page.sectionEU.inputTrackingNumber.warning') }}
          </p>
        </div>
        <div class="buttons">
          <nuxt-link 
            to="/Embroidery/Step-6-choose-shipping" 
            class="button"
          >
            {{ $t('embroidery.step6Page.sectionEU.backButton') }}
          </nuxt-link>
          <nuxt-link 
            :to="localePath('/Embroidery/Step-6-processing-shipping')"
            class="button" 
            :class="{'button_disabled': !trackingNumber, 'bg_black': trackingNumber}" 
          >
            {{ $t('embroidery.step6Page.sectionEU.forwardButton') }}
          </nuxt-link>
        </div>
      </section>
    </div>
  </main>
</template>

<style src="./Step-6-EU.scss" lang="scss" scoped></style>
