<script setup>
import { ref } from 'vue'

import { VueFinalModal } from 'vue-final-modal'

const editModal = ref({
  show: false
})
</script>

<template>
  <main class="Content">
    <Head>
      <Title>#Framed in Belarus / Step 7 — Publication</Title>
      <Meta name="description" content="First step"/>
    </Head>
    <div class="Title">
      <div class="content">
        <h1>
          <span class="subtitle">Step 7 <span class="visually-hidden">— </span></span>Publication
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
        <nuxt-link
          to="/Embroidery/Step6"
          class="navStep navStep_done">
          <span class="navStep-number"><img src="../../../assets/media/img/checkmark.svg" alt="Performed" class="navStep_done-img"></span>
          <span class="navStep-title">Shipping</span>
        </nuxt-link>
        <div class="navStep_arrow"></div>
        <div class="navStep navStep_current">
          <span class="navStep-number">7</span>
          <span class="navStep-title">Publication</span>
        </div>
      </section>

      <section class="Publication Waiting textWidth">
        <div class="Publication-content">
          <h2 class="title">Thank you! We'll be sure to get back to you as soon as we receive your embroidery</h2>
          <p>In meanwhile you can add or correct information about yourself in your personal profile.</p>
          <p>A short text about you will be published in our gallery with your embroidery. If you want to hide or add something, such as social networks, please do it in advance.</p>
        </div>
        <div class="buttons">
          <button class="button" @click="editModal.show = true">Edit my profile</button>
        </div>
      </section>

      <section class="Publication Done textWidth">
        <div class="Publication-content">
          <h2 class="title">Good news!! We received your work</h2>
          <p>Everything arrived without damage. Such a beautiful embroidery - thank you so much! We always look forward to and enjoy opening the package. And each work is always very original.</p>
          <p>The process of verification and publishing your work in our online gallery can take anywhere from a few days to a few weeks. Thanks for your understanding! </p>
          <p>When the publication is ready the icon with the embroidered hero in your personal profile will get a green mark. You will be able to check your hero’s page in the gallery by clicking that icon. </p>
          <p>Thank you again for your solidarity and participation.</p>
          <p>We wish you all the best!!</p>
          <p>If you still have time and energy, you can embroider a new political prisoner.</p>
        </div>
        <div class="buttons">
          <nuxt-link
            to="/Embroidery/Step1"
            class="button bg_black">
            Choose a new hero
          </nuxt-link>
        </div>
      </section>
    </div>
  </main>

  
  <vue-final-modal
      v-model="editModal.show"
      @click-outside="editModal.show = false"
    >
    <div class="Settings content">
      <div class="Settings-header">
        <h2>
          Edit profile
        </h2>
        <button
          @click="editModal.show = false"
          class="Settings-close"
        >
          <img src="../../../assets/media/img/close.svg" alt="Close">
        </button>
      </div>
      <div class="Settings-body">
        <div class="Settings-item">
          <div class="Settings-item-main">
            <label for="name" class="Settings-item-title">
              Name and Surname
            </label>
            <input type="text" value="Ivan Fedorov" class="Settings-item-input" id="name" name="name">
          </div>
          <p class="Settings-item-publish">
            <label for="namePublish">
              Publish
            </label>
            <input type="checkbox" name="namePublish" id="namePublish" class="switcher">
          </p>
        </div>

        <div class="Settings-item">
          <div class="Settings-item-main">
            <label for="nickname" class="Settings-item-title">
              Pseudonym / Nickname 
            </label>
            <input type="text" value="" placeholder="Your pseudonym / nickname" class="Settings-item-input" id="nickname" name="nickname">
          </div>
          <p class="Settings-item-publish">
            <label for="nicknamePublish">
              Publish
            </label>
            <input type="checkbox" name="nicknamePublish" id="nicknamePublish" class="switcher">
          </p>
        </div>

        <div class="Settings-item">
          <div class="Settings-item-main">
            <label for="birth" class="Settings-item-title">
              Year of birth
            </label>
            <input type="number" value="1989" class="Settings-item-input" id="birth" name="birth">
          </div>
          <p class="Settings-item-publish">
            <label for="birthPublish">
              Publish
            </label>
            <input type="checkbox" name="birthPublish" id="birthPublish" class="switcher">
          </p>
        </div>

        <div class="Settings-item">
          <div class="Settings-item-main">
            <label for="place" class="Settings-item-title">
              Country / City
            </label>
            <input type="text" value="Poland, Warsaw" class="Settings-item-input" id="place" name="place">
          </div>
          <p class="Settings-item-publish">
            <label for="placePublish">
              Publish
            </label>
            <input type="checkbox" name="placePublish" id="placePublish" class="switcher">
          </p>
        </div>

        <div class="Settings-item">
          <div class="Settings-item-main">
            <label for="instagramNick" class="Settings-item-title">
              Instagram
            </label>
            <input type="text" value="" placeholder="Your @instagram nickname" class="Settings-item-input" id="instagramNick" name="instagramNick">
          </div>
          <p class="Settings-item-publish">
            <label for="instagramNickPublish">
              Publish
            </label>
            <input type="checkbox" name="instagramNickPublish" id="instagramNickPublish" class="switcher">
          </p>
        </div>

        <div class="Settings-item">
          <div class="Settings-item-main">
            <label for="facebookNick" class="Settings-item-title">
              Facebook
            </label>
            <input type="text" value="" placeholder="Your @facebook nickname" class="Settings-item-input" id="facebookNick" name="facebookNick">
          </div>
          <p class="Settings-item-publish">
            <label for="facebookNickPublish">
              Publish
            </label>
            <input type="checkbox" name="facebookNickPublish" id="facebookNickPublish" class="switcher">
          </p>
        </div>

        <div class="Settings-item Settings-item_reason">
          <div class="Settings-item-main">
            <label for="reason" class="Settings-item-title">
              Why did you decide to participate?
            </label>
            <textarea class="Settings-item-input" id="reason" name="reason">Из Беларуси, была репрессирована, в данный момент в эмиграции. Семья осталась дома, поскорее хочу вернуться. Для этого необходимо завершить начатое дело - свершение режима диктатуры, прекращение насилия, восстановление законности  в Беларуси. Единственное доступное оружие беларусов в эмиграции против режима  - придание огласке преступлений и привлечение</textarea>
          </div>
          <p class="Settings-item-publish">
            <label for="reasonPublish">
              Publish
            </label>
            <input type="checkbox" name="reasonPublish" id="reasonPublish" class="switcher">
          </p>
        </div>

        <div class="Settings-item Settings-item_buttons">
          <div class="Settings-item-main">
            <button class="button" @click="editModal.show = false">Cancel</button>
            <button class="button bg_black">Save</button>
          </div>
        </div>
      </div>      
    </div>
    </vue-final-modal>

</template>
<style src="../Steps.scss" lang="scss" scoped></style>
<style src="./Step7.scss" lang="scss" scoped></style>

<style src="../../../assets/style/form.scss" lang="scss" scoped></style>
<style src="../../UserCabinet/Settings.scss" lang="scss" scoped></style>