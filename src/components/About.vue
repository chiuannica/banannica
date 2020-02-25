<template>
  <div id="about">
    <h2>{{ title }} <i :class="aboutIcon"></i></h2>
    <div class="content">
      <div class="text">
        <p v-for="text in texts" :key="text.id">{{ text.p }}</p>
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
        { p: 'Hi! I\'m Annica!' },
        { p: 'I am studying Information Science & Technology at Temple University.' },
        { p: 'I have had the amazing opportunity to teach Computer Science and Web Development to high school students at Upward Bound.' },
        { p: 'I love bubble tea and my dog. I aspire to be someone people look up to.' }
      ],
      resume: { p: 'I am on LinkedIn!', link: 'https://www.linkedin.com/in/annica-chiu-45369a17b/' }
    }
  }
}
</script>

<style>
#about {
  width: 100%;
  min-height: 50vh;
  border-left: #354051 1vh solid;
  margin: 0 5%;
}
#about > h2 {
  margin: 0 3%;
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
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  }
  .text {
    margin-right: 2%;
  }
}
</style>
