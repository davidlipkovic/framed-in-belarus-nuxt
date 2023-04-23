<script setup lang="ts">
</script>

<template>
  <div>
    <RegistrationTopHeader/>
    <main class="Content flexRowCenter">
      <RegistrationEmbroiderer/>
      <slot/>
    </main>
  </div>
</template>

<style src="../assets/style/form.scss" lang="scss" scoped></style>
