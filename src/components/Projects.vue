<template>
  <div id="projects">
    <h2>{{ title }} <i :class="projectsIcon"></i></h2>
    <!-- PROJECT NAVIGATION  -->
    <div class="project-nav-categories">
      <div class="project-nav">
        <a
          v-for="(projectCategory, index) in projectCategories"
          :key="index"
          :class="{ 'project-nav-button-active': projectCategory.showCategory === true }"
          class="project-nav-button"
          @click="showCategory(index)"
        >
          {{ projectCategory.name }}
        </a>
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
                <div v-if="project.img">
                  <img
                    class="project-img"
                    :src="require(`@/assets/demos/${project.img}`)"
                    @click="showModal(project)"
                  >
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--IMAGE PREVIEW MODAL-->
    <div
      class="modal"
      v-if="showImageModal"
      @click="closeModal()"
      :class="{ 'modal-show': showImageModal === true }"
    >
      <div class="modal-content">
        <img
          class="modal-img"
          :src="require(`@/assets/demos/${modalProject.img}`)"
        >
        <div class="modal-close-wrapper">
          <button
            class="modal-close-button"
          >
            <i class="fa fa-times"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { projectCategories } from './projects.js'
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
    },
    showModal (project) {
      this.modalProject = project
      this.showImageModal = !this.showImageModal
    },
    closeModal () {
      this.showImageModal = !this.showImageModal
    }
  },
  data () {
    return {
      title: 'Projects',
      projectsIcon: 'fa fa-file-code-o',
      showImageModal: false,
      modalProject: null,
      projectCategories: projectCategories
    }
  }
}
</script>

<style>
#projects {
  width: 90%;
  margin: 2.5%;
  margin-top: 0;
}
#projects > h2 {
  margin-left: 15%;
}
.project-nav-categories {
  display: grid;
  grid-template-columns: 1fr 6fr;
  grid-gap: 2%;
}
.project {
  background: hsl(216, 21%, 13%);
  border-radius: 0.5vh;
  color: hsla(354, 51%, 88%, 0.8);
  box-sizing: border-box;
  padding: 1.5em;
  transition: border-left 0.7s;
  margin: 0;
  box-shadow: 1em 1em 2em .25em rgba(0,0,0,.2);
  line-height: 1.2;
  display: grid;
  grid-template-columns: 2fr 1fr;
}
.project-nav-button {
  cursor: pointer;
  display: block;
  margin: 1%;
  padding: 2%;
  padding-bottom: 1%;
  font-size: 3.4em;
  border-radius: 0.5vh;
  border-bottom: hsla(354, 51%, 88%, 0) solid 1vh;
  transition: 0.7s;
}
.project-nav-button:hover{
  background: hsla(217, 34%, 80%, 0.5);
  font-weight: bold;
}
.project-nav-button-active {
  border-bottom: hsla(354, 51%, 88%, 0.8) solid 1vh;
}
.project-title {
  margin: 0;
  font-display: bold;
  line-height: 1;
}
.project-link {
  padding-left: 1%;
  border-left: hsla(217, 34%, 80%, 1) solid 0.5vh;
  color: hsla(217, 34%, 80%, 0.9);
  transition: border-left 0.7s;
  line-height: 2;
}
.project-link:hover {
  color: hsla(217, 34%, 80%, 1);
  border-left: hsla(217, 34%, 80%, 1) solid 1vh;
}
.project-img {
  width: 100%;
  padding: 0.5vh;
  padding-top: 2vh;
  cursor: pointer;
  opacity: 40%;
}
.projects-grid{
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1.5%;
}
/* Modal styles */
.modal {
  position: fixed;
  z-index: 10;
  left: 0;
  top: 0;
  width: 80%;
  height: 100%;
  margin: 0 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.35s ease-in-out;
  cursor: pointer;
}
.modal-show {
  opacity: 1;
  transition: opacity 0.35s ease-in-out;
}
.modal-close-button {
  z-index: 1;
  font-weight: bold;
  cursor: pointer;
  font-family: 'Catamaran', 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: 3rem;
  display: block;
  width: 4rem;
  height: 4rem;
  line-height: 3rem;
  color: hsla(354, 51%, 95%, 0.8);
  background: hsla(354, 51%, 38%, 0.8);
  border: 0;
  border-radius: 0.5vh;
  cursor: pointer;
  transition: all 0.7s;
}
.modal-close-button:hover,
.modal-close-button:focus {
  text-decoration: none;
  cursor: pointer;
  background: hsla(354, 51%, 30%, 0.8);
}
.modal-close-wrapper {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 5%;
}
.modal-img {
  width: 100%;
  max-width: 45rem;
  max-height: 45rem;
  border-radius: 0.5rem;
}
@media screen and (max-width: 1100px) {
  #projects {
    width: 100%;
    max-width: 40rem;
    margin-left: auto;
    margin-right: auto;
  }
  .project-nav-categories {
    display: block;
  }
  .project-nav {
    margin: 5%;
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
