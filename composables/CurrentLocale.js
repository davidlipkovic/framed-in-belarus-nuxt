import { useI18n } from "vue-i18n"

export function useCurrentLocale() {
  const { localeProperties } = useI18n()

  const currentLocaleName = computed(() => {
    return localeProperties.value.name
  })

  return {
    currentLocaleName,
  }
}
