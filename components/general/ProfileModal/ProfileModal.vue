<script setup>
import { ref } from 'vue'
import useUserStore from "@/stores/user"

const userStore = useUserStore()

const emit = defineEmits([
  'closeModal',
])

const signOut = async () => {
  emit('closeModal')
  userStore.signOut()
}

const root = ref(null)
onClickOutside(root, () => {
  emit('closeModal')
})
</script>

<template>
  <div 
    class="profileModalWrapper flexColumnCenter"
    ref="root"
  >
    <img
      src="../../../assets/media/img/profileSymbolFramed.svg"
      alt=""
    >
    <span
      v-if="userStore.user.username"
      class="profileModalWrapperName"
    >
      {{ userStore.user.username }}
    </span>
    <nuxt-link
      :to="$localePath('/Profile')"
      class="profileModalWrapperProfileLink flexRowStart"
    >
      <span>
        {{ $t('links.profile') }}
      </span>
    </nuxt-link>
    <button
      class="profileModalWrapperSignOut flexRowStart"
      @click="signOut()"
    >
      <span>
        {{ $t('links.signOut') }}
      </span>
    </button>
  </div>
</template>

<style src="./ProfileModal.scss" lang="scss"></style>
