<script setup>
import { ref, onMounted, computed } from 'vue'

const GTM_ID = 'GTM-W6H2NPZK'
const consentKey = 'cookieConsent'
const consentSet = ref(true)
const showPreferences = ref(false)
const cookieFunctional = ref(true)
const cookieAnalytics = ref(false)

function getCookie(key, length = 60 * 60 * 24 * 365) {
  var now = new Date()
  var time = now.getTime()
  var expireTime = time + 1000 * 365
  now.setTime(expireTime)

  return useCookie(key, {
    maxAge: length,
  })
}

function acceptCookies() {
  const cookie = getCookie(consentKey)
  cookie.value = 'accepted'
  cookieAnalytics.value = true
  consentSet.value = true
  injectGTMAndTrack()
}

function declineCookies() {
  const cookie = getCookie(consentKey)
  cookie.value = 'declined'
  cookieAnalytics.value = false
  consentSet.value = true
}

const handlePreferences = () => {
  if (cookieAnalytics.value) {
    acceptCookies()
  } else {
    declineCookies()
  }

  showPreferences.value = false
}

function injectGTMAndTrack() {
  if (document.getElementById('gtm-script')) return

  // Set up dataLayer
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({
    event: 'websiteVisited',
  })

  // Inject GTM script
  const script = document.createElement('script')
  script.id = 'gtm-script'
  script.innerHTML = `
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','${GTM_ID}');
  `.trim()
  document.head.appendChild(script)

  // Optional: <noscript> fallback for users without JS (doesn’t matter if you don’t care)
}

onMounted(() => {
  const cookie = useCookie(consentKey)
  if (!cookie.value) {
    consentSet.value = false
  } else if (cookie.value === 'accepted') {
    cookieAnalytics.value = true
    // FOR DEV
    // injectGTMAndTrack()
  }
})
</script>

<template>
  <div 
    v-if="!consentSet"
    class="cookieBarWrapper content flexColumnStart"
  >
    <p>
      {{ $t('cookies.barMessage') }}
    </p>
    <div class="flexColumnStart">
      <button 
        class="button"
        @click="acceptCookies()"
      >
        {{ $t('buttons.accept') }}
      </button>
      <button 
        class="button"
        @click="declineCookies()"
      >
        {{ $t('buttons.decline') }}
      </button>
      <button 
        class="button"
        @click="showPreferences = true"
      >
        {{ $t('buttons.manage') }}
      </button>
    </div>
  </div>
  <GeneralInputModal
    class="cookiePreferencesModal"
    :displayModal="showPreferences"
    @closeModal="showPreferences = false"
  >
    <div class="inputModalContentWrapper">
      <div class="inputModalHeader flexRowStart">
        <h2>
          {{ $t('cookies.modal.title') }}
        </h2>
        <button
          @click="showPreferences = false"
          class="closeButton"
        >
          <SvgClose/>
        </button>
      </div>
      <div class="inputModalBody cookiePreferencesModalBody">
        <p class="inputModalItem cookieDetailsLinkWrapper">
          {{ $t('cookies.modal.cookieDetailsLink.content') }} <a href="" target="_blank">{{ $t('cookies.modal.cookieDetailsLink.highlight') }}</a>
        </p>
        <GeneralCookiePreferencesModalItem 
          class="inputModalItem"
          v-model="cookieFunctional"
          :disabled="true"
        >
          <template #label>
            {{ $t('cookies.modal.essentialCookies.label') }}
          </template>
          <template #description>
            {{ $t('cookies.modal.essentialCookies.description.content1') }}
          </template>
        </GeneralCookiePreferencesModalItem>
        <GeneralCookiePreferencesModalItem 
          class="inputModalItem"
          v-model="cookieAnalytics"
        >
          <template #label>
            {{ $t('cookies.modal.performanceCookies.label') }}
          </template>
          <template #description>
            {{ $t('cookies.modal.performanceCookies.description.content1') }}
          </template>
        </GeneralCookiePreferencesModalItem>
      </div>
      <div class="inputModalFooter buttons">
        <button 
          class="button"
          @click="showPreferences = false"
        >
          {{ $t('buttons.cancel') }}
        </button>
        <button 
          class="button bg_black"
          @click="handlePreferences()"
        >
          {{ $t('buttons.save') }}
        </button>
      </div>
    </div>
  </GeneralInputModal>
</template>

<style src="./CookieBar.scss" lang="scss" scoped></style>
