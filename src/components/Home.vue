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
  min-width: 100%;
  height: 100vh;
}
#logo{
  width: 50vh;
  display: block;
  margin: -15vh auto;
  margin-top: 0;
}
.subtitle{
  text-align: center;
  font-size: 3em;
}
</style>
