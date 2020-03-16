<template>
  <div id="home">
    <main>
      <div class="circle">
        <div class="circle-content">
          <h1>{{ title }}</h1>
          <p class="show-on-scroll magic-text subtitle">{{ subtitle }}</p>
        </div>
      </div>
      <div class="button-container">
        <a :key="link.id" v-for="link in links" :href="link.link">{{ link.name }}</a>
      </div>
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
      subtitle: 'The Next Elon Musk',
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
  max-width: 100%;
  height: 100vh;
}
.circle {
  border: #ebc1c58c 1em solid;
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
.button-container > a:hover {
  color: hsl(216, 21%, 13%);
}
@media screen and (max-width: 768px) {
  .circle{
    width: 100%;
    border: none;
  }
}
</style>
