<script setup>
import { ref } from 'vue'

definePageMeta({
  layout: "embroidery"
})

const editModal = ref(false)
</script>

<template>
  <main class="Content">
    <Head>
      <Title>#Framed in Belarus / User cabinet — My embroideries</Title>
      <Meta name="description" content="User cabinet — My embroideries description"/>
    </Head>
    <div class="Title">
      <h1 class="content">
        <span class="subtitle">Profile <span class="visually-hidden">— </span></span>My embroideries
      </h1>
    </div>
    <div class="content">
      <section class="userProfile flexColumnCenter">
        <div class="userProfile-header flexColumnCenter">
          <img 
            src="../../assets/media/img/profileSymbolFramed.svg" 
            class="userProfile-avatar" 
            alt="Avatar"
          >
          <h2 class="userProfile-title">Tiffany Chin</h2>
        </div>
        <div class="userProfile-body flexColumnStart">
          <h3 class="b">
            Why did you decide to participate?
          </h3>
          <p>
            To support political prisoners that have been imprisoned for standing up for their rights. My family is from Hong Kong, which is currently going through a similar situation like Belarus. I am also an embroiderer myself, and by supporting this project, I feel that I'm supporting political prisoners all over the world. Speaking of political prisoners, I already have one in mind. I would like to focus on, and it is Maria Kalesnikava, who is a musician and politician from Belarus...
          </p>
        </div>
        <div class="userProfile-buttons">
          <button 
            class="button" 
            @click="editModal = true"
          >
            Edit profile
          </button>
        </div>
      </section>
      <section class="embroideryCards">
        <RegistrationEmbroideryCard
          :newEmbroidery="true"
        />
        <RegistrationEmbroideryCard
          :newEmbroidery="false"
          :status="{type: 'inProgress', message: 'In Progress  Step 3'}"
        />
        <RegistrationEmbroideryCard
          :newEmbroidery="false"
          :status="{type: 'published', message: 'Published'}"
        />
      </section>
    </div>

    <GeneralModal
      :displayModal="editModal"
    >
    <div class="Settings content">
      <div class="Settings-header">
        <h2>
          Edit profile
        </h2>
      </div>
      <div class="Settings-body">
        <div class="Settings-item Settings-item-name">
          <div class="">
            <div class="Settings-item-main">
              <label for="name" class="Settings-item-title">
                Name
              </label>
              <input type="text" value="Tiffany" class="Settings-item-input" id="name" name="name">
            </div>
            <p class="Settings-item-publish">
              <label for="namePublish">
                Publish
              </label>
              <input type="checkbox" name="namePublish" id="namePublish" class="switcher">
            </p>
          </div>
          <div>
            <div class="Settings-item-main">
              <label for="name" class="Settings-item-title">
                Surname
              </label>
              <input type="text" value="Chin" class="Settings-item-input" id="name" name="name">
            </div>
            <p class="Settings-item-publish">
              <label for="namePublish">
                Publish
              </label>
              <input type="checkbox" name="namePublish" id="namePublish" class="switcher">
            </p>
          </div>
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
            <input type="number" value="" class="Settings-item-input" id="birth" name="birth">
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
            <input type="text" value="USA" class="Settings-item-input" id="place" name="place">
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
            <input type="text" value="@tuffytiffchin" placeholder="Your @instagram nickname" class="Settings-item-input" id="instagramNick" name="instagramNick">
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
            <textarea class="Settings-item-input" id="reason" name="reason">To support political prisoners that have been imprisoned for standing up for their rights. My family is from Hong Kong, which is currently going through a similar situation like Belarus. I am also an embroiderer myself, and by supporting this project, I feel that I'm supporting political prisoners all over the world. Speaking of political prisoners, I already have one in mind. I would like to focus on, and it is Maria Kalesnikava, who is a musician and politician from Belarus. I first knew about Maria from Rufina's IG stories regarding Maria's sentencing. Ever since I saw the short video when she was on trial, forming a heart sign while handcuffed, I became more curious about her and her story. Her story also reminded me of one of my favorite politicians in Hong Kong, where she is currently detained for "sedition" under the National Security Law.
            </textarea>
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
            <button class="button" @click="editModal = false">Cancel</button>
            <button class="button bg_black">Save</button>
          </div>
        </div>
      </div>
    </div>
    </GeneralModal>
  </main>
</template>

<style src="./Profile.scss" lang="scss" scoped></style>
<style src="../../assets/style/form.scss" lang="scss" scoped></style>
<style src="./Settings.scss" lang="scss" scoped></style>
