<script setup>
import { computed, ref } from 'vue'

definePageMeta({
  layout: "embroidery"
})

const displayEditProfileModal = ref(false)
const displayDeleteProfileModal = ref(false)

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

const cards = computed(() => {
  return [
    {
      type: 'inProgress', 
      link: "/Embroidery/Step-2-preparation",
      imageUrl: "https://spring96.org/files/images/kalesnikava.jpg",
      stepIndex: 2,
      tooltip: "",
    },
    {
      type: 'sent', 
      link: "",
      imageUrl: "https://spring96.org/files/images/kalesnikava.jpg",
      tooltip: "",
      warning: true
    },
    {
      type: 'requested', 
      link: "",
      imageUrl: "",
      tooltip: "Sorry,  it's not possible to start a new embroidery until the current work-in-progress reaches the step 6 - shipping.",
    },
    {
      type: 'patternIsReady', 
      link: "/Embroidery/Step-2-preparation",
      imageUrl: "https://spring96.org/files/images/kalesnikava.jpg",
      tooltip: ""
    },
  ]
})

const allowNewEmbroidery = computed(() => {
  return false
})

const notification = computed(() => {
  return false
})

const warning = computed(() => {
  return false
})

const username = ref(null)
const publishUsername = ref(false)
const email = ref(null)
const country = ref(null)
const publishCountry = ref(false)
const instagram = ref(null)
const publishInstagram = ref(false)
const mentionInstagram = ref(false)
const communicationLanguage = ref(null)
const reason = ref(null)
const publishReason = ref(false)

const updateCommunicationLanguage = (lang) => {
  communicationLanguage.value = lang
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
            @click="displayEditProfileModal = true"
          >
            {{ $t('profilePage.editProfile') }}
          </button>
          <button 
            class="deleteButton" 
            @click="displayDeleteProfileModal = true"
          >
            {{ $t('profilePage.deleteAccount') }}
          </button>
        </div>
      </section>
      <section class="embroideryCardsWrapper flexColumnCenter">
        <GeneralNotificationModal
          v-if="notification"
          :icon="'question'"
          :message="'You are taking too much time for one step, please proceed with your work.'"
        />
        <GeneralNotificationModal
          v-if="warning"
          :icon="'warning'"
          :message="'You are taking too much time for one step, please proceed with your work.'"
          :link="'#'"
          :linkMessage="'Proceed'"
        />
        <div class="embroideryCards">
          <RegistrationEmbroideryCard
            :class="{'disabledCard': !allowNewEmbroidery}"
            :newEmbroidery="true"
          />
          <RegistrationEmbroideryCard
            v-for="(card, i) in cards"
            :key="i"
            :newEmbroidery="false"
            :card="card"
          />
        </div>
      </section>
    </div>
    <GeneralInputModal
      @closeModal="displayEditProfileModal = false"
      :displayModal="displayEditProfileModal"
    >
      <div class="inputModalContentWrapper editProfileModalContentWrapper">
        <div class="inputModalHeader flexRowStart">
          <h2>
            {{ $t('profilePage.editProfile') }}
          </h2>
          <button
            @click="displayEditProfileModal = false"
            class="closeButton"
          >
            <SvgClose/>
          </button>
        </div>
        <div class="inputModalBody flexColumnStart">
          <div class="inputModalRow flexRowStart">
            <div class="inputModalItem flexColumnStart">
              <label 
                for="username"
                class="labelTitle"
              >
                {{ $t('placeholders.username') }}
              </label>
              <input 
                type="text" 
                name="username" 
                id="username"
                :placeholder="$t('placeholders.enter') + ' ' + $t('placeholders.username')" 
                class="contentInput usernameInput"
                v-model="username"
              />
              <label 
                for="publishUsername"
                class="checkBoxWrapper checkBoxWrapperUsername flexRowStart"
              >
                <input 
                  type="checkbox" 
                  name="publishUsername" 
                  id="publishUsername" 
                  :value="true"
                  v-model="publishUsername"
                />
                {{ $t('buttons.publish') }}
              </label>
            </div>
            <div class="inputModalItem flexColumnStart">
              <label 
                for="email"
                class="labelTitle"
              >
                {{ $t('placeholders.email') }}
              </label>
              <input 
                type="text" 
                name="email" 
                id="email"
                :placeholder="$t('placeholders.enter') + ' ' + $t('placeholders.email')" 
                class="contentInput emailInput"
                v-model="email"
              />
            </div>
          </div>
          <div class="inputModalRow flexRowStart">
            <div class="inputModalItem flexColumnStart">
              <label 
                for="country"
                class="labelTitle"
              >
                {{ $t('placeholders.country') }}
              </label>
              <input 
                type="text" 
                name="country" 
                id="country"
                :placeholder="$t('placeholders.enter') + ' ' + $t('placeholders.country')" 
                class="contentInput countryInput"
                v-model="country"
              />
              <label 
                for="publishCountry"
                class="checkBoxWrapper checkBoxWrapperCountry flexRowStart"
              >
                <input 
                  type="checkbox" 
                  name="publishCountry" 
                  id="publishCountry" 
                  :value="true"
                  v-model="publishCountry"
                />
                {{ $t('buttons.publish') }}
              </label>
            </div>
            <div class="inputModalItem flexColumnStart">
              <label 
                for="instagram"
                class="labelTitle"
              >
                {{ $t('placeholders.instagram') }}
              </label>
              <input 
                type="text" 
                name="instagram" 
                id="instagram"
                :placeholder="$t('placeholders.enter') + ' ' + $t('placeholders.instagram')" 
                class="contentInput instagramInput"
                v-model="instagram"
              />
              <label 
                for="publishInstagram"
                class="checkBoxWrapper checkBoxWrapperInstagram flexRowStart"
              >
                <input 
                  type="checkbox" 
                  name="publishInstagram" 
                  id="publishInstagram" 
                  :value="true"
                  v-model="publishInstagram"
                />
                {{ $t('buttons.publish') }}
              </label>
              <label 
                for="mentionInstagram"
                class="checkBoxWrapper checkBoxWrapperSecond checkBoxWrapperInstagram flexRowStart"
              >
                <input 
                  type="checkbox" 
                  name="mentionInstagram" 
                  id="mentionInstagram" 
                  :value="true"
                  v-model="mentionInstagram"
                />
                {{ $t('inputs.mentionInstagram') }}
              </label>
            </div>
          </div>
          <div class="inputModalRow flexRowStart">
            <div class="inputModalItem flexColumnStart">
              <label 
                for="communicationLanguage"
                class="labelTitle"
              >
                {{ $t('placeholders.communicationLanguage') }}
              </label>
              <GeneralInputLangMenu
                id="communicationLanguage"
                class="contentInput communicationLanguageInput"
                @chooseLanguage="updateCommunicationLanguage"
              />
            </div>
          </div>
          <div class="inputModalRow flexRowStart">
            <div class="inputModalItem inputModalItemFullWidth inputModalItemTextarea flexColumnStart">
              <div class="flexRowStart">
                <label 
                  for="reason"
                  class="labelTitle"
                >
                  {{ $t('profilePage.question') }}
                </label>
                <span>
                  {{ reason ? reason.length : 0 }}/800
                </span>
              </div>
              <textarea 
                type="text" 
                name="reason" 
                id="reason"
                :placeholder="$t('placeholders.enter') + ' ' + $t('placeholders.text')" 
                class="contentInput reasonInput"
                v-model="reason"
              />
              <label 
                for="publishReason"
                class="checkBoxWrapper checkBoxWrapperReason flexRowStart"
              >
                <input 
                  type="checkbox" 
                  name="publishReason" 
                  id="publishReason" 
                  :value="true"
                  v-model="publishReason"
                />
                {{ $t('buttons.publish') }}
              </label>
            </div>
          </div>
        </div>
        <div class="inputModalFooter buttons">
          <button 
            class="button" 
            @click="displayEditProfileModal = false"
          >
            {{ $t('buttons.cancel') }}
          </button>
          <button class="button bg_black">
            {{ $t('buttons.save') }}
          </button>
        </div>
      </div>
    </GeneralInputModal>
    <GeneralInputModal
      @closeModal="displayDeleteProfileModal = false"
      :displayModal="displayDeleteProfileModal"
    >
      <div class="inputModalContentWrapper deleteProfileModalContentWrapper">
        <div class="inputModalHeader flexRowStart">
          <button
            @click="displayDeleteProfileModal = false"
            class="closeButton"
          >
            <SvgClose/>
          </button>
        </div>
        <div class="inputModalBody flexColumnCenter">
          <div class="inputModalItem inputModalItemFullWidth inputModalItemDelete flexColumnCenter">
            <div class="trashIconWrapper flexColumnCenter">
              <SvgTrash/>
            </div>
            <h2>
              {{ $t('profilePage.deleteModal.title') }}
            </h2>
            <span>
              {{ $t('profilePage.deleteModal.disclaimer') }}
            </span>
          </div>
        </div>
        <div class="inputModalFooter buttons">
          <button 
            class="button" 
            @click="displayDeleteProfileModal = false"
          >
            {{ $t('buttons.cancel') }}
          </button>
          <button class="button bg_black">
            {{ $t('buttons.delete') }}
          </button>
        </div>
      </div>
    </GeneralInputModal>
  </main>
</template>

<style src="../../assets/style/form.scss" lang="scss" scoped></style>
<style src="./Profile.scss" lang="scss" scoped></style>
