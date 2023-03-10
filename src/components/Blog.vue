<template>
  <div id="blog">
    <p class="nav-text">{{ navText }}</p>
    <!-- PAGINATION -->
    <nav>
      <ul class="pagination">
        <li class="prev" @click="previousPage()">
          <a href="#">←</a>
        </li>
        <li v-for="page in pages"
            :key="page"
            @click="changeToPage(page)"
            :class="{ 'bold-page': page === currentPage }">
          <a href="#">{{ page }}</a>
        </li>
        <li class="next" @click="nextPage()">
          <a href="#">→</a>
        </li>
      </ul>
    </nav>
    <!-- BLOG LIST -->

    <div id="blog-nav">
      <div :key="blog.id" v-for="(blog) in paginatedBlogs">
        <a class="blog-nav-item" v-on:click="showBlog(blog)">
          <p> {{ blog.title }}</p> <p class="date">{{ blog.date }}</p>
        </a>
        <article v-show="blog.showBlog" :key="blog.date" :id="blog.id">

        <!--BODY OF BLOG -->
        <div class="blog-body">
          <img class="blog-img" :src="blog.img">
          <div :key="paragraph.id" v-for="paragraph in blog.paragraphs">
            <p class="blog-text" v-html="paragraph.text"></p>
          </div>
        </div>

        <!--CLOSE BUTTON OF BLOG -->
        <div class="blog-close-wrapper">
          <button class="blog-close-btn" v-on:click="blog.showBlog = !blog.showBlog"><i class="fa fa-times"></i></button>
        </div>
      </article>
      </div>
    </div>
  </div>
</template>

<script>
import { blogs } from './blogs.js'
export default {
  name: 'Blog',
  data () {
    return {
      title: 'Blog',
      navText: '',
      navIcon: 'fa fa-pencil',
      blogs: blogs,
      currentPage: 1,
      blogsPerPage: 5,
      currentPageStyle: 'bold-page'
    }
  },
  computed: {
    paginatedBlogs () {
      const startIndex = (this.currentPage - 1) * this.blogsPerPage
      const endIndex = startIndex + this.blogsPerPage
      return this.blogs.slice(startIndex, endIndex)
    },
    pages () {
      return Math.ceil(this.blogs.length / this.blogsPerPage)
    }
  },

  methods: {
    closeAllBlogs () {
      this.blogs.forEach(blog => {
        blog.showBlog = false
      })
      if (this.playingVideo) {
        this.playingVideo.pause()
        this.playingVideo = null
      }
    },

    changeToPage (page) {
      this.closeAllBlogs()
      this.currentPage = page
    },
    previousPage () {
      this.closeAllBlogs()
      if (this.currentPage > 1) {
        this.currentPage--
      }
    },
    nextPage () {
      this.closeAllBlogs()
      if (this.currentPage < this.pages) {
        this.currentPage++
      }
    },
    showBlog (blog) {
      var save = blog.showBlog
      this.closeAllBlogs()
      blog.showBlog = !save
    }
  }
}
</script>

<style>
h5 {
  margin: 0;
}
#blog {
  display: block;
  max-width: 70em;
  margin: 0 auto;
}
#blog-nav {
  display: grid;
  grid-template-rows: auto;
  margin: 0% 3%;
}
.nav-text {
  text-align: center;
}
.blog-nav-item {
  display: grid;
  grid-template-columns: 3fr 1fr;
  padding: 2% 3%;
  margin-bottom: 1.5%;
  border: hsl(216, 21%, 13%) solid 0.2vh;
  border-left: hsl(216, 21%, 13%) solid 0.5vh;
  border-radius: 0.5vh;
  color: hsl(216, 21%, 13%);
  text-decoration: none;
  transition: 0.7s;
  font-size: 1.2em;
}
.date {
  text-align: right;
}
.blog-nav-item:hover {
  background: hsl(216, 21%, 13%);
  border-left: hsla(354, 51%, 88%, 0.8) solid 1vh;
  color: hsla(354, 51%, 88%, 0.8);
  cursor: pointer;
  box-shadow: 1em 1em 2em .25em rgba(0,0,0,.2);
}
article {
  margin: .5% 0;
  padding: 1%;
  transition: border-left 0.7s;
}
.blog-title {
  color: #354051;
  text-align: center;
  margin-bottom: 0;
  cursor: pointer;
  transition: all 0.7s;
}
.blog-title:hover {
  color: hsl(216, 21%, 13%);
  transition: all 0.7s;
}
.blog-img {
  max-width: 25em;
  box-shadow: 1em 1em 2em .25em rgba(0,0,0,.2);
}
.blog-text {
  margin-bottom: 2em;
}
.blog-close-wrapper {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 5%;
}
.blog-close-btn {
  font-family: 'Catamaran', 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  display: block;
  width: 15%;
  height: 12%;
  color: hsla(354, 51%, 95%, 0.8);
  background: hsla(354, 51%, 38%, 0.8);
  border: 0;
  border-radius: 0.5vh;
  padding-left: auto;
  padding-right: auto;
  cursor: pointer;
  transition: all 0.7s;
  text-align: center;
}
.blog-close-btn:hover{
  background: hsla(354, 51%, 30%, 0.8);
}
iframe {
  border-left: hsla(354, 51%, 88%, 0.8) solid 1vh;
  padding-left: 1%;
  max-width: 100%;
}

/* PAGINATION */
.pagination {
  display: flex;
  justify-content: center;
  list-style: none;
  padding: 0;
  margin: 2%;
}
.pagination li {
  margin: 0 2%;
}
.pagination li a {
  display: block;
  text-align: center;
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
}
.pagination li a:hover,
.pagination li a.active {
  font-weight: bold;
}
.bold-page > a {
  border-bottom: hsla(354, 51%, 88%, 0.8) solid 1vh;
  font-weight: bold;
}
@media screen and (max-width: 768px) {
  #blog {
    margin: 0;
  }
  .content {
    margin: 5vh;
  }
  .blog-nav-row {
    display: block;
    width: 90%;
  }
}
</style>
