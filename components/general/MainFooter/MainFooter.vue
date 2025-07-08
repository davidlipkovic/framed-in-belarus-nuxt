<script setup>
import { computed, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import useUserStore from "@/stores/user"
import { useCheckCurrentRoute } from "@/composables/CheckCurrentRoute";
import { useValidateInputs } from "@/composables/ValidateInputs";

const { locales } = useI18n()
const userStore = useUserStore()
const { checkCurrentRoute, checkHomeRoute } = useCheckCurrentRoute()
const { validateEmail } = useValidateInputs()

const route = useRoute()

const language = ref(null)

const toggleProfileModal = ref(false)
const toggleQuestionModal = ref(false)
const toggleSubscribeModal = ref(false)
const toggleSubscribeClicked = ref(false)

const email = ref(null)
const emailInput = ref(null)
const emailTypingStarted = ref(false)

const validEmailData = computed(() => {
  return validateEmail(email.value)
})

const updateLanguage = (lang) => {
  language.value = lang.name
}

const subscribe = async () => {
  toggleSubscribeClicked.value = true

  if (!validEmailData.value || !language.value) {
    return
  }

  if (userStore.user && userStore.user.email === email.value) {
    await userStore.updateUser({
      email: email.value,
      language: language.value,
      subscription: true
    })
  } else {
    await userStore.subscribe({
      email: email.value,
      language: language.value,
    })
  }

  toggleSubscribeModal.value = true
}

watch(route, n => {
  toggleProfileModal.value = false
  toggleQuestionModal.value = false
  toggleSubscribeModal.value = false
})

onClickOutside(emailInput, () => {
  if (email.value) {
    emailTypingStarted.value = true
  }
})
</script>

<template>
  <footer class="Footer mainFooterWrapper">
    <div class="bg_black flexRowCenter">
      <div class="content Info">
        <div class="Info-project">
          <GeneralMainLogo/>
          <a 
            href="mailto:framedinbelarus@gmail.com" 
            class="Info-Project-email"
          >
            framedinbelarus@gmail.com
          </a>
          <div class="Info-Project-social">
            <a 
              href="https://www.facebook.com/hashtag/framedinbelarus" 
              target="_blank" 
              class="Facebook"
            >
              <SvgFacebook/>
            </a>
            <a 
              href="https://www.instagram.com/rufinabazlova/?hl=en" 
              target="_blank" 
              class="Instagram"
            >
              <SvgInstagram/>
            </a>
          </div>
        </div>
        <nav class="Info-menu">
          <div class="Info-menu-group flexColumnCenter">
            <div class="flexColumnStart subscribeWrapper">
              <div class="flexColumnStart">
                <div class="inputWrapper inputWrapperWarningBottom">
                  <input 
                    type="email" 
                    name="email" 
                    id="email" 
                    :placeholder="$t('placeholders.email')"
                    v-model="email"
                    class="emailInput"
                    :class="{'invalidInput': !validEmailData && emailTypingStarted}"
                    ref="emailInput"
                  />
                  <span 
                    v-if="!validEmailData && (emailTypingStarted || toggleSubscribeClicked)"
                    class="warningNotification note red"
                  >
                    {{ $t('invalidInputs.enterEmailAdress') }}
                  </span>
                </div>
                <div class="inputWrapper inputWrapperWarningBottom">
                  <GeneralInputShortDropdown
                    class="contentInput languageDropdown"
                    :chosenOption="language"
                    :options="locales"
                    :placeholder="$t('placeholders.chooseCommunicationLanguage') + '*'"
                    position="Top" 
                    @chooseOption="updateLanguage"
                  />
                  <span 
                    v-if="!language && toggleSubscribeClicked"
                    class="warningNotification note red"
                  >
                    {{ $t('invalidInputs.pleaseChooseOneOption') }}
                  </span>
                </div>
              </div>
              <button 
                class="button"
                @click="subscribe()"
              >
                {{ $t('buttons.subscribe') }}
              </button>
            </div>
            <div class="Info-menu-group footerLinksWrapper">
              <nuxt-link
                :to="$localePath('/')"
                class="Info-menu-item"
                :class="{ 'redImportatnt' : checkHomeRoute('/') }"
              >
                {{ $t('links.home') }}
              </nuxt-link>
              <nuxt-link
                :to="$localePath('/Gallery')"
                class="Info-menu-item"
                :class="{ 'redImportatnt' : checkCurrentRoute('Gallery') }"
              >
                {{ $t('links.gallery') }}
              </nuxt-link>
              <nuxt-link
                :to="$localePath('/Events')"
                class="Info-menu-item"
                :class="{ 'redImportatnt' : checkCurrentRoute('Events') }"
              >
                {{ $t('links.news') }}
              </nuxt-link>
              <nuxt-link
                :to="$localePath('/AboutUs')"
                class="Info-menu-item"
                :class="{ 'redImportatnt' : checkCurrentRoute('AboutUs') }"
              >
                {{ $t('links.aboutUs') }}
              </nuxt-link>
            </div>
          </div>
          <div
            class="Info-menu-group flexRowCenter"
            :class="userStore.isLogged ? 'Info-menu-group-profileWrapper' : ''"
          >
            <nuxt-link
              v-if="!userStore.isLogged"
              :to="$localePath('/SignIn')"
              class="Info-menu-item"
            >
              {{ $t('links.signIn') }}
            </nuxt-link>
            <nuxt-link
              v-if="!userStore.isLogged"
              :to="$localePath('/SignUp')"
              class="Info-menu-item button bg_red"
            >
              {{ $t('links.participate') }}
            </nuxt-link>
            <button
              v-if="userStore.isLogged"
              class="Info-menu-item helpButton flexRowCenter"
              @click="toggleQuestionModal = !toggleQuestionModal"
              v-tooltip="$t('mainMenu.question.label')"
            >
              <SvgHelpCircle/>
            </button>
            <button
              v-if="userStore.isLogged"
              class="profileButton flexRowCenter"
              :class="{'pointer-events-none': toggleProfileModal}"
              @click="toggleProfileModal = !toggleProfileModal"
              v-tooltip="$t('toolTips.profile')"
            >
              <div class="flexRowCenter">
                <img
                  src="../../../assets/media/img/profileSymbolFramed.svg"
                >
              </div>
            </button>
            <GeneralProfileModal
              v-if="toggleProfileModal"
              class="profileModalFooter"
              @closeModal="toggleProfileModal = !toggleProfileModal"
            />
          </div>
        </nav>
      </div>
    </div>
    <GeneralNotificationModal
      :displayModal="toggleSubscribeModal && validEmailData && language !== null"
      :message="$t('notifications.subscribeSuccess')"
      @closeModal="toggleSubscribeModal = !toggleSubscribeModal, toggleSubscribeClicked = false"
    />
  </footer>
  <GeneralQuestionModal
    :displayModal="toggleQuestionModal"
    @closeModal="toggleQuestionModal = !toggleQuestionModal"
  />
</template>

<style src="./MainFooter.scss" lang="scss"></style>
