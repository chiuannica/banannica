<template>
  <div id="contact">
    <h2>{{ title }}</h2>
    <div v-for="media in medias">
      <a class="contact-link" :href="media.link">
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
      title: 'Contact Banannica',
      medias: [
        { name: 'Instagram', link: 'https://instagram.com/javascriptqueen', icon: 'fa fa-instagram'},
        { name: 'Github', link: 'https://github.com/chiuannica', icon: 'fa fa-github'},
        { name: 'Email', link: 'mailto:chiuannica@gmail.com', icon: 'fa fa-envelope-o'}  
      ]
    }
  }
}
</script>

<style>
#contact{
  text-align: center;
  width: 100%;
}
.contact-link{
  color: #F73F52;
  margin-bottom: 10%;
}
.contact-link:hover{
  color: hsl(348, 92%, 80%);
}
</style>