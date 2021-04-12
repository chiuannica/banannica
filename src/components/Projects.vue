<template>
  <div id="projects">
    <h2>{{ title }} <i :class="projectsIcon"></i></h2>
    <div class="projects-grid">
      <div :key=project.id class="project" v-for="project in projects">
        <h4 class="project-title">{{ project.name }}</h4>
        <p v-html="project.description"></p>
        <p><em>{{ project.tools }}</em></p>
        <a :href="project.link">Website</a><br>
        <a v-if="project.github" :href="project.github">GitHub</a>
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
          name: 'Computer Science Department Professors\' Citations',
          description: 'A dashboard to explore Computer Science Professor citation measures. This is part of my research at the Temple Data Science Institute.',
          tools: 'Python, Pandas, Streamlit API, Microsoft Excel',
          link: 'https://share.streamlit.io/chiuannica/professorcitationsstreamlitapp/app.py',
          github: 'https://github.com/chiuannica/professorCitationsStreamlitApp'
        },
        {
          id: 0,
          name: 'Finding Doge: Cryptocurrency Value and Search Trends',
          description: 'An investigation of the relationship between Google search trends and cryptocurrency values<br> Best Financial Hack at PearlHacks (255 participants)',
          tools: 'Python, Pandas, Matplotlib, Scipy',
          link: 'https://devpost.com/software/search-trends-and-cryptocurrencies',
          github: 'https://gist.github.com/chiuannica/b40328c39bd816d9e3dd5886925eccfd'
        },
        {
          id: 0,
          name: 'Comparing Cryptocurrencies: Dogecoin vs. Ethereum',
          description: 'An analysis of Dogecoin and Ether to evaluate if it is a wise investment or has reliable growth<br> Best Financial Hack at FemmeHacks (210 participants)',
          tools: 'Python, Pandas, Matplotlib, Keras',
          link: 'https://devpost.com/software/ethereuming',
          github: 'https://gist.github.com/chiuannica/df4c95917450d64517750f4e5dd93b1b'
        },
        {
          id: 0,
          name: 'DogeMail',
          description: 'This is a mock email application. This is a school project! Please don\'t enter any real information in this application.',
          tools: 'ASP.NET, C#, Microsoft SQL Database, SQL HTML/CSS',
          link: 'http://cis-iis2.temple.edu/Spring2021/CIS3342_tui30639/Project3/'
        },
        {
          id: 0,
          name: 'Random Basketball Point Generator',
          description: 'A website that takes player stats and generates a table of points based on probability',
          tools: 'JavaScript, HTML/CSS',
          link: 'https://chiuannica.github.io/randompointgenerator/',
          github: 'https://github.com/chiuannica/randompointgenerator'
        },
        {
          id: 1,
          name: 'ACM-W Website',
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
