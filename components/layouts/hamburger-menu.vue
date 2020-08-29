<script>
export default {
  name: `hamburger-menu`,
  props: {
    items: {
      type: Array,
      default() {
        return [1, 2, 3]
      }
    }
  },
  data() {
    return {
      localItems: this.items
    }
  }
}
</script>
<template>
  <div>
    <h2>HAMBURGER</h2>
    {{ localItems }}
  </div>
</template>

<style scoped>
div {
  color: red;
}
</style>
