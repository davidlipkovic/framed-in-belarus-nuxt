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
      <Meta name="description" content="First step"/>
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
      <section class="thankYou Waiting limitedTextWidthLg">
        <div class="thankYouContent">
          <h2 class="title">
            {{ $t('embroidery.step6Page.sectionSent.title') }}
          </h2>
          <br>
          <p>
            {{ $t('embroidery.step6Page.sectionSent.content1') }}
          </p>
          <p>
            {{ $t('embroidery.step6Page.sectionSent.content2') }}
          </p>
          <p>
            {{ $t('embroidery.step6Page.sectionSent.content3') }}
          </p>
        </div>
        <div class="buttons">
          <nuxt-link 
            :to="$localePath('/Profile')"
            class="button"
          >
            {{ $t('embroidery.step6Page.sectionSent.forwardButton') }}
          </nuxt-link>
        </div>
      </section>
    </div>
  </main>
</template>

<style src="./Step-6-processing-shipping.scss" lang="scss" scoped></style>
