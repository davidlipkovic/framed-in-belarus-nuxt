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
          <span class="subtitle">Step 6 <span class="visually-hidden">— </span></span>Shipping
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
            Thank you! We'll be sure to get back to you as soon as we receive your embroidery
          </h2>
          <br>
          <p>
            In meanwhile you can add or correct information about yourself in your personal profile
          </p>
          <p>
            A short text about you will be published in our gallery with your embroidery. If you want to hide or add something, such as social networks, please do it in advance.
          </p>
        </div>
        <div class="buttons">
          <nuxt-link to="/Profile" class="button">Edit my profile</nuxt-link>
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
      <!--        <div class="buttons">-->
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

<style src="../Steps.scss" lang="scss" scoped></style>
<style src="./Step-6-shipping.scss" lang="scss" scoped></style>
<style src="../../Profile/Settings.scss" lang="scss" scoped></style>
