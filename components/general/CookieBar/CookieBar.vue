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
  return
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
    class="cookieBarWrapper content flexColumnStart"
  >
    <p>
      {{ $t('cookies.barMessage') }}
    </p>
    <div class="flexColumnStart">
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
          v-model="preferences.functional"
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
          v-model="preferences.analytics"
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
          @click="cookiesStore.isChecked = true, acceptCookies(true)"
        >
          {{ $t('buttons.cancel') }}
        </button>
        <button 
          class="button bg_black"
          @click="cookiesStore.isChecked = true, acceptCookies(false)"
        >
          {{ $t('buttons.save') }}
        </button>
      </div>
    </div>
  </GeneralInputModal>
</template>

<style src="./CookieBar.scss" lang="scss" scoped></style>
