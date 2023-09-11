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

<style src="../assets/style/form.scss" lang="scss" scoped></style>
