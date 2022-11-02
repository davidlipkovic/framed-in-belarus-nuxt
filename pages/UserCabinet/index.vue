<script setup>
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
        </div>
        <div class="userCard-buttons">
          <button class="button">Edit information</button>
          <button class="button">Settings</button>
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
  </main>
</template>

<style src="./UserCabinet.scss" lang="scss" scoped></style>