<script>
export default {
  name: `page-stories`,
  layout: 'thornLayout',
  data() {
    return {
      name: `${this.$route.params.name}`,
      storyId: `${this.$route.params.storyId}`,
      episodeId: `${this.$route.params.episodeId}`
    }
  }
}
</script>
<template>
  <div>Bienvenue sur l'épisode {{ episodeId }}</div>
</template>
