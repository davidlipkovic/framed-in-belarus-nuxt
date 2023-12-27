<script setup>
import { computed, onMounted, ref, watch } from "vue";

definePageMeta({
  layout: "embroidery"
})

const text = ref('')
const fine = ref(false)
const writeComment = ref(false)

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
          <label 
            for="sentComment" 
            class="publishComment-item flexRowStart"
          >
            <input
              type="checkbox"
              name="publish"
              id="sentComment"
              value="false"
              required
            />
            {{ $t('embroidery.step5Page.section2.content1') }}
          </label>
          <label
            for="writeComment"
            class="publishComment-item flexRowStart"
          >
            <input
              type="checkbox"
              name="publish"
              id="writeComment"
              :value="true"
              v-model="writeComment"
              required
            />
              {{ $t('embroidery.step5Page.section2.content2') }}
          </label>
        </div>
        <div 
          class="textAreaWrapper"
          :class="{'textAreaWrapperOpen' : writeComment}"
        >
          <template v-if="writeComment">
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
          </template>
        </div>
        <div class="consentWrapper">
          <p class="b1">
            {{ $t('embroidery.step5Page.section4.title') }}
          </p>
          <label 
            for="publishAgree"
            class="publishComment-item flexRowStart"
          >
            <input
              type="radio"
              name="publish"
              id="publishAgree"
              value="agree"
              required
            />
            {{ $t('embroidery.step5Page.section4.content1') }}
          </label>
          <label 
            for="publishDisagree" 
            class="publishComment-item flexRowStart"
          >
            <input
              type="radio"
              name="publish"
              id="publishDisagree"
              value="disagree"
              required
            />
              {{ $t('embroidery.step5Page.section4.content2') }}
          </label>
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
