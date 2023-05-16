<script>
// import { onMounted, ref } from 'vue'
//
//   const { locale, locales } = useI18n()
//   const switchLocalePath = useSwitchLocalePath()
//   const availableLocales = computed(() => {
//     return (locales.value).filter(i => i.code !== locale.value)
//   })
//
//   onMounted(() => {
//     console.log(availableLocales)
//   })
import MainLogo from '@/components/general/MainLogo'

export default {
  components: {
    MainLogo
  },
}
</script>

<template>
  <header class="Header_sign">
    <div class="content">
      <GeneralMainLogo/>
      <details class="Lang">
        <summary
          for="Lang"
          role="button"
          aria-role="button"
          class="Lang-button"
        >
          EN
          <img class="arrow" src="@/assets/media/img/arrow.svg" alt="Arrow">
        </summary>
<!--        <div class="Lang-select">-->
<!--          <nuxt-link-->
<!--            v-if="$i18n.locale === 'en'"-->
<!--            :to="switchLocalePath('en')"-->
<!--            class="Burger-menu-item Lang"-->
<!--          >-->
<!--            EN-->
<!--          </nuxt-link>-->
<!--          <nuxt-link-->
<!--            v-if="$i18n.locale === 'ru'"-->
<!--            :to="switchLocalePath('ru')"-->
<!--            class="Burger-menu-item Lang"-->
<!--          >-->
<!--            RU-->
<!--          </nuxt-link>-->
<!--          <a href="/ru" class="Lang-link">Russian</a>-->
<!--        </div>-->
      </details>
    </div>
  </header>
</template>

<style src="./TopHeader.scss" lang="scss" scoped></style>
