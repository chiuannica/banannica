<template>
  <div id="home">
    <main>
      <div class="circle">
        <div class="circle-content">
          <p><i :class="icon"></i></p>
          <h1>{{ title }}</h1>
        </div>
      </div>
      <p class="show-on-scroll magic-text subtitle">{{ subtitle }}</p>
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
      title: 'Annica Chiu',
      icon: 'fa fa-file-code-o',
      subtitle: 'JavaScript Queen'
    }
  }
}
</script>

<style>
main{
  min-width: 100%;
  height: 100vh;
}
.circle {
  border: hsl(50, 100%, 86%) 2em double;
  width: 50vh;
  height: 50vh;
  border-radius: 50%;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
.circle-content {
  text-align: center;
}
.subtitle{
  text-align: center;
  font-size: 3em;
}

</style>
