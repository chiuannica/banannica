<template>
  <div id="about">
    <h2>{{ title }} <i :class="aboutIcon"></i></h2>
    <div class="content">
      <div class="text">
        <p v-for="text in texts" :key="text.id" v-html="text.p"></p>
        <router-link to=/Bio exact>Extended Biography</router-link>
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
      title: 'Hi! I\'m Annica!',
      myPicture: require('@/assets/me.jpg'),
      aboutIcon: 'fa fa-female',
      texts: [
        { p: 'I am studying <strong>Information Science & Technology at Temple University.</strong>' },
        { p: 'I like to code in Java and Python, and make websites! During the summer, I worked with applications of Data Science and Analytics in Compliance at TD Bank using Tableau and Python. I teach high school students to code at Upward Bound and help students with their college essays.' },
        { p: 'In my freetime, I code, take naps, cook delicious food, and make bubble tea.' }
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
  width: 80%;
  margin-left: 10%;
  margin-right: 10%;
  justify-content: center;
  align-content: center;
  display: grid;
  grid-template-columns: 3fr 1fr;
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
  border: 0.5rem solid hsla(217, 34%, 52%, 0.9);
  border-radius: 50%;
  box-shadow: 1em 1em 2em .25em rgba(0,0,0,.2);
}
.text {
  width: 80%;
}
@media screen and (max-width: 768px) {
  h6 {
    font-size: 1.4rem;
  }
  .content {
    display: block;
    width: 100%;
  }
  .text {
    margin: 0;
    width: 80%;
  }
  .my-picture {
    display: flex;
    margin-left: 20%;
  }
  .my-picture > img {
    width: 35%;
  }
}
</style>
