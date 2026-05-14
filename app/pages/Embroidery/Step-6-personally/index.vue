<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import useUserStore from "@/stores/user"

const router = useRouter()
const { t } = useI18n()
const userStore = useUserStore()

definePageMeta({
  layout: "embroidery",
  middleware: [
    'heroes',
    'auth-registration',
    'stitching',
    'user-summary',
  ],
})

useHead({
  title: t('embroidery.step6Page.title'),
  meta: [
    { property: 'og:title', content: t('embroidery.step6Page.title'), },
    { name: 'robots', content: 'noindex' }
  ],
})

const comment = ref(null)

const handleCreateShipping = async () => {
  userStore.loading = true

  const body = {
    from: 'presonally',
    how: comment.value
  }

  await userStore.createShipping(body)
  userStore.loading = false
  router.push('/Embroidery/Step-6-processing-shipping')
}
</script>

<template>
  <main class="Content">
    <div class="Title">
      <div class="content">
        <h1>
          <span class="subtitle">
            {{ $t('embroidery.steps.step') }} 6
          <span class="visually-hidden">— </span></span>
          {{ $t('embroidery.step6Page.title') }}
        </h1>
        <GeneralGoBack
          :isEmbroidery="true"
        />
      </div>
    </div>
    <div class="content">
      <EmbroideryNavSteps
        :currentStep="6"
      />
      <section>
        <div class="shippingInstructionWrapper">
          <p>
            {{ $t('embroidery.step6Page.sectionPersonally.content') }}
          </p>
          <label 
            for="comment" 
            class="b1"
          >
            {{ $t('embroidery.step6Page.sectionPersonally.textarea.label') }}
          </label>
          <textarea
            name="comment"
            id="comment"
            :placeholder="$t('embroidery.step6Page.sectionPersonally.textarea.placeholder')" 
            v-model="comment"
          />
        </div>
        <div class="buttons flexColumnCenter">
          <button 
            class="button bg_black" 
            @click="handleCreateShipping()"
          >
            {{ $t('embroidery.step6Page.sectionPersonally.forwardButton') }}
          </button>
        </div>
      </section>
    </div>
  </main>
</template>

<style src="./Step-6-personally.scss" lang="scss" scoped></style>
