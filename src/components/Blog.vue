<template>
  <div id="blog">
    <h2>{{ title }}<p>{{ navText }}</p></h2>
    <div id="blog-nav">
      <a :key="blog.id" v-for="blog in blogs" :href="blog.link" v-on:click="blog.showBlog = !blog.showBlog">
        <div class="blog-nav-row">
          <p>{{ blog.date }} {{ blog.title }}</p>
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
          id: 3,
          link: '#3',
          title: 'HopHacks: Let Me Speak!',
          date: '9/24/2019',
          author: 'Annica',
          paragraphs: [
            { id: 0, text: 'My group at HopHacks consisted of three other guys and me. Many hackathons follow this judging format: the judges went to the table number of the projects that fit under their category. The presenters would have to present multiple times. For one of the judges, I was talked over every time I tried to speak.' },
            { id: 1, text: 'When groups present, it looks bad if everyone doesn’t speak. It looks especially bad if the one underrepresented minority doesn’t speak. As the girl in the team of guys, I was trying to get my word in to prove that I wasn’t there for decoration.' },
            { id: 2, text: 'I tried to speak at least five times and was spoken over by a guy every time. Two dudes kept interrupting me. I was not being neutral at all. I was literally making sounds and got cut off.' },
            { id: 3, text: 'Me: “Th-” <br>Guy 1: “Blah blah blah…” <br>Me: “Yeah and-” <br>Guy 2: “Yada yada yada...” <br>Judge: “Orly… Cool!” <br>Me: “Our-” <br>Guy 1: “Foo bar foo bar…” <br>Me: “Ye-” <br>Guy 2: “Lala...” <br>Me: *gives up*' },
            { id: 4, text: 'After the last time, I gave up and let the two who kept cutting me off talk. I tried to speak so many times I am pretty sure the two dudes and the judge noticed at least once. Apparently anything I say will just make us lose points.' },
            { id: 5, text: 'The judge actually asked and Guy 3 a question directly. Thank you, judge, for making me feel like I deserved some airtime. People like the judge are the people we need in tech!' },
            { id: 6, text: 'I have never had a negative experience in tech until now.' },
            { id: 7, text: 'Perhaps I am being too sensitive. Actually, I have ruled that out. I have already mentioned this: for group projects, everyone should speak, otherwise, the group looks bad. In every single case for a group project, everyone needs to speak. For group projects at school, Hell’s Kitchen, KPop, companies, and every other context, as many members as possible should speak. Even BTS has at least half of the group say something when accepting an award because they value all of the members’ perspective and contribution. This is how I know I am not being sensitive.' },
            { id: 8, text: 'After the judge left, I suggested that we determine exactly what each of us would talk about. Everyone agreed and I spoke for the next presentation.' },
            { id: 9, text: 'I do not want to assume poor intentions, but I tried to speak so many times and was cut off every time. One would think that after the third time I would get my word in. People these days think they are Socrates and no one else can say it like they can.' },
            { id: 10, text: 'Never let arrogant people keep you from talking!' }
          ],
          showBlog: false
        },
        {
          id: 2,
          link: '#2',
          title: 'HopHacks: Face Tech\'s Reality',
          date: '9/20/19',
          author: 'Annica',
          paragraphs: [
            { id: 0, text: 'On September 13th, I went to Baltimore to participate in Johns Hopkins University’s hackathon, HopHacks. I was on the bus that the hackathon provided for Northeastern cities. We came off the highway and passed peeling infrastructure, boarded up doors, and barbed wire fences on the way to the university.' },
            { id: 1, text: 'Once I stepped foot on Johns Hopkins, I saw not a single blade of grass out of place. The roads were completely clear of dead leaves. The buildings and roads matched red bricks almost too uniformly.' },
            { id: 2, text: 'The difference between the streets and the university is proof of income inequality, the effects of generational poverty and historical discrimination. Our reality is unfortunate.' },
            { id: 3, text: 'At the hackathon, there was a lot of guys. I have never been to a hackathon with so many dudes. I sat in a row with two other females and greeted them, “hey fellow girls.” The person next to me agreed, there were indeed a lot of guys.' },
            { id: 4, text: 'I highly doubt HopHacks rejected anyone or crafted their hackathon to be so male-dominated. They probably accepted every applicant because I received the acceptance to the hackathon soon after. This was different from the hackathon I went to the week before, PennApps, because I saw many more girls. The organizers were dominated by females at PennApps and by males at HopHacks.' },
            { id: 5, text: 'Again, I highly doubt HopHacks was responsible for the lack of girls. Most likely few girls applied. PennApps had a much larger applicant pool to choose from, which is why the speakers at the opening ceremony mentioned that 30% of hackers were female. To be frank, PennApps most likely denied a bunch of dudes for diversity\'s sake.' },
            { id: 6, text: 'I do not want to say anything bad about HopHacks. I am quite certain they did not intend for there to be so many guys at their hackathon and accepted every applicant. HopHacks would not be a good hackathon for first-time female hackers because seeing so many males would be discouraging.' },
            { id: 7, text: 'Personally, the first hackathon I attended was Technica, the largest female and non-binary hackathon. I imagine that if I came into HopHacks as a first-time hacker, I would be hesitant to attend other hackathons. If I were a first-time hacker, I would be afraid to talk to all the guys at team building. Fortunately, I have been to a few other hackathons and was not afraid to talk to the wall of men.' },
            { id: 8, text: 'This is why female-centered hackathons like Technica and TechTogether are so important. Non-males need support in a male-dominated field. My opinion on this runs into some issues.' },
            { id: 9, text: 'Some people think that the tech industry should not have to bend backwards to get females in the industry. If these females deserve to be in tech, they should be able to get past all of the adversity. I think everyone agrees diversity quotas are not a good idea. A good idea is to have specific support for females just starting. Female-centered hackathons prevent underrepresentation from detering female hackers.' },
            { id: 10, text: 'Multiple factors contribute to underrepresented individuals quitting tech. These factors include imposter syndrome, only knowing Java, having to retake pre-calc, not being a Machine Learning person, and seeing people who do not look like you at a hackathon. That last factor may be the factor that puts someone over the edge.' },
            { id: 11, text: 'Luckily, I had a positive experience at my first hackathon. I\'m glad I have have first-hand experience with all the good things about tech before finding the bad.' }
          ],
          showBlog: false
        },
        {
          id: 1,
          link: '#1',
          title: 'Is Tech Sexism Real?',
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
        },
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
        }
      ]
    }
  }
}
</script>

<style>
#blog {
  display: block;
  max-width: 120vh;
}
#blog-nav {
  display: grid;
  grid-template-rows: auto;
  margin-left: 3%;
}
.blog-nav-row {
  display: grid;
  padding: .5%;
  margin: .1% 0;
  border-left: #212D40 solid 0.5vh;
  color: #ebc1c5cc;
  background: #354051;
  text-decoration: none;
  transition: 0.7s;
}
.blog-nav-row:hover {
  background: #212D40;
  border-left: #ebc1c5cc solid 1vh;
}
#content {
  display: block;
  margin-left: 3%;
}
article {
  margin: .5% 0;
  padding: 1%;
  transition: border-left 0.7s;
}
.clickable {
  cursor: pointer;
}
.blog-title {
  color: #354051;
  border-left: #354051 solid 0.5vh;
  padding-left: 1%;
  margin-bottom: 0;
  transition: all 0.7s;
}
.blog-title:hover {
  color: #212D40;
  border-left: #212D40 solid 1vh;
  transition: all 0.7s;
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
