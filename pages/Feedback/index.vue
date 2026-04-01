<script setup>
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import useUserStore from "@/stores/user"
import { useValidateInputs } from "@/composables/ValidateInputs"

const { t } = useI18n()
const userStore = useUserStore()
const { validateLatinCharacters, validateText} = useValidateInputs()

definePageMeta({
  layout: "form"
})

const success = ref(false)

const commentProfessionalPhotos = ref(null)
const commentProfessionalPhotosInput = ref(null)

const commentComments = ref(null)
const commentCommentsInput = ref(null)

const commentProcessPhotos = ref(null)
const commentProcessPhotosInput = ref(null)

const commentOther = ref(null)
const commentOtherInput = ref(null)

const submitForm = async () => {
  success.value = true
}

const leaveReasonOptions = [
  t("feedbackPage.dropdownReason.option1"),
  t("feedbackPage.dropdownReason.option2"),
  t("feedbackPage.dropdownReason.option3"),
  t("feedbackPage.dropdownReason.option4"),
  t("feedbackPage.dropdownReason.option5"),
  t("feedbackPage.dropdownReason.option6"),
  t("feedbackPage.dropdownReason.option7"),
  t("feedbackPage.dropdownReason.optionOther"),
]

const leaveReason = ref(null)
const leaveReasonOther = ref(null)
const leaveReasonOtherInput = ref(null)
const leaveReasonOtherTypingStarted = ref(false)

const subscribeNews = ref(null)
const subscribeCommercial = ref(null)

onClickOutside(leaveReasonOtherInput, () => {
  if (leaveReasonOther.value) {
    leaveReasonOtherTypingStarted.value = true
  }
})

const validLeaveReasonOtherData = computed(() => validateLatinCharacters(leaveReasonOther.value) && validateText(leaveReasonOther.value))

const validData = computed(() => {
  return (leaveReason.value && leaveReason.value?.id !== "other" ||
  leaveReason.value?.id === "other" && validLeaveReasonOtherData.value) &&
  subscribeNews.value !== null && subscribeCommercial.value !== null
})
</script>

<template>
  <main 
    class="Content"
    :class="{'flexColumnCenter' : success}"
  >
    <Head>
      <Title>#Framed in Belarus</Title>
      <Meta name="description" content="User cabinet — My embroideries description"/>
    </Head>
    <div 
      v-if="!success"
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
          for="leaveReasonDropdown" 
          class="flexRowStart"
        >
          {{ $t('feedbackPage.dropdownReason.label') }}
        </label>
        <div class="leaveReasonWrapper">
          <GeneralInputLongDropdown
            id="leaveReasonDropdown"
            class="contentInput leaveReasonDropdown"
            :options="leaveReasonOptions"
            :placeholder="$t('feedbackPage.dropdownReason.placeholder')" 
            :isRegistration="true"
            v-model="leaveReason"
          />
          <div 
            v-if="leaveReason?.id === 'other'"
            class="inputWrapper inputWrapperWarningBottom"
          >
            <textarea 
              type="text" 
              name="leaveReasonOther" 
              id="leaveReasonOther" 
              v-model="leaveReasonOther"
              :placeholder="$t('feedbackPage.dropdownReason.otherPlaceholder')" 
              class="leaveReasonOtherInput"
              :class="{'invalidInput': !validLeaveReasonOtherData && leaveReasonOtherTypingStarted}" 
              ref="leaveReasonOtherInput"
            />
            <span 
              v-if="!validLeaveReasonOtherData && leaveReasonOtherTypingStarted"
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
            class="subscribeNews-item flexRowStart"
          >
            <input
              type="radio"
              name="acceptSubscribeNews"
              id="acceptSubscribeNews"
              :value="true"
              v-model="subscribeNews"
              required
            />
            {{ $t('feedbackPage.optionsNews.option1') }}
          </label>
          <label 
            for="refuseSubscribeNews" 
            class="subscribeNews-item flexRowStart"
          >
            <input
              type="radio"
              name="refuseSubscribeNews"
              id="refuseSubscribeNews"
              :value="false"
              v-model="subscribeNews"
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
            class="subscribeCommercial-item flexRowStart"
          >
            <input
              type="radio"
              name="acceptSubscribeCommercial"
              id="acceptSubscribeCommercial"
              :value="true"
              v-model="subscribeCommercial"
              required
            />
            {{ $t('feedbackPage.optionsFinancial.option1') }}
          </label>
          <label 
            for="refuseSubscribeCommercial" 
            class="subscribeCommercial-item flexRowStart"
          >
            <input
              type="radio"
              name="refuseSubscribeCommercial"
              id="refuseSubscribeCommercial"
              :value="false"
              v-model="subscribeCommercial"
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
      v-else
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
  </main>
</template>

<style src="./Feedback.scss" lang="scss"></style>
