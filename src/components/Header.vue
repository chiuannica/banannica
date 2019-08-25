<template>
  <nav class="show-on-scroll magic-text">
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
      logo: require('@/assets/logo_transparent.png'),
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
  font-size: 18pt;
  color: #333333;
  text-align: center;
  text-decoration: none;
  position: relative;
}
a:hover{
  color: #F73F52;
  text-decoration: none;
}
a:hover:after{
  width: 100%;
}
a:after{
  content: '';
  height: 3px;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0%;
  background: #F73F52;
  transition: 0.3s;
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
    font-size: 14pt;
    margin-bottom: 10px;
    margin-left: 30px;
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
    font-size: 24pt;
  }
}
</style>
