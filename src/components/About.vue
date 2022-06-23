<template>
  <div id="about">
    <h2>{{ title }} <i :class="aboutIcon"></i></h2>
    <div class="content">
      <h3 v-html="info"></h3>
      <p><em v-html="pronouns"></em></p>
      <div class="text">
        <p v-for="text in texts" :key="text.id" v-html="text.p"></p>
        <!--
        <router-link class="bio-link" to=/Bio exact>Extended Biography</router-link>
        -->
      </div>
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
      info: 'ANNE-EH-KAH',
      pronouns: 'she/her',
      texts: [
        { p: 'I am a senior studying Information Technology.' },
        { p: 'I have experience in Android, Data Science, and Full-Stack Development.' },
        { p: 'In my freetime, take naps, cook delicious food, and make bubble tea.' }
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
  line-height: 0.9;
}
.content {
  width: 60%;
  margin-left: 20%;
  margin-right: 20%;
  justify-content: center;
  align-content: center;
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
    width: 90%;
    margin: 5%;
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
