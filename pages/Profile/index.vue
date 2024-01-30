<script setup>
import { computed, onMounted, ref } from 'vue'
import { useUserStore } from "@/stores/user"
import { useI18n } from 'vue-i18n'
const { locales } = useI18n()
const userStore = useUserStore()

definePageMeta({
  layout: "embroidery",
  middleware: [
    'auth-registration',
  ],
})

const username = ref(userStore.currentUserReactive.username)
const usernameInput = ref(null)
const usernameTypingStarted = ref(null)
const publishUsername = ref(userStore.currentUserReactive.publishUsername)

const email = ref(userStore.currentUserReactive.email)
const emailInput = ref(null)
const emailTypingStarted = ref(false)

const countryOfResidence = ref(userStore.currentUserReactive.countryOfResidence)
const countryOfResidenceInput = ref(null)
const countryOfResidenceTypingStarted = ref(false)
const publishCountryOfResidence = ref(userStore.currentUserReactive.publishCountryOfResidence)

const instagram = ref(userStore.currentUserReactive.instagram)
const mentionInstagram = ref(userStore.currentUserReactive.mentionInstagram)
const publishInstagram = ref(userStore.currentUserReactive.publishInstagram)

const language = ref(userStore.currentUserReactive.language)

const reason = ref(userStore.currentUserReactive.reason)
const publishReason = ref(userStore.currentUserReactive.publishReason)

const displayEditProfileModal = ref(false)
const displayDeleteProfileModal = ref(false)

const allowNewEmbroidery = computed(() => {
  return false
})

const notification = computed(() => {
  return false
})

const warning = computed(() => {
  return false
})

const updateLanguage = (lang) => {
  language.value = lang.name
}

onMounted(() => {
  // console.log('onMounted')
  userStore.getUserData()
  userStore.getUserActivities()
})

const handleIfValueIsUpdated = (key, value) => {
  if (userStore.currentUserReactive[key] === value) {
    return null
  }

  return value
}

const updateUser = async () => {
  userStore.loading = true

  const body = {
    email: handleIfValueIsUpdated('email', email.value),
    username: handleIfValueIsUpdated('username', username.value),
    countyOfResidence: handleIfValueIsUpdated('countryOfResidence', countryOfResidence.value),
    language: handleIfValueIsUpdated('language', language.value),
    instagram: handleIfValueIsUpdated('instagram', instagram.value),
    reason: handleIfValueIsUpdated('reason', reason.value),
    publishReason: handleIfValueIsUpdated('publishReason', publishReason.value),
    publishCountryOfResidence: handleIfValueIsUpdated('publishCountryOfResidence', publishCountryOfResidence.value),
    publishInstagram: handleIfValueIsUpdated('publishInstagram', publishInstagram.value),
    publishUsername: handleIfValueIsUpdated('publishUsername', publishUsername.value),
  }

  await userStore.updateUser(body)
  await userStore.getUserData()
  userStore.loading = false
  displayEditProfileModal.value = false
}

const deleteUser = async () => {
  userStore.loading = true
  await userStore.deleteUser()
  await userStore.getUserData()
  userStore.loading = false
  displayDeleteProfileModal.value = false
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
            {{ userStore.currentUserReactive.username }}
          </h2>
        </div>
        <div class="userProfile-body flexColumnStart">
          <div class="userInfoWrapper">
            <p class="flexRowStart">
              <span>
                {{ $t('placeholders.username') }}
              </span>
              <span class="b1">
                {{ userStore.currentUserReactive.username }}
              </span>
            </p>
            <p class="flexRowStart">
              <span>
                {{ $t('placeholders.email') }}
              </span>
              <span class="b1">
                {{ userStore.currentUserReactive.email }}
              </span>
            </p>
            <p class="flexRowStart">
              <span>
                {{ $t('placeholders.country') }}
              </span>
              <span class="b1">
                {{ userStore.currentUserReactive.countryOfResidence }}
              </span>
            </p>
            <p class="flexRowStart">
              <span>
                {{ $t('placeholders.instagram') }}
              </span>
              <span class="b1">
                {{ userStore.currentUserReactive.instagram }}
              </span>
            </p>
            <p class="flexRowStart">
              <span>
                {{ $t('placeholders.communicationLanguage') }}
              </span>
              <span class="b1">
                {{ userStore.currentUserReactive.language }}
              </span>
            </p>
          </div>
          <h3 class="b">
            {{ $t('profilePage.question') }}
          </h3>
          <p>
            {{ userStore.currentUserReactive.reasonTruncated }}
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
        <GeneralEmbroideryNotificationModal
          v-if="notification"
          :icon="'question'"
          :message="$t('profilePage.notifications.notification2' + ' [1/30/2024]')"
        />
        <GeneralEmbroideryNotificationModal
          v-if="warning"
          :icon="'warning'"
          :message="$t('profilePage.notifications.notification1')"
          :link="'#'"
          :linkMessage="'Proceed'"
        />
        <div class="embroideryCards">
          <RegistrationEmbroideryCard
            :disableNewEmbroidery="allowNewEmbroidery"
            :newEmbroidery="true"
          />
          <RegistrationEmbroideryCard
            v-for="(card, i) in userStore.currentUserReactive.cards"
            :key="i"
            :newEmbroidery="false"
            :card="card"
          />
        </div>
      </section>
    </div>
    <GeneralInputModal
      class="editProfileModal"
      @closeModal="displayEditProfileModal = false"
      :displayModal="displayEditProfileModal"
    >
      <div class="inputModalContentWrapper">
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
                for="countryOfResidence"
                class="labelTitle"
              >
                {{ $t('placeholders.country') }}
              </label>
              <input 
                type="text" 
                name="countryOfResidence" 
                id="countryOfResidence"
                :placeholder="$t('placeholders.enter') + ' ' + $t('placeholders.country')" 
                class="contentInput countryOfResidenceInput"
                v-model="countryOfResidence"
              />
              <label 
                for="publishCountryOfResidence"
                class="checkBoxWrapper checkBoxWrapperPublishcountryOfResidence flexRowStart"
              >
                <input 
                  type="checkbox" 
                  name="publishCountryOfResidence" 
                  id="publishCountryOfResidence" 
                  :value="true"
                  v-model="publishCountryOfResidence"
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
                for="language"
                class="labelTitle"
              >
                {{ $t('placeholders.communicationLanguage') }}
              </label>
              <GeneralInputDropdownMenu
                id="language"
                class="contentInput languageInput"
                :chosenOption="language"
                :options="locales"
                :placeholder="$t('placeholders.chooseCommunicationLanguage')" 
                @chooseOption="updateLanguage"
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
                maxlength="800"
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
          <button 
            class="button bg_black"
            @click="updateUser()"
          >
            {{ $t('buttons.save') }}
          </button>
        </div>
      </div>
    </GeneralInputModal>
    <GeneralInputModal
      class="deleteProfileModal"
      @closeModal="displayDeleteProfileModal = false"
      :displayModal="displayDeleteProfileModal"
    >
      <div class="inputModalContentWrapper">
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
            @click="deleteUser()"
          >
            {{ $t('buttons.confirm') }}
          </button>
          <button 
            class="button bg_black"
          >
            {{ $t('buttons.back') }}
          </button>
        </div>
      </div>
    </GeneralInputModal>
  </main>
</template>

<style src="./Profile.scss" lang="scss" scoped></style>
