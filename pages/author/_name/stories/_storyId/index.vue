<script>
export default {
  name: `page-stories`,
  layout: 'blog',
  data() {
    return {
      name: `${this.$route.params.name}`,
      storyId: `${this.$route.params.storyId}`
    }
  }
}
</script>

<template>
  <div>
    Bienvenue sur la liste des histoires de {{ name }} pour l'histoire
    {{ storyId }} ( avec la liste des episodes)
  </div>
</template>
