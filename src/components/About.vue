<template>
  <div id="about">
    <h2>{{ title }} <i :class="aboutIcon"></i></h2>
    <div class="content">
      <div class="text">
        <p v-for="text in texts" :key="text.id" v-html="text.p"></p>
      </div>
      <img class="my-picture" :src="myPicture" alt="picture of me">
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
  overflow: hidden;
}
.content {
  width: 80%;
  min-height: 50vh;
  margin-left: 10%;
  margin-right: 10%;
  justify-content: center;
  align-content: center;
  display: grid;
  grid-template-columns: 2fr 1fr;
}
#about > h2 {
  text-align: center;
}
.my-picture {
  border: 0.5rem #354051 solid;
  border-radius: 50%;
  box-shadow: 1em 1em 2em .25em rgba(0,0,0,.2);
  margin: auto;
  width: 80%;
  margin-bottom: 10%;
}
.text {
  width: 90%;
  margin-left: 5%;
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
    width: 100%;
    margin: 0;
  }
  .text {
    width: 98%;
    margin-left: 2%;
  }
  .my-picture {
    width: 40%;
    margin-left: 30%;
    margin-right: 30%;
  }
}
</style>
