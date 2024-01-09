<script setup>
import { onMounted, ref, watch } from 'vue'
import { onBeforeRouteLeave, useRouter } from 'vue-router'
// import { useCheckBeforeRouteLeave } from "@/composables/CheckBeforeRouteLeave";
// const { checkbox, handleWarning, showWarning } = useCheckBeforeRouteLeave();
import { useUserStore } from "@/stores/user"

const router = useRouter()

const userStore = useUserStore()

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
const publishUsername = ref(false)
const email = ref(null)
const country = ref(null)
const publishCountry = ref(false)
const communicationLanguage = ref(null)

const accept = ref(false)

const validDataSlide1 = computed(() => {
  return username.value && email.value && country.value && communicationLanguage.value
})
</script>

<template>
  <div class="content contentSignUp signUpWrapper">
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
              :placeholder="$t('placeholders.username') + '*'" 
              class="usernameInput"
              v-model="username"
            />
            <label
              for="publishUsername" 
              class="checkBoxWrapper checkBoxWrapperUsername flexRowStart"
            >
              <input 
                type="checkbox" 
                name="publishUsername" 
                id="publishUsername" 
                class="switcher"
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
              :placeholder="$t('placeholders.emailLogin') + '*'" 
              class="emailInput"
              v-model="email"
            />
            <p class="phone">
              {{ $t('signUpPage.slide1.paragraph2') }}
            </p>
            <input 
              type="text" 
              name="country" 
              id="country"
              :placeholder="$t('placeholders.country') + '*'" 
              class="countryInput"
              v-model="country"
            />
            <label 
              for="publishCountry"
              class="checkBoxWrapper checkBoxWrapperCountry flexRowStart"
            >
              <input 
                type="checkbox" 
                name="publishCountry" 
                id="publishCountry" 
                class="switcher"
                :value="true"
                v-model="publishCountry"
              />
              {{ $t('buttons.publish') }}
            </label>
            <p class="phone">
              {{ $t('signUpPage.slide1.paragraph3') }}
            </p>
            <select 
              class="languageSelectWrapper"
              v-model="communicationLanguage"
            >
              <option value="0">
                {{ $t('signUpPage.slide1.languageSelect') }}*
              </option>
              <option value="english">
                {{ $t('languages.english') }}
              </option>
              <option value="belarussian">
                {{ $t('languages.belarussian') }}
              </option>
              <option value="russian">
                {{ $t('languages.russian') }}
              </option>
            </select>
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
                class="switcher"
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
                class="switcher"
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
                class="switcher"
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
            <p class="b1">
              * {{ $t('signUpPage.slide3.terms.paragraph10') }}
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
              class="switcher"
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
              class="switcher"
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

<style src="../../assets/style/form.scss" lang="scss" scoped></style>
<style src="../../assets/style/registration.scss" lang="scss" scoped></style>
<style src="./SignUp.scss" lang="scss"></style>
