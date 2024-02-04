<script setup>
// WIP
import { computed, onMounted, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from "@/stores/user"
import { useValidateInputs } from "@/composables/ValidateInputs";

const router = useRouter()
const userStore = useUserStore()
const { validateEmail, validatePinData } = useValidateInputs()

definePageMeta({
  layout: "clean"
})

const email = ref(null)
const emailInput = ref(null)
const emailTypingStarted = ref(false)
const pin = ref(null)
const pinInput = ref(null)
const pinTypingStarted = ref(false)
const remember = ref(false)

const validatePin = () => {
  userStore.validatePin(email.value, pin.value, remember.value)
  router.push('/Profile')
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
  <div class="verifyEmailWrapper flexColumnCenter">
    <RegistrationMainMenu/>
    <main class="Content flexColumnCenter">
      <div class="content flexColumnCenter">
        <div class="Embroiderer flexColumnCenter">
          <img 
            src="../../assets/media/img/embroiderer.svg" 
            alt="Embroiderer" 
            class="Img"
          >
        </div>
        <h1>
          {{ $t('verifyEmailPage.title') }}
        </h1>
        <p>
          {{ $t('verifyEmailPage.content') }}
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
        </form>
        <div class="buttons">
          <button 
            class="button"
            :class="validData ? 'bg_black' : 'button_disabled'"
            @click="validatePin()"
          >
            {{ $t('buttons.send') }}
          </button>
        </div>
      </div>
    </main>
    <GeneralCookieBar/>
  </div>
</template>

<style src="./VerifyEmail.scss" lang="scss"></style>
