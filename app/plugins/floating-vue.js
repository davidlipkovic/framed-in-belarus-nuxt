import FloatingVue from 'floating-vue'

export default defineNuxtPlugin(() => {
  FloatingVue.options.themes['card-tooltip'] = {
    $extend: 'tooltip',
    $resetCss: false,
  }
})
