<script setup>
import { onMounted, ref, watch } from 'vue'
import { useUserStore } from "@/stores/user"

const userStore = useUserStore()

definePageMeta({
  layout: "clean"
})

const email = ref(null)
const pin = ref(null)

const validatePin = () => {
  // userStore.validatePin(email.value, pin.value)
  // navigateTo("/Profile")
}
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
        <input 
          type="email" 
          name="email" 
          id="email" 
          :placeholder="$t('placeholders.email') + '*'" 
          class="emailInput"
          v-model="email"
        />
        <input 
          type="text" 
          name="pin" 
          id="pin" 
          :placeholder="$t('placeholders.pin') + '*'" 
          class="pinInput"
          v-model="pin"
        />
        <div class="buttons">
          <button 
            class="button"
            :class="pin && email ? 'bg_black' : 'button_disabled'"
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
