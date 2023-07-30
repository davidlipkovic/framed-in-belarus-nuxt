<script>
</script>

<template>
  <div class="containsPointerUp">
    <GeneralMainMenu
      :showUser="true"
    />
    <slot/>
    <GeneralPointerUp/>
    <GeneralMainFooter
      :showUser="true"
    />
  </div>
</template>
