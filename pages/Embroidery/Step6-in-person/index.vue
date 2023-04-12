<script setup>
definePageMeta({
  layout: "embroidery"
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
          <span class="subtitle"
          >Step 6 <span class="visually-hidden">— </span></span
          >Shipping
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

      <section class="Shipping">
        <div class="instruction default">
          <div class="instruction_default-content">
            <p>
              The instructions will appear here once you will have chosen a
              region of origin.
            </p>
          </div>
        </div>

        <div class="buttons">
          <!-- <nuxt-link to="/Embroidery/Step-5-comment" class="button"
          >Previous step</nuxt-link
          > -->
          <nuxt-link to="/Embroidery/Step-6-shipping" class="button bg_black" id="save">
            I have sent a package
          </nuxt-link>
        </div>
      </section>
    </div>
  </main>
</template>

<style src="../../../assets/style/form.scss" lang="scss"></style>
<style src="../Steps.scss" lang="scss" scoped></style>
<style src="../Step6/Step6.scss" lang="scss" scoped></style>

