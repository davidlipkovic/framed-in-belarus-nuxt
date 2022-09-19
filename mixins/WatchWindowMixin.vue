<script>
export default {
  data() {
    return {
      w: null,
      h: null,
      breakpointLarge: 1024,
      breakpointSmall: 600
    }
  },
  methods: {
    changeW(){
      this.w = window.innerWidth
      this.h = window.innerWidth
    },
  },
  mounted() {
    this.changeW()
    window.addEventListener('resize', this.changeW)
  }
}
</script>
