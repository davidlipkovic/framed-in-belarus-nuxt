<style src="../../assets/style/form.scss" lang="scss" scoped></style>
<style src="../SignUp/SignUp.scss" lang="scss" scoped></style>
<style src="./SignIn.scss" lang="scss" scoped></style>

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
      <img src="../../../assets/media/img/embroiderer.svg" alt="Embroiderer" class="Img">
    </div>
    <div class="content">
      <h1 class="title">Sign in</h1>
      <p>Not a member? <a href="SignUp" class="red">Sign up</a></p>
      <form>
        <input type="email" name="email" id="email" placeholder="E-mail">
        <input type="password" name="password" id="password" placeholder="Password">
        <p class="alignRight">
          <a href="LostPassword">Forgot the password?</a>
        </p>
        <p>
          <input type="checkbox" id="remember" name="remember">
          <label for="remember">Remember me</label>
        </p>
        <button class="button bg_black large">Sign in</button>
        <button class="button large">Sign in with Google</button>
      </form>
    </div>
  </main>
</template>

<script>
export default {
}
</script>
