<template>
  <div id="projects">
    <h2>{{ title }}</h2>
    <div class="grid">
      <div class="project magic-project show-on-scroll" v-for="project in projects">
        <h4>{{ project.name }}</h4>
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
      projects: [
        { name: 'Random Basketball Point Generator', 
          description: 'A website that takes player stats and generates a table of points', 
          tools: 'JavaScript, HTML/CSS',
          link: 'https://chiuannica.github.io/randompointgenerator/', 
          github: 'https://github.com/chiuannica/randompointgenerator' 
        },
        { name: 'Task List', 
          description: 'A website that adds, crosses off, and removes tasks.', 
          tools: 'Vue, JavaScript, HTML/CSS',
          link: 'https://chiuannica.github.io/tasklist/', 
          github: 'https://github.com/chiuannica/tasklist' 
        },
        { name: "Valentine's Day Card Generator", 
          description: 'A website that take user input and generates a card with a random meme', 
          tools: 'JavaScript, Meme API, HTML/CSS',
          link: 'https://chiuannica.github.io/valentinesdaycard/meme.html', 
          github: 'https://github.com/chiuannica/valentinesdaycard' 
        },
        { name: 'Tips From People Older Than Me', 
          description: 'A webpage displaying tips from older people',
          tools: 'CSS animations, CSS grid, HTML/CSS', 
          link: 'https://chiuannica.github.io/tipsfrompeopleolderthanme/', 
          github: 'https://github.com/chiuannica/tipsfrompeopleolderthanme' 
        },
        { name: 'The Effects of Video Games', 
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
}
.project:nth-child(even){
  background: #F73F52;
}
.project:nth-child(even) > a{
  color: hsl(50, 100%, 86%);
}
.project:nth-child(odd){
  background: hsl(348, 92%, 80%);
}
.project:nth-child(odd) > a{
  color: #F73F52;
}
.project:nth-child(1){
  background: hsl(50, 100%, 86%);
}
.project:nth-child(1) > a{
  color: #F73F52;
}
.project:nth-child(even) > a:hover{
  color: hsl(348, 92%, 80%);
}
.project:nth-child(odd) > a:hover{
  color: hsl(50, 100%, 86%);
}
.project:nth-child(1) > a:hover{
  color: hsl(348, 92%, 80%);
}
.grid > div {
  border-radius: 10px;
  padding: 3%;
  min-height: 40vh;
}
.grid{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr 1fr;
  grid-gap: 5%;
}
.project:nth-child(1) {
  grid-column: 1 / 3;
  grid-row: 1;
}
.project:nth-child(2) { 
  grid-column: 3;
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
@media screen and (max-width: 600px) {
  .grid{
    display: block;
  }
  .project{
    margin: 1%;
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