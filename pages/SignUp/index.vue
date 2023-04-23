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
      <input type="email" name="username" id="username" placeholder="Username" class="usernameInput"/>
      <input
        type="password"
        name="password"
        id="password"
        placeholder="Password"
      />      
      <input
        type="password"
        name="password"
        id="password"
        placeholder="Password again"
      />
      <textarea name="reason" id="reason" class="reasonTextarea">Why did you decide to join the project?
      </textarea>
      <div class="Terms">
        <h2 class="Terms-summary">
          How to participate
        </h2>
        <div class="b2">
          <p>
            On this site, after confirming the conditions, you will receive detailed instructions that will guide you from the preparation stage to sending us your finished work.
          </p>
          <p>            
            By taking part in the project you become an "ambassador" of a prisoner and will receive a "portrait" of a political prisoner in Belarus. All fates are equally important in this project, and we would like to immortalise all stories, so each political prisoner is embroidered only once.
          </p>
        </div>
        <h2 class="title">
          Timeline
        </h2>
        <p>
          The work process is divided into several steps that you can go through at your own pace. However, <span class="b2">we have set a time limit of 2 months</span>. This should be enough if you do occasional embroidery on your free evenings (or even if you're just a beginner). 
        </p>
        <p>
          If you do not finish your work in 2 months and tell us you need more time, we may drop you from the project and pass your hero to someone else. We regret these strict rules, but we need to create some boundaries so the project does not turn into chaos.
        </p>
        <p>
          If you decide to withdraw from the project for any reason, or <span class="b2">if you will not be able to finish</span> your embroidery work <span class="b2">on time</span>, please <span class="b2">let us know</span> as soon as possible.
        </p>
        <h2 class="title">
          Publicity
        </h2>
        <p>
          After your registration, <span class="b2">your data will not be available to other users on the website</span>. You can also choose whether to use your real name or pseudonym and administer your own profile. 
        </p>
        <p>
          An important element of the project is photo documentation of your embroidery process and final work. These <span class="b2">photos will be later used on the site and in other publications on the project</span>. Therefore, we want to warn you about it in advance and ask you to take the quality of future photos seriously. 
        </p>
        <h2 class="title">
          Price
        </h2>
        <p>
          <span class="b2">Participation in the project is free</span> and open to all those who are willing to give their time and effort to create an embroidery. The cost of creating the work is at your own expense and will cost you the equivalent of two cups of coffee. The final idea of the project is to create a large-scale canvas with embroideries of all political prisoners, therefore, by participating in the project you are committing to send us your embroidery and become part of a large mosaic of portraits, which will later be publicly exhibited in galleries and cultural institutions.
        </p>
        <h2 class="title">
          Personal Comment
        </h2>
        <p>
          At the end, we will also <span class="b2">ask you to write a short comment about your experience</span> embroidering a political prisoner and participating in the project. Embroidery is a slow-paced process that allows you to gain a better experience and understand the story you will be working on. We would love to hear your thoughts, as they may become an addition to your work.<br><br><br>
        </p>
      </div>
      <label for="agreeTerms" class="Agree checkBoxWrapper">
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
