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
      myPicture: require('@/assets/me.jpg'),
      aboutIcon: 'fa fa-female',
      texts: [
        { p: '<h6>Hi! I\'m Annica.</h6>' },
        { p: 'I am studying Information Science & Technology at Temple University.' },
        { p: 'I teach high school students to code at Upward Bound.' },
        { p: 'I like to sleep and listen to Bloomberg podcasts.' }
      ],
      resume: { p: 'I am on LinkedIn!', link: 'https://www.linkedin.com/in/annica-chiu-45369a17b/' }
    }
  }
}
</script>

<style>
.content {
  width: 80%;
  min-height: 50vh;
  margin-left: 10%;
  margin-right: 10%;
}
#about > h2 {
  text-align: center;
}
.my-picture {
  border: 0.5rem #354051 solid;
  border-radius: 50%;
  max-width: 25em;
  box-shadow: 1em 1em 2em .25em rgba(0,0,0,.2);
  margin: auto;
}
.content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-left: auto;
  margin-right: auto;
}
.text {
  margin: 0 3%;
}
@media screen and (max-width: 768px) {
  .content {
    display: block;
    width: 90%;
    margin-left: 5%;
    margin-right: 5%;
  }
  .text {
    width: 100%;
  }
  .my-picture {
    width: 50%;
    margin-left: 25%;
    margin-right: 25%;

  }
  #about {
    margin: 0;
    width: 100%;
  }
}
</style>
