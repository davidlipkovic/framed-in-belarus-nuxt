<script setup>
import { computed, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import useUserStore from "@/stores/user"
import { useI18n } from 'vue-i18n'
import { useCurrentLocale } from "@/composables/CurrentLocale"
import { useValidateInputs } from "@/composables/ValidateInputs"
import countries from '../../assets/json/countries.json'

const router = useRouter()
const { t } = useI18n()
const userStore = useUserStore()
const { localesNames } = useCurrentLocale()
const { validateText } = useValidateInputs()

definePageMeta({
  layout: "embroidery",
  middleware: [
    'auth-registration',
    'user-embroideries',
  ],
})

useHead({
  title: t('profilePage.title') + ' - ' + t('profilePage.subTitle'),
  meta: [
    { property: 'og:title', content: t('profilePage.title') + ' - ' + t('profilePage.subTitle'), },
    { name: 'robots', content: 'noindex' }
  ],
})

const formData = reactive({
  username: userStore.user.username,
  publishUsername: userStore.user.publishUsername,
  // disabled
  // email: userStore.user.email,
  countryOfResidence: userStore.user.countryOfResidence,
  publishCountryOfResidence: userStore.user.publishCountryOfResidence,
  language: userStore.user.language,
  instagram: userStore.user.instagram,
  mentionInstagram: userStore.user.mentionInstagram,
  publishInstagram: userStore.user.publishInstagram,
  reason: userStore.user.reason,
  publishReason: userStore.user.publishReason,
})

const displayEditProfileModal = ref(false)
const displayDeleteProfileModal = ref(false)

const deleteCheckbox = ref(false)

const validUsernameData = computed(() => validateText(formData.username))

const validReasonData = computed(() => validateText(formData.reason))

const validUserData = computed(() => {
  return validUsernameData.value && validReasonData.value
})

const disableNewEmbroidery = computed(() => {
  if (userStore.embroideries.length > 0) {
    return true
  }

  return true
})

const notifications = computed(() => {
  const acc = new Map()

  userStore.embroideries.forEach((embroidery) => {
    if (embroidery.status.toLowerCase() === 'prepublished') {
      acc.set('warning', {
        type: 'warning',
        icon: resolveComponent('SvgTriangleWarning'),
        message: t('profilePage.notifications.prepublished')
      })
    } else if (embroidery.status.toLowerCase() === 'editing') {
      acc.set('information', {
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
      embroideryCard.tooltip = t('profilePage.embroideryCardTooltips.prepublished', { deadline: '30.1.2024' })
    } else if (embroidery.status.toLowerCase() === 'editing') {
      embroideryCard.icon = resolveComponent('SvgQuestionCircle')
      embroideryCard.tooltip = t('profilePage.embroideryCardTooltips.editing')
    }

    return embroideryCard
  })
})

const updateUser = async () => {
  userStore.loading = true

  const body = {}

  Object.keys(formData).forEach(key => {
    if (userStore.user[key] !== formData[key]) {
      body[key] = formData[key]
    }
  })

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
  router.replace('/')
}
</script>

<template>
  <main class="Content">
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
          v-for="[key, value] in notifications"
          :key="key"
          :notification="value"
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
                :placeholder="$t('placeholders.enter') + ' ' + $t('placeholders.username') + '*'" 
                class="contentInput usernameInput"
                :class="{'invalidInput': !validUsernameData}"
                v-model="formData.username"
              />
              <span 
                v-if="!validUsernameData"
                class="warningNotification note red"
              >
                {{ $t('invalidInputs.enterYourUsername') }}
              </span>
              <label 
                for="publishUsername"
                class="checkBoxWrapper checkBoxWrapperUsername flexRowStart"
              >
                <input 
                  type="checkbox" 
                  name="publishUsername" 
                  id="publishUsername" 
                  :value="true"
                  v-model="formData.publishUsername"
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
                v-model="userStore.user.email"
                disabled
              />
              <span class="checkBoxWrapper checkBoxWrapperPublishcountryOfResidence">
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
              <GeneralInputLongDropdown
                class="input contentInput countryOfResidenceDropdown editProfileLongDropdown"
                id="countryOfResidence"
                :enableScroll="true"
                :options="countries"
                :placeholder="$t('placeholders.enter') + ' ' + $t('placeholders.country')" 
                v-model="formData.countryOfResidence"
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
                  v-model="formData.publishCountryOfResidence"
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
                v-model="formData.instagram"
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
                  v-model="formData.publishInstagram"
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
                  v-model="formData.mentionInstagram"
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
                :options="localesNames"
                :placeholder="$t('placeholders.chooseCommunicationLanguage')" 
                v-model="formData.language"
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
                  {{ formData.reason ? formData.reason.length : 0 }}/800
                </span>
              </div>
              <textarea 
                type="text" 
                name="reason" 
                id="reason"
                :placeholder="$t('placeholders.enter') + ' ' + $t('placeholders.text') + '*'" 
                class="contentInput reasonInput"
                :class="{'invalidInput': !validReasonData}"
                v-model="formData.reason"
                maxlength="800"
              />
              <span 
                v-if="!validReasonData"
                class="warningNotification note red"
              >
                {{ $t('invalidInputs.enterReason') }}
              </span>
              <label 
                for="publishReason"
                class="checkBoxWrapper checkBoxWrapperReason flexRowStart"
              >
                <input 
                  type="checkbox" 
                  name="publishReason" 
                  id="publishReason" 
                  :value="true"
                  v-model="formData.publishReason"
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
            class="button"
            :class="validUserData ? 'bg_black' : 'button_disabled'"
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
