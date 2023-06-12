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
        {{ $t('cookies') }}
      </p>
      <div>
        <button 
          class="button"
          @click="showBar = false"
        >
          {{ $t('buttons.accept') }}
        </button>
        <button 
          class="button"
          @click="showBar = false"
        >
          {{ $t('buttons.decline') }}
        </button>
        <button 
          class="button"
          @click="showBar = false"
        >
          {{ $t('buttons.manage') }}
        </button>
      </div>
    </div>
  </div>
</template>

<style src="./CookieBar.scss" lang="scss" scoped></style>
