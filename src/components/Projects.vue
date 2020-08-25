<template>
  <div id="projects">
    <h2>{{ title }} <i :class="projectsIcon"></i></h2>
    <div class="projects-grid">
      <div :key=project.id class="project" v-for="project in projects">
        <h4 class="project-title">{{ project.name }}</h4>
        <p>{{ project.description }}</p>
        <p><em>{{ project.tools }}</em></p>
        <a :href="project.link">Website</a><br>
        <a :href="project.github">GitHub</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Projects',
  data () {
    return {
      title: 'Projects',
      projectsIcon: 'fa fa-file-code-o',
      projects: [
        {
          id: 0,
          name: 'Tea Time Chat',
          description: 'A chatbot and web application that acts as a daily journal with data visualizations',
          tools: 'JavaScript, Facebook Messenger API, wit.ai, HTML/CSS',
          link: 'https://teatimechat.herokuapp.com/home',
          github: 'https://github.com/chiuannica/teatimechat'
        },
        {
          id: 0,
          name: 'Random Basketball Point Generator',
          description: 'A website that takes player stats and generates a table of points',
          tools: 'JavaScript, HTML/CSS',
          link: 'https://chiuannica.github.io/randompointgenerator/',
          github: 'https://github.com/chiuannica/randompointgenerator'
        },
        {
          id: 1,
          name: 'ACM -W Website',
          description: 'A website for Temple\'s chapter of the Association of Computing Machinery',
          tools: 'Vue, JavaScript, HTML/CSS',
          link: 'https://tuacmw.com',
          github: 'https://github.com/chiuannica/acmw-vue'
        },
        {
          id: 2,
          name: "Valentine's Day Card Generator",
          description: 'A website that take user input and generates a card with a random meme',
          tools: 'JavaScript, Meme API, HTML/CSS',
          link: 'https://chiuannica.github.io/valentinesdaycard/meme.html',
          github: 'https://github.com/chiuannica/valentinesdaycard'
        }
      ]
    }
  }
}
</script>

<style>
#projects{
  width: 80%;
  margin: 10%;
  margin-top: 0;
}
#projects > h2 {
  text-align: center;
}
.project {
  background: hsl(216, 21%, 13%);
  border-radius: 0.5vh;
  color: hsla(354, 51%, 88%, 0.8);
  box-sizing: border-box;
  padding: 2em;
  transition: border-left 0.7s;
  margin: 0;
  box-shadow: 1em 1em 2em .25em rgba(0,0,0,.2);
}
.project > .project-title {
  margin: 0;
  font-size: 3em;
  font-display: bold;
  line-height: 1;
}
.project > p {
  line-height: 1.2;
}
.project > a {
  padding-left: 1%;
  border-left: hsla(217, 34%, 52%, 1) solid 0.5vh;
  color: hsla(217, 34%, 52%, 0.9);
  transition: border-left 0.7s;
}
.project > a:hover {
  color: hsla(217, 34%, 52%, 0.9);
  border-left: hsla(217, 34%, 52%, 1) solid 1vh;
}
.projects-grid{
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr 1fr;
  grid-gap: 3%;
}
.project:nth-child(1) {
  grid-column: 1;
  grid-row: 1;
}
.project:nth-child(2) {
  grid-column: 2;
  grid-row: 1;
}
.project:nth-child(3) {
  grid-column: 1;
  grid-row: 2;
}
.project:nth-child(4) {
  grid-column: 2;
  grid-row: 2;
}
.project:nth-child(5) {
  grid-column: 3;
  grid-row: 2;
}
@media screen and (max-width: 768px) {
  #projects{
    width: 100%;
    margin: 0;
  }
  h4 {
    font-size: 1.2rem;
  }
  .projects-grid{
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
  .project{
    padding: 3%;
    margin-left: 2%;
    margin-right: 2%;
    margin-bottom: 5%;
  }
  .project > .project-title{
    font-size: 1.4rem;
  }
}
</style>
