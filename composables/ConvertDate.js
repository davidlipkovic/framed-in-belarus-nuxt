import { useCurrentLocale } from "@/composables/CurrentLocale"

export function useConvertDate() {
  const { currentLocaleName } = useCurrentLocale()

  const convertToJsDate = (date) => {
    let msec = Date.parse(date)
    return new Date(msec)
  }
  
  const convertDateToReadable = (date) => {
    date = convertToJsDate(date)
    let localeToConvertTo = null

    if (currentLocaleName.value === 'RUS') {
      localeToConvertTo = 'ru-RU'
    } else if (currentLocaleName.value === 'BEL') {
      localeToConvertTo = 'be'
    } else {
      localeToConvertTo = 'en-US'
    }

    return date.getDay() + ' ' + date.toLocaleString(localeToConvertTo, { month: 'long' }) + ' ' + date.getFullYear()
  }

  return {
    convertDateToReadable,
  }
}
