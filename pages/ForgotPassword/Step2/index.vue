<script setup>
definePageMeta({
  layout: "registration"
})
</script>

<template>
  <div class="content contentForgotPasswordStep1">
    <h1 class="title">Forgot password?</h1>
    <form>
      <p><label for="code">Enter the code that came to your e-mail</label></p>
      <input type="number" name="code" id="code" placeholder="Code">
      <nuxt-link 
        :to="localePath('/ForgotPassword/Step-3-support')"
        class="button bg_black large"
      >
        Send
      </nuxt-link>
    </form>
  </div>
</template>

<style src="../../../assets/style/form.scss" lang="scss" scoped></style>
<style src="../../SignUp/SignUp.scss" lang="scss" scoped></style>
<style src="./Step2.scss" lang="scss" scoped></style>
