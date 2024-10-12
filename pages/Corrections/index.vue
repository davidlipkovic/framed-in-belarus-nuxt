<script setup>
import { computed, ref } from 'vue'
import useUserStore from "@/stores/user"

const userStore = useUserStore()

definePageMeta({
  layout: "form"
})

const success = ref(false)
const publishStudioPhotosSignature = ref(null)
const publishComments = ref(null)
const publishProcessPhotosPersonalData = ref(null)
const exhibitSignature = ref(null)

const validData = computed(() => 
  publishStudioPhotosSignature.value !== null && 
  publishComments.value !== null && 
  publishProcessPhotosPersonalData.value !== null && 
  exhibitSignature.value !== null 
)

const submitForm = async () => {
  success.value = true
}
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
        <div class="radioWrapper">
          <p class="b1">
            {{ $t('correctionsPage.inputStudioPhotos.title') }}
          </p>
          <label 
            for="publishStudioPhotosSignature"
            class="flexRowStart"
          >
            <input
              type="radio"
              name="publishStudioPhotosSignature"
              id="acceptSubscribeNews"
              :value="true"
              v-model="publishStudioPhotosSignature"
              required
            />
            {{ $t('correctionsPage.inputStudioPhotos.option1') }}
          </label>
          <label 
            for="publishStudioPhotosHiddenSignature" 
            class="flexRowStart"
          >
            <input
              type="radio"
              name="publishStudioPhotosHiddenSignature"
              id="publishStudioPhotosHiddenSignature"
              :value="false"
              v-model="publishStudioPhotosSignature"
              required
            />
            {{ $t('correctionsPage.inputStudioPhotos.option2') }}
          </label>
        </div>
        <div class="radioWrapper">
          <p class="b1">
            {{ $t('correctionsPage.inputComments.title') }}
          </p>
          <label 
            for="publishCommentsPersonalData"
            class="flexRowStart"
          >
            <input
              type="radio"
              name="publishCommentsPersonalData"
              id="publishCommentsPersonalData"
              :value="'personalData'"
              v-model="publishComments"
              required
            />
            {{ $t('correctionsPage.inputComments.option1') }}
          </label>
          <label 
            for="publishCommentsNoPersonalData" 
            class="flexRowStart"
          >
            <input
              type="radio"
              name="publishCommentsNoPersonalData"
              id="publishCommentsNoPersonalData"
              :value="'noPersonalData'"
              v-model="publishComments"
              required
            />
            {{ $t('correctionsPage.inputComments.option2') }}
          </label>
          <label 
            for="noPublishComments" 
            class="flexRowStart"
          >
            <input
              type="radio"
              name="noPublishComments"
              id="noPublishComments"
              :value="false"
              v-model="publishComments"
              required
            />
            {{ $t('correctionsPage.inputComments.option3') }}
          </label>
        </div>
        <div class="radioWrapper">
          <p class="b1">
            {{ $t('correctionsPage.inputProcessPhotos.title') }}
          </p>
          <label 
            for="publishProcessPhotosPersonalData"
            class="flexRowStart"
          >
            <input
              type="radio"
              name="publishProcessPhotosPersonalData"
              id="publishProcessPhotosPersonalData"
              :value="true"
              v-model="publishProcessPhotosPersonalData"
              required
            />
            {{ $t('correctionsPage.inputProcessPhotos.option1') }}
          </label>
          <label 
            for="publishProcessPhotosNoPersonalData" 
            class="flexRowStart"
          >
            <input
              type="radio"
              name="publishProcessPhotosNoPersonalData"
              id="publishProcessPhotosNoPersonalData"
              :value="false"
              v-model="publishProcessPhotosPersonalData"
              required
            />
            {{ $t('correctionsPage.inputProcessPhotos.option2') }}
          </label>
        </div>
        <div class="radioWrapper">
          <p class="b1">
            {{ $t('correctionsPage.inputOriginalEmbroidery.title') }}
          </p>
          <label 
            for="exhibitSignature"
            class="flexRowStart"
          >
            <input
              type="radio"
              name="exhibitSignature"
              id="exhibitSignature"
              :value="true"
              v-model="exhibitSignature"
              required
            />
            {{ $t('correctionsPage.inputOriginalEmbroidery.option1') }}
          </label>
          <label 
            for="exhibitNoSignature" 
            class="flexRowStart"
          >
            <input
              type="radio"
              name="exhibitNoSignature"
              id="exhibitNoSignature"
              :value="false"
              v-model="exhibitSignature"
              required
            />
            {{ $t('correctionsPage.inputOriginalEmbroidery.option2') }}
            <SvgHelpCircleThick
              v-tooltip="$t('correctionsPage.inputOriginalEmbroidery.option2Tooltip')"
            />
          </label>
        </div>
        <p>
          {{ $t('correctionsPage.additionalInfo.content1') }}<a href="mailto:framedinbelarus@gmail.com">{{ $t('correctionsPage.additionalInfo.highlight') }}</a>{{ $t('correctionsPage.additionalInfo.content2') }}
        </p>
      </div>
      <div class="buttons flexRowStart">
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
