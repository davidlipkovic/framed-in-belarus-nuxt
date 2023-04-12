<script setup>
definePageMeta({
  layout: "embroidery"
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
            <span class="subtitle">Step 7 <span class="visually-hidden">— </span></span>Publication
          </h1>
        <GeneralGoBack
          page="Profile"
        />
        </div>
      </div>
      <div class="content">
        <RegistrationNavSteps
          :currentStep="7"
        />

        <section class="Publication Done textWidth">
          <div class="Publication-content">
            <h2 class="title">
              Good news! We received your work
            </h2>
            <br>
            <p>
              <strong class="b2">The process of verification and publishing your work in our online gallery can take anywhere from a few days to a few weeks.</strong> Thanks for your understanding! 
            </p>
            <p>
              When the publication is ready the icon with the embroidered hero in your personal profile will get a green mark. <strong class="b2">You will be able to check your hero’s page in the gallery</strong> by clicking that icon. 
            </p>
            <br>
            <p>
              Thank you for your solidarity and participation.
            </p>
            <p>
              If you still have time and energy, you can embroider a new political prisoner.
            </p>
          </div>
          <div class="buttons">
            <nuxt-link
              to="/Embroidery/Step-1-your-hero"
              class="button bg_black">
              Choose a new hero
            </nuxt-link>
          </div>
        </section>
      </div>
    </main>
</template>

<style src="../Steps.scss" lang="scss" scoped></style>
<style src="./Step-7-success.scss" lang="scss" scoped></style>
<style src="../../Profile/Settings.scss" lang="scss" scoped></style>
