<script>
export default {
  name: `episodes-list`,
  layout: 'blog',
  data() {
    return {
      placeHolder: 'some'
    }
  }
}
</script>

<template>
  <div>
    Bienvenue sur la liste des épisodes. Voici une valeur quelconque
    {{ placeHolder }}
  </div>
</template>
