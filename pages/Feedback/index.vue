<script setup>
import { computed, ref } from 'vue'
import { onBeforeRouteLeave } from 'vue-router'
import { useI18n } from 'vue-i18n'
import useUserStore from "@/stores/user"
import { useValidateInputs } from "@/composables/ValidateInputs"

const { t } = useI18n()
const userStore = useUserStore()
const { validateLatinCharacters, validateText} = useValidateInputs()

definePageMeta({
  layout: "form",
  middleware: [
    async function (to, from) {
      const localePath = useLocalePath()

      if (!from.fullPath.includes('rofile') && !from.fullPath.includes('eedback')) {
        return navigateTo(localePath('/'))
      }

      const userStore = useUserStore()
      userStore.startDeleteUser()
    },
    'auth-registration',
  ],
})

useHead({
  title: t('feedbackPage.title'),
  meta: [
    { property: 'og:title', content: t('feedbackPage.title'), },
    { name: 'robots', content: 'noindex' }
  ],
})

const formState = ref('preSent')

const feedbackOptions = [
  t("feedbackPage.dropdownReason.option1"),
  t("feedbackPage.dropdownReason.option2"),
  t("feedbackPage.dropdownReason.option3"),
  t("feedbackPage.dropdownReason.option4"),
  t("feedbackPage.dropdownReason.option5"),
  t("feedbackPage.dropdownReason.option6"),
  t("feedbackPage.dropdownReason.option7"),
  t("feedbackPage.dropdownReason.optionOther"),
]

const feedback = ref(null)
const feedbackOther = ref(null)
const feedbackOtherInput = ref(null)
const feedbackOtherTypingStarted = ref(false)

const subscription = ref(null)
const marketing = ref(null)

onClickOutside(feedbackOtherInput, () => {
  if (feedbackOther.value) {
    feedbackOtherTypingStarted.value = true
  }
})

const displayOtherFeedback = computed(() => {
  return feedback.value === "Other" || feedback.value === "Другое" || feedback.value === "Іншае"
})

const validLeaveReasonOtherData = computed(() => validateLatinCharacters(feedbackOther.value) && validateText(feedbackOther.value))

const validData = computed(() => {
  return (feedback.value && !displayOtherFeedback.value ||
  displayOtherFeedback.value && validLeaveReasonOtherData.value) &&
  subscription.value !== null && marketing.value !== null
})

const submitForm = async () => {
  userStore.loading = true

  const body = {
    feedback: feedback.value, 
    subscription: subscription.value, 
    marketing: marketing.value, 
  }

  if (displayOtherFeedback.value) {
    body.feedback = feedbackOther.value
  }

  const isUserDeleted = await userStore.deleteUser(body)

  if (isUserDeleted) {
    formState.value = 'userDeleted'
  } else {
    formState.value = 'technicalIssue'
  }

  userStore.loading = false
}

onBeforeRouteLeave(async (to) => {
  if (to.fullPath.includes('eedback')) {
    return
  }

  userStore.loading = true

  if (userStore.isBeforeDelete) {
    await userStore.deleteUser()
  }

  userStore.signOut()
  userStore.loading = false
})
</script>

<template>
  <main 
    class="Content"
    :class="{'flexColumnCenter' : formState !== 'preSent'}"
  >
    <div 
      v-if="formState === 'preSent'"
      class="content feedbackContent"
    >
      <h1 class="title">
        {{ $t('feedbackPage.title') }}
      </h1>
      <p class="description">
        <span class="b2">
          {{ $t('feedbackPage.description.highlight') }}
        </span><br>
        {{ $t('feedbackPage.description.content') }}
      </p>
      <div class="formWrapper flexColumnStart">
        <label
          for="feedbackDropdown" 
          class="flexRowStart"
        >
          {{ $t('feedbackPage.dropdownReason.label') }}
        </label>
        <div class="feedbackWrapper">
          <GeneralInputLongDropdown
            id="feedbackDropdown"
            class="contentInput feedbackDropdown"
            :options="feedbackOptions"
            :placeholder="$t('feedbackPage.dropdownReason.placeholder')" 
            v-model="feedback"
          />
          <div 
            v-if="displayOtherFeedback"
            class="inputWrapper inputWrapperWarningBottom"
          >
            <textarea 
              type="text" 
              name="feedbackOther" 
              id="feedbackOther" 
              v-model="feedbackOther"
              :placeholder="$t('feedbackPage.dropdownReason.otherPlaceholder')" 
              class="feedbackOtherInput"
              :class="{'invalidInput': !validLeaveReasonOtherData && feedbackOtherTypingStarted}" 
              ref="feedbackOtherInput"
            />
            <span 
              v-if="!validLeaveReasonOtherData && feedbackOtherTypingStarted"
              class="warningNotification note red"
            >
              {{ $t('invalidInputs.enterComment') }}
            </span>
          </div>
        </div>
        <div class="radioWrapper">
          <p class="b1">
            {{ $t('feedbackPage.optionsNews.title') }}
          </p>
          <label 
            for="acceptSubscribeNews"
            class="subscription-item flexRowStart"
          >
            <input
              type="radio"
              name="acceptSubscribeNews"
              id="acceptSubscribeNews"
              :value="true"
              v-model="subscription"
              required
            />
            {{ $t('feedbackPage.optionsNews.option1') }}
          </label>
          <label 
            for="refuseSubscribeNews" 
            class="subscription-item flexRowStart"
          >
            <input
              type="radio"
              name="refuseSubscribeNews"
              id="refuseSubscribeNews"
              :value="false"
              v-model="subscription"
              required
            />
            {{ $t('feedbackPage.optionsNews.option2') }}
          </label>
        </div>
        <div class="radioWrapper">
          <p class="b1">
            {{ $t('feedbackPage.optionsFinancial.title') }}
          </p>
          <label 
            for="acceptSubscribeCommercial"
            class="marketing-item flexRowStart"
          >
            <input
              type="radio"
              name="acceptSubscribeCommercial"
              id="acceptSubscribeCommercial"
              :value="true"
              v-model="marketing"
              required
            />
            {{ $t('feedbackPage.optionsFinancial.option1') }}
          </label>
          <label 
            for="refuseSubscribeCommercial" 
            class="marketing-item flexRowStart"
          >
            <input
              type="radio"
              name="refuseSubscribeCommercial"
              id="refuseSubscribeCommercial"
              :value="false"
              v-model="marketing"
              required
            />
            {{ $t('feedbackPage.optionsFinancial.option2') }}
          </label>
        </div>
      </div>
      <div class="buttons flexRowCenter">
        <button 
          class="button" 
          :class="validData ? 'bg_black' : 'button_disabled'"
          @click="submitForm()"
        >
          {{ $t('buttons.submit') }}
        </button>
      </div>
    </div>
    <div 
      v-else-if="formState === 'userDeleted'"
      class="content feedbackContent feedbackSuccessContent flexColumnCenter"
    >
      <SvgCheckMark/>
      <h1 class="title">
        {{ $t('feedbackPage.success.title') }}
      </h1>
      <p class="description">
        {{ $t('feedbackPage.success.description') }}
      </p>
    </div>
    <div 
      v-else-if="formState === 'technicalIssue'"
      class="content correctionsContent correctionsTechnicalIssueContent flexColumnCenter"
    >
      <SvgWarning class="technicalSvgWarning correctionsSvgWarning"/>
      <h1 class="title">
        {{ $t('warnings.error') }}
      </h1>
      <p class="description">
        {{ $t('warnings.technical') }}
      </p>
    </div>
  </main>
</template>

<style src="./Feedback.scss" lang="scss"></style>
