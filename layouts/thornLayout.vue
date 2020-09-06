<template>
  <div id="container">
    <main>
      <nuxt />
    </main>
    <nav>
      <hamburger-menu v-bind:items="menuItems" />
    </nav>
  </div>
</template>
<script>
import hamburgerMenu from '~/components/layouts/hamburger-menu'
export default {
  name: `blog-layout`,
  components: {
    hamburgerMenu
  },
  data() {
    return {
      // FIXME use a conf file or an env file for better user experience
      // Or read info from a database
      menuItems: [
        {
          name: 'Ordre Chronologique',
          link: '/',
          parameters: { sorted: 'chrono' }
        },
        { name: 'A Propos', link: '/about' },
        { name: 'Bonus', link: '/bonus' },
        { name: 'Contact', link: '/contact' }
      ]
    }
  }
}
</script>
<style scoped>
#container {
  background-color: bisque;
}
main {
  height: 100%;
  width: 50%;
  margin: auto;
  border-left: 1px solid #333;
  border-right: 1px solid #333;
}
nav {
  position: sticky;
  max-width: 250px;
  bottom: 20px;
  left: 20px;
  padding: 5px;
  border: 1px solid #333;
}
</style>
