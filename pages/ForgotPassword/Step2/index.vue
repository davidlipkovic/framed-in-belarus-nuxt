<script setup>
</script>

<template>
  <header class="Header_sign">
    <div class="content">
      <a href="/" class="logo-project">
        <span class="firstSymbol">#</span><span class="text">
          {{ $t('title') }}
        </span>
      </a>
      <input type="checkbox" id="Lang" class="Lang-checker visually-hidden">
      <div class="Lang">
        <label for="Lang" role="button" aria-role="button"
          class="Lang-button"
          >
          EN<img class="arrow" src="@/assets/media/img/arrow.svg">
        </label>
        <div class="Lang-select">
          <a href="/ru" class="Lang-link">Russian</a>
        </div>
      </div>
    </div>
  </header>
  <main class="Content">
    <div class="Embroiderer">
      <img src="../../../../assets/media/img/embroiderer.svg" alt="Embroiderer" class="Img">
    </div>
    <div class="content">
      <h1 class="title">Forgot password?</h1>
      <form>
        <p><label for="newPassword">Enter a new password for your account</label></p>
        <input type="password" name="newPassword" id="newPassword" placeholder="New password">
        <input type="password" name="newPasswordRepeat" id="newPasswordRepeat" placeholder="Repeat the new password">
        <button class="button bg_black large">Send</button>
      </form>
    </div>
  </main>
</template>

<style src="../../../assets/style/form.scss" lang="scss" scoped></style>
<style src="../../SignUp/SignUp.scss" lang="scss" scoped></style>
