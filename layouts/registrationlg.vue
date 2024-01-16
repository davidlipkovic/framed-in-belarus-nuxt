<script setup lang="ts">
</script>

<template>
  <div class="registrationlgLayout registrationlg">
    <RegistrationMainMenu/>
    <main class="Content">
      <RegistrationEmbroiderer/>
      <slot/>
    </main>
    <GeneralCookieBar/>
  </div>
</template>
