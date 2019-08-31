<template>
  <div id="blog">
    <h2>{{ title }}</h2>
    <div id="blog-nav">
        <p>{{ navText }}</p>
      <a :key="blog.id" v-for="blog in blogs" :href="blog.link" v-on:click="blog.showBlog = !blog.showBlog">
        <div class="blog-nav-row">
          <p>{{ blog.date }}</p>
          <p>{{ blog.title }}</p>
        </div>
      </a>
    </div>
    <div id="content">
      <article :key="blog.date" :id="blog.id" v-for="blog in blogs">
        <div class="clickable" v-on:click="blog.showBlog = !blog.showBlog">
          <h5 class="blog-title">{{ blog.title }}</h5>
          <p>{{ blog.date }} by {{ blog.author }}</p>
        </div>
        <div v-show="blog.showBlog" :key="paragraph.id" class="blog-body" v-for="paragraph in blog.paragraphs">
          <p>{{ paragraph.text }}</p>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Blog',
  data () {
    return {
      title: 'Blog',
      navText: 'Click on Title to View',
      navIcon: 'fa fa-hand-pointer-o',
      blogs: [
        {
          id: 0,
          link: '#0',
          title: 'Becoming a Web Development Instructor',
          date: '8/7/2019',
          author: 'Annica',
          paragraphs: [
            { id: 0, text: 'Summer 2019, I knew I was going to work as a tutor and general employee at a summer program. The Friday before the summer program started, I was asked to be the Web Development instructor next Monday.' },
            { id: 1, text: 'Challenge accepted.' },
            { id: 2, text: 'This was a great opportunity. Being an instructor usually means being a college graduate. It was an upgrade to my current status as a tutor, plus, I was given the opportunity to share my love for web development with 25 students.' },
            { id: 3, text: 'Every day, I scrambled to make materials for upcoming lessons, and I was so terrified of looking like I didn’t know what I was doing. Admittedly, they weren’t the greatest lesson plans, and I could have mapped out the course better. I wish I could have had more time to give more assignments.' },
            { id: 4, text: 'Honestly, I did a pretty good job. The end products were great for the time the students had. I was so happy when the students showed me their projects. They made projects on imaginary restaurants, best basketball team lists, and random other things.' },
            { id: 5, text: 'My goal was to introduce the students to basic web development and push one to go deeper into the subject. I really really hope one of them is making websites for fun using what they have learned.' },
            { id: 6, text: 'I learned a lot from being on the other side. I learned what it is like to be so passionate about a subject and teach students who don’t care nearly as much. I learned that you can offer all the resources in the world, but the students don’t care enough to use them.' },
            { id: 6, text: 'Becoming a teacher taught me to appreciate my teachers and professors. I realized how much of a terrible student I am. I promise I will try to be a better student for my teachers by participating in class and seeking help.' },
            { id: 8, text: 'That being said, I know I will continue to teach web development and coding languages for as long as I can. More students should learn about these technologies, because they are essential tools for the future!' }
          ],
          showBlog: false
        },
        {
          id: 1,
          link: '#1',
          title: 'What Women In Tech Means',
          date: '8/--/2019',
          author: 'Annica',
          paragraphs: [
            { id: 0, text: 'Coming Soon' }
          ],
          showBlog: false
        }
        /*
        {
          id: 1,
          title: "Blog 2 Title",
          date: "1/1/2020",
          author: "Annica",
          paragraphs: [
            { text: "hi"},
            { text: "ho"},
            { text: "hello"},
            { text: "yo"},
          ]
        }
        */
      ]
    }
  }
}
</script>

<style>
#blog {
  display: block;
  width: 100%;
}
#blog-nav {
  display: grid;
  grid-template-rows: auto;
  width: 100%;
  margin: 3%;
}
.blog-nav-row {
  display: grid;
  grid-template-columns: 1fr 4fr;
  max-width: 100vh;
  margin-bottom: 1%;
  padding: 1%;
  border-left: #333 solid 0.5vh;
  color: #333;
  background: #fef3b7;
  text-decoration: none;
  box-shadow: 1em 1em 2em .25em rgba(0,0,0,.2);
  transition: border-left 0.7s;
}
.blog-nav-row:hover {
  border-left: #F73F52 solid 1vh;
}
#content {
  margin: 3%;
  display: block;
}
article {
  max-width: 100vh;
  margin-bottom: 1%;
  padding: 1%;
  transition: border-left 0.7s;
}
.clickable {
  cursor: pointer;
}
.blog-title{
  margin-bottom: 0;
}
@media screen and (max-width: 768px) {
  .content {
    margin: 5vh;
  }
  .blog-nav-row {
    display: block;
    width: 90%;
  }
}
</style>
