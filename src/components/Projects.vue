<template>
  <div id="projects">
    <h2> <i :class="projectsIcon"></i> {{ title }}</h2>
    <div class="projects-grid">
      <div :key=project.id class="project magic-project show-on-scroll" v-for="project in projects">
        <h4 class="project-title">{{ project.name }}</h4>
        <p>{{ project.description }}</p>
        <p>{{ project.tools }}</p>
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
          name: 'Random Basketball Point Generator',
          description: 'A website that takes player stats and generates a table of points',
          tools: 'JavaScript, HTML/CSS',
          link: 'https://chiuannica.github.io/randompointgenerator/',
          github: 'https://github.com/chiuannica/randompointgenerator'
        },
        {
          id: 1,
          name: 'ACM-W Website',
          description: 'A website for Temple\'s chapter of the Association of Computing Machinery',
          tools: 'Vue, JavaScript, HTML/CSS',
          link: 'https://tu-acmw.onrender.com',
          github: 'https://github.com/chiuannica/acmw-vue'
        },
        {
          id: 2,
          name: "Valentine's Day Card Generator",
          description: 'A website that take user input and generates a card with a random meme',
          tools: 'JavaScript, Meme API, HTML/CSS',
          link: 'https://chiuannica.github.io/valentinesdaycard/meme.html',
          github: 'https://github.com/chiuannica/valentinesdaycard'
        },
        /*
        {
          id: 3,
          name: 'Tips From People Older Than Me',
          description: 'A webpage displaying tips from older people',
          tools: 'CSS animations, CSS grid, HTML/CSS',
          link: 'https://chiuannica.github.io/tipsfrompeopleolderthanme/',
          github: 'https://github.com/chiuannica/tipsfrompeopleolderthanme'
        },
        */
        {
          id: 4,
          name: 'The Effects of Video Games',
          description: 'A website displaying research on the mental effects of video games',
          tools: 'Customized Bootstrap, HTML/CSS',
          link: 'https://chiuannica.github.io/videogamesproject/',
          github: 'https://github.com/chiuannica/videogamesproject'
        }
      ]
    }
  }
}
</script>

<style>
#projects{
  width: 100%;
  height: 100vh;
  margin: 0;
  margin-left: -1%;
}
.project{
  background: #354051;
  color: #ebc1c5cc;
  box-sizing: border-box;
  padding: 1em;
  transition: border-left 0.7s;
}
.project > .project-title{
  margin: 0;
  font-size: 3em;
}
.project > a {
  padding-left: 1%;
  border-left: #212D40 solid 0.5vh;
  color: #ebc1c5cc;
  transition: border-left 0.7s;
}
.project > a:hover{
  border-left: #ebc1c5cc solid 1vh;
}
.project:nth-child(1){
  background: #212D40;
}
.project:nth-child(1) > a{
  border-left: #354051 solid 0.5vh;
}
.project:nth-child(1) > a:hover{
  border-left: #ebc1c5cc solid 1vh;
}
.projects-grid{
  padding: 5%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr 1fr;
  grid-gap: 4%;
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
  .projects-grid{
    display: block;
    padding: 0;
    margin: 2%;
  }
  .projects-grid > div {
    padding: 1%;
  }
  .project{
    margin-bottom: 2%;
  }
}
/*SHOW ON SCROLL ANIMATION*/
.magic-project {
  box-shadow: 1em 1em 2em .25em rgba(0,0,0,.2);
  opacity: 0;
  transform: translateY(6em);
  transition: transform 4s .25s cubic-bezier(0,1,0.3,1),
              opacity .3s .25s ease-out;
  width: 100%;
  will-change: transform, opacity;
}
.magic-project:nth-child(even) {
  box-shadow: 1em 1em 2em .25em rgba(0,0,0,.2);
  opacity: 0;
  transform: translateY(-6em);
  transition: transform 4s .25s cubic-bezier(0,1,0.3,1),
              opacity .3s .25s ease-out;
  width: 100%;
  will-change: transform, opacity;
}
.magic-project.is-visible {
  opacity: 1;
  transform: rotateZ(0deg);
}
</style>
