import { useCurrentLocale } from "@/composables/CurrentLocale"

export function useConvertDate() {
  const { $dayjs } = useNuxtApp()
  const { currentLocaleName } = useCurrentLocale()

  const convertToJsDate = (date) => {
    let msec = Date.parse(date)
    return new Date(msec)
  }

  const convertDateToReadable = (date, format = 'DD MMMM YYYY') => {
    const convertedDate = convertToJsDate(date)
    let day = convertedDate.getDate()
    let year = convertedDate.getFullYear()

    if (format === 'DD.MM.YYYY') {
      return `${day}.${convertedDate.getMonth() + 1}.${year}`
    } else if (format === 'DD.MM') {
      return `${day}.${convertedDate.getMonth() + 1}.`
    } else {
      let month

      if (currentLocaleName.value === 'RUS') {
        month = convertedDate.toLocaleString('ru-RU', { month: 'long' })
      } else if (currentLocaleName.value === 'BEL') {      
        month = $dayjs(date).format('MMMM')
      } else {
        month = convertedDate.toLocaleString('en-US', { month: 'long' })
      }

      return `${day} ${month} ${year}`
    }
  }

  const convertToEventDate = (startDate, endDate) => {    
    if (!startDate || !endDate) {
      return
    }

    const endDateFormatted = convertDateToReadable(endDate, 'DD.MM.YYYY')

    if (startDate === endDate) {
      return endDateFormatted
    }

    const startYear = new Date(startDate).getFullYear()
    const endYear = new Date(endDate).getFullYear()
    
    const startDateFormatted = convertDateToReadable(startDate, startYear === endYear ? 'DD.MM' : 'DD.MM.YYYY')
    
    return `${startDateFormatted} - ${endDateFormatted}`
  }

  return {
    convertDateToReadable,
    convertToEventDate,
  }
}
