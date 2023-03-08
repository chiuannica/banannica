<template>
  <div id="projects">
    <h2>{{ title }} <i :class="projectsIcon"></i></h2>
    <!-- PROJECT NAVIGATION  -->
    <div class="project-nav-categories">
      <div class="project-nav">
        <h3
          v-for="(projectCategory, index) in projectCategories"
          :key="index"
          :class="{ 'project-nav-button-active': projectCategory.showCategory === true }"
          class="project-nav-button"
          @click="showCategory(index)"
        >
          {{ projectCategory.name }}
        </h3>
      </div>

      <!-- PROJECT BOXES  -->
      <div class="project-categories">
        <div v-for="(projectCategory, index) in projectCategories" :key="index" v-show="projectCategory.showCategory">
          <div class="projects-grid" >
            <div :key=project.id v-for="project in projectCategory.projects">
              <div class="project" >
                <div>
                  <h4 class="project-title" v-html=project.name></h4>
                  <p v-html=project.description></p>
                  <p><em v-html=project.tools></em></p>
                  <a class="project-link" v-if="project.link" :href="project.link">Website</a><br>
                  <a class="project-link" v-if="project.github" :href="project.github">GitHub</a>
                </div>
                <div v-if="project.img"><img class="project-img" :src="require(`@/assets/demos/${project.img}`)"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Projects',
  methods: {
    closeAll () {
      for (let category of this.projectCategories) {
        category.showCategory = false
      }
    },
    showCategory (index) {
      this.closeAll()
      this.projectCategories[index].showCategory = true
    }
  },
  data () {
    return {
      title: 'Projects',
      projectsIcon: 'fa fa-file-code-o',
      projectCategories: [
        {
          id: 2,
          name: 'Android',
          showCategory: false,
          projects: [
            {
              id: 0,
              name: 'To Do List',
              description: 'A simple to do list with automatic saving, update, creation, and deletion abilities',
              tools: 'Kotlin, Android Studio',
              github: 'https://github.com/chiuannica/SimpleToDo',
              img: 'todolist.gif'
            },
            {
              id: 1,
              name: 'Wishlist',
              description: 'A wishlist with automatic saving, creation, deletion abilities',
              tools: 'Kotlin, Android Studio',
              github: 'https://github.com/chiuannica/Wishlist',
              img: 'wishlist.gif'
            },
            {
              id: 2,
              name: 'Capybarable',
              description: 'An application inspired by Wordle, with a Capybara twist. The user guesses a four-letter word in three guesses, with the app telling the user if the letters are in the word and if they are in the right location.',
              tools: 'Kotlin, Android Studio',
              github: 'https://github.com/chiuannica/Wordle',
              img: 'wordle.gif'
            }
          ]
        },
        {
          id: 0,
          name: 'Data Science',
          showCategory: false,
          projects: [
            {
              id: 0,
              name: 'Finding Doge: Cryptocurrency Value and Search Trends',
              description: 'An investigation of the relationship between Google search trends and cryptocurrency values<br> Best Financial Hack at PearlHacks (255 participants). <br>Two years later, my predition was proved to be true.',
              tools: 'Python, Pandas, Matplotlib, Scipy',
              link: 'https://devpost.com/software/search-trends-and-cryptocurrencies',
              github: 'https://gist.github.com/chiuannica/b40328c39bd816d9e3dd5886925eccfd'
            },
            {
              id: 1,
              name: 'Comparing Cryptocurrencies: Dogecoin vs. Ethereum',
              description: 'An analysis of Dogecoin and Ether to evaluate if it is a wise investment or has reliable growth<br> Best Financial Hack at FemmeHacks (210 participants). <br>Two years later, my predition was proved to be true.',
              tools: 'Python, Pandas, Matplotlib, Keras',
              link: 'https://devpost.com/software/ethereuming',
              github: 'https://gist.github.com/chiuannica/df4c95917450d64517750f4e5dd93b1b'
            }
          ]
        },
        {
          id: 1,
          name: 'Web Development',
          showCategory: false,
          projects: [
            {
              id: 2,
              name: 'DogeMail',
              description: 'This is a mock email application. This is a school project! Please don\'t enter any real information in this application.',
              tools: 'ASP.NET, C#, Microsoft SQL Database, SQL HTML/CSS',
              link: 'http://cis-iis2.temple.edu/Spring2021/CIS3342_tui30639/Project3/'
            },
            {
              id: 3,
              name: 'Video Game Store',
              description: 'A website that allows you to search video games in a video game store.',
              tools: 'JavaScript, HTML/CSS',
              link: 'http://cis-iis2.temple.edu/Fall2020/CIS3344_tui30639/lab3/Games.html'
            },
            {
              id: 4,
              name: 'ACM-W Website',
              description: 'A website for Temple\'s chapter of the Association of Computing Machinery',
              tools: 'Vue, JavaScript, HTML/CSS',
              link: 'https://tuacmw.onrender.com',
              github: 'https://github.com/chiuannica/acmw-vue'
            },
            {
              id: 5,
              name: "Valentine's Day Card Generator",
              description: 'A website that take user input and generates a card with a random meme',
              tools: 'JavaScript, Meme API, HTML/CSS',
              link: 'https://chiuannica.github.io/valentinesdaycard/meme.html',
              github: 'https://github.com/chiuannica/valentinesdaycard'
            }
          ]
        }
      ]
    }
  }
}
</script>

<style>
#projects{
  width: 93%;
  margin: 2.5%;
  margin-top: 0;
}
.project-nav-categories {
  display: grid;
  grid-template-columns: 1fr 6fr;
  grid-gap: 3%;
}
#projects > h2, .project-category {
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
  line-height: 1.2;

  display: grid;
  grid-template-columns: 5fr 1fr;
}
.project-nav-button {
  cursor: pointer;
}
.project-nav-button-active {
  border-bottom: hsla(354, 51%, 88%, 0.8) solid 1vh;
  font-weight: bold;
}
.project-title {
  margin: 0;
  font-size: 3em;
  font-display: bold;
  line-height: 1;
}
.project-link {
  padding-left: 1%;
  border-left: hsla(217, 34%, 52%, 1) solid 0.5vh;
  color: hsla(217, 34%, 52%, 0.9);
  transition: border-left 0.7s;
  line-height: 2;
}
.project-link:hover {
  color: hsla(217, 34%, 52%, 0.9);
  border-left: hsla(217, 34%, 52%, 1) solid 1vh;
}
.project-img {
  width: 15vh;
  padding: 2vh;
}
.projects-grid{
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 3%;
}
@media screen and (max-width: 768px) {
  #projects {
    width: 100%;
    margin: 0;
  }
  h4 {
    font-size: 1.2rem;
  }
  .projects-grid {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
  .project {
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
