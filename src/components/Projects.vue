<template>
  <div id="projects">
    <h2>{{ title }}</h2>
    <div v-for="project in projects">
      <h4>{{ project.name }}</h4>
      <p>{{ project.description }}</p>
      <p>{{ project.tools }}</p>
      <a :href="project.link">Link to Website</a>
      <a :href="project.github">Link to Project on GitHub</a>
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
        { name: 'The Effects of Video Games', 
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

</style>