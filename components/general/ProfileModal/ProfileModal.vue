<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from "@/stores/user"

const userStore = useUserStore()

const emit = defineEmits([
  'closeModal',
])

const router = useRouter()

const signOut = async () => {
  if (window.localStorage) {
    let data = window.localStorage.getItem('fibUser')
    data = JSON.parse(data)

    if (data) {
      data.remember = false
      window.localStorage.setItem('fibUser', JSON.stringify(data))
    }
  }
  
  emit('closeModal')
  userStore.currentUser = null
  userStore.currentUserAuthorizationData = null
  router.go(0)
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
    >
    <span
      class="profileModalWrapperName"
    >
      {{ userStore.currentUser.username }}
    </span>
    <nuxt-link
      :to="localePath('/Profile')"
      class="profileModalWrapperProfileLink flexRowStart"
    >
      <span>
        {{ $t('links.profile') }}
      </span>
    </nuxt-link>
    <nuxt-link
      :to="localePath('/')"
      class="profileModalWrapperSignOut flexRowStart"
      @click.prevent="signOut()"
    >
      <span>
        {{ $t('links.signOut') }}
      </span>
    </nuxt-link>
  </div>
</template>

<style src="./ProfileModal.scss" lang="scss"></style>
