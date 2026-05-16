<script setup>
import { computed, onMounted, ref, watch } from "vue";
import { useI18n } from 'vue-i18n'
import languagesJSON from '../../../assets/json/languages.json'

const { t } = useI18n()

definePageMeta({
  layout: "embroidery",
  middleware: [
    'auth-registration',
    'stitching',
  ],
})

useHead({
  title: t('embroidery.step5Page.title'),
  meta: [
    { property: 'og:title', content: t('embroidery.step5Page.title'), },
    { name: 'robots', content: 'noindex' }
  ],
})

const englishComment = ref(null)
const nativeComment = ref(null)
const nativeLanguage = ref(null)
const publishComment = ref(null)
const sendComment = ref(null)
const writeComment = ref(null)

const languages = computed(() => {
  const mappedLanguages = languagesJSON.map(language => {
    return language.name
  })

  return mappedLanguages.filter(language => language.code !== "en")
})

const validData = computed(() => {
  return publishComment.value !== null && (sendComment.value || (writeComment.value && (englishComment.value || (nativeLanguage.value && nativeComment.value))))
})
</script>

<template>
  <main class="Content">
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
        />
      </div>
    </div>
    <div class="content step5PageWrapper">
      <EmbroideryNavSteps
        :currentStep="5"
      />
      <section class="limitedTextWidthLg">
        <EmbroideryHeroBio />
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
            class="publishComment-item flexRowStart simulateCheckboxWrapper"
          >
            <input
              type="radio"
              name="sentComment"
              id="sentComment"
              :value="!sendComment"
              v-model="sendComment"
              required
              class="simulateCheckbox"
              :class="{'isChecked' : sendComment}"
            />
            <span class="checkmark"/>
            <span class="labelContent">
              {{ $t('embroidery.step5Page.section2.content1') }}
            </span>
          </label>
          <label
            for="writeComment"
            class="publishComment-item flexRowStart simulateCheckboxWrapper"
          >
            <input
              type="radio"
              name="writeComment"
              id="writeComment"
              :value="!writeComment"
              v-model="writeComment"
              required
              class="simulateCheckbox"
              :class="{'isChecked' : writeComment}"
            />
            <span class="checkmark"/>
            <span class="labelContent">
              {{ $t('embroidery.step5Page.section2.content2') }}
            </span>
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
                name="englishComment"
                id="englishComment"
                :placeholder="$t('embroidery.step5Page.section3.textarea1.placeholder')"
                v-model="englishComment"
              />
              <p class="mistake defaultNone">
                {{ $t('embroidery.step5Page.section3.textarea1.warning') }}
              </p>
            </div>
            <div>
              <div class="languageLabelWrapper flexRowStart">
                <label 
                  class="nativeCommentLabel"
                  for="nativeComment" 
                >
                  {{ $t('embroidery.step5Page.section3.textarea2.label') }}
                </label>
                <GeneralInputLongDropdown
                  class="nativeLanguageDropdown"
                  :enableScroll="true"
                  :options="languages"
                  :placeholder="$t('placeholders.select')" 
                  v-model="nativeLanguage"
                />
              </div>
              <textarea
                name="nativeComment"
                id="nativeComment"
                :placeholder="$t('embroidery.step5Page.section3.textarea2.placeholder')"
                v-model="nativeComment"
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
              name="publishAgree"
              id="publishAgree"
              :value="true"
              v-model="publishComment"
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
              name="publishDisagree"
              id="publishDisagree"
              :value="false"
              v-model="publishComment"
              required
            />
              {{ $t('embroidery.step5Page.section4.content2') }}
          </label>
          <p class="mistake defaultNone">
            {{ $t('invalidInputs.pleaseChooseOneOption') }}
          </p>
        </div>
        <div class="buttons">
          <nuxt-link 
            :to="$localePath('/Embroidery/Step-4-photo')"
            class="button"
          >
            {{ $t('embroidery.step5Page.backButton') }}
          </nuxt-link>
          <nuxt-link 
            :to="$localePath('/Embroidery/Step-6-choose-shipping')"
            class="button" 
            :class="validData ? 'bg_black' : 'button_disabled'"
            id="save"
          >
            {{ $t('embroidery.step5Page.forwardButton') }}
          </nuxt-link>
        </div>
      </section>
    </div>
  </main>
</template>

<style src="./Step-5-comment.scss" lang="scss"></style>
