<script setup>
</script>

<template>
  <header/>
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
// import Header from '@/components/register/Header'
// export default {
//   components: {
//     Header,
//   },
// }
</script>

<style src="../../assets/style/form.scss" lang="scss" scoped></style>
<style src="./SignIn.scss" lang="scss" scoped></style>
<style src="../SignUp/SignUp.scss" lang="scss" scoped></style>
