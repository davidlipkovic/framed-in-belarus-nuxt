<script setup>
import { computed, onMounted, ref, watch } from 'vue'
import { useUserStore } from "@/stores/user"
import { useValidateInputs } from "@/composables/ValidateInputs";

const userStore = useUserStore()
const { validateEmail, validatePinData } = useValidateInputs()

definePageMeta({
  layout: "registration"
})

const email = ref(null)
const emailInput = ref(null)
const emailTypingStarted = ref(false)
const pin = ref(null)
const pinInput = ref(null)
const pinTypingStarted = ref(false)
const remember = ref(false)

const validatePin = () => {
  // userStore.validatePin(email.value, pin.value)
  // navigateTo("/Profile")
}

const validEmailData = computed(() => validateEmail(email.value))
const validPinData = computed(() => validatePinData(pin.value))
const validData = computed(() => validEmailData.value && validPinData.value)

onClickOutside(emailInput, () => {
  if (email.value) {
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
