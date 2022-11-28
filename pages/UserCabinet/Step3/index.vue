<template>
  <main class="Content">
    <Head>
      <Title>Step 3 — Support the political prisoner</Title>
      <Meta name="description" content="First step"/>
    </Head>
    <div class="Title">
      <div class="content">
        <h1>
          <span class="subtitle">Step 3 <span class="visually-hidden">— </span></span>Support the political prisoner

        </h1>
        <nuxt-link
          to="/UserCabinet"
          class="GoBack">
          <img src="../../../assets/media/img/arrow_back.svg" alt="Go back to my Profile" class="GoBack-img">
          <span class="GoBack-text">Go back to my Profile</span>
        </nuxt-link>
      </div>
    </div>
    <div class="content">
      <section class="NavSteps">
        <nuxt-link
          to="/UserCabinet/Step1"
          class="navStep navStep_done">
          <span class="navStep-number"><img src="../../../assets/media/img/checkmark.svg" alt="Performed" class="navStep_done-img"></span>
          <span class="navStep-title">Your Hero</span>
        </nuxt-link>
        <div class="navStep_arrow"></div>
        <nuxt-link
          to="/UserCabinet/Step1"
          class="navStep navStep_done">
          <span class="navStep-number"><img src="../../../assets/media/img/checkmark.svg" alt="Performed" class="navStep_done-img"></span>
          <span class="navStep-title">Preparation</span>
        </nuxt-link>
        <div class="navStep_arrow"></div>
        <div class="navStep navStep_current">
          <span class="navStep-number">3</span>
          <span class="navStep-title">Support</span>
        </div>
        <div class="navStep_arrow"></div>
        <div class="navStep">
          <span class="navStep-number">4</span>
          <span class="navStep-title">Photo</span>
        </div>
        <div class="navStep_arrow"></div>
        <div class="navStep">
          <span class="navStep-number">5</span>
          <span class="navStep-title">Comment</span>
        </div>
        <div class="navStep_arrow"></div>
        <div class="navStep">
          <span class="navStep-number">6</span>
          <span class="navStep-title">Shipping</span>
        </div>
        <div class="navStep_arrow"></div>
        <div class="navStep">
          <span class="navStep-number">7</span>
          <span class="navStep-title">Publication</span>
        </div>
      </section>

      <section>    

        <input type="checkbox" class="visually-hidden" id="HeroHidden">
        <article class="Hero textWidth">
          <input type="checkbox" class="visually-hidden" id="heroMore">
          <div class="Hero-header">
            <img src="../../../assets/media/img/defaultHero.svg" alt="Hero Name Surname" class="Hero-header-photo">
            <div class="Hero-header-title">
              <p class="Hero-header-case">
                Case: Rabochy Ruh
              </p>
              <h2 class="Hero-header-name">Alexandr Pavlovich</h2>
            </div>
            <label class="Hero-more-button" for="heroMore">
              <span class="Hero-more-button-text">More information</span>
              <svg class="Hero-more-button-img" width="9" height="6" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.85522 0.878982L8.14812 0.171875L4.36684 3.95315L0.707107 0.293424L0 1.00053L3.65973 4.66026L3.65381 4.66617L4.36092 5.37328L8.85522 0.878982Z" fill="#4F4F4F"/>
              </svg>
            </label>
          </div>
          <label for="HeroHidden" class="Hero-close">
            <img src="../../../assets/media/img/close.svg" alt="Close" class="Hero-close-img">
          </label>          
          <div class="Hero-content">
            <div class="Hero-Description-data">
            <h3 class="title">Date of birth:</h3>
            <p>3 September 2022</p>
            </div>
            <div class="Hero-Description-data">
              <h3 class="title">Date of detention:</h3>
              <p>3 September 2022</p>
            </div>
            <div class="Hero-Description-data">
              <h3 class="title">Sentence:</h3>
              <p>3 years</p>
            </div>
            <div class="Hero-Description-data">
              <h3 class="title">Description of the Political prisoner:</h3>
              <p>Salihorsk resident Aliaksandr Adziarykha was convicted under part 1 of Art. 368 of the Criminal Code for insulting Aliaksandr Lukashenka, Art. 369 for insulting KGB Chairperson Ivan Tsertsel, CEC Chairperson Liudmila Yarmoshyna, deputies, ministers for foreign affairs and emergencies, and the prosecutor to three years of imprisonment and a fine of 6,400 Belarusian roubles ($2,535)</p>
            </div>
            <div class="Hero-Description-data">
              <h3 class="title">Description of the case:</h3>
              <p>The case description is the same as the political prisoner’s description because this is an individual case, not a collective one.</p>
            </div>
            <div class="Hero-Description-data">
              <h3 class="title">Address of the prison:</h3>
              <p>Prison No. 4</p>
            </div>
            <label class="Hero-less-button" for="heroMore">
              <span class="Hero-less-button-text">Less information</span>
              <svg class="Hero-less-button-img" width="9" height="6" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.85522 0.878982L8.14812 0.171875L4.36684 3.95315L0.707107 0.293424L0 1.00053L3.65973 4.66026L3.65381 4.66617L4.36092 5.37328L8.85522 0.878982Z" fill="#4F4F4F"/>
              </svg>
            </label>
          </div>
        </article>

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
            <p>By taking part in the project you become a kind of "ambassador" of the prisoner, telling his/her story to the world.</p>
          </div>
          <dl class="SupportMethods textWidth">
            <dt class="SupportMethod-title">Make posts and stories on social media</dt>
            <dd class="SupportMethod-content">Talk about your hero and about the project and put <span class="likeA">#framedinbelarus</span> and mark the account <span class="likeA">@rufinabazlova</span>.</dd>
            <dt class="SupportMethod-title">Write a letter to your political prisoner</dt>
            <dd class="SupportMethod-content">
              <p>You can mail a letter from your country. The full list of political prisoners with updated addresses is provided on <a href="https://prisoners.spring96.org/en">prisoners.spring96.org/en</a>.</p>
              <p>The Solidarity Postcards Atelier can help you send a postcard or a letter "online". Volunteers will transcribe your text and send it by mail in Belarus. Volunteers will translate your message from English into Belarusian. When the response comes, they can translate it into English on your demand. You can find more information on how to support the initiative on their page.</p>
              <h2 class="title">What do you need to know about writing letters to prisoners?</h2>
              <dl>
                <dt>Censorship</dt>
                <dd>All letters go through censorship. Don‘t write anything that may cause harm to you, your addressee or other people. Remember, that some of the information might not pass through censorship, so describe news and events carefully.</dd>
                <dt>Dates</dt>
                <dd>Write the date on the letter. You can also give it a number — it helps to figure out which letters get lost and how much time is needed for delivery.</dd>
                <dt>Language</dt>
                <dd>Not all censors speak English. Most prisons only accept letters in Russian or Belarusian. So use a translator or an initiative where volunteers will translate your letters. Letters with unknown abbreviations, word reductions and words may not go through censorship. Also, don‘t send poems or literary works in the letters — they have a low chance of passing censorship.</dd>
              </dl>
            </dd>
            <dt class="SupportMethod-title">Get involved in the initiative <a href="https://politzek.me/">politzek.me</a></dt>
            <dd class="SupportMethod-content">
              The platform allows you to befriend a political prisoner and complete different tasks. 
            </dd>
            <dt class="SupportMethod-title">Support political prisoners and their families financially</dt>
            <dd class="SupportMethod-content">
              <ul>
                <li><a href="https://dissidentby.com/en/help">dissidentby.com/en/help</a></li>
                <li><a href="https://bysol.org/en/">bysol.org/en/</a></li>
                <li><a href="https://Ineedhelpby.org">Ineedhelpby.org</a></li>
                <li><a href="https://en.stranafund.org">en.stranafund.org</a></li>
              </ul>
            </dd>
          </dl>
        </article>

        <div class="buttons">
          <nuxt-link to="/UserCabinet/Step2" class="button">Previous step</nuxt-link>
          <button class="button bg_black">Next step</button>
        </div>
      </section>
    </div>
  </main>

  

  
</template>

<style src="../Steps.scss" lang="scss" scoped></style>
<style src="./Step3.scss" lang="scss" scoped></style>

<script>


</script>