<script setup>
definePageMeta({
  layout: "embroidery"
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
          page="Profile"
        />
      </div>
    </div>
    <div class="content">
      <RegistrationNavSteps
        :currentStep="6"
      />
      <section class="Publication Waiting textWidth">
        <div class="Publication-content">
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
        <div class="buttons flexColumnCenter">
          <nuxt-link 
            :to="localePath('/Profile')"
            class="button"
          >
            {{ $t('embroidery.step6Page.sectionSent.forwardButton') }}
          </nuxt-link>
        </div>
      </section>
      <!--      <section class="Publication Done textWidth">-->
      <!--        <div class="Publication-content">-->
      <!--          <h2 class="title">Good news!! We received your work</h2>-->
      <!--          <p>Everything arrived without damage. Such a beautiful embroidery - thank you so much! We always look forward to and enjoy opening the package. And each work is always very original.</p>-->
      <!--          <p>The process of verification and publishing your work in our online gallery can take anywhere from a few days to a few weeks. Thanks for your understanding! </p>-->
      <!--          <p>When the publication is ready the icon with the embroidered hero in your personal profile will get a green mark. You will be able to check your hero’s page in the gallery by clicking that icon. </p>-->
      <!--          <p>Thank you again for your solidarity and participation.</p>-->
      <!--          <p>We wish you all the best!!</p>-->
      <!--          <p>If you still have time and energy, you can embroider a new political prisoner.</p>-->
      <!--        </div>-->
      <!--        <div class="buttons flexColumnCenter">-->
      <!--          <nuxt-link-->
      <!--            to="/Embroidery/Step-1-your-hero"-->
      <!--            class="button bg_black">-->
      <!--            Choose a new hero-->
      <!--          </nuxt-link>-->
      <!--        </div>-->
      <!--      </section>-->
    </div>
  </main>
</template>

<style src="../../../assets/style/settings.scss" lang="scss" scoped></style>
<style src="../../../assets/style/steps.scss" lang="scss" scoped></style>
<style src="./Step-6-shipping.scss" lang="scss" scoped></style>
