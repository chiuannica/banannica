<template>
  <div id="contact">
    <h5>{{ title }}</h5>
    <div class="waystocontact" v-for="media in medias">
      <a :href="media.link">
        <i :class="media.icon"></i>
        {{ media.name }}
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data () {
    return {
      title: 'Contact',
      medias: [
        { name: 'Instagram', link: 'https://instagram.com', icon: 'fa fa-instagram'},
        { name: 'Github', link: 'https://github.com/chiuannica', icon: 'fa fa-github'},
        { name: 'Email', link: 'mailto:chiuannica@gmail.com', icon: 'fa fa-envelope-o'}  
      ]
    }
  }
}
</script>

<style>
#contact{
  padding-left: 5%;
  padding-bottom: 5%;
}
h5{
  font-family: 'Dosis';
  font-size: 20pt;
  margin-bottom: 1%;
}
/* Images */
.logo{
  width: 50%;
  height: 50%;
}
.waystocontact > a{
  color: #F73F52;
}
.waystocontact > a:hover{
  color: hsl(348, 92%, 80%);
}
/* Smol Screen */
@media screen and (max-width: 600px) {
  h5{
    font-size: 18pt;
  }
  span{
    font-size: 12pt;
  }
}
/* Big Screen */
@media screen and (min-width: 1000px) {
  h5{
    font-size: 24pt;
  }
  span{
    font-size: 24pt;
  }
}
</style>