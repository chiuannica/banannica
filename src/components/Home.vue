<template>
  <div id="home">
    <About></About>
    <Projects></Projects>
  </div>
</template>

<script>
import About from './About'
import Projects from './Projects'

export default {
  name: 'Home',
  components: {
    About, Projects
  }
}
</script>

<style>
#home {
  margin: 0;
  width: 100%;
}
</style>
