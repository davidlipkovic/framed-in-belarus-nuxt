<script setup>
import { ref } from 'vue'

import { VueFinalModal } from 'vue-final-modal'

const AlphabetPattern = ref({
  show: false
})
const MainPattern = ref({
  show: false
})
</script>

<template>
  <main class="Content">
    <Head>
      <Title>#Framed in Belarus / Step 2 — Preparation</Title>
      <Meta name="description" content="First step"/>
    </Head>
    <div class="Title">
      <div class="content">
        <h1>
          <span class="subtitle">Step 2 <span class="visually-hidden">— </span></span>Preparation
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
          to="/Embroidery/Step1"
          class="navStep navStep_done">
          <span class="navStep-number"><img src="../../../assets/media/img/checkmark.svg" alt="Performed" class="navStep_done-img"></span>
          <span class="navStep-title">Your Hero</span>
        </nuxt-link>
        <div class="navStep_arrow"></div>
        <div class="navStep navStep_current">
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

      <section class="Step2">
        <div class="pattern">
          <img src="../../../assets/media/img/defaultPattern.png" alt="Your pattern" class="pattern-image">
          <div class="pattern-buttons">
            <button class="pattern-button pattern-button_look" @click="MainPattern.show = true"><!--
            --><span class="pattern-button-text">See full image</span><!--
            --></button>
            <a download href="../../../assets/media/img/defaultPattern.png" class="pattern-button pattern-button_download" id="btnDownloadMainPattern"><!--
            --><span class="pattern-button-text">Download pattern</span><!--
            --></a>
          </div>
        </div>

        <input type="checkbox" class="visually-hidden" id="HeroHidden">
        <article class="Hero">
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

        <article class="manual">
          <div class="manual-part">
            <h2 class="title">What to buy?</h2>
            <ul>
              <li><strong class="b">Fabric color</strong>: white/natural (canvas or fabric with #weave)</li>
              <li><strong class="b">Thread color</strong>: any shades of red / color combinations are possible at your discretion.</li>
            </ul>
          </div>
          <div class="manual-part">
            <h2 class="title">How big does my embroidery have to be?</h2>
            <p>Choose any canvases that you feel most comfortable working with. The size of the embroidery will depend on that image. Each job will be a little different in format - that's ok, we take this into account.</p>
          </div>
          <div class="manual-part">
            <h2 class="title">How much fabric do I buy?</h2>
            <p>You can use any fabric with a cross weave, or buy a special fabric for embroidery - Aida. To accurately determine the size of the fabric, you need to count 145 cells on the canvas. However, counting so many cells is too long and complicated, so we suggest counting 10 cells, measuring the distance with a ruler and multiplying by 14,5. To the result add about 5 cm on each side - this will be your final size.</p>
            <p>The fabric for the embroidery is called Aida. It comes in a different raster - the number behind the word Aida determines how many crosses fit in one centimetre. </p>
            <p>The smaller the number - the larger the cross. Usually it is sold in metres of 140 cm width.</p>
            <p>We've calculated in advance how much Aida fabric you might need in different widths - see the size chart:</p>
          </div>
          <table class="sizeChart">
            <thead>
              <tr>
                <td>Number Aida</td>
                <td>Size of the embroidery</td>
                <td>Seam allowances</td>
                <td>Final fabric size</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Aida 3</td>
                <td>48,3 х 48,3 cm</td>
                <td>+/- 5 cm on each side</td>
                <td>57 x 57 cm</td>
              </tr>
              <tr>
                <td>Aida 4</td>
                <td>36,25 x 36,25 cm</td>
                <td>+/- 5 cm on each side</td>
                <td>45 x 45 cm</td>
              </tr>
              <tr>
                <td>Aida 5</td>
                <td>29 х 29 cm</td>
                <td>+/- 5 cm on each side</td>
                <td>37 x 37 cm</td>
              </tr>
              <tr>
                <td>Aida 6 </td>
                <td>24,2 х 24,2 cm</td>
                <td>+/- 5 cm on each side</td>
                <td>35 x 35 cm</td>
              </tr>
              <tr>
                <td>Aida 7</td>
                <td>20,7 х 20,7 cm</td>
                <td>+/- 5 cm on each side</td>
                <td>30 x 30 cm</td>
              </tr>
              <tr>
                <td>Aida 8</td>
                <td>18,1 х 18,1 cm</td>
                <td>+/- 5 cm on each side</td>
                <td>27 x 27 cm</td>
              </tr>
            </tbody>
          </table>
          <div class="manual-part">
            <h2 class="title">And a hoop?</h2>
            <p>You don't need a hoop for this type of embroidery, but if it makes you feel more comfortable, use one!</p>
          </div>
          <div class="manual-part">
            <h2 class="title">How to embroider?</h2>
            <p>We suggest that you start in the middle of your embroidery. Fold the fabric in half twice - this is how you will find the centre of the fabric. The centre is also marked on the diagram. This is your starting point. Count off the number of empty cells from the centre to the beginning of the motif - this is usually the foot  of the schematic man. Do the same on the fabric.</p>
            <p>Continue the work, counting the empty and filled cells. Follow the scheme. There is already a counted number of crosses in the most complicated places.</p>
            <p>Watch the informative <b class="b">video lesson</b>. </p>
          </div>          
          <iframe width="100%" height="456" src="https://www.youtube.com/embed/O7FEv4ZVdm8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <div class="subscription">
            <div class="subscription-content">
              <h2 class="title">Work subscription</h2>
              <p>Instead of the "YOUR NAME, CITY, YEAR" line, sign the final embroidery with your name or pseudonym. If you worked on the embroidery collectively, have everyone embroider their name/pseudonym. We enclose a Latin alphabet from which you will make up your signature. You can come up with your own font. It would be great if you could also embroider the place you are from, the date, or any other text. If you think your work should be accentuated by decorations, add them.</p>
              <p class="b">Please don't be afraid to make mistakes — the embroidery does not have to be perfect, let it be ORIGINAL, be YOURSELF!</p>
            </div>
            <div class="subscription-pattern">
              <img src="../../../assets/media/img/AlphabetPattern_preview.png" alt="Alphabet embroidery pattern" class="pattern-image">
              <div class="pattern-buttons">
                <button class="pattern-button pattern-button_look" @click="AlphabetPattern.show = true"><!--
                --><span class="pattern-button-text">See full image</span><!--
                --></button>
                <a download href="../../../assets/media/img/AlphabetPattern_en.jpg" class="pattern-button pattern-button_download" id="btnDownloadAlphabetPattern"><!--
                --><span class="pattern-button-text">Download pattern</span><!--
                --></a>
              </div>
            </div>
          </div>
          
        </article>
        <div class="buttons">
          <nuxt-link to="/Embroidery/Step1" class="button">Previous step</nuxt-link>
          <button class="button bg_black" id="save">Next step</button>
        </div>
      </section>
    </div>
  </main>

  <vue-final-modal
      v-model="MainPattern.show"
      @click-outside="MainPattern.show = false"
      :classes="`modal1`"
    >
    <div class="modal-header">     
      <button
        @click="MainPattern.show = false"
        class="modal-close"
        >
        <img src="../../../assets/media/img/close.svg" alt="Close">
      </button>
    </div>
    <img src="../../../assets/media/img/defaultPattern.png" alt="Your embroidery pattern">
  </vue-final-modal>

  <vue-final-modal
      v-model="AlphabetPattern.show"
      @click-outside="AlphabetPattern.show = false"
      :classes="`modal1`"
    >
    <div class="modal-header">      
      <button
        @click="AlphabetPattern.show = false"
        class="modal-close"
        >
        <img src="../../assets/media/img/close.svg" alt="Close">
      </button>
    </div>
    <img src="../../../assets/media/img/AlphabetPattern_en.jpg" alt="Alphabet embroidery pattern">
  </vue-final-modal>
</template>

<style src="../Steps.scss" lang="scss" scoped></style>
<style src="./Step2.scss" lang="scss" scoped></style>

<script>
//  const btnSave = document.querySelector('#save');
//  btnSave.onclick = function(){
//  send request by server 'Save and go to Next step'
// }

</script>