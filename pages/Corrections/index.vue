<script setup>
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import useUserStore from "@/stores/user"

const route = useRoute()
const userStore = useUserStore()

definePageMeta({
  layout: "form",
  middleware: [
    'auth-registration',
  ],
})

const success = ref(null)
const studioPhoto = ref(null)
const comment = ref(null)
const processPhoto = ref(null)
const embroidery = ref(null)

const validData = computed(() => 
  studioPhoto.value && 
  comment.value && 
  processPhoto.value && 
  embroidery.value 
)

const postEmbroideryCorrections = async () => {
  const data = {
    studioPhoto: studioPhoto.value,
    comment: comment.value,
    processPhoto: processPhoto.value, 
    embroidery: embroidery.value,
  }

  const channel = new BroadcastChannel("corrections-channel")

  if (
    data.studioPhoto === 'Publish with exposed signature' &&
    data.comment === 'Publish with exposed personal data' &&
    data.processPhoto === 'Publish with exposed personal data' &&
    data.embroidery === 'Exhibit with exposed signature'
  ) {
    const isPublished = await userStore.publishEmbroidery(route.query.id)

    if (!isPublished) {
      success.value = false
      channel.postMessage('technicalIssue')
      channel.close()
      return
    }

    success.value = true
    channel.postMessage('published')
    channel.close()
    return
  }

  const correctionsSent = await userStore.postEmbroideryCorrections(route.query.id, data)

  if (!correctionsSent) {
    success.value = false
    channel.postMessage('technicalIssue')
    channel.close()
    return
  }

  success.value = true
  channel.postMessage('correctionsPosted')
  channel.close()
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
            for="studioPhotoExposed"
            class="flexRowStart"
          >
            <input
              type="radio"
              name="studioPhotoExposed"
              id="studioPhotoExposed"
              value="Publish with exposed signature"
              v-model="studioPhoto"
              required
            />
            {{ $t('correctionsPage.inputStudioPhotos.option1') }}
          </label>
          <label 
            for="studioPhotoHidden" 
            class="flexRowStart"
          >
            <input
              type="radio"
              name="studioPhotoHidden"
              id="studioPhotoHidden"
              value="Publish with hidden signature'"
              v-model="studioPhoto"
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
            for="commentExposed"
            class="flexRowStart"
          >
            <input
              type="radio"
              name="commentExposed"
              id="commentExposed"
              value="Publish with exposed personal data"
              v-model="comment"
              required
            />
            {{ $t('correctionsPage.inputComments.option1') }}
          </label>
          <label 
            for="commentHidden" 
            class="flexRowStart"
          >
            <input
              type="radio"
              name="commentHidden"
              id="commentHidden"
              value="Publish with hidden personal data"
              v-model="comment"
              required
            />
            {{ $t('correctionsPage.inputComments.option2') }}
          </label>
          <label 
            for="commentNotPublished" 
            class="flexRowStart"
          >
            <input
              type="radio"
              name="commentNotPublished"
              id="commentNotPublished"
              value="Do not publish"
              v-model="comment"
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
            for="processPhotoExposed"
            class="flexRowStart"
          >
            <input
              type="radio"
              name="processPhotoExposed"
              id="processPhotoExposed"
              value="Publish with exposed personal data"
              v-model="processPhoto"
              required
            />
            {{ $t('correctionsPage.inputProcessPhotos.option1') }}
          </label>
          <label 
            for="processPhotoHidden" 
            class="flexRowStart"
          >
            <input
              type="radio"
              name="processPhotoHidden"
              id="processPhotoHidden"
              value="Publish with hidden personal data"
              v-model="processPhoto"
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
            for="embroideryExposed"
            class="flexRowStart"
          >
            <input
              type="radio"
              name="embroideryExposed"
              id="embroideryExposed"
              value="Exhibit with exposed signature"
              v-model="embroidery"
              required
            />
            {{ $t('correctionsPage.inputOriginalEmbroidery.option1') }}
          </label>
          <label 
            for="embroideryHidden" 
            class="flexRowStart"
          >
            <input
              type="radio"
              name="embroideryHidden"
              id="embroideryHidden"
              value="Exhibit with hidden signature"
              v-model="embroidery"
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
          @click="postEmbroideryCorrections()"
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
