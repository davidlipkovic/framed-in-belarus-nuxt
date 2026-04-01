<script setup>
import { computed, onMounted, reactive, ref, watch } from 'vue'
import { onBeforeRouteLeave, useRoute, useRouter } from 'vue-router'
import useRegistrationStore from "@/stores/registration"
import useUserStore from "@/stores/user"
// import { useCheckBeforeRouteLeave } from "@/composables/CheckBeforeRouteLeave";
// const { checkbox, handleWarning, showWarning } = useCheckBeforeRouteLeave();
import { useValidateInputs } from "@/composables/ValidateInputs"
import { useCurrentLocale } from "@/composables/CurrentLocale"
import { useI18n } from 'vue-i18n'
import countries from '../../assets/json/countries.json'

const $localePath = useLocalePath()
const route = useRoute()
const router = useRouter()
const { locale, t } = useI18n()
const registrationStore = useRegistrationStore()
const userStore = useUserStore()
const { validateEmail, validateText } = useValidateInputs()
const { localesNames } = useCurrentLocale()

definePageMeta({
  layout: "registrationlg",

  //WIP
  middleware: [
    async function (to, from) {
      if (to.query.userId && to.query.userToken) {
        const userStore = useUserStore()
        await userStore.getOldUserData(to.query.userId, to.query.userToken)
      }
    },
  ],
})

const formData = reactive({
  username: null,
  publishUsername: true,
  email: registrationStore.email,
  countryOfResidence: null,
  publishCountryOfResidence: false,
  language: null,
  instagram: null,
  mentionInstagram: true,
  publishInstagram: true,
  source: null,
  reason: null,
  publishReason: true,
  terms: false,
  subscription: false,
})

const technicalIssue = ref(false)
const currentSlide = ref(1)
const showBelarusModal = ref(false)

const usernameInput = ref(null)
const usernameTypingStarted = ref(null)

const emailInput = ref(null)
const emailTypingStarted = ref(false)

const sourceOptions = computed(() => [
  t("signUpPage.slide2.findOutOptions.instagram"),
  t("signUpPage.slide2.findOutOptions.fromFriend"),
  t("signUpPage.slide2.findOutOptions.atExhibition"),
  t("signUpPage.slide2.findOutOptions.atWorkshop"),
  t("signUpPage.slide2.findOutOptions.atPresentation"),
  t("signUpPage.slide2.findOutOptions.throughMedia"),
  t("signUpPage.slide2.findOutOptions.another"),
])

console.log('signup page', userStore.oldUser)

if (userStore.oldUser) {
  Object.keys(formData).forEach(key => {
    formData[key] = userStore.oldUser[key]
  })
}

const validUsernameData = computed(() => validateText(formData.username))
const validEmailData = computed(() => validateEmail(formData.email))

const validDataSlide1 = computed(() => validUsernameData.value && validEmailData.value && formData.language)

onClickOutside(usernameInput, () => {
  if (formData.username) {
    usernameTypingStarted.value = true
  }
})

onClickOutside(emailInput, () => {
  if (formData.email) {
    emailTypingStarted.value = true
  }
})

const signUp = async () => {
  const body = {}

  Object.keys(formData).forEach(key => {
    body[key] = formData[key]
  })

  registrationStore.email = formData.email

  userStore.loading = true
  const registrationResult = await userStore.createUser(body)
  userStore.loading = false

  if (registrationResult) {
    sessionStorage.removeItem('FIB_REGISTRATION_FORM')
    router.push($localePath('/VerifyEmail'))
  } else {
    technicalIssue.value = true
  }
}

const cancelRegistration = () => {
  sessionStorage.removeItem('FIB_REGISTRATION_FORM')
  router.push('/')
}

const updateCurrentSlide = (slide) => {
  if (slide === 1) {
    const query = {...route.query}
    delete query['s']

    router.replace({ query })
  } else {
    router.replace({ 
      query: { 
        ...route.query, 
        's': slide
      }
    })
  }
}

const handleKeyPress = (event) => {
  if (event.key === 'Enter' || event.keyCode === 13 || event.charCode === 13) {
    if (showBelarusModal.value) {
      showBelarusModal.value = false
      return
    }

    if (currentSlide.value < 3) {
      updateCurrentSlide(currentSlide.value + 1)
    } else {
      signUp()
    }
  }
}

onMounted(() => {
  const savedFormData = sessionStorage.getItem('FIB_REGISTRATION_FORM')
  
  if (savedFormData) {
    Object.assign(formData, JSON.parse(savedFormData))
  }

  addEventListener("keypress", handleKeyPress)
})

onUnmounted(() => {
  removeEventListener("keypress", handleKeyPress)
})

watch(() => route.query, (newQuery) => {
    if (!newQuery.s) {
      currentSlide.value = 1
    } else {
      currentSlide.value = parseInt(newQuery.s)
    }
  }, 
  { immediate: true }
)

watch(formData, (newformData, oldFormData) => {
  sessionStorage.setItem('FIB_REGISTRATION_FORM', JSON.stringify(newformData))
  if (newformData.countryOfResidence === 'Belarus' && oldFormData.countryOfResidence !== 'Belarus') {
    showBelarusModal.value = true
  }
}, { deep: true })
</script>

<template>
  <div class="content signUpWrapper">
    <h1 class="title">
      {{ $t("signUpPage.title") }}
    </h1>
    <p class="signUpDescription">
      {{ $t("signUpPage.signInQuestion") }}
      <nuxt-link 
        :to="$localePath('/SignIn')"
        class="red"
      >
        {{ $t("links.signIn") }}
      </nuxt-link>
    </p>
    <template v-if="!technicalIssue">
      <form class="formWrapper">
        <div
          v-show="currentSlide === 1" 
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
                    v-model="formData.username"
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
                    v-model="formData.publishUsername"
                    :disabled="!formData.username"
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
                    v-model="formData.email"
                    :placeholder="$t('placeholders.emailLogin') + '*'" 
                    class="emailInput"
                    :class="{'invalidInput': !validEmailData && emailTypingStarted}" 
                    ref="emailInput"
                    :readonly="!!userStore.oldUser"
                    :disabled="!!userStore.oldUser"
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
                  :enableScroll="true"
                  :options="countries"
                  :placeholder="$t('placeholders.country') + '*'" 
                  :isRegistration="true"
                  v-model="formData.countryOfResidence"
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
                    v-model="formData.publishCountryOfResidence"
                    :disabled="!formData.countryOfResidence"
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
                  :options="localesNames"
                  :placeholder="$t('placeholders.chooseCommunicationLanguage') + '*'" 
                  :isRegistration="true"
                  v-model="formData.language"
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
              @click="updateCurrentSlide(2)"
            >
              {{ $t('buttons.next') }}
            </span>
          </div>
        </div>
        <div
          v-show="currentSlide === 2" 
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
                  v-model="formData.instagram"
                  maxlength="31"
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
                    v-model="formData.mentionInstagram"
                    :disabled="!formData.instagram"
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
                    v-model="formData.publishInstagram"
                    :disabled="!formData.instagram"
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
                  :placeholder="$t('placeholders.findOut')" 
                  :options="sourceOptions"
                  :isRegistration="true"
                  v-model="formData.source"
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
                  v-model="formData.reason"
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
                    v-model="formData.publishReason"
                    :disabled="!formData.reason"
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
              @click="updateCurrentSlide(1)"
            >
              {{ $t('buttons.back') }}
            </span>
            <span
              class="button bg_black"
              @click="updateCurrentSlide(3)"
            >
              {{ $t('buttons.next') }}
            </span>
          </div>
        </div>
        <div
          v-show="currentSlide === 3" 
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
              <a :href="'/' + locale + '/Terms_and_Conditions_framedinbelarus.net.pdf'" target="_blank" class='red'>
                {{ $t('signUpPage.slide3.warning.highlight1') }}
              </a>
              {{ $t('signUpPage.slide3.warning.content2') }}
              <a :href="'/' + locale + '/Privacy_Policy_framedinbelarus.net.pdf'" target="_blank" class='red'>
                {{ $t('signUpPage.slide3.warning.highlight2') }}
              </a>
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
                v-model="formData.terms"
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
                v-model="formData.subscription"
              />
              {{ $t('signUpPage.slide3.subscribe') }}
            </label>
            <div class="buttonsWrapper buttonsWrapper3 flexColumnStart">
              <span
                class="button"
                @click="updateCurrentSlide(2)"
              >
                {{ $t('buttons.back') }}
              </span>
              <span
                class="button"
                :class="formData.terms ? 'bg_black' : 'button_disabled'"
                @click="signUp()"
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
          :class="{'swiper-pagination-bullet-active' : index === currentSlide - 1}"
        />
      </div>
      <GeneralInputModal
        class="modalBelarusWarning"
        @closeModal="showBelarusModal = false"
        :displayModal="showBelarusModal"
      >
        <div class="inputModalContentWrapper">
          <div class="inputModalHeader flexRowStart">
            <h2>
              {{ $t('signUpPage.modalBelarusWarning.title') }}
            </h2>
            <button
              class="closeButton"
              @click="showBelarusModal = false"
            >
              <SvgClose/>
            </button>
          </div>
          <div class="inputModalBody flexColumnStart">
            <div class="inputModalItem inputModalItemFullWidth inputModalItemDelete flexColumnStart">
              <SvgCircleWarning />
              <p>
                {{ $t('signUpPage.modalBelarusWarning.paragraph1.content1') }}
                <span class="b2">
                  {{ $t('signUpPage.modalBelarusWarning.paragraph1.highlight') }}
                </span>
                {{ $t('signUpPage.modalBelarusWarning.paragraph1.content2') }}
              </p>
              <p>
                {{ $t('signUpPage.modalBelarusWarning.paragraph2') }}
              </p>
              <p>
                {{ $t('signUpPage.modalBelarusWarning.paragraph3') }}
              </p>
              <p>
                {{ $t('signUpPage.modalBelarusWarning.paragraph4') }}
              </p>
              <p>
                {{ $t('signUpPage.modalBelarusWarning.paragraph5.content1') }}<br>
                {{ $t('signUpPage.modalBelarusWarning.paragraph5.content2') }}
              </p>
            </div>
          </div>
          <div class="inputModalFooter buttons">
            <button 
              class="button" 
              @click="cancelRegistration()"
            >
              {{ $t('buttons.cancelRegistration') }}
            </button>
            <button 
              class="button bg_black"
              @click="showBelarusModal = false"
            >
              {{ $t('buttons.gotIt') }}
            </button>
          </div>
        </div>
      </GeneralInputModal>
    </template>
    <div 
      v-else-if="technicalIssue"
      class="flexColumnCenter"
    >
      <h1 class="title">
        {{ $t('warnings.technical') }}
      </h1>
      <nuxt-link 
        :to="$localePath('/')"
      >
        {{ $t('signUpPage.success.link') }}
      </nuxt-link>
    </div>
  </div>
</template>

<style src="./SignUp.scss" lang="scss"></style>
