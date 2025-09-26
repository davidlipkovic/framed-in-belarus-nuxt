import dayjs from 'dayjs'
import 'dayjs/locale/en'
import 'dayjs/locale/ru'
import 'dayjs/locale/be'

export default defineNuxtPlugin(nuxtApp => {
  dayjs.locale('en')

  nuxtApp.provide('dayjs', dayjs)
})
