<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from "@/stores/user"

const userStore = useUserStore()

const emit = defineEmits([
  'closeModal',
])

const router = useRouter()

const signOut = () => {
  router.go(0)
  userStore.isLogged = false
  emit('closeModal')
}

const root = ref(null)
onClickOutside(root, () => {
  emit('closeModal')
})
</script>

<template>
  <div 
    class="profileModalWrapper dropdownMenuWrapper flexColumnStart"
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
