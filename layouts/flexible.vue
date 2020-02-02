<template>
  <div class="view">
    <header>Header</header>
    <main>
      <section>
        <nuxt />
      </section>
      <aside>info de coté</aside>
    </main>
    <footer>Footer</footer>
  </div>
</template>

<style scoped>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.view {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

header {
  background-color: var(--primary-color);
  order: 1;
  flex: 1;
}

main {
  background-color: var(--secondary-color);
  order: 2;
  flex: 8;

  /* itself is a flex container */
  display: flex;
  flex-direction: row;
}

section {
  background-color: var(--secondary-color);
  order: 1;
  flex: 3;
}

aside {
  background-color: var(--tertiary-color);
  order: 2;
  flex: 1;
}

footer {
  background-color: var(--primary-color);
  order: 3;
  flex: 1;
}
</style>
