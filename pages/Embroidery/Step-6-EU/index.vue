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
        <div class="instruction" id="instructionEU">
          <p class="title important">Please read this section carefully!</p>
          <p>
            Send your work only by <strong class="b2">CUSTOMER POSTAGE</strong>!
            <br>
            This way we will be able to track it and if it is lost, we will be
            able to look for it by its tracking number.
          </p>
          <h2 class="title address">Address:</h2>
          <p>
            Amnesty International <br />
            Kodaňská 1441/46<br />
            101 00 Prague<br />
            Czech Republic
          </p>
          <p><strong class="b2">Marked</strong> ART PROJECT</p>
          <p>
            When filling in the postal declaration, mark the package as
            <strong class="b2">GIFT</strong>, worth
            <strong class="b2">€20 or less</strong>. On the contents of the
            package, please write
            <strong class="b2">Embroidery or Tissue</strong>
          </p>
          <label for="trackingEU" class="instruction-label"
          >Please write the tracking number of your parcel here:</label
          >
          <input
            type="text"
            id="trackingEU"
            placeholder="Tracking number"
            class="instruction-input"
          />
        </div>

        <div class="buttons">
          <!-- <nuxt-link to="/Embroidery/Step-5-comment" class="button"
          >Previous step</nuxt-link
          > -->
          <nuxt-link 
            :to="localePath('/Embroidery/Step-6-shipping')"
            class="button bg_black" 
            id="save"
          >
            I have sent a package
          </nuxt-link>
        </div>
      </section>
    </div>
  </main>
</template>

<style src="../../../assets/style/form.scss" lang="scss"></style>
<style src="../../../assets/style/steps.scss" lang="scss" scoped></style>
<style src="../Step-6/Step-6.scss" lang="scss" scoped></style>
