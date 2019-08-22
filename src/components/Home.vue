<template>
  <div id="home">
    <main>
      <h1>{{ title }}</h1>
      <h3>{{ subtitle }}</h3>
    </main>
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
  },
  data () {
    return {
      title: 'Banannica',
      subtitle: 'Web Developer'
    }
  }
}
</script>

<style>
main{
  margin-bottom: 20vh;
  width: 100%;
}
.banana{
  margin-top: -10%;
  margin-left: 30%;
  width: 40%;
  height: 40%;
  opacity: 0.6;
}
</style>