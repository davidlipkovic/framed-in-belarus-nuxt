<script setup lang="ts">
</script>

<template>
  <div>
    <RegistrationMainMenu/>
    <main class="Content flexRowCenter">
      <RegistrationEmbroiderer/>
      <slot/>
    </main>
    <GeneralCookieBar/>
  </div>
</template>
