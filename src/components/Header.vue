<template>
  <nav>
    <div :key=tab.id v-for="tab in tabs">
      <router-link :onclick="tab.func" :to="tab.link" exact :active-class="'active-tab'">{{ tab.title }}</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      tabs: [
        {title: 'Home', link: '/', func: 'null', id: 0},
        {title: 'Blog', link: '/blog', func: null, id: 1},
        {title: 'Contact', link: '/contact', func: null, id: 2}
      ]
    }
  }
}
</script>
<style scoped>
a {
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
  box-shadow: 1em 1em 2em .25em rgba(0,0,0,.2);
}
a.block{
  display: block;
  padding: 0.5em;
}
nav {
  background: transparent;
  width: 85%;
  height: 10vh;
  display: inline-flex;
  justify-content:space-between;
  align-items: center;
  margin: 0 10%;
}
.active-tab {
  font-weight: bold;
  width: 100%;
  border-bottom: rgba(235, 193, 197, 0.55) 1vh solid;
}
.active-tab:after {
  width: 100%;
}
@media screen and (max-width: 600px) {
  a {
    font-size: 2.5em;
  }
  #header {
    margin: 2.5%;
    width: 95%;
  }
}
@media screen and (min-width: 1000px) {
  a {
    font-size: 3em;
  }
}
</style>
