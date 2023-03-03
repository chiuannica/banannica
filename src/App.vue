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
  font-family: 'Catamaran';
  src: url('assets/Catamaran-Regular.ttf');
}
#app {
  font-family: 'Catamaran', 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  -webkit-font-smoothin: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  color: hsl(216, 21%, 13%);
  width: 100%;
}
body {
  line-height: 1.2;
  font-size: 62.5%;
  margin: 0;
}
h1, h2, h3, h4, h5 {
  font-family: 'Catamaran', 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  color: hsl(216, 21%, 13%);
}
h1 {
  font-size: 3.2rem;
  text-align: center;
}
h2 {
  font-size: 2.4rem;
  font-style: none;
}
h3 {
  font-size: 1.8rem;
  font-style: none;
}
h4, h5 {
  font-size: 1.6rem;
  color: #ebc1c5cc;
}
h6 {
  font-size: 1.6rem;
  color: #354051;
  margin: 0;
}
p, li {
  font-size: 1.4rem; /* =14px */
  line-height: 1.2;
}
a {
  font-family: 'Catamaran', 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  color: #354051;
  font-size: 1.4rem;
  text-decoration: none;
  transition: color 0.7s;
}
@media screen and (max-width: 768px) {
  p {
    font-size: 1.15rem;
  }
  a {
    font-size: 1.15rem;
  }
  h1, h2, h3, h4, h5 {
    font-size: 1.4rem;
  }
}
</style>
