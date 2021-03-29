<template>
  <div id="about">
    <h2>{{ title }} <i :class="aboutIcon"></i></h2>
    <div class="content">
      <div class="text">
        <p v-for="text in texts" :key="text.id" v-html="text.p"></p>
        <router-link class="bio-link" to=/Bio exact>Extended Biography</router-link>
      </div>
      <!--
      <div class="my-picture">
        <img :src="myPicture" alt="picture of me">
      </div>
      -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
  data () {
    return {
      title: 'Hi, I\'m Annica!',
      myPicture: require('@/assets/me.jpg'),
      aboutIcon: 'fa fa-female',
      texts: [
        { p: 'I am a junior studying Information Technology.' },
        { p: 'During the summer, I worked with applications of Data Science and Analytics in Compliance. This upcoming summer, I\'ll be participating in Capital One\'s Technology Internship Program and I am so excited!' },
        { p: 'I am a research assistant investigating the relationship of professor citations and university rankings.' },
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
  /*
  display: grid;
  grid-template-columns: 3fr 1fr;
  */
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
  width: 100%;
}
.bio-link {
  padding-left: 1%;
  border-left: hsla(217, 34%, 52%, 1) solid 0.5vh;
  color: hsla(217, 34%, 52%, 0.9);
  transition: border-left 0.7s;
  font-style: strong;
}
.bio-link:hover {
  color: hsla(217, 34%, 52%, 0.9);
  border-left: hsla(217, 34%, 52%, 1) solid 1vh;
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
