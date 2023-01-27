<script setup lang="ts">
// const input = document.querySelector('.FindHero-input');
// const button = document.querySelector('.FindHero-input-btn_reset');
// const select = document.duerySelector('.FindHero-select');

// function searchHero() {
//   send input.value to database;
//   get database answer;
//   add answer to select with class="FindHero-select-item"
//   select.hidden = false;
// }
// input.oninput = function(e){
//   button.hidden = false;
//   searchHero();
//   button.onclick = function(e){
//     input.value = '';
//     button.hidden = true;
//   }
// };

// if( hero == null ) {
//   div#default remove;
//   div#heroDontHavePattern.hidden = false;
// } else if ( hero == exist && hero.pattern == busy) {
//   div#default remove;
//   div#heroHasBeenChosen.hidden = false;
// }

//  const btnsRandomHero = document.querySelectorAll('.randomHero');
//  for (btn in btnsRandomHero) {
//    btn.onclick = function(){
//      send request by server 'Choose a hero automatically'
//    }
//  }

//  const btnSave = document.querySelector('#save');
//  btnSave.onclick = function(){
//  send request by server 'Save and go to Next step'
// }

</script>

<template>
  <main class="Content">
    <Head>
      <Title>#Framed in Belarus / Step 1 — Choose your Hero</Title>
      <Meta name="description" content="First step"/>
    </Head>
    <div class="Title">
      <div class="content">
        <h1>
          <span class="subtitle">Step 1 <span class="visually-hidden">— </span></span>Choose your Hero
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
        <div class="navStep navStep_current">
          <span class="navStep-number">1</span>
          <span class="navStep-title">Your Hero</span>
        </div>
        <div class="navStep_arrow"></div>
        <div class="navStep">
          <span class="navStep-number">2</span>
          <span class="navStep-title">Preparation</span>
        </div>
        <div class="navStep_arrow"></div>
        <div class="navStep">
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

      <section class="FindHero">
        <div class="FindHero-form">
          <input type="text" class="FindHero-input" placeholder="Search for a hero by name" aria-placeholder="Search for a hero by name">
          <button class="FindHero-input-btn" hidden><img src="../../../assets/media/img/close.svg" alt="Reset" class="FindHero-input-btn--img"></button>
          <div class="FindHero-select" hidden>
            <p class="FindHero-select-item">Smirnov</p>
            <p class="FindHero-select-item">Smirnova</p>
          </div>
        </div>
        <div id="default">
          <p class="alignCenter">
            <span class="block">OR</span>
            You can let us choose a hero for you automatically
          </p>
          <div class="buttons">
            <button class="button randomHero">Choose a hero automatically</button>
          </div>
        </div>

        <div class="mistake textWidth" id="heroHasBeenChosen" hidden>
          <h2>Sorry, this hero has already been chosen</h2>
          <p>You can see the embroidery <nuxt-link to="/Gallery">here</nuxt-link></p>
          <p>Please choose another hero.</p>
          <div class="buttons">
            <button class="button randomHero">Choose a hero automatically</button>
          </div>
        </div>

        <div class="mistake textWidth" id="heroDontHavePattern" hidden>
          <h2>Sorry, we don't have a pattern for this hero yet</h2>
          <p>If you really want this hero, please <strong>leave a request for a pattern</strong> in this section.</p>
          <p>To create a pattern  please help us by telling the hero's story. </p>
          <p>What he/she is into, what their work was, whether he/she has children or pets, etc.</p>
          <p>Often one-sided information can be found from Belarusian government sources, describing only the side of the prosecution. If you know the details and reasons for your hero's detention, please provide them. This may also help in creating a pattern.</p>
          <p>Rufina creates all the patterns by herself, so the process of creating a new pattern can take 2-3 months.</p>
          <p>Thank you for your understanding!</p>
          <div class="buttons">
            <button class="button">Leave a request</button>
            <button class="button randomHero">Choose a hero automatically</button>
          </div>
        </div>
      </section>

      <section class="FoundHero" hidden>
        <div class="Hero-Photo">
          <img src="../../../assets/media/img/randomHero.jpg" alt="Hero's name" class="Hero-Photo-img">
          <p class="Hero-Photo-text">This hero has been chosen automatically</p>
        </div>
        <div class="Hero-Description">
          <p class="Hero-Description-case">
            Case: Rabochy Ruh
          </p>
          <h2 class="Hero-Description-name">
            Viktar Anisimau
          </h2>
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
        </div>
        <div class="buttons">
          <button class="button bg_black" id="save">Choose this hero</button>
        </div>
      </section>
    </div>
  </main>
</template>

<style src="../Steps.scss" lang="scss" scoped></style>
<style src="./Step1.scss" lang="scss" scoped></style>
<style src="../../../assets/style/form.scss" lang="scss" scoped></style>
