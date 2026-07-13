<script setup lang="ts">
import type { NuxtError } from '#app'
const { $getPreviousRoute } = useNuxtApp()
import { onMounted, ref, computed, watch } from 'vue'
import { useRouter } from 'vue-router'

definePageMeta({
  layout: "clean"
})

const router = useRouter()

const urls = new Map([
  ['/Events/Article/recg7IRh7k0MypZTt', '/Events/Article/vyzyvanka-2022'],
  ['/Events/Article/recwAzxhe8J3bkNw8', '/Events/Article/politics-in-art-2022'],
  ['/Events/Article/recgINF4qgrVy3dR1', '/Events/Article/ein-roter-faden-2022'],
  ['/Events/Article/reccAZqAUDf41eplZ', '/Events/Article/charlemagne-prize-in-aachen-2022'],
  ['/Events/Article/rec63ISKvjfgn5GG4', '/Events/Article/folklore-is-not-dead-2022'],
  ['/Events/Article/recG97ijy5xboV66q', '/Events/Article/appunti-su-questo-tempo-i-2022'],
  ['/Events/Article/recGBZI3cVXw2tkSo', '/Events/Article/the-little-bird-must-be-caught-2022'],
  ['/Events/Article/reczevd5TGaCvPRbi', '/Events/Article/outpost-2022'],
  ['/Events/Article/reciRjKtpogiZvLAn', '/Events/Article/workshops-at-survival-kit-13'],
  ['/Events/Article/recHZrGSk8aMNjUMz', '/Events/Article/konwerzacje-2022'],
  ['/Events/Article/rec4efcTEiugzVRGA', '/Events/Article/what-is-the-proper-way-to-display-a-flag-2022-2023'],
  ['/Events/Article/recM0X8KmbMtkoYMi', '/Events/Article/appunti-su-questo-tempo-ii-2023'],
  ['/Events/Article/recOahSXLfjuYFL1A', '/Events/Article/white-flag-2023'],
  ['/Events/Article/reczkS7FhAJI5dDdp', '/Events/Article/workshop-at-artreuse'],
  ['/Events/Article/rechQUspXv61LYYJE', '/Events/Article/threads-of-resistance-2023'],
  ['/Events/Article/reckKKqsD4BKei2E6', '/Events/Article/nothing-new-in-the-east-2023'],
  ['/Events/Article/reco8HzI9lHygS5C0', '/Events/Article/pattern-the-grid-and-other-systems-2023'],
  ['/Events/Article/rec0rbH0NGCikh8Wj', '/Events/Article/workshop-at-gask-in-kutna-hora'],
  ['/Events/Article/recnx22Stwb3Vl9C8', '/Events/Article/soft-power-exhibition-and-workshops-at-das-minsk'],
  ['/Events/Article/rec409fUKE8X55wsp', '/Events/Article/ales-pushkin-afterlife-2024'],
  ['/Events/Article/rec4cIOJ4GDolPx6W', '/Events/Article/towards-solidarity-2024'],
  ['/Events/Article/rec233JPCoRJRLbvj', '/Events/Article/workshop-in-art-center-kunstbanken'],
  ['/Events/Article/rec9p87mtU1w0714v', '/Events/Article/workshop-in-brussels'],
  ['/Events/Article/recdMZ3hEIZHbpzgK', '/Events/Article/interwoven-spaces-2024'],
  ['/Events/Article/recLRS29ssELtgBXv', '/Events/Article/art-in-libraries-framedinbelarus-2025-2026'],
  ['/Events/Article/recdAOJGc9nAQbPio', '/Events/Article/vaclav-havel-human-rights-prize-2025'],
  ['/Events/Article/recKwuPVejgbM7sL4', '/Events/Article/18th-textile-triennial-in-odz-2025-2026'],
])

const props = defineProps({
  error: Object as () => NuxtError,
})

console.log('error page')


// const handleError = () => clearError({ redirect: '/' })

const goBack = () => {
  const previousRoute = $getPreviousRoute()

  console.log('goBack', previousRoute)
  

  clearError()

  if (document.referrer.includes(window.location.origin)) {

    clearError({ redirect: previousRoute })
  } else {
    clearError({ redirect: '/' })
  }
}

onMounted(() => {
  let currentPath = window.location.pathname
  let currentLang = ''

  if (currentPath.startsWith('/ru')) {
    currentLang = '/ru'
    currentPath = currentPath.slice(3, currentPath.length)
  } else if (currentPath.startsWith('/bl')) {
    currentLang = '/bl'
    currentPath = currentPath.slice(3, currentPath.length)
  }

  if (urls.has(currentPath)) {
    router.push(currentLang + urls.get(currentPath))
  }
})
</script>

<template>
  <main class="Content flexColumnCenter">
    <div class="content NotFound flexColumnCenter">
      <span class="notFoundIcon">
        404
      </span>
      {{ error }}
      <h1 class="title">
        {{ $t('notFoundPage.title') }}
      </h1>
      <p class="description">
        {{ $t('notFoundPage.subTitle') }}
      </p>
      <div class="buttons flexRowCenter">
        <nuxt-link 
          class="button" 
          @click="goBack()"
        >
          {{ $t('notFoundPage.backButton') }}
        </nuxt-link>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
@use "./assets/style/globalPartials/variables.scss" as *;

.NotFound {
  * {
    text-align: center;
  }

  .notFoundIcon {
    font-family: 'Roboto';
    font-size: 64px;
    color: $grey;
  }

  .title {
    font-family: 'Roboto';
    font-size: 24px;
    font-weight: 400;
    margin-top: 6px;
    margin-bottom: 18px;
  }

  .description {
    margin-bottom: 20px;
  }
}
</style>
