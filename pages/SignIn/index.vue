<script setup>
import { computed, onMounted, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import useRegistrationStore from "@/stores/registration"
import useUserStore from "@/stores/user"
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
  userStore.isLogged = true
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
      <nuxt-link 
        :to="localePath('/Profile')"
        class="button signInBtn"
        :class="validEmailData ? 'bg_black' : 'button_disabled'" 
        @click.once="signIn()"
      >
        {{ $t("signInPage.signInButton") }}
      </nuxt-link>
    </div>
  </div>
</template>

<style src="./SignIn.scss" lang="scss"></style>
