<script setup>
import { computed, onMounted, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import useRegistrationStore from "@/stores/registration"
import useUserStore from "@/stores/user"
import { useValidateInputs } from "@/composables/ValidateInputs";

const registrationStore = useRegistrationStore()
const userStore = useUserStore()
const { validateEmail, validatePinData } = useValidateInputs()

definePageMeta({
  layout: "registration"
})

const emailInput = ref(null)
const emailTypingStarted = ref(false)

const pin = ref(null)
const pinInput = ref(null)
const pinTypingStarted = ref(false)

const remember = ref(false)

const validatePin = () => {
  // userStore.validatePin(registrationStore.email, pin.value)
  // navigateTo("/Profile")
}

const validEmailData = computed(() => validateEmail(registrationStore.email))
const validPinData = computed(() => validatePinData(pin.value))
const validData = computed(() => validEmailData.value && validPinData.value)

onClickOutside(emailInput, () => {
  if (registrationStore.email) {
    emailTypingStarted.value = true
  }
})

onClickOutside(pinInput, () => {
  if (pin.value) {
    pinTypingStarted.value = true
  }
})
</script>

<template>
  <div class="content verifyEmailWrapper">
    <h1 class="title">
      {{ $t('verifyEmailPage.title') }}
    </h1>
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
      </div>
      <div class="inputWrapper inputWrapperWarningTop">
        <input 
          type="text" 
          name="pin" 
          id="pin" 
          v-model="pin"
          :placeholder="$t('placeholders.pin') + '*'" 
          class="pinInput"
          :class="{'invalidInput': !validPinData && pinTypingStarted}" 
          ref="pinInput"
        />
        <span 
          v-if="!validPinData && pinTypingStarted"
          class="warningNotification note red"
        >
          {{ $t('invalidInputs.enterPinCode') }}
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
        class="button"
        :class="validData ? 'bg_black' : 'button_disabled'"
        @click="validatePin()"
      >
        {{ $t('buttons.send') }}
      </button>
    </div>
  </div>
</template>

<style src="./VerifyEmail.scss" lang="scss"></style>
