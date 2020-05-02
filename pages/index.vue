<template>
  <div class="container">
    <div>
      <h1>{{ firstSerie.name }}</h1>
      <div>{{ series }}{{ pages }}</div>
    </div>
  </div>
</template>
<script>
import * as Authors from '~/helpers/authors.js'

export default {
  layout: 'blog',
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
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
