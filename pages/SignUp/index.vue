<script setup>
definePageMeta({
  layout: "registration"
})
</script>

<template>
  <div class="content contentSignUp">
    <h1 class="title">Sign up</h1>
    <p class="signUpDescription">
      Already a member? <nuxt-link to="/SignIn" class="red">Sign in</nuxt-link>
    </p>
    <form class="formWrapper">
      <div class="group">
        <input type="text" name="name" id="name" placeholder="Name" />
        <input type="text" name="surname" id="surname" placeholder="Surname" />
      </div>
      <input type="email" name="email" id="email" placeholder="E-mail" />
      <input
        type="password"
        name="password"
        id="password"
        placeholder="Password"
      />
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
      <textarea name="reason" id="reason">
Why did you decide to join the project?</textarea
      >
      <details class="Terms">
        <summary class="Terms-summary">{{ $t("TermsTitle") }}</summary>
        <div class="b2">
          <p>{{ $t("TermsB0") }}</p>
          <p>{{ $t("TermsB1") }}</p>
        </div>
        <h2 class="title">{{ $t("TermsTitle0") }}</h2>
        <p>
          {{ $t("TermsStr0") }}<strong>{{ $t("TermsStr1") }}</strong
        >{{ $t("TermsStr2") }}
        </p>
        <p>{{ $t("TermsStr3") }}</p>
        <p>
          {{ $t("TermsStr4") }}<strong>{{ $t("TermsStr5") }}</strong
        >{{ $t("TermsStr6") }}<strong>{{ $t("TermsStr7") }}</strong
        >{{ $t("TermsStr8") }}<strong>{{ $t("TermsStr9") }}</strong
        >{{ $t("TermsStr10") }}
        </p>
        <h2 class="title">{{ $t("TermsTitle1") }}</h2>
        <p>{{ $t("TermsStr11") }}</p>
        <p>{{ $t("TermsStr12") }}</p>
        <h2 class="title">{{ $t("TermsTitle2") }}</h2>
        <p>
          <strong>{{ $t("TermsStr13") }}</strong
          >{{ $t("TermsStr14") }}
        </p>
        <h2 class="title">{{ $t("TermsTitle3") }}</h2>
        <p>
          {{ $t("TermsStr15") }}<strong>{{ $t("TermsStr16") }}</strong
        >{{ $t("TermsStr17") }}
        </p>
        <p>{{ $t("TermsStr18") }}</p>
      </details>
      <label for="agreeTerms" class="Agree">
        <input type="checkbox" name="agreeTerms" id="agreeTerms" />
        <span>I agree with the terms of participation in the project</span>
      </label>
      <nuxt-link to="/Profile" class="button bg_black large signInBtn">
        Create profile and start work
      </nuxt-link>
      <button class="button large signInGoogleBtn">Sign in with Google</button>
    </form>
  </div>
</template>

<style src="../../assets/style/form.scss" lang="scss" scoped></style>
<style src="./SignUp.scss" lang="scss" scoped></style>
