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
      <img src="../../../assets/media/img/embroiderer.svg" alt="Embroiderer" class="Img">
    </div>
    <div class="content">
      <h1 class="title">Sign up</h1>
      <p>Already a member? <a href="SignIn" class="red">Sign in</a></p>
      <form>
        <div class="group">
          <input type="text" name="name" id="name" placeholder="Name">
          <input type="text" name="surname" id="surname" placeholder="Surname">
        </div>
        <input type="email" name="email" id="email" placeholder="E-mail">
        <input type="password" name="password" id="password" placeholder="Password">
        <div class="group">
          <select name="year" id="year">
            <option disable>Year of birth</option>
            <option value="1950">1950</option>
            <option value="2015">2015</option>
          </select>
          <select name="country" id="country">
            <option disable>Country</option>
            <option value="A">A</option>
            <option value="Z">Z</option>
          </select>
        </div>
        <textarea name="reason" id="reason">Why did you decide to join the project?</textarea>

        <button class="button bg_black large">Create profile and start work</button>
        <button class="button large">Sign in with Google</button>
      </form>
    </div>
  </main>
</template>

<style src="../../assets/style/form.scss" lang="scss" scoped></style>
<style src="./SignUp.scss" lang="scss" scoped></style>
