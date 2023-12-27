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
      <Meta name="description" content="Fifth step" />
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
          :isEmbroidery="true"
          page="Profile"
        />
      </div>
    </div>
    <div class="content">
      <RegistrationNavSteps
        :currentStep="5"
      />
      <section class="limitedTextWidthLg">
        <RegistrationHeroBio />
        <div class="sectionWrapper">
          <h2 class="title">
            {{ $t('embroidery.step5Page.section1.title') }}
          </h2>
          <p>
            {{ $t('embroidery.step5Page.section1.paragraph1') }}
          </p>
          <p>
            {{ $t('embroidery.step5Page.section1.paragraph2') }}
          </p>
          <p>
            {{ $t('embroidery.step5Page.section1.paragraph3') }}
          </p>
          <div class="publishComment-item flexRowStart">
            <input
              type="checkbox"
              name="publish"
              id="sentComment"
              value="disagree"
              required
            />
            <label for="sentComment">
              {{ $t('embroidery.step5Page.section2.content1') }}
            </label>
          </div>
          <div class="publishComment-item flexRowStart">
            <input
              type="checkbox"
              name="publish"
              id="writeComment"
              value="disagree"
              required
            />
            <label for="writeComment">
              {{ $t('embroidery.step5Page.section2.content2') }}
            </label>
          </div>
        </div>
        <div class="textAreaWrapper">
          <h3 class="title">
            {{ $t('embroidery.step5Page.section3.title') }}
          </h3>
          <div>
            <label for="englishComment">
              {{ $t('embroidery.step5Page.section3.textarea1.label') }}
            </label>
            <textarea
              name="comment"
              id="englishComment"
              :placeholder="$t('embroidery.step5Page.section3.textarea1.placeholder')"
              v-model="text"
            />
            <p class="mistake defaultNone">
              {{ $t('embroidery.step5Page.section3.textarea1.warning') }}
            </p>
          </div>
          <div>
            <label for="nativeComment">
              {{ $t('embroidery.step5Page.section3.textarea2.label') }}
            </label>
            <textarea
              name="comment"
              id="nativeComment"
              :placeholder="$t('embroidery.step5Page.section3.textarea2.placeholder')"
              v-model="text"
            />
            <p class="mistake defaultNone">
              {{ $t('embroidery.step5Page.section3.textarea2.warning') }}
            </p>
          </div>
        </div>
        <div class="consentWrapper">
          <p class="b1">
            {{ $t('embroidery.step5Page.section4.title') }}
          </p>
          <div class="publishComment-item flexRowStart">
            <input
              type="radio"
              name="publish"
              id="publishAgree"
              value="agree"
              required
            />
            <label for="publishAgree">
              {{ $t('embroidery.step5Page.section4.content1') }}
            </label>
          </div>
          <div class="publishComment-item flexRowStart">
            <input
              type="radio"
              name="publish"
              id="publishDisagree"
              value="disagree"
              required
            />
            <label for="publishDisagree">
              {{ $t('embroidery.step5Page.section4.content2') }}
            </label>
          </div>
          <p class="mistake defaultNone">
            {{ $t('embroidery.step5Page.section4.warning') }}
          </p>
        </div>
        <div class="buttons flexColumnCenter">
          <nuxt-link 
            :to="localePath('/Embroidery/Step-4-photo')"
            class="button"
          >
            {{ $t('embroidery.step5Page.backButton') }}
          </nuxt-link>
          <nuxt-link 
            :to="localePath('/Embroidery/Step-6-choose-shipping')"
            class="button bg_black" 
            :class="{'button_disabled': false}" 
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
