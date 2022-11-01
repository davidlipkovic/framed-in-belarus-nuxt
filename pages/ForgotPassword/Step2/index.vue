<script setup>
definePageMeta({
  layout: "registration",
})
</script>

<template>
  <div class="content">
    <h1 class="title">Forgot password?</h1>
    <form>
      <p><label for="newPassword">Enter a new password for your account</label></p>
      <input type="password" name="newPassword" id="newPassword" placeholder="New password">
      <input type="password" name="newPasswordRepeat" id="newPasswordRepeat" placeholder="Repeat the new password">
      <button class="button bg_black large">Send</button>
    </form>
  </div>
</template>

<style src="../../../assets/style/form.scss" lang="scss" scoped></style>
<style src="../../SignUp/SignUp.scss" lang="scss" scoped></style>
