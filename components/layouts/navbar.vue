<script>
export default {
  name: `nav-sidebar`
}
</script>
<template>
  <navbar>
    <ul>
      <li><a href="#">Hier</a></li>
      <li><a href="#">Avant - hier</a></li>
      <li><a href="#">Encore avant</a></li>
      <li><a href="#">Il y a longtemps</a></li>
    </ul>
  </navbar>
</template>

<style scoped>
ul {
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style-type: none;
}

li {
  font: Helvetica, Verdana, sans-serif;
  height: 40px;
  border-bottom: 1px solid #ccc;
  flex: 1;
  align-items: center;
}

li:last-child {
  border: none;
}

li a {
  text-decoration: none;
  color: #000;
}
</style>
