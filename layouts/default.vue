<script setup lang="ts">
</script>

<template>
  <div class="layout containsPointerUp">
    <GeneralMainMenu/>
    <slot/>
    <GeneralPointerUp/>
    <GeneralMainFooter/>
    <GeneralCookieBar/>
  </div>
</template>
