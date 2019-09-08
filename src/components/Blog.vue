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
          <p v-html="paragraph.text"></p>
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
          title: 'Tech Sexism',
          date: '9/8/2019',
          author: 'Annica',
          paragraphs: [
            { id: 0, text: 'A couple of weeks ago, I read <a href="I read “For Young Coders, Internship Interviews can be Toxic,” by Nitasha Tiku. https://www.wired.com/story/for-young-female-coders-internship-interviews-can-be-toxic/">“For Young Coders, Internship Interviews can be Toxic,” by Nitasha Tiku.</a> The article described the negative experiences of Girls Who Code alumnae in their tech interviews and internships. A woman described her experience being ignored by a male mentor and being treated like a piece of meat. These are unfortunate experiences many women have had.' },
            { id: 1, text: 'Later that day, I received a newsletter from Girls Who Code with a link to the results of a survey conducted. The document was titled, <a href="https://girlswhocode.com/wp-content/uploads/2019/08/GWC_Advocacy_InternshipApplicationExperiences_PDF_z6.pdf"> Applying to Internships as a Woman in Tech</a>.  The main point was half of female respondents reported that they or a woman they know have had a negative experience. One has to remember, even though Girls Who Code has a positive mission, it has an incentive to skew the results of this survey or  support their mission. I kept that in mind while reading this report.' },
            { id: 2, text: 'Overall, I would say the report was quite upsetting, especially, the direct quotes from some of the respondents. The women were asked gendered questions. “I heard comments like, ‘What makes you stand out as a girl? How would you deal with harassment in the workplace?’” The average age of all respondents is 19.1. It is a problem that women at this age hear these comments.' },
            { id: 3, text: 'Women have a right to be upset, but some people don’t see why. Many of the comments under the article by Tiku said that people need to toughen up if they want to be in the tech industry and gendered comments come from rude people, not sexism. ' },
            { id: 4, text: 'I understand why some people are upset that women are complaining about their experiences. No one seems to care about men’s negative experiences. The tech industry is not easy for men at all. People are calling for Google to hire women, not men. I understand why some people believe women get into companies easier. It’s probably true. Tech companies are constantly being grilled for diversity. Hiring managers definitely have the company’s diversity report in mind.' },
            { id: 5, text: 'There are organizations dedicated to women, including Built by Girls, Tech Ladies, Girls Who Code, and Women Who Code. There are scholarships and diversity programs only for women in tech. If I was a male, I would be sour.' },
            { id: 6, text: 'A small percentage of men are responsible for outward gendered jerkiness towards women. All men are not responsible for the male-centered world we live in. It’s not right to believe the tech industry and all men are terrible for the actions described by the GWC survey respondents. We all must work together to make our male-centered world less male-centered, while having men as allies.' },
            { id: 7, text: 'As a new women in tech, I have become more aware of subtle sexism. I found out that a female co-worker was being paid less than a male co-worker for the same work (note: I currently work in education). The reason why was because he was a graduate student and she was an undergraduate. That is an understandable reason, but they had the exact same title and responsibilities, so I think it is unacceptable. If both of them were men, I do not think this would have happened.' },
            { id: 8, text: 'We all need to look out for each other to ensure people are given equal compensation for equal work. Pay discrimination is illegal, but some individuals do not report dispute discrimination. Some people accept weak reasons or think they don\'t deserve more. We need to encourage advocating for ourselves and each other.' },
            { id: 9, text: 'Things will change with time. I think we are making the right steps to solve these problems.' }
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
  border-left: #212D40 solid 0.5vh;
  color: #EBC1C5;
  background: #354051;
  text-decoration: none;
  box-shadow: 1em 1em 2em .25em rgba(0,0,0,.2);
  transition: 0.7s;
}
.blog-nav-row:hover {
  background: #212D40;
  border-left: #EBC1C5 solid 1vh;
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
