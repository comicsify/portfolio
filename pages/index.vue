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
import * as Authors from '~/helpers/authors.js'
import AuthorList from '~/components/pages/author-list'

export default {
  layout: 'blog',
  components: {
    AuthorList
  },
  data() {
    return {
      authors: []
    }
  },
  async asyncData(context) {
    const authorsList = await Authors.list()
    return {
      authors: authorsList
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
