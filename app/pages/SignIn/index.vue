<script setup>
import { computed, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import useRegistrationStore from "@/stores/registration"
import useUserStore from "@/stores/user"
import { useValidateInputs } from "@/composables/ValidateInputs"

const router = useRouter()
const { t } = useI18n()
const localePath = useLocalePath()
const registrationStore = useRegistrationStore()
const userStore = useUserStore()
const { validateEmail } = useValidateInputs()

definePageMeta({
  layout: "registration"
})

useHead({
  title: t('signInPage.title'),
  meta: [
    { name: 'description', content: t('signInPage.meta.description') },
    { name: 'keywords', content: t('signInPage.meta.keywords') },
    { property: 'og:title', content: t('signInPage.title'), },
    { property: 'og:description', content: t('signInPage.meta.description') },
  ],
})

const emailInput = ref(null)
const emailTypingStarted = ref(false)

const invalidEmail = ref(false)

const signIn = async () => {
  userStore.loading = true

  if (userStore.user && userStore.user.email === registrationStore.email) {
    router.push(localePath('/Profile'))
  } else {
    if (userStore.user && userStore.user.email !== registrationStore.email) {
      userStore.signOut()
    }

    const userSignedUp = await userStore.loginUser(registrationStore.email)

    if (userSignedUp) {
      router.push(localePath('/VerifyEmail'))
    } else {
      invalidEmail.value = true
    }
  }

  userStore.loading = false
}

const validEmailData = computed(() => {
  return validateEmail(registrationStore.email)
})

onClickOutside(emailInput, () => {
  if (registrationStore.email) {
    emailTypingStarted.value = true
  }
})

watch(() => registrationStore.email, () => {
  invalidEmail.value = false
})
</script>

<template>
  <div class="content signInWrapper">
    <h1 class="title">
      {{ $t("signInPage.title") }}
    </h1>
    <p class="signUpLink">
      {{ $t("signInPage.signUpQuestion.content") }}
      <nuxt-link 
        :to="$localePath('/SignUp')"
        class="redLight"
      >
        {{ $t("signInPage.signUpQuestion.highlight") }}
      </nuxt-link>
    </p>
    <div class="formWrapper">
      <div class="inputWrapper inputWrapperWarningTop">
        <input 
          type="email" 
          name="email" 
          id="email" 
          v-model="registrationStore.email"
          :placeholder="$t('placeholders.email') + '*'"  
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
        <span 
          v-else-if="invalidEmail"
          class="warningNotification note red"
        >
          {{ $t("signInPage.warning") }}
        </span>
      </div>
      <button 
        class="button signInBtn"
        :class="validEmailData ? 'bg_black' : 'button_disabled'" 
        @click="signIn()"
      >
        {{ $t("signInPage.signInButton") }}
      </button>
    </div>
  </div>
</template>

<style src="./SignIn.scss" lang="scss"></style>
