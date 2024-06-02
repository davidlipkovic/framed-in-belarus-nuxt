<script setup>
import { computed, onMounted, ref, watch } from 'vue'
import { onBeforeRouteLeave, useRouter } from 'vue-router'
import useRegistrationStore from "@/stores/registration"
import useUserStore from "@/stores/user"
// import { useCheckBeforeRouteLeave } from "@/composables/CheckBeforeRouteLeave";
// const { checkbox, handleWarning, showWarning } = useCheckBeforeRouteLeave();
import { useValidateInputs } from "@/composables/ValidateInputs";
import { useI18n } from 'vue-i18n'
const { locales, t } = useI18n()
import countries from '../../assets/json/countries.json'

const router = useRouter()
const localePath = useLocalePath()
const registrationStore = useRegistrationStore()
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

const signUp = async () => {
  const body = {
    email: registrationStore.email,
    username: username.value,
    countryOfResidence: countryOfResidence.value,
    language: language.value,
    instagram: instagram.value,
    source: source.value,
    reason: reason.value,
    terms: terms.value,
    subscription: subscription.value,
    publishReason: publishReason.value,
    publishCountryOfResidence: publishCountryOfResidence.value,
    publishInstagram: publishInstagram.value,
    publishUsername: publishUsername.value,
  }

  userStore.loading = true
  await userStore.login(body)
  userStore.loading = false
  router.push(localePath('/VerifyEmail'))
}

const username = ref(null)
const usernameInput = ref(null)
const usernameTypingStarted = ref(null)
const publishUsername = ref(false)

const emailInput = ref(null)
const emailTypingStarted = ref(false)

const countryOfResidence = ref(null)
const publishCountryOfResidence = ref(false)

const language = ref(null)

const instagram = ref(null)
const mentionInstagram = ref(false)
const publishInstagram = ref(false)

const source = ref(null)
const sourceOptions = computed(() => [
  {name: t("signUpPage.slide2.findOutOptions.instagram")},
  {name: t("signUpPage.slide2.findOutOptions.fromFriend")},
  {name: t("signUpPage.slide2.findOutOptions.atExhibition")},
  {name: t("signUpPage.slide2.findOutOptions.atWorkshop")},
  {name: t("signUpPage.slide2.findOutOptions.atPresentation")},
  {name: t("signUpPage.slide2.findOutOptions.throughMedia")},
  {name: t("signUpPage.slide2.findOutOptions.another")},
])

const reason = ref(null)
const publishReason = ref(false)

const terms = ref(false)
const subscription = ref(false)

const updateLanguage = (lang) => {
  language.value = lang.name
}

const updateSource = (option) => {
  source.value = option.name
}

const validUsernameData = computed(() => validateText(username.value))
const validEmailData = computed(() => validateEmail(registrationStore.email))

const validDataSlide1 = computed(() => validUsernameData.value && validEmailData.value && language.value)

onClickOutside(usernameInput, () => {
  if (username.value) {
    usernameTypingStarted.value = true
  }
})

onClickOutside(emailInput, () => {
  if (registrationStore.email) {
    emailTypingStarted.value = true
  }
})

const updateCountryOfResidence = (country) => {
  countryOfResidence.value = country.name
}
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
    <div class="formWrapper">
      <div
        v-show="currentSlide === 0" 
        class="slide"
      >
        <div class="slideWrapper slideWrapper1 flexColumnStart">
          <div class="slideBorder"/>
          <div class="inputRowWrapper flexColumnStart inputRowWrapperUsername">
            <div class="inputContentWrapper flexColumnStart">
              <div class="inputWrapper inputWrapperWarningTop">
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
              </div>
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
            </div>
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
          </div>
          <div class="inputRowWrapper flexColumnStart inputRowWrapperEmail">
            <div class="inputContentWrapper flexColumnStart">
              <div class="inputWrapper inputWrapperWarningTop">
                <input 
                  type="email" 
                  name="email" 
                  id="email" 
                  v-model="registrationStore.email"
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
              </div>
            </div>
            <p>
              {{ $t('signUpPage.slide1.paragraph2') }}
            </p>
          </div>
          <div class="inputRowWrapper flexColumnStart inputRowWrapperCountryOfResidence">
            <div class="inputContentWrapper flexColumnStart">
              <GeneralInputLongDropdown
                class="contentInput countryOfResidenceDropdown"
                :chosenOption="countryOfResidence"
                :enableScroll="true"
                :options="countries"
                :placeholder="$t('placeholders.country') + '*'" 
                :isRegistration="true"
                @chooseOption="updateCountryOfResidence"
              />
              <label 
                for="publishCountryOfResidence"
                class="checkBoxWrapper checkBoxWrapperCountry flexRowStart"
              >
                <input 
                  type="checkbox" 
                  name="publishCountryOfResidence" 
                  id="publishCountryOfResidence" 
                  :value="true"
                  v-model="publishCountryOfResidence"
                />
                {{ $t('buttons.publish') }}
              </label>
            </div>
            <p>
              {{ $t('signUpPage.slide1.paragraph3') }}
            </p>
          </div>
          <div class="inputRowWrapper flexColumnStart inputRowWrapperLanguage">
            <div class="inputContentWrapper flexColumnStart">
              <GeneralInputShortDropdown
                class="contentInput languageDropdown"
                :chosenOption="language"
                :options="locales"
                :placeholder="$t('placeholders.chooseCommunicationLanguage') + '*'" 
                :isRegistration="true"
                @chooseOption="updateLanguage"
              />
            </div>
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
          <div class="slideBorder"/>
          <div class="inputRowWrapper flexColumnStart inputRowWrapperInstagram">
            <div class="inputContentWrapper flexColumnStart">
              <input 
                type="text" 
                name="instagram" 
                id="instagram" 
                :placeholder="$t('placeholders.instagram')" 
                class="instagramInput"
                v-model="instagram"
              />
              <label
                for="mentionInstagram"
                class="checkBoxWrapper checkBoxWrapperMentionInstagram flexRowStart"
              >
                <input 
                  type="checkbox" 
                  name="mentionInstagram" 
                  id="mentionInstagram" 
                  :value="true"
                  v-model="mentionInstagram"
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
                  :value="true"
                  v-model="publishInstagram"
                />
                {{ $t('buttons.publish') }}
              </label>
            </div>
            <p>
              {{ $t('signUpPage.slide2.paragraph1') }}
            </p>
          </div>
          <div class="inputRowWrapper flexColumnStart inputRowWrapperSource">
            <div class="inputContentWrapper flexColumnStart">
              <GeneralInputShortDropdown
                class="contentInput sourceDropdown"
                :chosenOption="source"
                :placeholder="$t('placeholders.findOut')" 
                :options="sourceOptions"
                :isRegistration="true"
                @chooseOption="updateSource"
              />
            </div>
          </div>
          <div class="inputRowWrapper flexColumnStart inputRowWrapperReason">
            <div class="inputContentWrapper flexColumnStart">
              <textarea 
                name="reason" 
                id="reason" 
                class="reasonTextarea"
                :placeholder="$t('signUpPage.slide2.textarea')" 
                v-model="reason"
              />
              <label
                for="publishReason"
                class="checkBoxWrapper flexRowStart"
              >
                <input 
                  type="checkbox" 
                  name="publishReason" 
                  id="publishReason" 
                  :value="true"
                  v-model="publishReason"
                />
                {{ $t('buttons.publish') }}
              </label>
            </div>
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
          <p class="termsLink">
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
            for="terms" 
            class="checkBoxWrapper checkBoxWrapperTerms flexRowStart b1"
          >
            <input 
              type="checkbox" 
              name="terms" 
              id="terms" 
              :value="true"
              v-model="terms"
            />
            {{ $t('signUpPage.slide3.consent') }}
          </label>
          <label 
            for="subscription" 
            class="checkBoxWrapper checkBoxWrapperSubscription flexRowStart b1"
          >
            <input 
              type="checkbox" 
              name="subscription" 
              id="subscription" 
              :value="true"
              v-model="subscription"
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
              :class="terms ? 'bg_black' : 'button_disabled'"
              @click="signUp()"
            >
              {{ $t('buttons.createAccount') }}
            </span>
          </div>
        </div>
      </div>
    </div>
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
