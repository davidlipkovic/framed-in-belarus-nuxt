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
        <div class="instruction" id="instructionNonEU">
          <p class="title important">Please read this section carefully!</p>
          <p>
            Send your work only by <strong class="b2">CUSTOMER POSTAGE</strong>!
          </p>
          <p>
            This way we will be able to track it and if it is lost, we will be
            able to look for it by its tracking number.
          </p>
          <h2 class="title address">Address:</h2>
          <p>
            Rufina Bazlova<br />
            Schnirchova 15,<br />
            170 00 Prague<br />
            Czech Republic
          </p>
          <p><strong class="b2">Marked</strong> ART PROJECT</p>
          <div class="part">
            <h2 class="title">IMPORTANT</h2>
            <p>
              When sending a parcel from a country outside the customs union of
              the European Union, please do the following:
            </p>
            <ul>
              <li>
                When filling in the postal declaration, mark the parcel as GIFT,
                worth up to 20 euros.
              </li>
              <li>On the content line please write Embroidery or Tissue.</li>
              <li>
                We will need the following information from you in order to
                issue the customs declaration.
              </li>
            </ul>
          </div>
          <label for="nameSurname" class="title instruction-label"
          >Name Surname</label
          >
          <input
            type="text"
            id="nameSurname"
            placeholder="Name Surname"
            name="nameSurname"
            class="instruction-input instruction-input-hasNote"
          />
          <p class="note">Please fill in Latin letters.</p>
          <label for="nameSurname" class="title instruction-label"
          >Adress with zip code and country</label
          >
          <input
            type="text"
            id="nameSurname"
            placeholder="Address"
            name="nameSurname"
            class="instruction-input instruction-input-hasNote"
          />
          <p class="note">Please fill in Latin letters.</p>
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

