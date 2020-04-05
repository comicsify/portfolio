<script>
export default {
  name: `PortfolioList`,
  props: {
    author: {
      type: String,
      required: true
    },
    portfolios: {
      type: Array,
      required: true
    }
  }
}
</script>

<template>
  <div>
    Portfolio de {{ author }} :
    <ul>
      <li v-for="portfolio in portfolios" :key="portfolio.slug">
        <nuxt-link
          :to="{
            name: 'author-name-portfolio',
            params: { name: portfolio.slug }
          }"
          >{{ portfolio.title }}</nuxt-link
        >
      </li>
    </ul>
  </div>
</template>

<style scoped>
body {
  background-color: #ff7877;
}
</style>
