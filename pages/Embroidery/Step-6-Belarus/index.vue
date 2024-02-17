<script setup>
definePageMeta({
  layout: "embroidery",
  middleware: [
    'heroes',
    'auth-registration',
    'stitching',
    'user-summary',
  ],
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
        <div class="shippingInstructionWrapper">
          <p>
            {{ $t('embroidery.step6Page.sectionBelarus.content') }}
          </p>
        </div>
        <div class="buttons">
          <nuxt-link 
            :to="localePath('/Embroidery/Step-6-processing-shipping')"
            class="button bg_black" 
          >
            {{ $t('embroidery.step6Page.sectionBelarus.forwardButton') }}
          </nuxt-link>
        </div>
      </section>
    </div>
  </main>
</template>

<style src="./Step-6-Belarus.scss" lang="scss" scoped></style>
