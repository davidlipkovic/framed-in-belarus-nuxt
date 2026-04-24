<script setup>
// WIP
import { computed, onMounted, ref, watch } from 'vue'
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
const { validateEmail, validatePinData } = useValidateInputs()

definePageMeta({
  layout: "registration"
})

useHead({
  title: t('verifyEmailPage.title'),
  meta: [
    { property: 'og:title', content: t('verifyEmailPage.title'), },
    { name: 'robots', content: 'noindex' }
  ],
})

const emailInput = ref(null)
const emailTypingStarted = ref(false)

const pin = ref(null)
const pinInput = ref(null)
const pinTypingStarted = ref(false)
const invalidPin = ref(false)

const validatePin = async () => {
  const validatePinResult = await userStore.validatePin(registrationStore.email, pin.value)
  
  if (validatePinResult) {
    router.push(localePath('/Profile'))
  } else {
    invalidPin.value = true
  }
}

const resendPin = async () => {
  await userStore.loginUser(registrationStore.email)
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
          readonly
          disabled
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
        <span 
          v-else-if="invalidPin"
          class="warningNotification note red"
        >
          {{ $t('invalidInputs.invalidPinCode') }}
        </span>
      </div>
      <button
        class="button"
        :class="validData ? 'bg_black' : 'button_disabled'"
        @click="validatePin()"
      >
        {{ $t('buttons.verifyEmail') }}
      </button>
      <button
        class="button"
        @click="resendPin()"
      >
        {{ $t('buttons.resendPin') }}
      </button>
    </div>
  </div>
</template>

<style src="./VerifyEmail.scss" lang="scss"></style>
