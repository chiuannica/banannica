<template>
  <div id="about">
    <h2>{{ title }}</h2>
    <div class="content">
      <p v-html="info"></p>
      <p><em v-html="pronouns"></em></p>
      <ul class="bio-list">
        <li v-for="text in texts" :key="text.id" v-html="text.p"></li>
      </ul>
      <router-link class="bio-link" to=/Bio exact>More About Me</router-link>
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
        { p: 'I am studied Information Technology at Temple University' },
        { p: 'I have experience in Android, Full-stack Development, and Data Science!' }
      ]
    }
  }
}
</script>

<style>
#about {
  margin-bottom: 7%;
}
.bio-list {
  margin: 0;
}
.bio-link {
  padding-left: 1%;
  margin-left: 1%;
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
  .content > ul {
    padding: 0;
    margin-left: 3%;
  }
  .bio-list {
    margin: 5% 2%;
  }
}
</style>
