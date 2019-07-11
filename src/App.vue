<template>
  <div id="app">
    <Scrollbar></Scrollbar>
    <Header></Header>
    <Home></Home>
    <About></About>
    <Projects></Projects>
    <Contact></Contact>
  </div>
</template>


<script>
import Scrollbar from './components/Scrollbar'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'


export default {
  name: 'App',
  components: {
    Scrollbar, Header, Home, About, Projects, Contact
  }
}
</script>

<style>
@font-face {
  font-family: 'Dosis';
  src: url('assets/Dosis-Medium.ttf');
}
@font-face {
  font-family: 'Roboto';
  src: url('assets/Roboto-Light.ttf');
}
#app {
  font-family: 'Roboto';
  -webkit-font-smoothin: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 14pt;
  color: #333333;
}
h1, h2, a{
  font-family: 'Dosis';
  font-size: 24pt;
  color: #F73F52;
}
.magic-text {
  opacity: 0;
  transform: translateY(4em);
  transition: transform 4s .25s cubic-bezier(0,1,0.3,1),
              opacity .3s .25s ease-out;
  will-change: transform, opacity;
}
.magic-text.is-visible {
  opacity: 1;
  transform: rotateZ(0deg);
}
.magic-text-side {
  opacity: 0;
  transform: translateX(-4em);
  transition: transform 4s .25s cubic-bezier(0,1,0.3,1),
              opacity .3s .25s ease-out;
  will-change: transform, opacity;
}
.magic-text-side.is-visible {
  opacity: 1;
  transform: rotateZ(0deg);
}
</style>
