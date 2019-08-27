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
        { p: 'Bubble tea lover, Temple University student, soccer fan, instructor, and web developer.' },
        { p: 'Annica is a web developer based in her hometown, Philadelphia, PA. She works as an instructor for web development and Python at Upward Bound.' },
        { p: 'She started volunteering at thirteen with kindergarteners and currently with cats. She spends her time writing and making websites.' }
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
  height: 100vh;
}
.mypicture{
  border: 0.5rem #FFEA85 solid;
  border-radius: 50%;
  width: 80%;
}
.content{
  display: grid;
  grid-template-columns: 2fr 1fr;
  margin: 10vh;
}
</style>
