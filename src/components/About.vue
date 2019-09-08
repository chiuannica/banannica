<template>
  <div id="about">
    <h2>{{ title }}</h2>
    <div class="content">
      <div class="text">
        <p class="show-on-scroll magic-text" v-for="text in texts" :key="text.id">{{ text.p }}</p>
      </div>
      <img class="my-picture" :src="myPicture" alt="picture of me">
      <!--
      <a class="show-on-scroll magic-text" :href="resume.link">{{ resume.p }}</a>
      -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
  data () {
    return {
      title: 'About Annica',
      myPicture: require('@/assets/mypicture.jpg'),
      texts: [
        { p: 'I love bubble tea, Temple University, my dog, and watching soccer.' },
        { p: 'I am a novice web developer based Philadelphia, PA. I have had the amazing opportunity to be an instructor for web development and Python at Upward Bound.' },
        { p: 'I started volunteering at thirteen with kindergarteners, and currently with cats. I spend my freetime working on my web development skills and watching soccer games.' }
      ],
      resume: { p: 'Check out my resume.', link: 'https://google.com' }
    }
  }
}
</script>

<style>
#about {
  width: 100%;
  min-height: 50vh;
}
.my-picture {
  border: 0.5rem #354051 solid;
  border-radius: 50%;
  width: 80%;
  box-shadow: 1em 1em 2em .25em rgba(0,0,0,.2);
}
.content {
  display: grid;
  grid-template-columns: 3fr 1fr;
  margin-left: auto;
  margin-right: auto;
}
.text {
  margin: 0 10%;
  max-width: 90vh;
}
@media screen and (max-width: 768px) {
  .my-picture {
    width: 87%;
  }
  .text {
  margin-right: 2%;
}
}
</style>
