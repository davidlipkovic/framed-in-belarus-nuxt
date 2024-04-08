<script setup>
const props = defineProps({
  alt: String,
  iconImageUrl: String,
})
</script>

<template>
  <div class="imagePreviewWrapper flexRowCenter">
    <img
      src="../../../assets/media/img/case1/proces1.jpg"
      :alt="alt"
    />
    <button class="flexRowCenter">
      <SvgClose/>
    </button>
  </div>
</template>

<style src="./ImagePreview.scss" lang="scss"></style>
