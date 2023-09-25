<template>
  <div id="contact">
    <div class="contact-links">
      <a :key=media.id v-for="media in medias" :href="media.link">
        <h6><i :class="media.icon"></i> {{ media.text }}</h6>
      </a>

      <router-link :onclick="resume.func" :to="resume.link" exact>
          <h6><i :class="resume.icon"></i> {{ resume.text }}</h6>
      </router-link>
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
      resume: { id: 3, name: 'Resume', text: 'My Resume', link: '/resume', icon: 'fa fa-file-text-o' },
      medias: [
        { id: 1, name: 'GitHub', text: 'My GitHub', link: 'https://github.com/chiuannica', icon: 'fa fa-github' },
        { id: 2, name: 'LinkedIn', text: 'Connect with me on LinkedIn', link: 'https://www.linkedin.com/in/annicachiu/', icon: 'fa fa-linkedin' }
      ]
    }
  }
}
</script>

<style>
#contact {
  margin: 7.5% 20%;
}
.contact-links {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.contact-links > a > h6 {
  margin-top: 7.5%;
}
@media screen and (max-width: 600px) {
  .contact-link {
    font-size: 0.5em;
  }
}
</style>
