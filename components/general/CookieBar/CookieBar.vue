<script>
export default {
  data () {
    return {
      showBar: true
    }
  }
}
</script>

<template>
  <div 
    v-if="showBar"
    class="cookieBarWrapper flexRowStart"
  >
    <div class="content flexRowStart">
      <p>
        For measurements services of Framed in Belarus website, and to improve our services for you, we use tools that use cookies.
      </p>
      <div>
        <button 
          class="button"
          @click="showBar = false"
        >
          Accept
        </button>
        <button 
          class="button"
          @click="showBar = false"
        >
          Decline
        </button>
        <button 
          class="button"
          @click="showBar = false"
        >
          Manage
        </button>
      </div>
    </div>
  </div>
</template>

<style src="./CookieBar.scss" lang="scss" scoped></style>
