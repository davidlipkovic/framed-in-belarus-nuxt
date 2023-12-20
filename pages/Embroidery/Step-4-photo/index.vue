<script setup>
definePageMeta({
  layout: "embroidery"
})
</script>

<template>
  <main class="Content">
    <Head>
      <Title>#Framed in Belarus / Step 4 — Photo</Title>
      <Meta name="description" content="First step" />
    </Head>
    <div class="Title">
      <div class="content">
        <h1>
          <span class="subtitle">
            {{ $t('embroidery.steps.step') }} 4
          <span class="visually-hidden">— </span></span>
          {{ $t('embroidery.step4Page.title') }}
        </h1>
        <GeneralGoBack
          page="Profile"
        />
      </div>
    </div>
    <div class="content">
      <RegistrationNavSteps
        :currentStep="4"
      />
      <section class="textWidth">
        <input type="checkbox" class="visually-hidden" id="HeroHidden" />
        <RegistrationHeroBio />
        <h2 class="title">
          {{ $t('embroidery.step4Page.section1.title') }}
        </h2>
        <br>
        <p>
          {{ $t('embroidery.step4Page.section1.paragraph1') }}
        </p>
        <br>
        <p>
          {{ $t('embroidery.step4Page.section1.paragraph2') }}
        </p>
        <br>
        <p class="b2">
          {{ $t('embroidery.step4Page.section1.paragraph3') }}
        </p>
        <div class="uploadFiles" id="uploadFilesArea">
          <label class="uploadFiles-descript flexColumnCenter" for="uploadFiles">
            <span class="line">
              {{ $t('embroidery.step4Page.dropZone.content') }}
            </span>
            <span class="line b">
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                alt="+"
                class="uploadFiles-descript-icon"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.578969 0.762563C1.26239 0.0791456 2.37043 0.0791456 3.05384 0.762563L12.3164 10.0251L21.579 0.762563C22.2624 0.0791456 23.3704 0.0791456 24.0538 0.762563C24.7373 1.44598 24.7373 2.55402 24.0538 3.23744L14.7913 12.5L24.0538 21.7626C24.7373 22.446 24.7373 23.554 24.0538 24.2374C23.3704 24.9209 22.2624 24.9209 21.579 24.2374L12.3164 14.9749L3.05384 24.2374C2.37043 24.9209 1.26239 24.9209 0.578969 24.2374C-0.104448 23.554 -0.104448 22.446 0.578969 21.7626L9.84153 12.5L0.578969 3.23744C-0.104448 2.55402 -0.104448 1.44598 0.578969 0.762563Z"
                  fill="#4F4F4F"
                />
              </svg>
              {{ $t('embroidery.step4Page.dropZone.highlight') }}
            </span>
          </label>
          <input
            type="file"
            multiple="multiple"
            id="uploadFiles"
            class="visually-hidden"
          />
        </div>
        <div class="photos">
          <div class="photo flexRowCenter">
            <img
              src="../../../assets/media/img/case1/proces1.jpg"
              alt="Photo of your embroidery"
              class="photo-img"
            />
            <button
              class="photo-btnDelete"
              @click="img1 = true"
            >
              <img
                src="../../../assets/media/img/close-circle.svg"
                alt="Delete"
                class="photo-btnDelete-img"
              />
            </button>
          </div>
          <div class="photo flexRowCenter">
            <img
              src="../../../assets/media/img/case1/proces2.jpg"
              alt="Photo of your embroidery"
              class="photo-img"
            />
            <button class="photo-btnDelete">
              <img
                src="../../../assets/media/img/close-circle.svg"
                alt="Delete"
                class="photo-btnDelete-img"
              />
            </button>
          </div>
        </div>
        <div class="buttons flexColumnCenter">
          <nuxt-link 
            :to="localePath('/Embroidery/Step-3-support')"
            class="button"
          >
            {{ $t('embroidery.step4Page.backButton') }}
          </nuxt-link>
          <nuxt-link 
            :to="localePath('/Embroidery/Step-5-comment')"
            class="button bg_black" 
            id="save"
          >
            {{ $t('embroidery.step4Page.forwardButton') }}
          </nuxt-link>
        </div>
      </section>
    </div>
  </main>
</template>

<style src="../../../assets/style/steps.scss" lang="scss" scoped></style>
<style src="./Step-4-photo.scss" lang="scss" scoped></style>
