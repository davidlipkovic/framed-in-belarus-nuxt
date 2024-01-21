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
const emailTypingStarted = ref(false)
const remember = ref(false)

const signIn = () => {
  // userStore.login(email.value)
  // window.sessionStorage.setItem('fibIsLogged', true)
  // window.sessionStorage.getItem('bcNotificationID')
  userStore.isLogged = true
}

const validEmailData = computed(() => {
  return validateEmail(email.value)
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
        :placeholder="$t('placeholders.email')" 
        @input="emailTypingStarted = true"
        class="emailInput"
        :class="{'invalidInput': !validEmailData && emailTypingStarted}" 
      >
      <span 
        v-if="!validEmailData && emailTypingStarted"
        class="warningNotification note red"
      >
        Invalid email adress
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
        >
        {{ $t("signInPage.remember") }}
      </label>
      <nuxt-link 
        :to="localePath('/Profile')"
        class="button signInBtn"
        :class="validEmailData ? 'bg_black' : 'button_disabled'" 
        @click.once="signIn()"
      >
        {{ $t("signInPage.signInButton") }}
      </nuxt-link>
    </form>
  </div>
</template>

<style src="./SignIn.scss" lang="scss"></style>
