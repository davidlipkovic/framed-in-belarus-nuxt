<script setup>
// WIP
import { onMounted, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import useCookiesStore from "@/stores/cookies"

const router = useRouter()
const cookiesStore = useCookiesStore()

const showCookieConsent = ref(false);
const showPreferences = ref(false);
const preferences = ref({
  functional: true,
  analytics: false,
});

const hasAcceptedCookies = () => localStorage.getItem('cookiesAccepted') === 'true';
const getCookiePreferences = () => JSON.parse(localStorage.getItem('cookiePreferences') || '{}');

const loadGoogleAnalytics = () => {
  // return
  if (preferences.value.analytics && typeof gtag === 'undefined') {
    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtag/js?id=G-FMW33NJ4WM`
    script.async = true;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag() { window.dataLayer.push(arguments); }
    window.gtag = gtag;

    gtag('js', new Date());
    gtag('config', 'G-FMW33NJ4WM', {
      page_path: router.currentRoute.value.fullPath,
    });
  }

  // Track page views on route change
  router.afterEach((to) => {
    if (typeof gtag !== 'undefined') {
      gtag('config', 'G-FMW33NJ4WM', {
        page_path: to.fullPath,
      });
    }
  });
};

const acceptCookies = (all) => {
  // return
  if (all) {
    preferences.value.analytics = true;
    savePreferences();
  } else {
    showPreferences.value = true;
  }
};

const savePreferences = () => {
  // return
  localStorage.setItem('cookiesAccepted', 'true');
  localStorage.setItem('cookiePreferences', JSON.stringify(preferences.value));
  showCookieConsent.value = false;
  if (preferences.value.analytics) {
    loadGoogleAnalytics();
  }
};

onMounted(() => {
  // return
  const accepted = hasAcceptedCookies();
  const prefs = getCookiePreferences();
  if (accepted && prefs.analytics) {
    preferences.value = prefs;
    loadGoogleAnalytics();
  } else {
    showCookieConsent.value = true;
  }
});
</script>

<template>
  <div 
    v-if="showCookieConsent"
    class="cookieBarWrapper content flexRowCenter"
  >
    <p>
      This site uses cookies to improve your experience. By clicking "Accept All", you agree to our use of cookies. You can manage your preferences or read our <a href="/#" target="_blank">Cookie Policy</a>.
    </p>
    <div>
      <button 
        class="button"
        @click="cookiesStore.isChecked = true, acceptCookies(true)"
      >
        {{ $t('buttons.accept') }}
      </button>
      <button 
        class="button"
        @click="cookiesStore.isChecked = true, acceptCookies(false)"
      >
        {{ $t('buttons.decline') }}
      </button>
      <button 
        class="button"
        @click="cookiesStore.isChecked = true, acceptCookies(false)"
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
          manage preferences
        </h2>
        <button
          @click="showPreferences = false"
          class="closeButton"
        >
          <SvgClose/>
        </button>
      </div>
      <div class="inputModalBody">
        <div class="inputModalItem checkBoxWrapper flexRowCenter">
          <label for="functionalCookies">
            Functional Cookies
          </label>
          <input 
            id="functionalCookies"
            type="checkbox" 
            v-model="preferences.functional"
            disabled
          >
        </div>
        <div class="inputModalItem checkBoxWrapper flexRowCenter">
          <label for="analyticsCookies">
            Analytics Cookies
          </label>
          <input 
            id="analyticsCookies"
            type="checkbox" 
            v-model="preferences.analytics"
          >
        </div>
      </div>
      <div class="inputModalFooter buttons">
        <button 
          class="button bg_black"
          @click="cookiesStore.isChecked = true, acceptCookies(true)"
        >
          {{ $t('buttons.accept') }}
        </button>
        <button 
          class="button bg_black"
          @click="cookiesStore.isChecked = true, acceptCookies(false)"
        >
          {{ $t('buttons.decline') }}
        </button>
      </div>
    </div>
  </GeneralInputModal>
</template>

<style src="./CookieBar.scss" lang="scss" scoped></style>
