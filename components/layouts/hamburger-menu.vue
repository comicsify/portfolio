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
    <ul>
      <li v-for="(item, index) in localItems" :key="index">
        <nuxt-link :to="{ path: item.link, query: item.parameters }">{{
          item.name
        }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<style scoped>
div {
  color: red;
}
</style>
