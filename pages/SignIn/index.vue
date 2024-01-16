<script setup>
import { onMounted, ref, watch } from 'vue'

import { useUserStore } from "@/stores/user"

const userStore = useUserStore()

definePageMeta({
  layout: "registration"
})

const email = ref(null)
const remember = ref(false)
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
        class="usernameInput"
      >
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
        :class="{'button_disabled': !email, 'bg_black': email}" 
        @click.once="userStore.isLogged = true"
      >
        {{ $t("signInPage.signInButton") }}
      </nuxt-link>
    </form>
  </div>
</template>

<style src="../../assets/style/registration.scss" lang="scss" scoped></style>
<style src="./SignIn.scss" lang="scss" scoped></style>
