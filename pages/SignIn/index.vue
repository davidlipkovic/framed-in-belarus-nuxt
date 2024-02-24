<script setup>
import { computed, onMounted, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from "@/stores/user"
import { useValidateInputs } from "@/composables/ValidateInputs";

const router = useRouter()
const localePath = useLocalePath()
const userStore = useUserStore()
const { validateEmail } = useValidateInputs()

definePageMeta({
  layout: "registration"
})

const email = ref(null)
const emailInput = ref(null)
const emailTypingStarted = ref(false)
const invalidEmail = ref(false)
const remember = ref(false)

const signIn = async () => {
  let data

  if (window.localStorage) {
    data = window.localStorage.getItem('fibUser')
    data = JSON.parse(data)

    if (data && data.email === email.value) {
      data.remember = remember.value
      window.localStorage.setItem('fibUser', JSON.stringify(data))

      userStore.loading = true
      userStore.getCurrentUserAuthorizationData()
      const userExists = await userStore.getUserData()
      userStore.loading = false

      if (userExists) {
        userStore.isLogged = true
        router.push(localePath('/Profile'))
      } else {
        userStore.isLogged = false
        invalidEmail.value = true
      }
    } else {
      userStore.loading = true
      const userSignedUp = await userStore.login({email: email.value})
      userStore.loading = false

      if (userSignedUp) {
        data = {}
        data.remember = remember.value
        window.localStorage.setItem('fibUser', JSON.stringify(data))

        router.push(localePath('/VerifyEmail'))
      } else {
        invalidEmail.value = true
      }
    }
  }
}

const validEmailData = computed(() => {
  return validateEmail(email.value)
})

onClickOutside(emailInput, () => {
  if (email.value) {
    emailTypingStarted.value = true
  }
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
        :to="localePath('/SignUp')"
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
          v-model="email"
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
          v-if="invalidEmail"
          class="warningNotification note red"
        >
          User with this email is not signed up
        </span>
      </div>
      <label
        for="remember"
        class="checkBoxWrapper"
      >
        <input 
          type="checkbox" 
          id="remember" 
          name="remember"
          :value="true"
          v-model="remember"
        />
        {{ $t("signInPage.remember") }}
      </label>
      <button 
        class="button signInBtn"
        :class="validEmailData ? 'bg_black' : 'button_disabled'" 
        @click.once="signIn()"
      >
        {{ $t("signInPage.signInButton") }}
      </button>
    </div>
  </div>
</template>

<style src="./SignIn.scss" lang="scss"></style>
