<template>
  <div id="about">
    <h2>{{ title }} <i :class="aboutIcon"></i></h2>
    <div class="content">
      <div class="text">
        <p v-for="text in texts" :key="text.id" v-html="text.p"></p>
      </div>
      <div class="my-picture">
        <img :src="myPicture" alt="picture of me">
      </div>
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
      ]
    }
  }
}
</script>

<style>
#about {
  width: 100%;
  margin: 0;
  overflow: hidden;
}
.content {
  width: 100%;
  justify-content: center;
  align-content: center;
  display: grid;
  grid-template-columns: 2fr 1fr;
}
#about > h2 {
  text-align: center;
}
.my-picture {
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  margin-bottom: 10%;
}
.my-picture > img {
  width: 80%;
  border: 0.5rem #354051 solid;
  border-radius: 50%;
  box-shadow: 1em 1em 2em .25em rgba(0,0,0,.2);
}
.text {
  margin-left: auto;
  margin-right: auto;
  width: 90%;
}
@media screen and (max-width: 768px) {
  #about {
    margin: 0;
    width: 100%;
  }
  h6 {
    font-size: 1.4rem;
  }
  .content {
    display: block;
  }
  .text {
    margin-left: 5%;
    width: 80%;
  }
  .my-picture {
    margin-left: auto;
    margin-right: auto;
    width: 50%;
  }
}
</style>
