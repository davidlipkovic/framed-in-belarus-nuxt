<script setup>
definePageMeta({
  layout: "registration",
})
</script>

<template>
  <div class="content">
    <h1 class="title">Forgot password?</h1>
    <form>
      <p><label for="code">Enter the code that came to your e-mail</label></p>
      <input type="number" name="code" id="code" placeholder="Code">
      <button class="button bg_black large">Send</button>
    </form>
  </div>
</template>

<style src="../../../assets/style/form.scss" lang="scss" scoped></style>
<style src="../../SignUp/SignUp.scss" lang="scss" scoped></style>
