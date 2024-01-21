<script setup>
import { computed, onMounted, ref, watch } from 'vue'
import { useUserStore } from "@/stores/user"
import { useValidateInputs } from "@/composables/ValidateInputs";

const userStore = useUserStore()
const { validateEmail, validatePinData } = useValidateInputs()

definePageMeta({
  layout: "clean"
})

const email = ref(null)
const emailTypingStarted = ref(false)
const pin = ref(null)
const pinTypingStarted = ref(false)

const validatePin = () => {
  // userStore.validatePin(email.value, pin.value)
  // navigateTo("/Profile")
}

const validEmailData = computed(() => validateEmail(email.value))
const validPinData = computed(() => validatePinData(pin.value))
const validData = computed(() => validEmailData.value && validPinData.value)
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
            :placeholder="$t('placeholders.email') + '*'" 
            class="emailInput"
            :class="{'invalidInput': !validEmailData && emailTypingStarted}" 
            v-model="email"
            @input="emailTypingStarted = true"
          />
          <span 
            v-if="!validEmailData && emailTypingStarted"
            class="warningNotification note red"
          >
            Invalid email adress
          </span>
          <input 
            type="text" 
            name="pin" 
            id="pin" 
            :placeholder="$t('placeholders.pin') + '*'" 
            class="pinInput"
            :class="{'invalidInput': !validPinData && pinTypingStarted}" 
            v-model="pin"
            @input="pinTypingStarted = true"
          />
          <span 
            v-if="!validPinData && pinTypingStarted"
            class="warningNotification note red"
          >
            Invalid pin
          </span>
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
