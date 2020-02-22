<template>
  <div id="container">
    <header>
      <h1>Header</h1>
    </header>
    <main>
      <section>
        <nuxt />
      </section>
    </main>
  </div>
</template>
<script>
export default {
  name: `blog-layout`
}
</script>
<style scoped>
#container {
  background-color: aquamarine;
  display: flex;
  flex-flow: column wrap;
  height: 100vh;
}

header {
  background-color: #777;
  order: 1;
  flex: 2;
}

main {
  display: flex;
  flex-flow: row wrap;
  order: 2;
  flex: 9;
  background-color: #aaa;
}

navbar {
  background-color: #eee;
  order: 1;
  flex: 2;
}

section {
  order: 2;
  flex: 10;
  background-color: #ccc;
}
footer {
  order: 3;
  flex: 1;
  background-color: #555;
}

ul {
}
</style>
