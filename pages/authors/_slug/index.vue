<script>
import * as Authors from '~/helpers/authors.js'

export default {
  name: `page-stories`,
  layout: 'blog',
  data() {
    return {
      slug: `auteur`,
      name: `Auteur`
    }
  },
  async asyncData(context) {
    const { params } = context
    const { slug } = params
    const name = await Authors.name(slug)
    return {
      slug,
      name
    }
  }
}
</script>

<template>
  <div>Bienvenue sur la liste des histoires de {{ name }} ( {{ slug }})</div>
</template>
