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
  analytics: false,
});

const hasAcceptedCookies = () => localStorage.getItem('cookiesAccepted') === 'true';
const getCookiePreferences = () => JSON.parse(localStorage.getItem('cookiePreferences') || '{}');

const loadGoogleAnalytics = () => {
  return
  if (preferences.value.analytics && typeof gtag === 'undefined') {
    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtag/js?id=UA-XXXXXXXXX-X`; // Replace with your tracking ID
    script.async = true;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag() { window.dataLayer.push(arguments); }
    window.gtag = gtag;

    gtag('js', new Date());
    gtag('config', 'UA-XXXXXXXXX-X', {
      page_path: router.currentRoute.value.fullPath,
    });
  }

  // Track page views on route change
  router.afterEach((to) => {
    if (typeof gtag !== 'undefined') {
      gtag('config', 'UA-XXXXXXXXX-X', {
        page_path: to.fullPath,
      });
    }
  });
};

const acceptCookies = (all) => {
  return
  if (all) {
    preferences.value.analytics = true;
    savePreferences();
  } else {
    showPreferences.value = true;
  }
};

const savePreferences = () => {
  return
  localStorage.setItem('cookiesAccepted', 'true');
  localStorage.setItem('cookiePreferences', JSON.stringify(preferences.value));
  showCookieConsent.value = false;
  if (preferences.value.analytics) {
    loadGoogleAnalytics();
  }
};

onMounted(() => {
  return
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
    class="cookieBarWrapper flexRowStart"
  >
    <div 
      v-if="!showPreferences"
      class="content flexRowStart"
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
    <div v-if="showPreferences">
      <label>
        <input type="checkbox" v-model="preferences.analytics"> Allow Analytics Cookies
      </label>
      <button @click="savePreferences()">Save Preferences</button>
    </div>
  </div>
</template>

<style src="./CookieBar.scss" lang="scss" scoped></style>
