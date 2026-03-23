<script setup>
import { computed, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import useUserStore from "@/stores/user"
import { useI18n } from 'vue-i18n'

const router = useRouter()
const { locales, t } = useI18n()
const userStore = useUserStore()

definePageMeta({
  layout: "embroidery",
  middleware: [
    'auth-registration',
    'user-embroideries',
  ],
})

const username = ref(userStore.user.username)
const usernameInput = ref(null)
const usernameTypingStarted = ref(null)
const publishUsername = ref(userStore.user.publishUsername)

const email = ref(userStore.user.email)
const emailInput = ref(null)
const emailTypingStarted = ref(false)

const countryOfResidence = ref(userStore.user.countryOfResidence)
const countryOfResidenceInput = ref(null)
const countryOfResidenceTypingStarted = ref(false)
const publishCountryOfResidence = ref(userStore.user.publishCountryOfResidence)

const instagram = ref(userStore.user.instagram)
const mentionInstagram = ref(userStore.user.mentionInstagram)
const publishInstagram = ref(userStore.user.publishInstagram)

const language = ref(userStore.user.language)

const reason = ref(userStore.user.reason)
const publishReason = ref(userStore.user.publishReason)

const displayEditProfileModal = ref(false)
const displayDeleteProfileModal = ref(false)

const deleteCheckbox = ref(false)

const disableNewEmbroidery = computed(() => {
  if (userStore.embroideries.length > 0) {
    return true
  }

  return true
})

const notifications = computed(() => {
  const acc = []

  userStore.embroideries.forEach((embroidery) => {
    if (embroidery.status.toLowerCase() === 'prepublished') {
      acc.push({
        type: 'warning',
        icon: resolveComponent('SvgTriangleWarning'),
        message: t('profilePage.notifications.prepublished.content1') + ' 30.1.2024' + t('profilePage.notifications.prepublished.content2')
      })
    } else if (embroidery.status.toLowerCase() === 'editing') {
      acc.push({
        type: 'information',
        icon: resolveComponent('SvgQuestionCircle'),
        message: t('profilePage.notifications.editing')
      })
    }
  })

  return acc
})

const reasonTruncated = computed(() => {
  return userStore.user.reason.length > 220 ? userStore.user.reason.slice(0, 220) + '...' : userStore.user.reason
})

const embroideriesCards = computed(() => {
  return userStore.embroideries.map((embroidery) => {
    const embroideryCard = {
      link: '/Gallery/Embroidery/' + embroidery.id,
      photo: embroidery.prisoner.photo,
      status: embroidery.status.toLowerCase(),
      name_eng: embroidery.prisoner.name_eng,
      name_rus: embroidery.prisoner.name_rus,
      name_bel: embroidery.prisoner.name_bel,
    }

    if (embroidery.status.toLowerCase() === 'prepublished') {
      embroideryCard.icon = resolveComponent('SvgTriangleWarning')
      embroideryCard.tooltip = t('profilePage.notifications.prepublished.content1') + ' 30.1.2024' + t('profilePage.notifications.prepublished.content2')
    } else if (embroidery.status.toLowerCase() === 'editing') {
      embroideryCard.icon = resolveComponent('SvgQuestionCircle')
      embroideryCard.tooltip = t('profilePage.notifications.editing')
    }

    return embroideryCard
  })
})

const updateLanguage = (lang) => {
  language.value = lang.name
}

const handleIfValueIsUpdated = (key, value) => {
  if (userStore.user[key] === value) {
    return null
  }

  return value
}

const updateUser = async () => {
  userStore.loading = true

  const body = {
    // disabled
    // email: handleIfValueIsUpdated('email', email.value),
    username: handleIfValueIsUpdated('username', username.value),
    countryOfResidence: handleIfValueIsUpdated('countryOfResidence', countryOfResidence.value),
    language: handleIfValueIsUpdated('language', language.value),
    instagram: handleIfValueIsUpdated('instagram', instagram.value),
    reason: handleIfValueIsUpdated('reason', reason.value),
    publishReason: handleIfValueIsUpdated('publishReason', publishReason.value),
    publishCountryOfResidence: handleIfValueIsUpdated('publishCountryOfResidence', publishCountryOfResidence.value),
    publishInstagram: handleIfValueIsUpdated('publishInstagram', publishInstagram.value),
    publishUsername: handleIfValueIsUpdated('publishUsername', publishUsername.value),
  }

  await userStore.updateUser(body)
  userStore.loading = false
  displayEditProfileModal.value = false
}

const deleteUser = async () => {
  if (!deleteCheckbox.value) {
    return
  }

  userStore.loading = true
  await userStore.deleteUser()
  userStore.loading = false
  router.push('/')
}
</script>

<template>
  <main class="Content">
    <Head>
      <Title>#Framed in Belarus / User cabinet — My embroideries</Title>
      <Meta name="description" content="User cabinet — My embroideries description"/>
      <Meta name="robots" content="noindex" />
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
          <h2
            v-if="userStore.user.username"
            class="userProfile-title"
          >
            {{ userStore.user.username }}
          </h2>
        </div>
        <div class="userProfile-body flexColumnStart">
          <div class="userInfoWrapper">
            <p 
              v-if="userStore.user.username"
              class="flexRowStart"
            >
              <span>
                {{ $t('placeholders.username') }}
              </span>
              <span class="b1">
                {{ userStore.user.username }}
              </span>
            </p>
            <p
              v-if="userStore.user.email"
              class="flexRowStart"
            >
              <span>
                {{ $t('placeholders.email') }}
              </span>
              <span class="b1">
                {{ userStore.user.email }}
              </span>
            </p>
            <p
              v-if="userStore.user.countryOfResidence"
              class="flexRowStart"
            >
              <span>
                {{ $t('placeholders.country') }}
              </span>
              <span class="b1">
                {{ userStore.user.countryOfResidence }}
              </span>
            </p>
            <p
              v-if="userStore.user.instagram"
              class="flexRowStart"
            >
              <span>
                {{ $t('placeholders.instagram') }}
              </span>
              <span class="b1">
                {{ userStore.user.instagram }}
              </span>
            </p>
            <p
              v-if="userStore.user.language"
              class="flexRowStart"
            >
              <span>
                {{ $t('placeholders.communicationLanguage') }}
              </span>
              <span class="b1">
                {{ userStore.user.language }}
              </span>
            </p>
          </div>
          <template v-if="userStore.user.reason">
            <h3 class="b">
              {{ $t('profilePage.question') }}
            </h3>
            <p>
              {{ reasonTruncated }}
            </p>
          </template>
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
        <EmbroideryNotificationModal
          v-for="(notification, i) in notifications"
          :notification="notification"
        />
        <div class="embroideryCards">
          <EmbroideryCard
            :disable="disableNewEmbroidery"
            :isNew="true"
          />
          <EmbroideryCard
            v-for="(embroidery, i) in embroideriesCards"
            :key="i"
            :isNew="false"
            :embroidery="embroidery"
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
                disabled
              />
              <span class="checkBoxWrapper checkBoxWrapperPublishcountryOfResidence flexRowStart">
                {{ $t('profilePage.changeMail') }}&nbsp;<strong class="red bold">{{ $t('email') }}</strong>
              </span>
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
              <GeneralInputShortDropdown
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
            <p class="">
              {{ $t('profilePage.deleteModal.paragraph1.content') }}
              <a href="framedinbelarus@gmail.com">
                {{ $t('profilePage.deleteModal.paragraph1.highlight') }}
              </a>
            </p>
            <p class="">
              {{ $t('profilePage.deleteModal.paragraph2.content1') }}
              <span class='b2'>
                {{ $t('profilePage.deleteModal.paragraph2.highlight1') }}
              </span>
              {{ $t('profilePage.deleteModal.paragraph2.content2') }}
              <span class='b2'>
                {{ $t('profilePage.deleteModal.paragraph2.highlight2') }}
              </span>
              {{ $t('profilePage.deleteModal.paragraph2.content3') }}
            </p>
            <label
              for="deleteCheckbox" 
              class="checkBoxWrapper checkBoxWrapperUsername flexRowStart"
            >
              <input 
                type="checkbox" 
                name="deleteCheckbox" 
                id="deleteCheckbox" 
                :value="false"
                v-model="deleteCheckbox"
              />
              {{ $t('profilePage.deleteModal.checkBox') }}
            </label>
          </div>
        </div>
        <div class="inputModalFooter buttons">
          <button class="button">
            {{ $t('buttons.cancel') }}
          </button>
          <button 
            class="button"
            :class="deleteCheckbox ? 'bg_red' : 'button_disabled'"
            @click="deleteUser()"
          >
            {{ $t('buttons.confirm') }}
          </button>
        </div>
      </div>
    </GeneralInputModal>
  </main>
</template>

<style src="./Profile.scss" lang="scss" scoped></style>
