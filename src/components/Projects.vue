<template>
  <div id="projects">
    <h2>{{ title }} <i :class="projectsIcon"></i></h2>
    <div class="projects-grid">
      <div :key=project.id class="project magic-project show-on-scroll" v-for="project in projects">
        <h4 class="project-title">{{ project.question }}</h4>
        <p>{{ project.answer }}</p>
        <!--
          <embed :src="project.link" width="50%" height=""></embed>
        -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Projects',
  data () {
    return {
      title: 'Frequently Asked Questions',
      projectsIcon: 'fa ',
      projects: [
        {
          id: 4,
          question: 'Why invest at all?',
          answer: 'The average inflation rate in the United States is about 2%. This means, the buying power of a $1 now will be $1.02 next year, which means money will be required to buy the same things. Investing allows you to grow your money over time, as opposed to allowing it to lose value.',
        },
        {
          id: 0,
          question: 'Why buy ETFs as opposed to stocks?',
          answer: 'ETFs make it easier for investors to diversify their investments compared to stocks. ETFs are better for people who are plan to grow their money over an extended period of time, as opposed to beating the market.',
        },
        {
          id: 1,
          question: 'Why buy ETFs as opposed to mutual funds?',
          answer: 'While both offer diversification, ETFs require less upfront cost than mutual funds. Investing in ETFs allows for greater control over exposure to certain markets.',
        },
        {
          id: 2,
          question: 'How do I buy ETFs?',
          answer: 'Open a brokerage or retirement account with an investment firm to exchange ETFs.',
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
.project-title{
  color: hsla(134, 100%, 90%, 0.70);
  margin: 0;
}
.project {
  background: #354051;
  color: hsla(134, 100%, 90%, 0.55);
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
  border-left: hsl(216, 21%, 13%) solid 0.5vh;
  color: #ebc1c5cc;
  transition: border-left 0.7s;
}
.project > a:hover {
  border-left: #ebc1c5cc solid 1vh;
}
.project:nth-child(1){
  background: hsl(216, 21%, 13%);
}
.project:nth-child(1) > a {
  border-left: #354051 solid 0.5vh;
}
.project:nth-child(1) > a:hover {
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
