<script setup lang="ts">
//  const inputs = document.querySelectorAll('.choosePackageFrom input');
//  const instructions = document.querySelectorAll('.instruction.defaultNone').Array();
//  let number = 0;
//  for ( input in inputs ) {
//    input.onclick = function() {
//
//    }
//  }
//  function chooseInstruction(number){
//    for (instruction in instructions) {
//      if( !instruction.classList.contains('defaultNone') ) {
//        instruction.classList.add('defaultNone');
//      }
//      find all inputs in instruction and delete them attribute "required" // input.required = false;
//    }
//    instructions[number].classList.remove('defaultNone');
//      find all inputs in instruction[number] and add them attribute "required" // input.required = true;
//  }


//  const btnSave = document.querySelector('#save');
//  btnSave.onclick = function(){
//    if ( (.choosePackageFrom input.checked) == false ) {
//    (.choosePackageFrom input).classList.add('mistake');  for all inputs!
//    (.choosePackageFrom .mistake).classList.remove('defaultNone');
//  } else if ( #choosePackageFromEU.checked )


//  {
//    send request by server 'Save and go to Next step'
//  }
//  }
</script>

<template>
  <main class="Content">
    <Head>
      <Title>#Framed in Belarus / Step 6 — Shipping</Title>
      <Meta name="description" content="First step"/>
    </Head>
    <div class="Title">
      <div class="content">
        <h1>
          <span class="subtitle">Step 6 <span class="visually-hidden">— </span></span>Shipping
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
        <nuxt-link
          to="/Embroidery/Step2"
          class="navStep navStep_done">
          <span class="navStep-number"><img src="../../../assets/media/img/checkmark.svg" alt="Performed" class="navStep_done-img"></span>
          <span class="navStep-title">Preparation</span>
        </nuxt-link>
        <div class="navStep_arrow"></div>
        <nuxt-link
          to="/Embroidery/Step3"
          class="navStep navStep_done">
          <span class="navStep-number"><img src="../../../assets/media/img/checkmark.svg" alt="Performed" class="navStep_done-img"></span>
          <span class="navStep-title">Support</span>
        </nuxt-link>
        <div class="navStep_arrow"></div>
        <nuxt-link
          to="/Embroidery/Step4"
          class="navStep navStep_done">
          <span class="navStep-number"><img src="../../../assets/media/img/checkmark.svg" alt="Performed" class="navStep_done-img"></span>
          <span class="navStep-title">Photo</span>
        </nuxt-link>
        <div class="navStep_arrow"></div>
        <nuxt-link
          to="/Embroidery/Step5"
          class="navStep navStep_done">
          <span class="navStep-number"><img src="../../../assets/media/img/checkmark.svg" alt="Performed" class="navStep_done-img"></span>
          <span class="navStep-title">Support</span>
        </nuxt-link>
        <div class="navStep_arrow"></div>
        <div class="navStep navStep_current">
          <span class="navStep-number">6</span>
          <span class="navStep-title">Shipping</span>
        </div>
        <div class="navStep_arrow"></div>
        <div class="navStep">
          <span class="navStep-number">7</span>
          <span class="navStep-title">Publication</span>
        </div>
      </section>

      <section class="Shipping">
        <div class="congratulation">
          <h2 class="title">Great job - you finished the embroidery!</h2>
          <p>Please pack it with the <strong class="b">handwritten comment</strong> (if you have it) and send it to us. We look forward to having it in our hands. Thank you for your solidarity!</p>
        </div>
        <div class="choosePackageFrom">
          <h3 class="title">Please choose where you are sending the package from:</h3>
          <label for="choosePackageFromEU" class="choosePackageFrom-option">
            <input type="radio" name="choosePackageFrom" value="eu" id="choosePackageFromEU" class="choosePackageFrom-option-input" required>
            <span class="choosePackageFrom-option-label">EU countries</span>
          </label>
          <label for="choosePackageFromNonEU" class="choosePackageFrom-option">
            <input type="radio" name="choosePackageFrom" value="nonEU" id="choosePackageFromNonEU" class="choosePackageFrom-option-input" required>
            <span class="choosePackageFrom-option-label">Non-EU countries</span>
          </label>
          <label for="choosePackageFromBelarus" class="choosePackageFrom-option">
            <input type="radio" name="choosePackageFrom" value="belarus" id="choosePackageFromBelarus" class="choosePackageFrom-option-input" required>
            <span class="choosePackageFrom-option-label">Belarus</span>
          </label>
          <label for="choosePackageFromRussia" class="choosePackageFrom-option">
            <input type="radio" name="choosePackageFrom" value="russia" id="choosePackageFromRussia" class="choosePackageFrom-option-input" required>
            <span class="choosePackageFrom-option-label">Russia</span>
          </label>
          <p class="mistake defaultNone">Please choose one option</p>
        </div>
        <div class="instruction default">
          <div class="instruction_default-content">
            <p>The instructions will appear here once you will have chosen a region of origin.</p>
          </div>
        </div>
        <div class="instruction defaultNone" id="instructionEU">
          <p class="title important">Please read this section carefully!</p>
          <p>Send your work only by <strong class="b">CUSTOMER POSTAGE</strong>! </p>
          <p>This way we will be able to track it and if it is lost, we will be able to look for it by its tracking number.</p>
          <label for="trackingEU" class="instruction-label">Please write the tracking number of your parcel here:</label>
          <input type="text" id="trackingEU" placeholder="Tracking number" class="instruction-input">
          <h2 class="title address">Address:</h2>
          <p>Amnesty International <br>
            Kodaňská 1441/46<br>
            101 00 Prague<br>
            Czech Republic
          </p>
          <p><strong class="b">Marked</strong> ART PROJECT</p>
          <p>When filling in the postal declaration, mark the package as <strong class="b">GIFT</strong>, worth <strong class="b">€20 or less</strong>. On the contents of the package, please write <strong class="b">Embroidery or Tissue</strong></p>
        </div>

        <div class="instruction defaultNone" id="instructionNonEU">
          <p class="title important">Please read this section carefully!</p>
          <p>Send your work only by <strong class="b">CUSTOMER POSTAGE</strong>! </p>
          <p>This way we will be able to track it and if it is lost, we will be able to look for it by its tracking number.</p>
          <label for="trackingEU" class="instruction-label">Please write the tracking number of your parcel here:</label>
          <input type="text" id="trackingEU" placeholder="Tracking number" class="instruction-input">
          <h2 class="title address">Address:</h2>
          <p>Rufina Bazlova<br>
            Schnirchova 15,<br>
            170 00 Prague<br>
            Czech Republic
          </p>
          <p><strong class="b">Marked</strong> ART PROJECT</p>
          <div class="part">
            <h2 class="title">IMPORTANT</h2>
            <p>When sending a parcel from a country outside the customs union of the European Union, please do the following:</p>
            <ul>
              <li>When filling in the postal declaration, mark the parcel as GIFT, worth up to 20 euros.</li>
              <li>On the content line please write Embroidery or Tissue.</li>
              <li>We will need the following information from you in order to issue the customs declaration.</li>
            </ul>
          </div>
          <label for="nameSurname" class="title instruction-label">Name Surname</label>
          <input type="text" id="nameSurname" placeholder="Name Surname" name="nameSurname" class="instruction-input instruction-input-hasNote">
          <p class="note">Please fill in Latin letters.</p>
          <label for="nameSurname" class="title instruction-label">Adress with zip code and country</label>
          <input type="text" id="nameSurname" placeholder="Address" name="nameSurname" class="instruction-input instruction-input-hasNote">
          <p class="note">Please fill in Latin letters.</p>
        </div>

        <div class="instruction defaultNone" id="instructionBelarus">
          <p class="title important">Please read this section carefully!</p>
          <p>Sending work from Belarus is always a bit of a challenge.</p>
          <p>For safety reasons, <strong class="b">we don't recommend sending embroidery through the post office</strong>. Especially now, because of the war, the Czech Republic does not work with BelPochta.</p>
          <p><strong class="b">We'll try to find out if anyone we know is going from Belarus to Europe</strong> in the near future. If you also know someone who will go and can take the embroidery,  please let us know.</p>
          <p>Please write what city you are in and leave us your Telegram or Signal. </p>
          <p>Thank you!</p>
          <label for="usernameBelarus" class="title instruction-label">Username</label>
          <input type="text" id="usernameBelarus" placeholder="Username" name="usernameBelarus" class="instruction-input">
        </div>

        <div class="instruction defaultNone" id="instructionRussia">
          <p class="title important">Please read this section carefully!</p>
          <p>At the moment, parcels can be difficult to send because of the war. The rules change frequently. Please <strong class="b">check with the post office</strong> to see if you can <strong class="b">send a parcel to the Czech Republic</strong>.</p>
          <p><strong class="b">We will try to find out if anyone we know is going to Europe soon</strong>. If you also happen to know someone who will go and be able to take the embroidery, let us know.</p>
          <p>Please write what city you are in and leave us your Telegram or Signal. </p>
          <p>Thank you!</p>
          <label for="usernameRussia" class="title instruction-label">Username</label>
          <input type="text" id="usernameRussia" placeholder="Username" name="usernameRussia" class="instruction-input">
        </div>

        <div class="buttons">
          <nuxt-link to="/Embroidery/Step6" class="button">Previous step</nuxt-link>
          <button class="button bg_black" id="save">Send and go to Next step</button>
        </div>
      </section>
    </div>
  </main>
</template>

<style src="../../../assets/style/form.scss"></style>
<style src="../Steps.scss" lang="scss" scoped></style>
<style src="./Step6.scss" lang="scss" scoped></style>
