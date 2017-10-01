<template>
  <main class="mainContainer">
    <h1>{{ msg }}</h1>
  </main>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {
      msg: 'about me',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mainContainer {
    max-width: 1200px;
    margin: 100px auto 0 auto;
}
</style>
