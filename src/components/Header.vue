<template>
  <div id="home" class="show-on-scroll magic-text">
    <div id="picture">
      <img v-bind:src="logo" class="picture"/>
    </div>
    <div v-for="tab in tabs">
      <router-link :to="tab.link" exact>{{ tab.title }}</router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Header',
  data () {
    return {
      logo: require('@/assets/logo_transparent.png'),
      tabs: [
        {title: 'Home', link: '/', id: 0},
        {title: 'Blog', link: '/blog', id: 1},
        {title: 'Contact', link: '/contact', id: 2}
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
  margin-bottom: 20px;
  margin: 10px;
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
#home{
  background: transparent;
  width: 100%;
  display: inline-flex;
  justify-content: space-evenly;
  align-items: center;
}
.picture{
  width: 250px;
  margin: -50px;
  margin-left: -10px
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
  a:hover:after{
    width: 0%;
  }
  .picture{
    margin-bottom: -100px;
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
