<script setup lang="ts">
</script>

<template>
  <div class="layout">
    <RegistrationMainMenu/>
    <main class="Content flexRowCenter">
      <RegistrationEmbroiderer/>
      <slot/>
    </main>
    <GeneralCookieBar/>
  </div>
</template>
