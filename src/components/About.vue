<template>
  <div id="about">
    <h2>{{ title }}</h2>
    <div class="content">
      <div class="text">
        <p class="show-on-scroll magic-text" v-for="text in texts" :key="text.id">{{ text.p }}</p>
      </div>
      <img class="mypicture" :src="mypicture">
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
      mypicture: require('@/assets/mypicture.jpg'),
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
#about{
  background: hsl(348, 92%, 80%);
  padding-top: 5vh;
  width: 100%;
  min-height: 100vh;
}
.mypicture{
  border: 0.5rem #fef3b7 solid;
  border-radius: 50%;
  width: 80%;
}
.content{
  display: grid;
  grid-template-columns: 2fr 1fr;
  margin: 10vh;
}
@media screen and (max-width: 768px) {
  .content {
    margin: 5vh;
  }
}
</style>
