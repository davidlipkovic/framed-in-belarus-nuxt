<script setup>
import { computed, onMounted, ref, watch } from "vue";

definePageMeta({
  layout: "embroidery"
})

const text = ref('')
const fine = ref(false)

watch(text, (n) => {
  if (n.length > 0) {
    fine.value = true
  }
})
</script>

<template>
  <main class="Content">
    <Head>
      <Title>#Framed in Belarus / Step 5 — Comment</Title>
      <Meta name="description" content="First step" />
    </Head>
    <div class="Title">
      <div class="content">
        <h1>
          <span class="subtitle">
            {{ $t('embroidery.steps.step') }} 5
          <span class="visually-hidden">— </span></span>
          {{ $t('embroidery.step5Page.title') }}
        </h1>
        <GeneralGoBack
          page="Profile"
        />
      </div>
    </div>
    <div class="content">
      <RegistrationNavSteps
        :currentStep="5"
      />
      <section class="textWidth">
        <input type="checkbox" class="visually-hidden" id="HeroHidden" />
        <RegistrationHeroBio />
        <div class="part">
          <h2 class="title">
            {{ $t('embroidery.step5Page.section1.title') }}
          </h2>
          <br>
          <p>
            {{ $t('embroidery.step5Page.section1.paragraph1') }}
          </p>
          <br>
          <p>
            {{ $t('embroidery.step5Page.section1.paragraph2') }}
          </p>
          <br>
          <p>
            {{ $t('embroidery.step5Page.section1.paragraph3') }}
          </p>
          <br>
          <label for="publishDisagree" class="publishComment-item">
            <input
              type="radio"
              name="publish"
              id="publishDisagree"
              value="disagree"
              class="publishComment-item-input"
              required
            />
            <span class="publishComment-item-label">
              {{ $t('embroidery.step5Page.section2.content1') }}
            </span>
          </label>
          <label for="publishDisagree" class="publishComment-item">
            <input
              type="radio"
              name="publish"
              id="publishDisagree"
              value="disagree"
              class="publishComment-item-input"
              required
            />
            <span class="publishComment-item-label">
              {{ $t('embroidery.step5Page.section2.content2') }}
            </span>
          </label>
        </div>
        <div class="part Comment">
          <div class="Comment-header">
            <label for="comment" class="title">
              {{ $t('embroidery.step5Page.section3.title') }}
            </label>
            <!-- <output id="lettersLeft">2300</output> -->
          </div>
          <div class="Comment-content">
            <p class="note">
              {{ $t('embroidery.step5Page.section3.textarea1.label') }}
            </p>
            <textarea
              name="comment"
              id="comment"
              :placeholder="$t('embroidery.step5Page.section3.textarea1.placeholder')"
              class=""
              v-model="text"
            />
            <p class="mistake defaultNone">
              {{ $t('embroidery.step5Page.section3.textarea1.warning') }}
            </p>
          </div>
          <br>
          <div class="Comment-content">
            <p class="note">
              {{ $t('embroidery.step5Page.section3.textarea2.label') }}
            </p>
            <textarea
              name="comment"
              id="comment"
              :placeholder="$t('embroidery.step5Page.section3.textarea2.placeholder')"
              class=""
              v-model="text"
            />
            <p class="mistake defaultNone">
              {{ $t('embroidery.step5Page.section3.textarea2.warning') }}
            </p>
          </div>
        </div>
        <div class="part publishComment">
          <p class="b2">
            {{ $t('embroidery.step5Page.section4.title') }}
          </p>
          <br>
          <label for="publishAgree" class="publishComment-item">
            <input
              type="radio"
              name="publish"
              id="publishAgree"
              value="agree"
              class="publishComment-item-input"
              required
            />
            <span class="publishComment-item-label">
              {{ $t('embroidery.step5Page.section4.content1') }}
            </span>
          </label>
          <label for="publishDisagree" class="publishComment-item">
            <input
              type="radio"
              name="publish"
              id="publishDisagree"
              value="disagree"
              class="publishComment-item-input"
              required
            />
            <span class="publishComment-item-label">
              {{ $t('embroidery.step5Page.section4.content2') }}
            </span>
          </label>
          <p class="mistake defaultNone">
            {{ $t('embroidery.step5Page.section4.warning') }}
          </p>
        </div>
        <div class="buttons">
          <nuxt-link 
            :to="localePath('/Embroidery/Step-4-photo')"
            class="button"
          >
            {{ $t('embroidery.step5Page.backButton') }}
          </nuxt-link>
          <nuxt-link 
            :to="localePath('/Embroidery/Step-6')"
            class="button bg_black" 
            :class="fine? '' : 'button_disabled'" 
            id="save"
          >
            {{ $t('embroidery.step5Page.forwardButton') }}
          </nuxt-link>
        </div>
      </section>
    </div>
  </main>
</template>

<style src="../../../assets/style/form.scss" lang="scss"></style>
<style src="../../../assets/style/steps.scss" lang="scss" scoped></style>
<style src="../Step-4-photo/Step-4-photo.scss" lang="scss" scoped></style>
<style src="./Step-5-comment.scss" lang="scss" scoped></style>
