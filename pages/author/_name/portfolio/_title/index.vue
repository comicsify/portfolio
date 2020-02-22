<script>
export default {
  name: `page-author`,
  layout: 'portfolio',
  data() {
    return {
      name: `${this.$route.params.name}`,
      title: `${this.$route.params.title}`
    }
  }
}
</script>

<template>
  <div>Bienvenue sur le porfolio de {{ name }} about {{ title }}</div>
</template>
