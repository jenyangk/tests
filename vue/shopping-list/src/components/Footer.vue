<template>
  <footer>
    <p>Copyright &copy; 2022</p>
    <router-link to="/about">About</router-link>
  </footer>
</template>

<script>
export default {
    name: "ContentFooter"
}
</script>

<style scoped>
a {
  color: whitesmoke;
}

footer {
  margin-top: 30px;
  text-align: center;
}
</style>