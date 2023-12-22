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
        <div class="instruction" id="instructionBelarus">
          <p class="title important">Please read this section carefully!</p>
          <p>Sending work from Belarus is always a bit of a challenge.</p>
          <p>
            For safety reasons,
            <strong class="b2"
            >we don't recommend sending embroidery through the post
              office</strong
            >. Especially now, because of the war, the Czech Republic does not
            work with BelPochta.
          </p>
          <p>
            <strong class="b2"
            >We'll try to find out if anyone we know is going from Belarus to
              Europe</strong
            >
            in the near future. If you also know someone who will go and can
            take the embroidery, please let us know.
          </p>
          <p>
            Please write what city you are in and leave us your Telegram or
            Signal.
          </p>
          <p>Thank you!</p>
          <label for="usernameBelarus" class="title instruction-label"
          >Username</label
          >
          <input
            type="text"
            id="usernameBelarus"
            placeholder="Username"
            name="usernameBelarus"
            class="instruction-input"
          />
        </div>
        <div class="buttons flexColumnCenter">
          <!-- <nuxt-link to="/Embroidery/Step-5-comment" class="button"
          >Previous step</nuxt-link
          > -->
          <nuxt-link 
            :to="localePath('/Embroidery/Step-6-processing-shipping')"
            class="button bg_black" 
          >
            I have sent a package
          </nuxt-link>
        </div>
      </section>
    </div>
  </main>
</template>

<style src="../../../assets/style/form.scss" lang="scss"></style>
<style src="./Step-6-Belarus.scss" lang="scss" scoped></style>
