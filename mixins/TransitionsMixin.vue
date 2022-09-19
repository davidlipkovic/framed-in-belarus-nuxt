<script>
export default {
  methods: {
    enter(mainEl) {
      let element = this.$refs[mainEl]
      element.style.width = getComputedStyle(element).width
      element.style.position = 'absolute'
      element.style.visibility = 'hidden'
      element.style.height = 'auto'
      const height = getComputedStyle(element).height
      element.style.width = null
      element.style.position = null
      element.style.visibility = null
      element.style.height = 0
      getComputedStyle(element).height
      requestAnimationFrame(() => {
        element.style.height = height
      })
    },
    leave(mainEl) {
      let element = this.$refs[mainEl]
      element.style.height = getComputedStyle(element).height
      getComputedStyle(element).height
      requestAnimationFrame(() => {
        element.style.height = 0
      })
    }
  }
}
</script>
