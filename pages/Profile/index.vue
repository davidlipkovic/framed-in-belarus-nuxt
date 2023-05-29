<script setup>
import { ref } from 'vue'

definePageMeta({
  layout: "embroidery"
})

const displayEditModal = ref(false)

const user = {
  name: "Tiffany Chin",
  comment: "To support political prisoners that have been imprisoned for standing up for their rights. My family is from Hong Kong, which is currently going through a similar situation like Belarus. I am also an embroiderer myself, and by supporting this project, I feel that I'm supporting political prisoners all over the world. Speaking of political prisoners, I already have one in mind. I would like to focus on, and it is Maria Kalesnikava, who is a musician and politician from Belarus..."
}
</script>

<template>
  <main class="Content">
    <Head>
      <Title>#Framed in Belarus / User cabinet — My embroideries</Title>
      <Meta name="description" content="User cabinet — My embroideries description"/>
    </Head>
    <div class="Title">
      <h1 class="content">
        <span class="subtitle">
          {{ $t('profilePage.subTitle') }}
        </span>
        {{ $t('profilePage.title') }}
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
          <h2 class="userProfile-title">
            {{ user.name }}
          </h2>
        </div>
        <div class="userProfile-body flexColumnStart">
          <h3 class="b">
            {{ $t('profilePage.question') }}
          </h3>
          <p>
            {{ user.comment }}
          </p>
        </div>
        <div class="userProfile-buttons">
          <button 
            class="button" 
            @click="displayEditModal = true"
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
      @closeModal="displayEditModal = false"
      :displayModal="displayEditModal"
    >
      <div class="Settings content">
        <div class="Settings-header">
          <h2>
            Edit profile
          </h2>
        </div>
        <div class="Settings-body">
          <div class="Settings-item">
            <div class="Settings-item-main">
              <label for="nickname" class="Settings-item-title">
                Pseudonym / Nickname
              </label>
              <input 
                type="text" 
                value="" 
                placeholder="Your pseudonym / nickname" 
                class="Settings-item-input" 
                id="nickname" 
                name="nickname"
              >
              <p class="Settings-item-publish">
                <label for="reasonPublish">
                  Publish
                </label>
                <input type="checkbox" name="reasonPublish" id="reasonPublish" class="switcher">
              </p>
            </div>
          </div>
          <div class="Settings-item Settings-item_reason">
            <div class="Settings-item-main">
              <label for="reason" class="Settings-item-title">
                Why did you decide to participate?
              </label>
              <textarea class="Settings-item-input" id="reason" name="reason">
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
              <button 
                class="button" 
                @click="displayEditModal = false"
              >
                Cancel
              </button>
              <button class="button bg_black">
                Save
              </button>
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
