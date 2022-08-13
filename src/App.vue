<template>
<div id="app">
  <ToDos/>
</div>
</template>

<script>
import ToDos from './components/ToDos.vue'

export default {
  name: 'App',
  components: {
    ToDos
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
