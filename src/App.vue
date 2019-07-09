<template>
  <div id="app">
    <Scrollbar></Scrollbar>
    <Header></Header>
    <Home></Home>
    <About></About>
    <Projects></Projects>
  </div>
</template>


<script>
import Scrollbar from './components/Scrollbar'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'

export default {
  name: 'App',
  components: {
    Scrollbar, Header, Home, About, Projects
  }
}
</script>

<style>
html{
  background: #FFEA85;
}
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

</style>
