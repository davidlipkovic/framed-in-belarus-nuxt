<script setup>
definePageMeta({
  layout: "registration"
})
</script>

<template>
  <div class="content contentForgotPasswordStep1">
    <h1 class="title">Forgot password?</h1>
    <form>
      <p><label for="email">Enter your email address to which we will send a password recovery code</label></p>
      <input type="email" name="email" id="email" placeholder="E-mail">
      <nuxt-link to="/ForgotPassword/Step2" class="button bg_black large">Send</nuxt-link>
    </form>
  </div>
</template>

<style src="../../../assets/style/form.scss" lang="scss" scoped></style>
<style src="../../SignUp/SignUp.scss" lang="scss" scoped></style>
<style src="./Step1.scss" lang="scss" scoped></style>
