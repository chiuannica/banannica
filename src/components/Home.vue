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
@media screen and (max-width: 600px) {
}
</style>
