<script>
export default {
  name: `page-author`,
  data() {
    return {
      name: ``
    }
  },
  asyncData(nuxtContext) {
    const { params } = nuxtContext
    const { name } = params
    return { name }
  }
}
</script>

<template>
  <div>Bienvenue sur la page de {{ name }}</div>
</template>
