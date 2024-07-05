import { useCurrentLocale } from "@/composables/CurrentLocale"

export function useConvertDate() {
  const { currentLocaleName } = useCurrentLocale()

  const convertToJsDate = (date) => {
    let msec = Date.parse(date)
    return new Date(msec)
  }

  const convertDateToReadable = (date, format = 'DD MMMM YYYY') => {
    date = convertToJsDate(date)
    let localeToConvertTo = null

    if (currentLocaleName.value === 'RUS') {
      localeToConvertTo = 'ru-RU'
    } else if (currentLocaleName.value === 'BEL') {
      localeToConvertTo = 'be'
    } else {
      localeToConvertTo = 'en-US'
    }

    let day = date.getDate()
    let month = date.toLocaleString(localeToConvertTo, { month: 'long' })
    let year = date.getFullYear()

    if (format === 'DD.MM.YYYY') {
      return `${day}.${date.getMonth() + 1}.${year}`
    } else if (format === 'DD.MM') {
      return `${day}.${date.getMonth() + 1}.`
    } else if (format === 'DD MMMM YYYY') {
      return `${day} ${month} ${year}`
    } else {
      // Default to 'DD MMMM YYYY' if an unrecognized format is passed
      return `${day} ${month} ${year}`
    }
  }

  return {
    convertDateToReadable,
  }
}
