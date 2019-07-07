<template>
  <div id="header">
    <div id="picture">
      <img v-bind:src="logo" class="picture"/>
    </div>
    <div class="tabs">
      <a class="tab" v-for="tab in tabs" v-bind:href="tab.link" v-bind:key="tab.id">{{ tab.title }}</a>
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
        {title: 'About', link: '/about', id: 1},
        {title: 'Projects', link: '/projects', id: 2},
        {title: 'Blog', link: '/blog', id: 3},
        {title: 'Contact', link: '/contact', id: 4}
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
#header{
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
    text-align: left;
  }
  a:hover:after{
    width: 20%;
  }
  #header{
    display: inline-block;
  }
  .picture{
    margin-bottom: -100px;
  }
}
@media screen and (min-width: 1000px) {
  a{
    font-size: 24pt;
  }
}
</style>
