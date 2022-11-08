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
      <Title>User cabinet — My embroideries</Title>
      <Meta name="description" content="About us description"/>
    </Head>
    <div class="Title">
      <h1 class="content">
        <span class="subtitle">User cabinet <span class="visually-hidden">— </span></span>My embroideries
      </h1>
    </div>
    <div class="content">
      <section class="userCard">
        <div class="userCard-header">
          <img src="../../assets/media/img/Avatar.png" class="userCard-avatar" alt="Avatar">
          <h2 class="userCard-title">Alexander Ivanow</h2>
        </div>
        <div class="userCard-body">
          <p class="userCard-body-item">
            <span class="b">Country, city:</span>
            Belarus, Minsk
          </p>
          <p class="userCard-body-item">
            <span class="b">Year of Birth:</span>
            1989
          </p>
          <p class="userCard-body-item">
            <span class="b">@instagram</span>
            @instagram
          </p>
          <p class="userCard-body-item">
            <span class="b">@facebook</span>
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
      <div class="embroideryCards">
        <button class="embroideryCard New">
          <div class="embroideryCard-content">
            <img src="../../assets/media/img/btnPlus.svg" alt="+" class="embroideryCard-img Create">
            Create new embroidery
          </div>
        </button>
        <button class="embroideryCard">
          <div class="embroideryCard-content">
            <img src="../../assets/media/img/photoDefault.jpg" alt="Name Surname" class="embroideryCard-img">
            Name Surname
            <span class="embroideryCard-status embroideryCard-status_progress">
              In progress
            </span>
          </div>
        </button>
        <button class="embroideryCard">
          <div class="embroideryCard-content">
            <img src="../../assets/media/img/photoDefault.jpg" alt="Name Surname" class="embroideryCard-img">
            Name Surname
            <span class="embroideryCard-status embroideryCard-status_finish">
              Completed
            </span>
          </div>
        </button>
      </div>
    </div>

    <div name="Settings">
      <vue-final-modal
        v-model="editModal.show"
        @click-outside="editModal.show = false"
      >
      <div class="Modal-header">
        <h2>
          Edit profile
        </h2>
        <button
          @click="editModal.show = false"
          class="Modal-close"
        >
          <img src="../../assets/media/img/close.svg" alt="X">
        </button>
      </div>
        <div class="Modal-body">
        <div class="Settings-item">
          <label for="name" class="Settings-item-title">
            Name and Surname
          </label>
          <input type="text" placeholder="Ivan Fedorov" class="Settings-item-input" id="name" name="name">
          <p class="Settings-item-publish">
            <label for="namePublish">
              Publish
            </label>
            <input type="radio" name="namePublish" id="namePublish" value="false">
            <input type="radio" name="namePublish" id="namePublishTrue" value="true">
          </p>
        </div>
      </div>
      </vue-final-modal>
    </div>
  </main>
</template>

<style src="./UserCabinet.scss" lang="scss" scoped></style>
