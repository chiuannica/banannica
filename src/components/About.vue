<template>
  <div id="about">
    <h2>{{ title }} <i :class="aboutIcon"></i></h2>
    <div class="content">
      <div class="text">
        <p v-for="text in texts" :key="text.id" v-html="text.p"></p>
      </div>
      <img class="my-picture" :src="myPicture" alt="picture of me">
      <!--
      <a :href="resume.link">{{ resume.p }}</a>
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
        { p: 'I am studying <strong>Information Science & Technology at Temple University.</strong>' },
        { p: 'I like to write code and English. I teach high school students to code at Upward Bound and help students with their college essays.' },
        { p: 'In my freetime, I code, sleep, write, and make bubble tea.' }
      ],
      resume: { p: 'I am on LinkedIn!', link: 'https://www.linkedin.com/in/annica-chiu-45369a17b/' }
    }
  }
}
</script>

<style>
#about {
  width: 100%;
  overflow-X: hidden;
}
.content {
  width: 80%;
  min-height: 50vh;
  margin-left: 10%;
  margin-right: 10%;
  justify-content: center;
  align-content: center;
}
#about > h2 {
  text-align: center;
}
.my-picture {
  border: 0.5rem #354051 solid;
  border-radius: 50%;
  box-shadow: 1em 1em 2em .25em rgba(0,0,0,.2);
  margin: auto;
  width: 90%;
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
  #about {
    margin: 0;
    width: 100%;
  }
  .content {
    display: block;
    width: 100%;
  }
  .my-picture {
    width: 50%;
    margin-left: 25%;
    margin-right: 25%;
  }
}
</style>
