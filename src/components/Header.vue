<template>
  <nav>
    <div :key=tab.id v-for="tab in tabs">
      <router-link :onclick="tab.func" :to="tab.link" exact>{{ tab.title }}</router-link>
    </div>
  </nav>
</template>
<script>
export default {
  name: 'Header',
  data () {
    return {
      tabs: [
        {title: 'Home', link: '/', func: 'window.location.reload()', id: 0},
        {title: 'Blog', link: '/blog', func: null, id: 1},
        {title: 'Contact', link: '/contact', func: null, id: 2}
      ]
    }
  }
}
</script>
<style scoped>
a{
  text-align: center;
  text-decoration: none;
  position: relative;
}
a:hover:after{
  width: 100%;
}
a:after{
  content: '';
  height: 0.1em;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0%;
  background: rgba(235, 193, 197, 0.55);
  transition: 0.7s;
  z-index: -10;
}
a.block{
  display: block;
  padding: 0.5em;
}
nav{
  background: transparent;
  width: 100%;
  height: 10vh;
  display: inline-flex;
  justify-content: space-around;
  align-items: center;
}
@media screen and (max-width: 600px) {
  a {
    font-size: 2em;
    margin-bottom: 5%;
    float: none;
    display: block;
    text-align: right;
  }
  #header{
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
}
@media screen and (min-width: 1000px) {
  a{
    font-size: 3em;
  }
}
</style>
