<style src="./Step1.scss" lang="scss"></style>

<template>
  <main-menu/>
  <div class="Content">
    <form class="content">
      <h1 class="title">Sign up</h1>
      <input type="text" name="name" id="name" placeholder="Name">
      <input type="text" name="surname" id="surname" placeholder="Surname">
      <input type="email" name="email" id="email" placeholder="E-mail">
      <input type="password" name="password" id="password" placeholder="Password">
      <select name="year" id="year">
        <option disable>Year of birth</option>
        <option value="1950">1950</option>
        <option value="2015">2015</option>
      </select>
      <select name="country" id="country">
        <option disable>Country</option>
        <option value="1950">1950</option>
        <option value="2015">2015</option>
      </select>
      <textarea>Why did you decide to join the project?</textarea>
      <form-end/>
    </form>
  </div>
  <main-footer/>
</template>

<script>
import FormEnd from '@/components/registration/FormEnd'
import MainFooter from '@/components/general/MainFooter'
import MainMenu from '@/components/general/MainMenu'

export default {
  components: {
    FormEnd,
    MainFooter,
    MainMenu,
  },
}
</script>
