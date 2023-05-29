<script setup>
definePageMeta({
  layout: "embroidery"
})
</script>

<template>
  <main class="Content">
    <Head>
      <Title>#Framed in Belarus / Step 3 — Support the political prisoner</Title>
      <Meta name="description" content="First step"/>
    </Head>
    <div class="Title">
      <div class="content">
        <h1>
          <span class="subtitle">Step 3 <span class="visually-hidden">— </span></span>Support the political prisoner
        </h1>
        <GeneralGoBack
          page="Profile"
        />
      </div>
    </div>
    <div class="content">
      <RegistrationNavSteps
        :currentStep="3"
      />

      <section>
        <input type="checkbox" class="visually-hidden" id="HeroHidden">
        <RegistrationHeroBio class="textWidth"/>

        <article>
          <div class="textWidth">
            <blockquote class="blockquote">
              <p class="blockquote-content">
                <span class="blockquote-quote_opened">“</span>
                The more we talk about them, the safer they are
                <span class="blockquote-quote_closed">”</span>
              </p>
              <p class="blockquote-author">Darya Losik, wife of unjustly convicted blogger Ihar Losik</p>
            </blockquote>
            <p>
              By taking part in the project you become a kind of "ambassador" of the prisoner, telling his/her story to the world.
            </p>
          </div>
          <dl class="SupportMethods textWidth">
            <dt class="SupportMethod-title">
              Make posts and stories on social media
            </dt>
            <dd class="SupportMethod-content">
              Talk about your hero and about the project and put <span class="likeA">#framedinbelarus</span> and mark the account <span class="likeA">@rufinabazlova</span>.
            </dd>
            <dt class="SupportMethod-title">
              Write a letter to your political prisoner
            </dt>
            <dd class="SupportMethod-content">
              <p>
                You can mail a letter from your country. The full list of political prisoners with updated addresses is provided on <a href="https://prisoners.spring96.org/en" target="_blank">prisoners.spring96.org/en</a>.</p>
              <br>
              <p>
                The 
                <a 
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfhsgpGwDc9sskZ82LN_eKwwZBAX9U5kLARAFo2eR1UGw8Usg/viewform?usp=send_form" 
                  target="_blank"
                >
                  Solidarity Postcards Atelier
                </a>
                  can help you send a postcard or a letter "online". Volunteers will transcribe your text and send it by mail in Belarus. Volunteers will translate your message from English into Belarusian. When the response comes, they can translate it into English on your demand. You can find more information on how to support the initiative on their page.
                </p>
              <br>
              <h2 class="title">What do you need to know about writing letters to prisoners?</h2>
              <dl>
                <dt><b>Censorship</b></dt>
                <dd>All letters go through censorship. Don‘t write anything that may cause harm to you, your addressee or other people. Remember, that some of the information might not pass through censorship, so describe news and events carefully.</dd>
                <dt><b>Dates</b></dt>
                <dd>Write the date on the letter. You can also give it a number – it helps to figure out which letters get lost and how much time is needed for delivery.</dd>
                <dt><b>Language</b></dt>
                <dd>Not all censors speak English. Most prisons only accept letters in Russian or Belarusian. So use a translator or an initiative where volunteers will translate your letters. Letters with unknown abbreviations, word reductions and words may not go through censorship. Also, don‘t send poems or literary works in the letters – they have a low chance of passing censorship.</dd>
              </dl>
            </dd>
            <dt class="SupportMethod-title">
              Get involved in the initiative <a href="https://politzek.me/" target="_blank">politzek.me</a>
            </dt>
            <dd class="SupportMethod-content">
              The platform allows you to befriend a political prisoner and complete different tasks. 
            </dd>
            <dt class="SupportMethod-title">
              Support political prisoners and their families financially
            </dt>
            <dd class="SupportMethod-content">
              <ul>
                <li><a href="https://dissidentby.com/en/help" target="_blank">dissidentby.com/en/help</a></li>
                <li><a href="https://bysol.org/en/" target="_blank">bysol.org/en/</a></li>
                <li><a href="https://Ineedhelpby.org" target="_blank">Ineedhelpby.org</a></li>
                <li><a href="https://en.stranafund.org" target="_blank">en.stranafund.org</a></li>
              </ul>
            </dd>
          </dl>
        </article>

        <div class="buttons">
          <nuxt-link to="/Embroidery/Step-2-preparation" class="button">Previous step</nuxt-link>
          <nuxt-link to="/Embroidery/Step-4-photo" class="button bg_black" id="save">Got it! Next step</nuxt-link>
        </div>
      </section>
    </div>
  </main>
</template>

<style src="../Steps.scss" lang="scss" scoped></style>
<style src="./Step-3-support.scss" lang="scss" scoped></style>
