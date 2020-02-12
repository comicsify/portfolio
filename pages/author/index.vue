<script>
import * as authors from '~/helpers/authors.js'
export default {
  name: `page-list-author`,
  data() {
    return {
      authorList: []
    }
  },
  async asyncData() {
    const authorList = await authors.list()
    return { authorList }
  }
}
</script>
<template>
  <div>
    Liste des auteurs :
    <ul>
      <li v-for="author in authorList">{{ author }}</li>
    </ul>
  </div>
</template>
