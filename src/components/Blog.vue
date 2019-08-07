<template>
  <div id="blog">
    <h2>{{ title }}</h2>
    <nav id="blog-nav">
      <h5>Posts</h5>
      <a v-for="blog in blogs" :href="blog.link" v-on:click="blog.showBlog = !blog.showBlog">
        <tr>
          <td>{{ blog.date }}</td>
          <td>{{ blog.title }}</td>
        </tr>
      </a>
    </nav>
    <div id="content">
      <article :id="blog.date" v-for="blog in blogs" v-on:click="blog.showBlog = !blog.showBlog">
        <h5 class="blog-title">{{ blog.title }}</h5>
        <p>{{ blog.date }} by {{ blog.author }}</p>
        <p class="blog-body" v-show="blog.showBlog" v-for="paragraph in blog.paragraphs">{{ paragraph.text }}</p>
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
      blogs: [
        { 
          id: 0,
          title: "First Time as a Web Development Instructor", 
          date: "8/7/2019",
          link: "#8/7/2019",
          author: "Annica",
          paragraphs: [
            { text: "Summer 2019, I knew I was going to work as a tutor and general employee at a summer program. The Friday before the summer program started, I was asked to be the Web Development instructor next Monday."},
            { text: "Challenge accepted."},
            { text: "This was a great opportunity. Being an instructor usually means being a college graduate. It was an upgrade to my current status as a tutor, plus, I was given the opportunity to share my love for web development with 25 students."},
            { text: "Every day, I scrambled to make materials for upcoming lessons, and I was so terrified of looking like I didn’t know what I was doing. Admittedly, they weren’t the greatest lesson plans, and I could have mapped out the course better. I wish I could have had more time to give more assignments."},
            { text: "Honestly, I did a pretty good job. The end products were great for the time the students had. I was so happy when the students showed me their projects. They made projects on imaginary restaurants, best basketball team lists, and random other things. "},
            { text: "My goal was to introduce the students to basic web development and push one to go deeper into the subject. I really really hope one of them is making websites for fun using what they have learned."},
            { text: "I learned a lot from being on the other side. I learned what it is like to be so passionate about a subject and teach students who don’t care nearly as much. I learned that you can offer all the resources in the world, but the students don’t care enough to use them."},
            { text: "Becoming a teacher taught me to appreciate my teachers and professors. I realized how much of a terrible student I am. I promise I will try to be a better student for my teachers by participating in class and seeking help."},
            { text: "That being said, I know I will continue to teach web development and coding languages for as long as I can. More students should learn about these technologies, because they are essential tools for the future!"},
          ],
          showBlog: false,
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
#blog-nav{
  background: hsl(348, 92%, 80%);
  padding: 5%;
}
tr{
  color: #333; 
  border-bottom: #333 solid 1px;
  font-size: 1.4rem;
  text-decoration: none;
  display: flex;
  justify-content: space-around;
}
tr:hover{
  color: #F73F52;
  border-bottom: #F73F52 solid 1px;
}
#content{
  margin: 5%;
}
article{
  max-width: 100vh;
}
article:hover{
  cursor: pointer;
  border-bottom: red 1px solid;
}
.blog-title{
  margin-bottom: 0;
}

</style>