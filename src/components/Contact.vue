<template>
  <div id="contact">
    <h2>{{ title }}</h2>
    <div class="contact-links">
      <a :key=media.id v-for="media in medias" class="contact-link" :href="media.link">
        <i :class="media.icon"></i>
        <p>{{ media.handle }}</p>
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
        // { id: 0, name: 'Instagram', handle: 'JavaScriptQueen', link: 'https://instagram.com/javascriptqueen', icon: 'fa fa-instagram' },
        { id: 1, name: 'GitHub', handle: 'chiuannica', link: 'https://github.com/chiuannica', icon: 'fa fa-github' },
        { id: 2, name: 'Email', handle: 'chiuannica@gmail.com', link: 'mailto:chiuannica@gmail.com', icon: 'fa fa-envelope-o' }
      ]
    }
  }
}
</script>

<style>
#contact {
  width: 100%;
}
.contact-links {
  display: flex;
  justify-content: space-around;
}
.contact-link {
  color: #212D40;
  margin-bottom: 2vh;
}
.contact-link:hover {
  color: #354051;
}
.contact-link > .fa {
  font-size: 3em;
}
@media screen and (max-width: 768px) {
  .contact-links {
    display: block;
    margin: 10%;
  }
}
</style>
