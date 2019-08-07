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
  color: #333333;
  margin: 0
}
body {
  font-size:62.5%;
  margin: 0;
}
h1 { 
  font-size: 3.2rem;
  color: #F73F52; 
  font-family: 'Dosis';
  text-align: center;

}
h2 { font-family: 'Dosis' }
h2, h3 { 
  font-size: 2.4rem;
  text-align: center;
}
h4, h5 { font-size: 1.8rem; }
p  { font-size: 1.4rem; } /* =14px */
a {
  font-size: 1.4rem;
  color: #F73F52; 
  text-decoration: none;
}
a:hover{
  color:#333;
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
