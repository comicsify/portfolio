<script>
export default {
  name: `page-miniature`,
  props: {
    src: { type: String, required: true }
  }
}
</script>

<template>
  <div class="thumbnail">
    <img v-bind:src="src" />
  </div>
</template>

<style scoped>
.thumbnail {
  -webkit-backface-visibility: hidden;
  display: inline-block;
  position: relative;
  margin: 0 auto;
  overflow: hidden;
  background: #000;
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.5);
}
.thumbnail img {
  display: block;
  max-width: 100%;
  width: 180px;
  transition: opacity 0.2s ease-in-out;
}
</style>
