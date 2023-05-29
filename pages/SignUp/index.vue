<script setup>
definePageMeta({
  layout: "registration"
})
</script>

<template>
  <div class="content contentSignUp">
    <h1 class="title">
      {{ $t("linkSignup") }}
    </h1>
    <p class="signUpDescription">
      {{ $t("signUpPage.signInQuestion") }}
      <nuxt-link 
        to="/SignIn" 
        class="red"
      >
        {{ $t("linkSignin") }}
      </nuxt-link>
    </p>
    <form class="formWrapper">
      <input 
        type="email" 
        name="username" 
        id="username" 
        :placeholder="$t('placeholders.username')" 
        class="usernameInput"
      />
      <input
        type="password"
        name="password"
        id="password"
        :placeholder="$t('placeholders.password')" 
      />      
      <input
        type="password"
        name="password"
        id="password"
        :placeholder="$t('placeholders.passwordAgain')" 
      />
      <input
        type="password"
        name="password"
        id="password"
        :placeholder="$t('placeholders.chooseCommunicationLanguage')" 
      />
      <textarea 
        name="reason" 
        id="reason" 
        class="reasonTextarea"
        :placeholder="$t('signUpPage.textarea')" 
      />
      <div class="Terms">
        <h2 class="Terms-summary">
          {{ $t('signUpPage.terms.section1.title') }}
        </h2>
        <div class="b2">
          <p>
            {{ $t('signUpPage.terms.section1.paragraph1') }}
          </p>
          <p>
            {{ $t('signUpPage.terms.section1.paragraph2') }}
          </p>
        </div>
        <h2 class="title">
          {{ $t('signUpPage.terms.section2.title') }}
        </h2>
        <i18n-t keypath="signUpPage.terms.section2.paragraph1.content" tag="p">
          <span class='b2'>
            {{ $t('signUpPage.terms.section2.paragraph1.highlight') }}
          </span>
        </i18n-t>
        <i18n-t keypath="signUpPage.terms.section2.paragraph2" tag="p" />
        <i18n-t keypath="signUpPage.terms.section2.paragraph3.content" tag="p">
          <span class='b2'>
            {{ $t('signUpPage.terms.section2.paragraph3.highlight1') }}
          </span>
          <span class='b2'>
            {{ $t('signUpPage.terms.section2.paragraph3.highlight2') }}
          </span>
          <span class='b2'>
            {{ $t('signUpPage.terms.section2.paragraph3.highlight3') }}
          </span>
        </i18n-t>
        <h2 class="title">
          {{ $t('signUpPage.terms.section3.title') }}
        </h2>
        <i18n-t keypath="signUpPage.terms.section3.paragraph1.content" tag="p">
          <span class='b2'>
            {{ $t('signUpPage.terms.section3.paragraph1.highlight') }}
          </span>
        </i18n-t>
        <i18n-t keypath="signUpPage.terms.section3.paragraph2.content" tag="p">
          <span class='b2'>
            {{ $t('signUpPage.terms.section3.paragraph2.highlight') }}
          </span>
        </i18n-t>
        <h2 class="title">
          {{ $t('signUpPage.terms.section4.title') }}
        </h2>
        <i18n-t keypath="signUpPage.terms.section4.paragraph1.content" tag="p">
          <span class='b2'>
            {{ $t('signUpPage.terms.section4.paragraph1.highlight') }}
          </span>
        </i18n-t>
        <h2 class="title">
          {{ $t('signUpPage.terms.section5.title') }}
        </h2>
        <i18n-t keypath="signUpPage.terms.section5.paragraph1.content" tag="p">
          <span class='b2'>
            {{ $t('signUpPage.terms.section5.paragraph1.highlight') }}
          </span>
        </i18n-t>
        <br><br><br>
      </div>
      <label for="agreeTerms" class="Agree checkBoxWrapper">
        <input type="checkbox" name="agreeTerms" id="agreeTerms" />
        <span>
          I agree with the terms of participation in the project
        </span>
      </label>
      <nuxt-link to="/Profile" class="button bg_black large signInBtn">
        Create profile and start work
      </nuxt-link>
      <button class="button large signInGoogleBtn">
        Sign up with Google
      </button>
    </form>
  </div>
</template>

<style src="../../assets/style/form.scss" lang="scss" scoped></style>
<style src="./SignUp.scss" lang="scss" scoped></style>
