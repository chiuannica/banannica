<template>
  <div id="home">
    <main>
      <img id="logo" :src="logo">
      <p class="subtitle">{{ subtitle }}</p>
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
      logo: require('@/assets/logo_transparent.png'),
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
#logo{
  max-width: 50vh;
  display: block;
  margin: -15vh auto;
}
.subtitle{
  text-align: center;
  font-size: 3em;
}
</style>