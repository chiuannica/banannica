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
  margin-left: 10%;
  margin-right: 5%;
  width: 85%;
}
@media screen and (max-width: 600px) {
  #home {
    margin: 2.5%;
    width: 95%;
  }
}
</style>
