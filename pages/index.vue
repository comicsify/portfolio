<template>
  <div class="container">
    <div>
      <h1>{{ firstSerie.name }}</h1>
      <div class="gallery">
        <div v-for="page in pages" :key="page.id" class="card">
          <page-miniature :public-id="page.publicId"></page-miniature>
        </div>
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
  height: 100%;
  width: 50%;
  margin: auto;
}

.gallery {
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  width: 60%;
  justify-content: space-between;
}

.card {
  margin-left: 5px;
  margin-bottom: 10px;
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
