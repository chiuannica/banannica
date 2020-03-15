<template>
  <div id="about">
    <h2>{{ title }} <i :class="aboutIcon"></i></h2>
    <div class="content">
      <div class="text">
        <p v-for="text in texts" :key="text.id" v-html="text.p"></p>
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
      title: 'About Me',
      myPicture: require('@/assets/mypicture.jpg'),
      aboutIcon: 'fa fa-female',
      texts: [
        { p: '<h6>Hi! I\'m Annica.</h6>' },
        { p: 'I am studying Information Science & Technology at Temple University.' },
        { p: 'I teach high school students to code at Upward Bound.' },
        { p: 'I am interested in finance, education, tech, and soccer.' }
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
  margin-left: 10%;
  margin-right: 10%;
}
#about > h2 {
  margin: 0 3%;
}
.my-picture {
  border: 0.5rem #354051 solid;
  border-radius: 50%;
  max-width: 50%;
  box-shadow: 1em 1em 2em .25em rgba(0,0,0,.2);
}
.content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  margin-left: auto;
  margin-right: auto;
}
.text {
  margin: 0 3%;
}
@media screen and (max-width: 768px) {
  .my-picture {
    width: 150%;
  }
  .text {
    margin-right: 2%;
  }
}
</style>
