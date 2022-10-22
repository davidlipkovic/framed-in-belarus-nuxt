<style src="./Step0.scss" lang="scss" scoped></style>

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
          <a href="/ru">RU</a>
        </div>
      </div>
    </div>
  </header>
  <main class="Content">
    <div class="Embroiderer">
      <img src="../../../assets/media/img/embroiderer.svg" alt="Embroiderer" class="Img">
    </div>
    <div class="content">
      <h1 class="title">
        <span>Terms of&nbsp;participation in&nbsp;the&nbsp;project</span>
      </h1>
      <article>
        <div class="b">
          <p>On this site, after confirming the conditions, you will receive detailed instructions that will guide you from the preparation stage to sending us your finished work.</p>
          <p>By taking part in the project you become an "ambassador" of a prisoner and will receive a "portrait" of a political prisoner in Belarus. All fates are equally important in this project, and we would like to record all stories, so each political prisoner is embroidered only once. If we don't have your character's pattern ready yet, or he/she is already being embroidered, we will offer you another person. Rufina is the sole creator of all the pattern work, so the process of creating a new scheme can take 2-3 months.
          </p>
        </div>
        <h2 class="title">Timeline</h2>
        <p>The work process is divided into several steps that you can go through at your own pace. However, <strong>we have set a time limit of 2 months</strong>. This should be enough if you do occasional embroidery on your free evenings (or even if you're just a beginner).</p>
        <p>If you don't finish your work in 2 months and tell us you need more time, we may drop you from the project and pass your hero to someone else. We regret these strict rules, but we need to create some boundaries so the project doesn't turn into chaos.</p>
        <p>If you decide to withdraw from the project for any reason, or <strong>if you won’t be able to finish</strong> your embroidery work <strong>on time</strong>, please <strong>let us know</strong> as soon as possible.</p>
        <h2 class="title">Publisity</h2>
        <p>After your registration,  your data will not be available to other users of the website. You can also choose to use your real name or pseudonym and administer your own profile.</p>
        <p>An important element of the project is photo documentation of your embroidery process and final work. These photos will be later used on the site and in other publications on the project. Therefore, we want to warn you about it in advance and ask you to take the quality of future photos seriously. </p>
        <h2 class="title">Price</h2>
        <p><strong>Participation in the project is free</strong> and open to all who are willing to give their time and effort to create an embroidery. The cost of creating the work is at your own expense and will cost you the like price of two cups of coffee. The final idea of the project is to create a large-scale canvas with embroideries of all political prisoners, therefore, by participating in the project you are obliged to send us your embroidery and become part of a large mosaic of portraits, which will later be publicly exhibited in galleries and cultural institutions.</p>
        <h2 class="title">Reference</h2>
        <p>At the end, we will also <strong>ask you to write a short comment about your experience</strong> embroidering a political prisoner and participating in the project. Embroidery is a slow-paced process that allows you to gain a better experience and understand the story you will be working on. We would love to hear your thoughts, as they may become an addition to your work.</p>
        <p>By accepting the terms, you are confirming your serious intention to participate in the project!</p>
      </article>
      <div class="form end">
        <button class="button">Decline</button>
        <button class="button bg_black">I agree with&nbsp;conditions</button>
      </div>
    </div>
  </main>
</template>

<script>
export default {
}
</script>
