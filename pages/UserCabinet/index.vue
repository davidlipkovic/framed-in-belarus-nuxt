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
      <Title>#Framed in Belarus / User cabinet — My embroideries</Title>
      <Meta name="description" content="User cabinet — My embroideries description"/>
    </Head>
    <div class="Title">
      <h1 class="content">
        <span class="subtitle">User cabinet <span class="visually-hidden">— </span></span>My embroideries
      </h1>
    </div>
    <div class="content">
      <section class="userCard">
        <div class="userCard-header">
          <img src="../../assets/media/img/Avatar.svg" class="userCard-avatar" alt="Avatar">
          <label for="uploadAvatar" class="upload">
            <input type="file" name="uploadAvatar" id="uploadAvatar" class="visually-hidden">
            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg" alt="Upload icon" class="upload_icon">
              <g clip-path="url(#clip0_1248_17569)">
              <path d="M10.0016 11.4962H12.3771C14.0962 11.4962 15.5028 10.5832 15.5028 8.88314C15.5028 7.18308 13.8462 6.33665 12.5021 6.27007C12.2243 3.61137 10.2829 1.99414 8.00115 1.99414C5.84443 1.99414 4.45537 3.42539 4.00027 4.84476C2.12487 5.02293 0.499512 6.21631 0.499512 8.17049C0.499512 10.1247 2.18738 11.4962 4.25033 11.4962H6.00071" stroke-width="1.00189" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M10.0024 7.99486L8.0017 5.99414L6.00098 7.99486" stroke-width="1.00189" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M8.00195 14.0089V6.49414" stroke-width="1.00189" stroke-linecap="round" stroke-linejoin="round"/>
              </g>
              <defs>
              <clipPath id="clip0_1248_17569">
              <rect width="16.0035" height="16.0035" fill="white"/>
              </clipPath>
              </defs>
            </svg><!--
            --><span clacc="upload_text">Upload foto</span>
          </label>
          <h2 class="userCard-title">Alexander Ivanow</h2>
        </div>
        <div class="userCard-body">
          <p class="userCard-body-item">
            <span class="b">Pseudonym:</span>
            Doctor Haus
          </p>
          <p class="userCard-body-item">
            <span class="b">Country, city:</span>
            Belarus, Minsk
          </p>
          <p class="userCard-body-item">
            <span class="b">Year of Birth:</span>
            1989
          </p>
          <p class="userCard-body-item">
            <span class="b">Instagram</span>
            @instagram
          </p>
          <p class="userCard-body-item">
            <span class="b">Facebook</span>
            namesuranma
          </p>
          <p class="userCard-body-item_longText">
            <span class="b">Why did you decide to participate?</span>
            Из Беларуси, была репрессирована, в  данный момент в эмиграции. Семья...
          </p>
        </div>
        <div class="userCard-buttons">
          <button class="button" @click="editModal.show = true">Edit profile</button>
        </div>
      </section>
      <section class="embroideryCards">
        <nuxt-link
          to="/Embroidery/Step1"
          class="embroideryCard New">
          <div class="embroideryCard-content">
            <img src="../../assets/media/img/btnPlus.svg" alt="+" class="embroideryCard-img Create">
            Create new embroidery
          </div>
        </nuxt-link>
        <button disabled
          to="/Embroidery/Step1"
          class="embroideryCard New">
          <div class="embroideryCard-content">
            <img src="../../assets/media/img/btnPlus.svg" alt="+" class="embroideryCard-img Create">
            Create new embroidery
          </div>
        </button>
        <nuxt-link 
          to="/Embroidery/CurrentStep"
          class="embroideryCard">
          <div class="embroideryCard-content">
            <img src="../../assets/media/img/defaultHero.svg" alt="Name Surname" class="embroideryCard-img">
            Name Surname
            <span class="embroideryCard-status embroideryCard-status_progress">
              In progress
            </span>
          </div>
        </nuxt-link>
        <nuxt-link
        to="/Gallery/ThisCase"
          class="embroideryCard">
          <div class="embroideryCard-content">
            <img src="../../assets/media/img/defaultHero.svg" alt="Name Surname" class="embroideryCard-img">
            Name Surname
            <span class="embroideryCard-status embroideryCard-status_finish">
              Completed
            </span>
          </div>
        </nuxt-link>
      </section>
    </div>

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
          <img src="../../assets/media/img/close.svg" alt="Close">
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

  </main>
</template>

<style src="./UserCabinet.scss" lang="scss" scoped></style>
<style src="../../assets/style/form.scss" lang="scss" scoped></style>
<style src="./Settings.scss" lang="scss" scoped></style>
