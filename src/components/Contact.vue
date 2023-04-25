<template>
  <div id="contact">
    <div class="contact-links">
      <div :key=media.id v-for="media in medias" class="contact-link">
        <a :href="media.link">
          <i :class="media.icon"></i>
          <p>{{ media.handle }}</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data () {
    return {
      title: 'Contact',
      icon: 'fa fa-address-book',
      medias: [
        { id: 1, name: 'GitHub', handle: 'chiuannica', link: 'https://github.com/chiuannica', icon: 'fa fa-github' },
        { id: 2, name: 'LinkedIn', handle: 'Connect with me on LinkedIn', link: 'https://www.linkedin.com/in/annicachiu/', icon: 'fa fa-linkedin' }
      ]
    }
  }
}
</script>

<style>
#contact {
  margin: 7.5% 25%;
}
.contact-links {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.contact-link {
  padding: 2em;
  max-width: 50vh;
}
.contact-link > a > .fa {
  font-size: 3em;
}
.contact-link > a > p {
  margin: 2% 0;
  margin-bottom: 5vh;
}
</style>
