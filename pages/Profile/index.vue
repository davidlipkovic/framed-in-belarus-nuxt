<script setup>
import { ref } from 'vue'

definePageMeta({
  layout: "embroidery"
})

const displayEditModal = ref(false)
const displayDeleteModal = ref(false)

const user = {
  name: "Tiffany Chin",
  comment: "To support political prisoners that have been imprisoned for standing up for their rights. My family is from Hong Kong, which is currently going through a similar situation like Belarus. I am also an embroiderer myself, and by supporting this project, I feel that I'm supporting political prisoners all over the world. Speaking of political prisoners, I already have one in mind. I would like to focus on, and it is Maria Kalesnikava, who is a musician and politician from Belarus...",
  email: 'name@gmail.com',
  country: 'Poland',
  instagram: '@insta',
  language: 'English'
}

const commentTruncated = computed(() => {
  return user.comment.slice(0, 220) + '...'
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
        <span class="subtitle">
          {{ $t('profilePage.subTitle') }}
        </span>
        <span>
          &nbsp;&nbsp;
        </span>
        {{ $t('profilePage.title') }}
      </h1>
    </div>
    <div class="content profileContent">
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
          <div class="userInfoWrapper">
            <p class="flexRowStart">
              <span>
                {{ $t('placeholders.username') }}
              </span>
              <span class="b1">
                {{ user.name }}
              </span>
            </p>
            <p class="flexRowStart">
              <span>
                {{ $t('placeholders.email') }}
              </span>
              <span class="b1">
                {{ user.email }}
              </span>
            </p>
            <p class="flexRowStart">
              <span>
                {{ $t('placeholders.country') }}
              </span>
              <span class="b1">
                {{ user.country }}
              </span>
            </p>
            <p class="flexRowStart">
              <span>
                {{ $t('placeholders.instagram') }}
              </span>
              <span class="b1">
                {{ user.instagram }}
              </span>
            </p>
            <p class="flexRowStart">
              <span>
                {{ $t('placeholders.communicationLanguage') }}
              </span>
              <span class="b1">
                {{ user.language }}
              </span>
            </p>
          </div>
          <h3 class="b">
            {{ $t('profilePage.question') }}
          </h3>
          <p>
            {{ commentTruncated }}
          </p>
        </div>
        <div class="userProfile-buttons flexColumnCenter">
          <button 
            class="button" 
            @click="displayEditModal = true"
          >
            {{ $t('profilePage.editProfile') }}
          </button>
          <button 
            class="deleteButton" 
            @click="displayDeleteModal = true"
          >
            {{ $t('profilePage.deleteAccount') }}
          </button>
        </div>
      </section>
      <section class="embroideryCards">
        <RegistrationEmbroideryCard
          :newEmbroidery="true"
        />
        <RegistrationEmbroideryCard
          :newEmbroidery="false"
          :status="{type: 'InProgress', message: 'status1', stepIndex: 1}"
        />
        <RegistrationEmbroideryCard
          :newEmbroidery="false"
          :status="{type: 'Sent', message: 'status4'}"
        />
        <RegistrationEmbroideryCard
          :newEmbroidery="false"
          :status="{type: 'Requested', message: 'status7'}"
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
            {{ $t('profilePage.editProfile') }}
          </h2>
        </div>
        <div class="Settings-body">
          <div class="Settings-item">
            <div class="Settings-item-main">
              <label 
                for="username" 
                class="Settings-item-title"
              >
                {{ $t('placeholders.username') }}
              </label>
              <input 
                type="text" 
                value="" 
                placeholder="Enter name which we will use to communicate " 
                class="Settings-item-input" 
                id="username" 
                name="username"
              >
              <label
                for="publishUsername" 
                class="checkBoxWrapper checkBoxWrapperUsername flexRowStart Settings-item-publish"
              >
                <input 
                  type="checkbox" 
                  name="publishUsername" 
                  id="publishUsername" 
                  class="switcher"
                  :value="true"
                  v-model="publishUsername"
                />
                {{ $t('buttons.publish') }}
              </label>
            </div>
          </div>
          <div class="Settings-item">
            <div class="Settings-item-main">
              <label 
                for="pseudonym" 
                class="Settings-item-title"
              >
                Pseudonym
              </label>
              <input 
                type="text" 
                value="" 
                placeholder="Enter name we will use for presenting your work" 
                class="Settings-item-input" 
                id="pseudonym" 
                name="pseudonym"
              >
              <p class="Settings-item-publish">
                <label for="publishPseudonym">
                  {{ $t('buttons.publish') }}
                </label>
                <input 
                  type="checkbox" 
                  name="publishPseudonym" 
                  id="publishPseudonym" 
                  class="switcher"
                >
              </p>
            </div>
          </div>
          <div class="Settings-item Settings-item_reason">
            <div class="Settings-item-main">
              <label for="reason" class="Settings-item-title">
                {{ $t('profilePage.question') }}
              </label>
              <textarea class="Settings-item-input" id="reason" name="reason">
              </textarea>
            </div>
            <p class="Settings-item-publish">
              <label for="reasonPublish">
                {{ $t('buttons.publish') }}
              </label>
              <input type="checkbox" name="reasonPublish" id="reasonPublish" class="switcher">
            </p>
          </div>
          <div class="Settings-item Settings-item_buttons">
            <div class="Settings-item-main buttons">
              <button 
                class="button" 
                @click="displayEditModal = false"
              >
                {{ $t('buttons.cancel') }}
              </button>
              <button class="button bg_black">
                {{ $t('buttons.save') }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </GeneralModal>
  </main>
</template>

<style src="../../assets/style/form.scss" lang="scss" scoped></style>
<style src="./Profile.scss" lang="scss" scoped></style>
