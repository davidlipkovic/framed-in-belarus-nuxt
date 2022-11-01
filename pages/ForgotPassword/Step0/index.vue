<script setup>
definePageMeta({
  layout: "registration",
})
</script>

<template>
  <div class="content">
    <h1 class="title">Forgot password?</h1>
    <form>
      <p><label for="email">Enter your email address to which we will send a password recovery code</label></p>
      <input type="email" name="email" id="email" placeholder="E-mail">
      <button class="button bg_black large">Send</button>
    </form>
  </div>
</template>

<style src="../../../assets/style/form.scss" lang="scss" scoped></style>
<style src="../../SignUp/SignUp.scss" lang="scss" scoped></style>
