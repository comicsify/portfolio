<script>
export default {
  name: `AuthorList`,
  props: {
    authors: {
      type: Array,
      required: true
    }
  }
}
</script>

<template>
  <div>
    Liste d'autrices
    <ul>
      <li v-for="author in authors" :key="author.slug">
        <nuxt-link
          :to="{ name: 'authors-slug', params: { slug: author.slug } }"
        >
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
