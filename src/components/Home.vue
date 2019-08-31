<template>
  <div id="home">
    <main>
      <div class="circle">
        <div class="circle-content">
          <p><i :class="icon"></i></p>
          <h1>{{ title }}</h1>
          <p class="show-on-scroll magic-text subtitle">{{ subtitle }}</p>
        </div>
      </div>
      <!--
      <div class="button-container">
        <a :key="link.id" v-for="link in links" :href="link">{{ link.name }}</a>
      </div>
      -->
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
      title: 'Annica',
      icon: 'fa fa-file-code-o',
      subtitle: 'JavaScript Queen',
      links: [
        { id: 0, name: 'About', link: '#about' },
        { id: 1, name: 'Projects', link: '#projects' }
      ]
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
  border: hsl(51, 97%, 84%) 1em solid;
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
.subtitle {
  text-align: center;
  font-size: 3em;
}
.button-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.button-container > a {
  padding: 1em;
}

</style>
