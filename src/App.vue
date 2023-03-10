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
  font-size: 62.5%;
  margin: 0;
}
h1, h2, h3, h4, h5 {
  font-family: 'Catamaran', 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  color: hsl(216, 21%, 13%);
  line-height: 0.8;
  padding: 0;
}
h1 {
  font-size: 3.2rem;
}
h2 {
  font-size: 3.0rem;
}
h3 {
  font-size: 2.4rem;
  font-style: none;
}
h4, h5 {
  font-size: 2.1rem;
  color: #ebc1c5cc;
}
h6 {
  font-size: 2.1rem;
  color: #354051;
  margin: 0;
}
p, li {
  font-size: 1.8rem;
  margin: 0.5% 0;
  line-height: 1.1;
}
ul {
  margin: 0;
  padding: 2%;
}
a {
  font-size: 2.1rem;
  line-height: 1.1;
  font-family: 'Catamaran', 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  color: #354051;
  text-decoration: none;
  transition: color 0.7s;
}
@media screen and (max-width: 768px) {
  h1 {
  font-size: 2.6rem;
  }
  h2 {
    font-size: 1.6rem;
  }
  h3 {
    font-size: 1.0rem;
  }
  h4, h5 {
    font-size: 1.6rem;
  }
  h6 {
    font-size: 1.6rem;
  }
  p, li, a {
    font-size: 1.8em;
  }
}
</style>
