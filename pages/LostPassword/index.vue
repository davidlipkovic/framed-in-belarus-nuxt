<script setup>
import { useUserStore } from "@/stores/user"

const userStore = useUserStore()

definePageMeta({
  layout: "registration"
})
</script>

<template>
  <div class="content">
    <h1 class="title">
      {{ $t("signInPage.title") }}
    </h1>
    <p>
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
        name="username" 
        id="username" 
        :placeholder="$t('placeholders.username')" 
        class="usernameInput"
      >
      <input 
        type="password" 
        name="password" 
        id="password" 
        :placeholder="$t('placeholders.password')" 
        class="passwordInput"
      >
      <p class="alignRight lostPasswordWrapper">
        <nuxt-link 
          :to="localePath('/LostPassword')"
        >
          {{ $t("signInPage.forgot") }}
        </nuxt-link>
      </p>
      <p class="checkBoxWrapper">
        <input 
          type="checkbox" 
          id="remember" 
          name="remember"
        >
        <label for="remember">
          {{ $t("signInPage.remember") }}
        </label>
      </p>
      <nuxt-link 
        :to="localePath('/Profile')"
        class="button bg_black large signInBtn"
        @click.once="userStore.isLogged = true"
      >
        {{ $t("signInPage.signInButton") }}
      </nuxt-link>
      <button 
        class="button large googleBtn"
        @click="userStore.isLogged = true"
      >
        {{ $t("signInPage.signInGoogleButton") }}
      </button>
    </form>
  </div>
</template>

<style src="../../assets/style/form.scss" lang="scss" scoped></style>
<style src="../../assets/style/registration.scss" lang="scss" scoped></style>
<style src="./LostPassword.scss" lang="scss" scoped></style>
