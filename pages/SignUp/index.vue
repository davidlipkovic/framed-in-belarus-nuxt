<script setup>
import { computed, onMounted, ref, watch } from 'vue'
import { onBeforeRouteLeave, useRouter } from 'vue-router'
// import { useCheckBeforeRouteLeave } from "@/composables/CheckBeforeRouteLeave";
// const { checkbox, handleWarning, showWarning } = useCheckBeforeRouteLeave();
import { useUserStore } from "@/stores/user"
import { useValidateInputs } from "@/composables/ValidateInputs";

const router = useRouter()

const userStore = useUserStore()
const { validateEmail, validateText } = useValidateInputs()

definePageMeta({
  layout: "registrationlg"
})

const currentSlide = ref(0)

const nextSlide = () => {
  localSwiper.slideNext()
}

const prevSlide = () => {
  localSwiper.slidePrev()
}

const createAccount = () => {
  router.push('/VerifyEmail')
}

const username = ref(null)
const usernameInput = ref(null)
const usernameTypingStarted = ref(null)
const publishUsername = ref(false)

const email = ref(null)
const emailInput = ref(null)
const emailTypingStarted = ref(false)

const country = ref(null)
const countryInput = ref(null)
const countryTypingStarted = ref(false)
const publishCountry = ref(false)

const communicationLanguage = ref(null)

const accept = ref(false)

const updateCommunicationLanguage = (lang) => {
  communicationLanguage.value = lang
}

const validUsernameData = computed(() => validateText(username.value))
const validEmailData = computed(() => validateEmail(email.value))
const validCountryData = computed(() => validateText(country.value))

const validDataSlide1 = computed(() => validUsernameData.value && validEmailData.value && validCountryData.value && communicationLanguage.value)

onClickOutside(usernameInput, () => {
  if (username.value) {
    usernameTypingStarted.value = true
  }
})

onClickOutside(emailInput, () => {
  if (email.value) {
    emailTypingStarted.value = true
  }
})

onClickOutside(countryInput, () => {
  if (country.value) {
    countryTypingStarted.value = true
  }
})
</script>

<template>
  <div class="content signUpWrapper">
    <h1 class="title">
      {{ $t("signUpPage.title") }}
    </h1>
    <p class="signUpDescription">
      {{ $t("signUpPage.signInQuestion") }}
      <nuxt-link 
        :to="localePath('/SignIn')"
        class="red"
      >
        {{ $t("links.signIn") }}
      </nuxt-link>
    </p>
    <form class="formWrapper flexColumnStart">
      <div
        v-show="currentSlide === 0" 
        class="slide"
      >
        <div class="slideWrapper slideWrapper1 flexColumnStart">
          <div class="slideColumnWrapper flexColumnStart">
            <input 
              type="text" 
              name="username" 
              id="username" 
              v-model="username"
              :placeholder="$t('placeholders.username') + '*'" 
              class="usernameInput"
              :class="{'invalidInput': !validUsernameData && usernameTypingStarted}" 
              ref="usernameInput"
            />
            <span 
              v-if="!validUsernameData && usernameTypingStarted"
              class="warningNotification note red"
            >
              {{ $t('invalidInputs.enterYourUsername') }}
            </span>
            <label
              for="publishUsername" 
              class="checkBoxWrapper checkBoxWrapperUsername flexRowStart"
            >
              <input 
                type="checkbox" 
                name="publishUsername" 
                id="publishUsername" 
                :value="true"
                v-model="publishUsername"
              />
              {{ $t('buttons.publish') }}
            </label>
            <p class="phone">
              {{ $t('signUpPage.slide1.paragraph1.content1') }}
              <span class="b1">
                {{ $t('signUpPage.slide1.paragraph1.highlight1') }}
              </span> 
              {{ $t('signUpPage.slide1.paragraph1.content2') }}
              <span class="b1">
                {{ $t('signUpPage.slide1.paragraph1.highlight2') }}
              </span>
            </p>
            <input 
              type="email" 
              name="email" 
              id="email" 
              v-model="email"
              :placeholder="$t('placeholders.emailLogin') + '*'" 
              class="emailInput"
              :class="{'invalidInput': !validEmailData && emailTypingStarted}" 
              ref="emailInput"
            />
            <span 
              v-if="!validEmailData && emailTypingStarted"
              class="warningNotification note red"
            >
              {{ $t('invalidInputs.enterEmailAdress') }}
            </span>
            <p class="phone">
              {{ $t('signUpPage.slide1.paragraph2') }}
            </p>
            <input 
              type="text" 
              name="country" 
              id="country"
              v-model="country"
              :placeholder="$t('placeholders.country') + '*'" 
              class="countryInput"
              :class="{'invalidInput': !validCountryData && countryTypingStarted}" 
              ref="countryInput"
            />
            <span 
              v-if="!validCountryData && countryTypingStarted"
              class="warningNotification note red"
            >
              {{ $t('invalidInputs.enterCountry') }}
            </span>
            <label 
              for="publishCountry"
              class="checkBoxWrapper checkBoxWrapperCountry flexRowStart"
            >
              <input 
                type="checkbox" 
                name="publishCountry" 
                id="publishCountry" 
                :value="true"
                v-model="publishCountry"
              />
              {{ $t('buttons.publish') }}
            </label>
            <p class="phone">
              {{ $t('signUpPage.slide1.paragraph3') }}
            </p>
            <GeneralInputLangMenu
              id="communicationLanguage"
              class="contentInput communicationLanguageInput"
              :isRegistration="true"
              :chosenLanguage="communicationLanguage"
              @chooseLanguage="updateCommunicationLanguage"
            />
            <p class="phone">
              {{ $t('signUpPage.slide1.paragraph4') }}
            </p>
          </div>
          <div class="slideColumnWrapper flexColumnStart desktop">
            <p>
              {{ $t('signUpPage.slide1.paragraph1.content1') }}
              <span class="b1">
                {{ $t('signUpPage.slide1.paragraph1.highlight1') }}
              </span> 
              {{ $t('signUpPage.slide1.paragraph1.content2') }}
              <span class="b1">
                {{ $t('signUpPage.slide1.paragraph1.highlight2') }}
              </span>
            </p>
            <p>
              {{ $t('signUpPage.slide1.paragraph2') }}
            </p>
            <p>
              {{ $t('signUpPage.slide1.paragraph3') }}
            </p>
            <p>
              {{ $t('signUpPage.slide1.paragraph4') }}
            </p>
          </div>
        </div>
        <div class="buttonsWrapper buttonsWrapper1 flexColumnStart">
          <span
            class="button"
            :class="validDataSlide1 ? 'bg_black' : 'button_disabled'"
            @click="currentSlide = 1"
          >
            {{ $t('buttons.next') }}
          </span>
        </div>
      </div>
      <div
        v-show="currentSlide === 1" 
        class="slide"
      >
        <div class="slideWrapper slideWrapper2 flexColumnStart">
          <div class="slideColumnWrapper flexColumnStart">
            <input 
              type="text" 
              name="instagram" 
              id="instagram" 
              :placeholder="$t('placeholders.instagram')" 
              class="instagramInput"
            />
            <label
              for="mentionInstagram"
              class="checkBoxWrapper checkBoxWrapperMentionInstagram flexRowStart"
            >
              <input 
                type="checkbox" 
                name="mentionInstagram" 
                id="mentionInstagram" 
              />
              {{ $t('inputs.mentionInstagram') }}
            </label>
            <label
              for="publishInstagram"
              class="checkBoxWrapper checkBoxWrapperPublishInstagram flexRowStart"
            >
              <input 
                type="checkbox" 
                name="publishInstagram" 
                id="publishInstagram" 
              />
              {{ $t('buttons.publish') }}
            </label>
            <p class="phone">
              {{ $t('signUpPage.slide2.paragraph1') }}
            </p>
            <input 
              type="text" 
              name="findOut" 
              id="findOut" 
              :placeholder="$t('placeholders.findOut')" 
              class="findOutInput"
            />
            <textarea 
              name="reason" 
              id="reason" 
              class="reasonTextarea"
              :placeholder="$t('signUpPage.slide2.textarea')" 
            />
            <label
              for="publishReason"
              class="checkBoxWrapper flexRowStart"
            >
              <input 
                type="checkbox" 
                name="publishReason" 
                id="publishReason" 
              />
              {{ $t('buttons.publish') }}
            </label>
            <p class="phone">
              {{ $t('signUpPage.slide2.paragraph2') }}
            </p>
          </div>
          <div class="slideColumnWrapper flexColumnStart desktop">
            <p>
              {{ $t('signUpPage.slide2.paragraph1') }}
            </p>
            <p>
              {{ $t('signUpPage.slide2.paragraph2') }}
            </p>
          </div>
        </div>
        <div class="buttonsWrapper buttonsWrapper2 flexColumnStart">
          <span
            class="button"
            @click="currentSlide = 0"
          >
            {{ $t('buttons.back') }}
          </span>
          <span
            class="button bg_black"
            @click="currentSlide = 2"
          >
            {{ $t('buttons.next') }}
          </span>
        </div>
      </div>
      <div
        v-show="currentSlide === 2" 
        class="slide"
      >
        <div class="slideWrapper3">
          <div class="termsWrapper">
            <h2>
              {{ $t('signUpPage.slide3.terms.title') }}
            </h2>
            <p class="b1">
              {{ $t('signUpPage.slide3.terms.paragraph1') }}
            </p>
            <p>
              {{ $t('signUpPage.slide3.terms.paragraph2') }}
            </p>
            <p>
              <span class='b1'>
                {{ $t('signUpPage.slide3.terms.paragraph3.highlight1') }}
              </span>
              {{ $t('signUpPage.slide3.terms.paragraph3.content1') }}
              <span class='b1'>
                {{ $t('signUpPage.slide3.terms.paragraph3.highlight2') }}
              </span>
              {{ $t('signUpPage.slide3.terms.paragraph3.content2') }}
            </p>
            <p>
              {{ $t('signUpPage.slide3.terms.paragraph4.content1') }}
              <span class='b1'>
                {{ $t('signUpPage.slide3.terms.paragraph4.highlight1') }}
              </span>
              {{ $t('signUpPage.slide3.terms.paragraph4.content2') }}
            </p>
            <p>
              <span class='b1'>
                {{ $t('signUpPage.slide3.terms.paragraph5.highlight1') }}
              </span>
              {{ $t('signUpPage.slide3.terms.paragraph5.content1') }}
            </p>
            <p>
              {{ $t('signUpPage.slide3.terms.paragraph6.content1') }}
              <span class='b1'>
                {{ $t('signUpPage.slide3.terms.paragraph6.highlight1') }}
              </span>
              {{ $t('signUpPage.slide3.terms.paragraph6.content2') }}
            </p>
            <p>
              {{ $t('signUpPage.slide3.terms.paragraph7') }}
            </p>
            <p>
              {{ $t('signUpPage.slide3.terms.paragraph8.content1') }}
              <span class='b1'>
                {{ $t('signUpPage.slide3.terms.paragraph8.highlight1') }}
              </span>
              {{ $t('signUpPage.slide3.terms.paragraph8.content2') }}
            </p>
            <p>
              {{ $t('signUpPage.slide3.terms.paragraph9') }}
            </p>
            <p>
              {{ $t('signUpPage.slide3.terms.paragraph10.content1') }}
              <span class='b1'>
                {{ $t('signUpPage.slide3.terms.paragraph10.highlight1') }}
              </span>
              {{ $t('signUpPage.slide3.terms.paragraph10.content2') }}
            </p>
          </div>
          <p class="conditionsLink">
            {{ $t('signUpPage.slide3.warning.content1') }}
            <span class='red'>
              {{ $t('signUpPage.slide3.warning.highlight1') }}
            </span>
            {{ $t('signUpPage.slide3.warning.content2') }}
            <span class='red'>
              {{ $t('signUpPage.slide3.warning.highlight2') }}
            </span>
          </p>
          <label
            for="accept" 
            class="checkBoxWrapper checkBoxWrapperAccept flexRowStart b1"
          >
            <input 
              type="checkbox" 
              name="accept" 
              id="accept" 
              :value="true"
              v-model="accept"
            />
            {{ $t('signUpPage.slide3.consent') }}
          </label>
          <label 
            for="subscribe" 
            class="checkBoxWrapper checkBoxWrapperSubscribe flexRowStart b1"
          >
            <input 
              type="checkbox" 
              name="subscribe" 
              id="subscribe" 
            />
            {{ $t('signUpPage.slide3.subscribe') }}
          </label>
          <div class="buttonsWrapper buttonsWrapper3 flexColumnStart">
            <span
              class="button"
              @click="currentSlide = 1"
            >
              {{ $t('buttons.back') }}
            </span>
            <span
              class="button"
              :class="accept ? 'bg_black' : 'button_disabled'"
              @click="createAccount()"
            >
              {{ $t('buttons.createAccount') }}
            </span>
          </div>
        </div>
      </div>
    </form>
    <div class="paginationWrapper flexRowCenter">
      <span
        v-for="(slide, index) in 3"
        :key="slide"
        class="swiper-pagination-bullet"
        :class="{'swiper-pagination-bullet-active' : index === currentSlide}"
      />
    </div>
  </div>
</template>

<style src="./SignUp.scss" lang="scss"></style>
