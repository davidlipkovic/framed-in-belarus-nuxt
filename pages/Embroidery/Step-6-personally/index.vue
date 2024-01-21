<script setup>
import { ref } from 'vue'
import { useValidateInputs } from "@/composables/ValidateInputs";

const { validateLatinCharacters, validateText} = useValidateInputs()

definePageMeta({
  layout: "embroidery"
})

const comment = ref(null)
const commentTypingStarted = ref(false)

const validComment = computed(() => validateLatinCharacters(comment.value) && validateText(comment.value))
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
          <span class="subtitle">
            {{ $t('embroidery.steps.step') }} 6
          <span class="visually-hidden">— </span></span>
          {{ $t('embroidery.step6Page.title') }}
        </h1>
        <GeneralGoBack
          :isEmbroidery="true"
          page="Profile"
        />
      </div>
    </div>
    <div class="content">
      <RegistrationNavSteps
        :currentStep="6"
      />
      <section>
        <div class="shippingInstructionWrapper">
          <p>
            {{ $t('embroidery.step6Page.sectionPersonally.content') }}
          </p>
          <label 
            for="comment" 
            class="b1"
          >
            {{ $t('embroidery.step6Page.sectionPersonally.textarea.label') }} *
          </label>
          <textarea
            name="comment"
            id="comment"
            :placeholder="$t('embroidery.step6Page.sectionPersonally.textarea.placeholder')" 
            v-model="comment"
            :class="{'invalidInput': !validComment && commentTypingStarted}" 
            @input="commentTypingStarted = true"
          />
          <span
            v-if="!validComment && commentTypingStarted"
            class="warningNotification note warning redLighter"
          >
            {{ $t('embroidery.step6Page.sectionPersonally.textarea.warning') }}
          </span>
        </div>
        <div class="buttons flexColumnCenter">
          <nuxt-link 
            :to="localePath('/Embroidery/Step-6-processing-shipping')"
            class="button" 
            :class="validComment ? 'bg_black' : 'button_disabled'"
          >
            {{ $t('embroidery.step6Page.sectionPersonally.forwardButton') }}
          </nuxt-link>
        </div>
      </section>
    </div>
  </main>
</template>

<style src="./Step-6-personally.scss" lang="scss" scoped></style>
