<script>
export default {
  name: `page-author-portfolio`,
  layout: 'portfolio',
  data() {
    return {
      name: `${this.$route.params.name}`
    }
  }
}
</script>

<template>
  <div>Bienvenue sur le porfolio de {{ name }}</div>
</template>
