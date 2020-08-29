<template>
  <div class="container">
    <div>
      <h1>{{ firstSerie.name }}</h1>
      <page-gallery :pages="pages"></page-gallery>
      <page-viewer :next="next" :prev="prev" :src="selected"></page-viewer>
    </div>
  </div>
</template>

<script>
import * as Authors from '~/helpers/authors.js'
import * as Series from '~/helpers/series.js'
import pageGallery from '~/components/pages/page-gallery'
import pageViewer from '~/components/pages/page-viewer'
export default {
  layout: 'serie',
  components: {
    pageGallery,
    pageViewer
  },
  data() {
    return {
      series: [],
      pages: [],
      firstSerie: '',
      selected: 'current',
      next: 'next',
      prev: 'prev'
    }
  },
  async asyncData({ $config }) {
    // just for fast prototyping, we grab the first serie
    const series = await Authors.listSeries($config.authorName)
    const firstSerie = series[0]
    const pages = await Series.listPages(firstSerie.path)

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
  height: 100%;
  width: 50%;
  margin: auto;
}

h1 {
  margin: 10px auto 60px auto;
  width: 60%;
  font-weight: 200;
  font-size: 64px;
  color: white;
  font-family: 'Indie Flower', cursive;
}
</style>
