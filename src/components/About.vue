<template>
  <div id="about">
    <h2>{{ title }}</h2>
    <div class="content">
      <p v-html="info"></p>
      <p><em v-html="pronouns"></em></p>
      <ul>
        <li v-for="text in texts" :key="text.id" v-html="text.p"></li>
      </ul>
        <!--
        <router-link class="bio-link" to=/Bio exact>Extended Biography</router-link>
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
  .content {
    margin-left: 2%;
  }
  .content > ul{
    padding: 0;
    margin-left: 3%;
  }
}
</style>
