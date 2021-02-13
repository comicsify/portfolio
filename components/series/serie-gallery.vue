<script>
import pageMiniature from '~/components/pages/page-miniature'
export default {
  name: `serie-gallery`,
  components: {
    pageMiniature
  },
  props: {
    pages: { type: Array, required: true }
  },
  data() {
    return {
      selected: 'no selection'
    }
  }
}
</script>

<template>
  <div class="gallery">
    <div v-for="page in pages" :key="page.id" class="card">
      <page-miniature
        v-on:click="selected = 12"
        :src="page.src"
      ></page-miniature>
    </div>
  </div>
</template>

<style scoped>
.gallery {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}

.card {
  margin: 10px;
  width: 200px;
}
</style>
