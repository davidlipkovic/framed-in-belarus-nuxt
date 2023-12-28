<script setup>
definePageMeta({
  layout: "clean"
})
</script>

<template>
  <div class="verifyEmailWrapper">
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
      </div>
    </main>
    <GeneralCookieBar/>
  </div>
</template>

<style src="./VerifyEmail.scss" lang="scss"></style>
