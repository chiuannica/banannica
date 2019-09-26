<template>
  <div id="app">
    <Scrollbar></Scrollbar>
    <Header></Header>
    <router-view></router-view>
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
  font-family: 'Poppins';
  src: url('assets/Poppins-Regular.ttf');
}
@font-face {
  font-family: 'Poppins-Light';
  src: url('assets/Poppins-Light.ttf');
}
@font-face {
  font-family: 'Varela';
  src: url('assets/VarelaRound-Regular.ttf');
}
@font-face {
  font-family: 'Roboto';
  src: url('assets/Roboto-Light.ttf');
}
#app {
  font-family: Arial, Helvetica, sans-serif;
  -webkit-font-smoothin: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  color: #354051;
}
body {
  font-size: 62.5%;
  margin: 0;
}
h1, h2, h3, h4, h5 {
  font-family: 'Varela';
  color: #212D40;
}
h1 {
  font-size: 3.2rem;
  text-align: center;
}
h2 , h3{
  margin-left: 10%;
  font-size: 2.4rem;
  font-style: none;
}
h4, h5 {
  font-size: 1.6rem;
  color: #ebc1c5cc;
}
p  { font-size: 1.4rem; } /* =14px */
a {
  font-family: 'Varela';
  color: #354051;
  font-size: 1.4rem;
  text-decoration: none;
  transition: color 0.7s;
}2
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
.magic-text-bottom {
  opacity: 0;
  transform: translateY(-4em);
  transition: transform 4s .25s cubic-bezier(0,1,0.3,1),
              opacity .3s .25s ease-out;
  will-change: transform, opacity;
}
.magic-text-bottom.is-visible {
  opacity: 1;
  transform: rotateZ(0deg);
}
</style>
