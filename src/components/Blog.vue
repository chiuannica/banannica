<template>
  <div id="blog">
    <div id="titlelogo">
      <h2>{{ title }}</h2>
      <img class="logo" :src="logo">
    </div>
    <div id="content">
      <div class="text">
        <p class="show-on-scroll magic-text-bottom" v-for="text in texts" :id="text.id">{{ text.p }}</p>
      </div>
      <div>
        <img class="mypicture" :src="mypicture">
      </div>
      <a class="show-on-scroll magic-text" :href="resume.link">{{ resume.p }}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Blog',
  data () {
    return {
      title: 'Blog',
      logo: require('@/assets/logo_transparent.png'),
      mypicture: require('@/assets/mypicture.jpg'),
      texts: [
        { p: 'Bubble tea lover, Temple University student, soccer fan, instructor, and web developer.' },
        { p: 'Banannica, or Annica Chiu, is a web developer based in Philadelphia, PA. She works as an instructor for web development and Python at Upward Bound.' },
        { p: 'A born and raised Philadelphian, she pronounces water as “wooder.” Annica started volunteering at thirteen with kindergarteners and currently with cats.' }
      ],
      resume: { p: 'Check out my resume.', link: 'https://google.com' }
    }
  }
}
</script>

<style>

</style>