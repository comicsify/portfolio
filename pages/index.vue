<template>
  <div class="container">
    <div>
      <h1>portfolio</h1>
      <h2>A static portfolio and blog</h2>
      <div>
        <author-list :authors="authors"></author-list>
      </div>
    </div>
  </div>
</template>
<script>
import AuthorList from '~/components/pages/author-list'
export default {
  layout: 'blog',
  components: {
    AuthorList
  },
  data() {
    return {
      authors: [
        {
          name: 'Thorn',
          id: 'thorn'
        },
        {
          name: 'Boulet',
          id: 'boulet'
        },
        {
          name: 'Arnold',
          id: 'arnold'
        }
      ]
    }
  }
}
</script>
<style>
.container {
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
