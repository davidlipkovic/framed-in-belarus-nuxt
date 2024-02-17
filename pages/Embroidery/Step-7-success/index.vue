<script setup>
definePageMeta({
  layout: "embroidery",
  middleware: [
    'heroes',
    'auth-registration',
    'stitching',
  ],
})
</script>

<template>
  <main class="Content">
      <Head>
        <Title>#Framed in Belarus / Step 7 — Publication</Title>
        <Meta name="description" content="First step"/>
      </Head>
      <div class="Title">
        <div class="content">
          <h1>
            <span class="subtitle">
              {{ $t('embroidery.steps.step') }} 7
            <span class="visually-hidden">— </span></span>
            {{ $t('embroidery.step7Page.title') }}
          </h1>
        <GeneralGoBack
          :isEmbroidery="true"
          page="Profile"
        />
        </div>
      </div>
      <div class="content">
        <RegistrationNavSteps
          :currentStep="7"
        />
        <section class="thankYou Done limitedTextWidthLg">
          <div class="thankYouContent">
            <h2 class="title">
              {{ $t('embroidery.step7Page.section1.title') }}
            </h2>
            <br>
            <p>
              <strong class="b2">{{ $t('embroidery.step7Page.section1.paragraph1.highlight') }}</strong> {{ $t('embroidery.step7Page.section1.paragraph1.content') }}
            </p>
            <p>
              {{ $t('embroidery.step7Page.section1.paragraph2.content1') }} <strong class="b2">{{ $t('embroidery.step7Page.section1.paragraph2.highlight') }}</strong> {{ $t('embroidery.step7Page.section1.paragraph2.content2') }}
            </p>
            <br>
            <p>
              {{ $t('embroidery.step7Page.section1.paragraph3') }}
            </p>
            <p>
              {{ $t('embroidery.step7Page.section1.paragraph4') }}
            </p>
          </div>
          <div class="buttons">
            <nuxt-link
              to="/Embroidery/Step-1-your-hero"
              class="button bg_black"
            >
              {{ $t('embroidery.step7Page.forwardButton') }}
            </nuxt-link>
          </div>
        </section>
      </div>
    </main>
</template>

<style src="./Step-7-success.scss" lang="scss" scoped></style>
