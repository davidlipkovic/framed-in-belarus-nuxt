<script setup>
import { computed, ref } from 'vue'
import { useUserStore } from "@/stores/user"
import { useValidateInputs } from "@/composables/ValidateInputs"

const { validateLatinCharacters, validateText} = useValidateInputs()

const userStore = useUserStore()

definePageMeta({
  layout: "form"
})

const success = ref(false)

const commentProfessionalPhotos = ref(null)
const commentProfessionalPhotosInput = ref(null)
const commentProfessionalPhotosTypingStarted = ref(false)

const commentComments = ref(null)
const commentCommentsInput = ref(null)
const commentCommentsTypingStarted = ref(false)

const commentProcessPhotos = ref(null)
const commentProcessPhotosInput = ref(null)
const commentProcessPhotosTypingStarted = ref(false)

const commentOther = ref(null)
const commentOtherInput = ref(null)
const commentOtherTypingStarted = ref(false)

const validCommentProfessionalPhotosData = computed(() => validateLatinCharacters(commentProfessionalPhotos.value) && validateText(commentProfessionalPhotos.value))
const validCommentCommentsData = computed(() => validateLatinCharacters(commentComments.value) && validateText(commentComments.value))
const validCommentProcessPhotosData = computed(() => validateLatinCharacters(commentProcessPhotos.value) && validateText(commentProcessPhotos.value))
const validCommentOtherData = computed(() => validateLatinCharacters(commentOther.value) && validateText(commentOther.value))

const validData = computed(() => validCommentProfessionalPhotosData.value && validCommentCommentsData.value && validCommentProcessPhotosData.value && validCommentOtherData.value)

const submitForm = async () => {
  success.value = true
}

onClickOutside(commentProfessionalPhotosInput, () => {
  if (commentProfessionalPhotos.value) {
    commentProfessionalPhotosTypingStarted.value = true
  }
})

onClickOutside(commentCommentsInput, () => {
  if (commentComments.value) {
    commentCommentsTypingStarted.value = true
  }
})

onClickOutside(commentProcessPhotosInput, () => {
  if (commentProcessPhotos.value) {
    commentProcessPhotosTypingStarted.value = true
  }
})

onClickOutside(commentOtherInput, () => {
  if (commentOther.value) {
    commentOtherTypingStarted.value = true
  }
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
      class="content correctionsContent"
    >
      <h1 class="title">
        {{ $t('correctionsPage.title') }}
      </h1>
      <p class="description">
        {{ $t('correctionsPage.description') }}
      </p>
      <div class="formWrapper flexColumnStart">
        <label
          for="publishUsername" 
          class="flexRowStart"
        >
          {{ $t('correctionsPage.inputCommentProfessionalPhotos.label') }}
        </label>
        <div class="inputWrapper inputWrapperWarningBottom">
          <textarea 
            type="text" 
            name="commentProfessionalPhotos" 
            id="commentProfessionalPhotos" 
            v-model="commentProfessionalPhotos"
            :placeholder="$t('correctionsPage.inputCommentProfessionalPhotos.placeholder')" 
            class="commentProfessionalPhotosInput"
            :class="{'invalidInput': !validCommentProfessionalPhotosData && commentProfessionalPhotosTypingStarted}" 
            ref="commentProfessionalPhotosInput"
          />
          <span 
            v-if="!validCommentProfessionalPhotosData && commentProfessionalPhotosTypingStarted"
            class="warningNotification note red"
          >
            {{ $t('invalidInputs.enterComment') }}
          </span>
        </div>
        <label
          for="commentComments" 
          class="flexRowStart"
        >
          {{ $t('correctionsPage.inputCommentComments.label') }}
        </label>
        <div class="inputWrapper inputWrapperWarningBottom">
          <textarea 
            type="text" 
            name="commentComments" 
            id="commentComments" 
            v-model="commentComments"
            :placeholder="$t('correctionsPage.inputCommentComments.placeholder')" 
            class="commentCommentsInput"
            :class="{'invalidInput': !validCommentCommentsData && commentCommentsTypingStarted}" 
            ref="commentCommentsInput"
          />
          <span 
            v-if="!validCommentCommentsData && commentCommentsTypingStarted"
            class="warningNotification note red"
          >
            {{ $t('invalidInputs.enterComment') }}
          </span>
        </div>
        <label
          for="commentProcessPhotos" 
          class="flexRowStart"
        >
          {{ $t('correctionsPage.inputCommentProcessPhotos.label') }}
        </label>
        <div class="inputWrapper inputWrapperWarningBottom">
          <textarea 
            type="text" 
            name="commentProcessPhotos" 
            id="commentProcessPhotos" 
            v-model="commentProcessPhotos"
            :placeholder="$t('correctionsPage.inputCommentProcessPhotos.placeholder')" 
            class="commentProcessPhotosInput"
            :class="{'invalidInput': !validCommentProcessPhotosData && commentProcessPhotosTypingStarted}" 
            ref="commentProcessPhotosInput"
          />
          <span 
            v-if="!validCommentProcessPhotosData && commentProcessPhotosTypingStarted"
            class="warningNotification note red"
          >
            {{ $t('invalidInputs.enterComment') }}
          </span>
        </div>
        <label
          for="commentOther" 
          class="flexRowStart"
        >
          {{ $t('correctionsPage.inputCommentOther.label') }}
        </label>
        <div class="inputWrapper inputWrapperWarningBottom">
          <textarea 
            type="text" 
            name="commentOther" 
            id="commentOther" 
            v-model="commentOther"
            :placeholder="$t('correctionsPage.inputCommentOther.placeholder')" 
            class="commentOtherInput"
            :class="{'invalidInput': !validCommentOtherData && commentOtherTypingStarted}" 
            ref="commentOtherInput"
          />
          <span 
            v-if="!validCommentOtherData && commentOtherTypingStarted"
            class="warningNotification note red"
          >
            {{ $t('invalidInputs.enterComment') }}
          </span>
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
      class="content correctionsContent correctionsSuccessContent flexColumnCenter"
    >
      <SvgCheckMark/>
      <h1 class="title">
        {{ $t('correctionsPage.success.title') }}
      </h1>
      <p class="description">
        {{ $t('correctionsPage.success.description') }}
      </p>
    </div>
  </main>
</template>

<style src="./Corrections.scss" lang="scss"></style>
