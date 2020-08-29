<script>
export default {
  name: `page-viewer`,
  props: {
    src: { type: String, required: true },
    next: { type: String, required: true },
    prev: { type: String, required: true }
  }
}
</script>

<template>
  <div>
    <img v-bind:src="src" />
  </div>
</template>

<style scoped>
img {
  border: 1px solid red;
}
</style>
