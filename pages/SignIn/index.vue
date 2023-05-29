<script setup>
definePageMeta({
  layout: "registration"
})
</script>

<template>
  <div class="content">
    <h1 class="title">
      Sign in
    </h1>
    <p class="signUpDescription">
      Not a member? 
      <nuxt-link 
        to="/SignUp" 
        class="redLighter"
      >
        Sign up
      </nuxt-link>
    </p>
    <form class="formWrapper">
      <input 
        type="email" 
        name="username" 
        id="username" 
        placeholder="Username" 
        class="usernameInput"
      >
      <input 
        type="password" 
        name="password" 
        id="password" 
        placeholder="Password" 
        class="passwordInput"
      >
      <p class="alignRight lostPasswordWrapper">
        <nuxt-link to="/LostPassword">
          Forgot the password?
        </nuxt-link>
      </p>
      <p class="checkBoxWrapper">
        <input 
          type="checkbox" 
          id="remember" 
          name="remember"
        >
        <label for="remember">
          Remember me
        </label>
      </p>
      <nuxt-link 
        to="/Profile" 
        class="button bg_black large signInBtn"
      >
        Sign in
      </nuxt-link>
      <button class="button large signInGoogleBtn">
        Sign in with Google
      </button>
    </form>
  </div>
</template>

<style src="../../assets/style/form.scss" lang="scss" scoped></style>
<style src="./SignIn.scss" lang="scss" scoped></style>
<style src="../SignUp/SignUp.scss" lang="scss" scoped></style>
<style src="../../components/registration/Embroiderer/Embroiderer.scss" lang="scss" scoped></style>
