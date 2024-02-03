<script setup>
import { computed, onMounted, ref, watch } from 'vue'
import { useUserStore } from "@/stores/user"
import { useValidateInputs } from "@/composables/ValidateInputs";

const userStore = useUserStore()
const { validateEmail } = useValidateInputs()

definePageMeta({
  layout: "registration"
})

const email = ref(null)
const emailInput = ref(null)
const emailTypingStarted = ref(false)
const remember = ref(false)

const signIn = () => {
  // WIP
  let data

  if (window.localStorage) {
    data = window.localStorage.getItem('fibUser')

    if (data) {
      data = JSON.parse(data)
      data.remember = remember.value
      window.localStorage.setItem('fibUser', JSON.stringify(data))
    }
  } else {
    userStore.login({email: email.value})
    router.push('/Profile')

    userStore.isLogged = true
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
        class="redLighter"
      >
        {{ $t("signInPage.signUpQuestion.highlight") }}
      </nuxt-link>
    </p>
    <form class="formWrapper">
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
    </form>
  </div>
</template>

<style src="./SignIn.scss" lang="scss"></style>
