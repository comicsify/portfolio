<script>
export default {
  name: `AuthorList`,
  props: {
    authors: {
      type: String,
      required: true
    }
  }
}
</script>

<template>
  <div>
    Liste d'autrices
    <ul>
      <li v-for="author in authors" :key="author.name">
        <nuxt-link :to="{ name: 'author-name', params: { name: author.id } }">
          {{ author.name }}
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<style scoped>
body {
  background-color: #ff7877;
}
</style>
