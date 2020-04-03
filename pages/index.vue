<template>
  <div class="container">
    <div>
      <h1>portfolio</h1>
      <h2>A static portfolio and blog</h2>
      <div>
        <author-list></author-list>
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
      authors: ['jean', 'alice', 'esther', 'pierre']
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
