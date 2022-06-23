<template>
  <div id="contact">
    <h2>{{ title }} <i :class="icon"></i></h2>
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
      icon: 'fa fa-address-book',
      medias: [
        { id: 1, name: 'GitHub', handle: 'chiuannica', link: 'https://github.com/chiuannica', icon: 'fa fa-github' }
      ]
    }
  }
}
</script>

<style>
#contact {
  width: 80%;
  margin-left: 10%;
  margin-right: 10%;
}
#contact > h2 {
  text-align: center;
}
.contact-links {
  display: flex;
  justify-content: space-around;
}
.contact-link {
  color: #354051;
}
.contact-link:hover {
  color: hsl(216, 21%, 13%);
}
.contact-link > .fa {
  font-size: 3em;
}
.contact-link > p {
  margin: 2% 0;
  margin-bottom: 5vh;
}
@media screen and (max-width: 768px) {
  .contact-links {
    display: block;
    margin: 15%;
  }
}
</style>
