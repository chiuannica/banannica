<template>
  <div id="about">
    <h2>{{ title }} <i :class="aboutIcon"></i></h2>
    <div class="content">
      <p v-html="info"></p>
      <p><em v-html="pronouns"></em></p>
      <div class="text">
        <ul>
          <li v-for="text in texts" :key="text.id" v-html="text.p"></li>
        </ul>
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
      aboutIcon: 'fa fa-female',
      info: 'pronounced ANNE-EH-KAH',
      pronouns: 'she/her',
      texts: [
        { p: 'I am a graduate of Temple University. I studied Information Technology.' },
        { p: 'I have experience in Android, Full-Stack Development, and Data Science. ' },
        { p: 'I used to be a baking teaching assistant for grades K through 8.' },
        { p: 'I love learning languages! I speak the following languages in descending order of proficiency: English, Spanish, Cantonese, German, Mandarin, and Korean.' }
      ]
    }
  }
}
</script>

<style>
li {
  font-size: 2em;
  padding: 1%;
}
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
