<script>
</script>

<template>
  <div>
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
