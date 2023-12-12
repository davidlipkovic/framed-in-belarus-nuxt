<script setup>
definePageMeta({
  layout: "clean"
})
</script>

<template>
  <div class="verifyEmailWrapper">
    <RegistrationMainMenu/>
    <main class="Content flexColumnCenter">
      <div class="Embroiderer flexColumnCenter">
        <img 
          src="../../assets/media/img/embroiderer.svg" 
          alt="Embroiderer" 
          class="Img"
        >
      </div>
      <h1>
        Verify your email address
      </h1>
      <p>
        To complete your profile and start stitching please verify your email address
      </p>
    </main>
    <GeneralCookieBar/>
  </div>
</template>

<style src="./VerifyEmail.scss" lang="scss"></style>
