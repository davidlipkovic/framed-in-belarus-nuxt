<template>
  <main class="Content">
    <Head>
      <Title>#Framed in Belarus / Step 5 — Comment</Title>
      <Meta name="description" content="First step"/>
    </Head>
    <div class="Title">
      <div class="content">
        <h1>
          <span class="subtitle">Step 5 <span class="visually-hidden">— </span></span>Comment
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
          to="/UserCabinet/Step2"
          class="navStep navStep_done">
          <span class="navStep-number"><img src="../../../assets/media/img/checkmark.svg" alt="Performed" class="navStep_done-img"></span>
          <span class="navStep-title">Preparation</span>
        </nuxt-link>
        <div class="navStep_arrow"></div>
        <nuxt-link
          to="/UserCabinet/Step3"
          class="navStep navStep_done">
          <span class="navStep-number"><img src="../../../assets/media/img/checkmark.svg" alt="Performed" class="navStep_done-img"></span>
          <span class="navStep-title">Support</span>
        </nuxt-link>
        <div class="navStep_arrow"></div>
        <nuxt-link
          to="/UserCabinet/Step4"
          class="navStep navStep_done">
          <span class="navStep-number"><img src="../../../assets/media/img/checkmark.svg" alt="Performed" class="navStep_done-img"></span>
          <span class="navStep-title">Photo</span>
        </nuxt-link>
        <div class="navStep_arrow"></div>
        <div class="navStep navStep_current">
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

      <section class="textWidth">    

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
        <div class="part">
          <h2 class="title">Write a short comment about your experience of embroidering a political prisoner</h2>
          <p>It could be interesting stories that happened to you in the context of the project or facts that you learned during this time about your hero, about Belarus, etc. It could be quotes from your correspondence with the political prisoner or your thoughts that arise during the work. Here you can also write wishes for your hero, his/her family, to all Belarusians or our project. This can take the form of an open letter.</p>
          <p>We would like to know if the project has left any resonance in you? Did participating in the project bring you any new experiences? Your answer will help us improve the project.</p>
          <p>If possible, please write the text in English. If not, please write it in your own language. </p>
          <p>It would be wonderful if you could write the text both by hand and in a digital version. Handwritten texts look better when installed with embroidery, but digital text is much easier to translate into other languages.</p>
        </div>
        <div class="part Comment">
          <div class="Comment-header">
            <label for="comment" class="title">Comment</label>
            <output id="lettersLeft">2300</output>
          </div>
          <div class="Comment-content">
            <textarea name="comment" id="comment" placeholder="Type a comment" class=""></textarea>
            <p class="note">If possible, please write the text in English. If not, please write it in your own language. </p>
            <p class="mistake defaultNone">Please add a comment or a picture</p>
          </div>
        </div>
        <div class="part Photo">
          <h3 class="title">Upload my picture of a handwritten comment</h3>
          <div class="uploadFiles" id="uploadFilesArea">
            <label class="uploadFiles-descript" for="uploadFiles">
              <span class="line">Drag and Drop files here</span>
              <span class="line">or</span>
              <span class="line b">
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" alt="+" class="uploadFiles-descript-icon">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M0.578969 0.762563C1.26239 0.0791456 2.37043 0.0791456 3.05384 0.762563L12.3164 10.0251L21.579 0.762563C22.2624 0.0791456 23.3704 0.0791456 24.0538 0.762563C24.7373 1.44598 24.7373 2.55402 24.0538 3.23744L14.7913 12.5L24.0538 21.7626C24.7373 22.446 24.7373 23.554 24.0538 24.2374C23.3704 24.9209 22.2624 24.9209 21.579 24.2374L12.3164 14.9749L3.05384 24.2374C2.37043 24.9209 1.26239 24.9209 0.578969 24.2374C-0.104448 23.554 -0.104448 22.446 0.578969 21.7626L9.84153 12.5L0.578969 3.23744C-0.104448 2.55402 -0.104448 1.44598 0.578969 0.762563Z" fill="#4F4F4F"/>
                </svg>
                Browse files
              </span>
            </label>
            <input type="file" multiple="multiple" id="uploadFiles" class="visually-hidden">
          </div>

          <div class="photos">
            <div class="photo">
              <img src="../../../assets/media/img/photoEmbroidery-example.jpg" alt="Photo of your embroidery" class="photo-img">
              <button class="photo-btnDelete">
                <img src="../../../assets/media/img/close-circle.svg" alt="Delete" class="photo-btnDelete-img">
              </button>
            </div>
            <div class="photo">
              <img src="../../../assets/media/img/photoEmbroidery-example.jpg" alt="Photo of your embroidery" class="photo-img">
              <button class="photo-btnDelete">
                <img src="../../../assets/media/img/close-circle.svg" alt="Delete" class="photo-btnDelete-img">
              </button>
            </div>
          </div>
        </div>

        <div class="part publishComment">
          <p class="b">This comment will be published in the web gallery and may be used in print and online publications, exhibitions, etc. in the context of the project presentations</p>
          <label for="publishAgree" class="publishComment-item">
            <input type="radio" name="publish" id="publishAgree" value="agree" class="publishComment-item-input" required>
            <span class="publishComment-item-label">I agree, I want my voice to be heard</span>
          </label>
          <label for="publishDisagree" class="publishComment-item">
            <input type="radio" name="publish" id="publishDisagree" value="disagree" class="publishComment-item-input" required>
            <span class="publishComment-item-label">I disagree, please keep my comment for internal project needs only</span>
          </label>
          <label for="publishCant" class="publishComment-item">
            <input type="radio" name="publish" id="publishCant" value="cant" class="publishComment-item-input" required>
            <span class="publishComment-item-label">I can not write a comment</span>
          </label>
          <p class="mistake defaultNone">Please choose one option</p>
        </div>

        <div class="buttons">
          <nuxt-link to="/UserCabinet/Step4" class="button">Previous step</nuxt-link>
          <button class="button bg_black" id="save">Save and go to Next step</button>
        </div>
      </section>
    </div>
  </main>

  

  
</template>
<style src="../../../assets/style/form.scss"></style>
<style src="../Steps.scss" lang="scss" scoped></style>
<style src="../Step4/Step4.scss" lang="scss" scoped></style>
<style src="./Step5.scss" lang="scss" scoped></style>

<script>
// #uploadFilesArea support drag&drop files to input[type=file]#uploadFiles

// if ( user_upload_images ) {
//  images upload to server automatically;
//  server will send answer;
//  const divPhotos = document.querySelector('.divPhotos');
//  for( IMG in answer) {
//    let div = document.createElement("div");
//    div.classList.add('photo');
//    div.innerHTML(`
//      <img src="$IMG.src" alt="Photo of your embroidery" class="photo-img">
//      <button class="photo-btnDelete">
//              <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" alt="Delete" class="photo-btnDelete-img">
//                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.578969 0.762563C1.26239 0.0791456 2.37043 0.0791456 3.05384 0.762563L12.3164 10.0251L21.579 0.762563C22.2624 0.0791456 23.3704 0.0791456 24.0538 0.762563C24.7373 1.44598 24.7373 2.55402 24.0538 3.23744L14.7913 12.5L24.0538 21.7626C24.7373 22.446 24.7373 23.554 24.0538 24.2374C23.3704 24.9209 22.2624 24.9209 21.579 24.2374L12.3164 14.9749L3.05384 24.2374C2.37043 24.9209 1.26239 24.9209 0.578969 24.2374C-0.104448 23.554 -0.104448 22.446 0.578969 21.7626L9.84153 12.5L0.578969 3.23744C-0.104448 2.55402 -0.104448 1.44598 0.578969 0.762563Z" fill="#4F4F4F"/>
//              </svg>
//            </button>
//    `);
//    divPhotos.appendChild(div);
//    }
//  }

// (.photo-btnDelete).click(){
//   send request by server 'Delete this picture'
// }

//  (#comment).oninput() {
//    let count = count the number of entered characters;
//    count = 2300 - count;
//    (#lettersLeft).innerText = count;
//  }

// (#save).click(){
//    if ( #comment.value == null || .photos.child == null) {
  //    (.Comment .note).classList.add('defaultNone');
  //    (.Comment .mistake).classList.remove('defaultNone');
  //    } else if ( (.publishComment input.checked) == false ) {
  //    (.publishComment input).classList.add('mistake');  for all inputs!
  //    (.publishComment .mistake).classList.remove('defaultNone');
  //  } else {
  //    send request by server 'Save and go to Next step'
  //  }
//  }

</script>