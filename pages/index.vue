<template>
  <div class="container">
    <div>
      <h1>{{ firstSerie.name }}</h1>
      <div v-for="page in pages" :key="page.id" class="card">
        <page-miniature :public-id="page.publicId"></page-miniature>
      </div>
    </div>
  </div>
</template>


<script>
import * as Authors from '~/helpers/authors.js'
import pageMiniature from '~/components/pages/page-miniature'

export default {
  layout: 'serie',
  components: {
    pageMiniature
  },
  data() {
    return {
      series: [],
      pages: [],
      firstSerie: ''
    }
  },
  async asyncData(context) {
    // just for fast prototyping, we grab the first serie
    const series = await Authors.listSeries('Thorn')
    const firstSerie = series[0]
    const pages = await Authors.listPages(firstSerie.path)

    return {
      series,
      pages,
      firstSerie
    }
  }
}
</script>
<style>
.container {
  background-color: bisque;
}
</style>
