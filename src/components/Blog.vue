<template>
  <div id="blog">
    <h2>{{ title }} <i :class="navIcon"></i><p>{{ navText }}</p></h2>
    <div id="blog-nav">
      <div :key="blog.id" v-for="blog in blogs">
        <a class="blog-nav-item" v-on:click="blog.showBlog = !blog.showBlog">
          <p>{{ blog.date }}: {{ blog.title }}</p>
        </a>
        <article v-show="blog.showBlog" :key="blog.date" :id="blog.id">
        <div>
          <h5 class="blog-title" v-on:click="blog.showBlog = !blog.showBlog">{{ blog.title }}</h5>
          <!--
            <p>{{ blog.date }} by {{ blog.author }}</p>
          -->
        </div>
        <div class="blog-body">
          <img class="blog-img" :src="blog.img">
          <div :key="paragraph.id" v-for="paragraph in blog.paragraphs">
            <p v-html="paragraph.text"></p>
          </div>
        </div>
        <a class="blog-close-btn" v-on:click="blog.showBlog = !blog.showBlog">Close “{{blog.title}}”</a>
      </article>
      </div>
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
      navIcon: 'fa fa-pencil',
      blogs: [
        /*
        {
          id: 1000,
          title: 'Title',
          date: '0/0/2020',
          author: 'Annica',
          paragraphs: [
            { id: 0, text: '' },
            { id: 0, text: '' },
            { id: 0, text: '' },
            { id: 0, text: '' }
          ],
          showBlog: false
        },
        */
        {
          id: 12,
          title: 'I want to be me',
          date: '5/28/2020',
          author: 'Annica',
          paragraphs: [
            { id: 0, text: 'This blog post is related to “Dealing With Rejection.”' },
            { id: 1, text: 'I have been successful and unsuccessful at many interviews. Sometimes, the interviewer just doesn’t like me. Maybe it is something about how I look or speak. The person might be having a bad day or something I said put them off. ' },
            { id: 2, text: 'The goal of an interview is to please the interviewer. To please the interviewer, we have to be “professional.” Our answers need a “professional” mask over them. It’s more like “artificial” to me.' },
            { id: 3, text: 'I don’t want to be somebody. I want to be me. <strong>I am tired of acting “professional” at the expense of who I am. </strong>' },
            { id: 4, text: '<iframe width="560" height="315" src="https://www.youtube.com/embed/fE2h3lGlOsk?start=177" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' },
            { id: 5, text: 'I love KPop. I love cats. I love to cook runny scrambled eggs. I am me. Why do I have to hide the “unprofessional” side of me? ' },
            { id: 6, text: 'I started my job tutoring high school students and became a figure of authority to people, some of whom were a few months younger than me. I had to appear to have some maturity. I spent so much time thinking of what other people thought of me and became miserable being someone I am not.' },
            { id: 7, text: 'I relinquish ingenuine Annica!' }
          ],
          showBlog: false
        },
        {
          id: 11,
          title: 'Dealing With Rejection',
          date: '5/27/2020',
          author: 'Annica',
          paragraphs: [
            { id: 5, text: '<iframe width="560" height="315" src="https://www.youtube.com/embed/gl1aHhXnN1k?start=39" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' },
            { id: 0, text: 'I got rejected by a program that I really wanted to be part of and I am slightly, actually extremely, upset. The world is my enemy! The world is out to get me! My efforts are futile!' },
            { id: 1, text: 'That is what I thought immediately after, then I remembered that it is good to be rejected.' },
            { id: 2, text: 'Being rejected tons of times taught me that rejection is a good thing. Although it is hard to accept, rejection means the thing isn’t right for me and that I should use my capacity for something else. A key example is when I got rejected by Company A. I am glad I got rejected by them because if I didn’t, I wouldn’t have applied and been accepted by Company B (so suck it, Company A).' },
            { id: 3, text: 'Before I got my super cool job helping high school students code and write college essays, I applied to a zillion random jobs. I applied everywhere because I was desperate for a job: Starbucks, Staples, Chipotle, and some other places I don’t care about. I am happy that they all rejected me because if they didn’t, I wouldn’t have applied to my current job (so suck it).' },
          ],
          showBlog: false
        },
        {
          id: 10,
          title: 'Defining “Success”',
          date: '5/1/2020',
          author: 'Annica',
          paragraphs: [
            { id: 0, text: 'During the rule of Queen Rona, I have had more time to sleep, eat, and think.' },
            { id: 1, text: 'In one of my earlier blog posts, “My Empty Skyscrapers,” I wrote about how I acquire and acquire, and still remain unsatisfied. It is kind of like how I eat and eat, and still get hungry, especially now that I am inside all day. ' },
            { id: 2, text: 'I learned that I am chasing an image that will never satisfy me. In my head, I have an image of the future me smiling, with everything I want right now. It is fake and will never be realized, yet it rules my life. I have plenty of things I have wanted before, and I am still unsatisfied and chasing new images. I work towards these images to be successful in the eyes of others. I need to learn to pursue my own definition of success. ' },
            { id: 3, text: 'I really don\'t know what my own definition of success means. I guess I just have to do things until I know.' }
          ],
          showBlog: false
        },
        {
          id: 9,
          title: 'My Proudest Moment',
          date: '3/21/2020',
          author: 'Annica',
          paragraphs: [
            { id: 0, text: 'Yesterday, a student who I have built a relationship with for almost two years told me he received a full-tuition scholarship to college. He told me right after he told his parents.' },
            { id: 1, text: 'I had wrote a letter of recommendation for his application to this college as his Computer Science instructor. I have also been working with him since September on his college applications. I knew from the beginning his work would pay off in his college applications, but the news really seals the deal.' },
            { id: 2, text: 'To summarize what I do, I help a group of seniors apply to college by offering my advice, reading over their essays, or helping them brainstorm prompts. These seniors are low-income first-generation students. They are the students who need college the most, and need the most help to access it.' },
            { id: 3, text: 'This is one of my proudest moments because my investment paid off for someone else. This student is just like me. We both are first-generation, children of immigrants, and current/former Philadelphia school district students. ' },
            { id: 31, text: 'First-gen students struggle with the college process because no one in our family knows English well enough to help us, our public schools don’t have enough resources going towards college access, and we don’t know how to ask for help. First-generation and the children of immigrants don’t know how to reach out because we are used to helping ourselves and don’t want to look weak. It is up to people who have been through it to reach out.' },
            { id: 4, text: 'I remember being a senior in high school. As a senior, I wrote a few dark journal entries. They are upsetting to read. I was lost, overwhelmed, and afraid of my future, not to mention my undiagnosed narcolepsy. I was angry that my family couldn’t help me apply to college. My parents still don’t know what the FAFSA is. My counselor didn’t like me. I became resentful because of my stress and lack of sleep. I know that I am not alone in being resentful because of the expectations of seniors. ' },
            { id: 5, text: 'A couple months ago, a portion of the seniors I was working with were extremely overwhelmed by their obligations. They needed to work on college applications and had to study for an upcoming final in a college class they were taking at the community college. They were caught in the middle of a disagreement and got lectured at. I could see the steam rising from their heads. I tried to empathize. As I gave one of the students a hug, they said, <strong>“thanks, I haven’t had that in a while.”</strong>' },
            { id: 6, text: 'I can still hear this comment and the tone of this person’s voice clearly in my head. It reminded me of the anger and hopelessness I had as a senior and it told me that plenty of other students feel the same way. Seniors are under extreme pressure, especially if they are the first in their family to go to college. ' },
            { id: 7, text: 'The students’ non-college-educated parents expect them to go to college to get a high paying job to lift their family to the next class. The students expect themselves to pay back their parents for their sacrifices. The counselors expect the students to be applying to scholarships and colleges at every waking moment. The teachers expect the students to keep getting high grades in class. The colleges, while not caring that their entire system is catered towards those who have more, and expect students to have a plan to save the world. All of this, while these students haven\'t even voted in their first election yet.' },
            { id: 8, text: 'This proud moment shows that my effort in mentoring these students has gone somewhere. I wish that no 17 or 18 year old student would have to be under this pressue and that I could make more of a dent in this issue. ' },
            { id: 9, text: 'Still, this is a great accomplishment. I am glad that my effort has gone somewhere. A student receives the award he deserves.' }
          ],
          showBlog: false
        },
        {
          id: 8,
          title: 'Mentorship and Me',
          date: '2/23/2020',
          author: 'Annica',
          /* img: require('@/assets/me.jpg'), */
          paragraphs: [
            { id: 0, text: 'A few months ago, I wrote this story of my mentor impacting me in a way he will probably never know.' },
            { id: 0, text: '<i>"I was sitting at a school computer writing an essay. I started thinking of how alone I was and got really down on myself. I was resentful at my terrible luck, how alone I was, and how I had things to do while I just wanted to do nothing.</i>' },
            { id: 0, text: '<i>I continued to do my homework and someone called me. I had my earbuds in and I wasn’t even listening to music. It was the person who drove me to dragon boat practice a few times, and he had become a father-figure-mentor-idk person to me. At first, I thought it might have been a mistake. I answered and he told me he was on campus and wanted to grab lunch with me to catch up.</i>' },
            { id: 0, text: '<i>I went and watched him eat because I had already eaten. He kept asking if I wanted anything and I kept denying because that’s just what I do. He listened to my problems and offered his advice. <strong>He said that if I ever go to a party and need a ride home that he would drive me home. It made me realize there are people who really care about me.</strong></i>' },
            { id: 0, text: '<i>What is pretty amazing is that I usually miss calls because I always have my phone on mute, but that time, I had my earphones in without even listening to music. Such a coincidence."</i>' },
            { id: 0, text: 'This happened around last year. Reading this back always makes me feel happier because I feel so lucky to have people who care about me in my life. He also brought me to my first soccer game and drove me to dragon boat practice too many times to count. He brought me out to eat sushi when I got my first internship.' },
            { id: 0, text: '<strong>It means a lot to me, and I will probably never be able to express my gratitude.</strong> I have baked him a pie and some cookies, but still, I probably won’t ever be able to repay him for what he has done for me.' },
            { id: 0, text: 'There are plenty of other mentors in my life. I can think of them all right now. There are plenty of them on my dragon boat team. They have watched me grow up from a sophomore in high school to a sophomore in college. There are plenty of things they have done to make me happy.' },
            { id: 0, text: 'The coach bought my friend and I ice cream twice. Someone went with me to the gym and showed me workouts to do. Someone else talked to me about stocks and told me to open a Roth IRA. They are always willing to listen and give advice. There are plenty of other things people on this team have done for me. There are too many to list and it would just get redundant if I did. ' },
            { id: 0, text: 'The mentors in my life may never understand the impact they have had on me and I am grateful to have them in my life.' }
          ],
          showBlog: false
        },
        {
          id: 7,
          title: 'My Empty Skyscrapers',
          date: '1/21/2020',
          author: 'Annica',
          /* img: require('@/assets/me.jpg'), */
          paragraphs: [
            { id: 0, text: 'I saw an article written for <em>The Atlantic</em> called, <a href="https://www.theatlantic.com/ideas/archive/2020/01/american-housing-has-gone-insane/605005/">“Why Manhattan’s Skyscrapers Are Empty.”</a> Without reading the article, I thought of the title as a way of thinking of myself.' },
            { id: 1, text: 'In basic terms, the article is about how there are not enough affordable housing options for people who are low or middle class, while there are empty apartments in Manhattan skyscrapers. This causes less homeownership in younger people and homelessness.' },
            { id: 2, text: 'I continue to develop myself, as Manhattan does. Manhattan builds skyscrapers, I build titles on my resume. While Manhattan has, what the author calls, “stalagmites” growing from the ground, the city still has an alarming homeless population. This makes me think of how <strong>I am growing through experience, but I still have the same underlying problems that keep me from truly feeling secure with myself.</strong>' },
            { id: 3, text: 'In high school, I was very sad. I became bitter because of the vicious competition at my school. I saw it in my friends. I think of my high school friends as acquisitionary, if that is even a word. They were focused on attaining goals and points to use to impress colleges. Many of them succeeded in that and continue to acquire titles, as many of my friends study in the Ivy League.' },
            { id: 4, text: 'The mindset of acquisition is still what hurts my mind. It gives me a false purpose to want to continue building up my skyscrapers, or my resume, while I still have homeless people on the streets, or my problems. ' },
            { id: 5, text: 'I have improved myself by starting to exercise regularly, being more conscious of what I eat, and acknowledging my narcolepsy. I have built strong connections with high school students who have the same struggles I did and have a sense of purpose for my work. With all of these improvements, I still feel as though the tall buildings I have are empty. ' }

          ],
          showBlog: false
        },
        {
          id: 6,
          title: 'Trust the Process',
          date: '12/24/2019',
          author: 'Annica',
          paragraphs: [
            { id: 0, text: 'This semester, I totally burned out. In short, I got food poisoning from eating kimbap in November, which put me behind in school. I was totally burned out from going to school, working, and applying for internships.' },
            { id: 1, text: 'I would like to write more about my experience with applying for internships later. To summarize, it was frustrating to coordinate with the companies’ representatives, and some people have unrealistic expectations for interns.' },
            { id: 2, text: 'It was tiresome to be on top of my obligations and responsibilities. I couldn’t see that I was overworking myself until I got physically sick from eating kimbap. It didn’t help that I have narcolepsy, which I recently found out.' },
            { id: 3, text: 'When I learned I have narcolepsy, my symptoms made sense. I was always sleepy and had cataplexy. Even though nothing has changed, I am relieved that I am sleepy not because I am lazy.' },
            /*
            { id: 4, text: 'I finally found an internship after starting my search in September. I am over the moon with the company. The people who represented the company infinitely better than the people who represented other companies. I spoke with a representative who assured that my narcolepsy/sleepiness would not be an issue and would be accomodated. Someone from within the company helped me prepare for the interview. For the interview, I spoke with a person who was much higher up than who I was used to. Unlike every other company, I only had to wait a day to get my decision. I accepted because I had such a good experience with the people who represented the company.' },
            { id: 5, text: 'This came right after I had been rejected by a company I was aiming for. I couldn’t see it then, but I am so happy they rejected me (I am still of the belief they made a huge mistake). If they didn’t, then I would have never interviewed with this company who treated me much better and is a much better fit.' },
            { id: 6, text: 'This turn of events has taught me the meaning of “trust the process.” After I got rejected by the other company, I ran on the treadmill to run away from obligations, blasting kpop in the ears. I tried to get myself to cry to finally let out the pent up emotions, while convincing myself there was nothing to cry about. I wasn’t just upset about the rejection. I was upset about all of my obligations. My school assignments, my job that I wanted to quit, my other job, my fear of not finding an internship after declining an offer in September, and the lack of contact I had with friends. With all of these issues on my mind, the rejection was like the final punch that knocked me out.' },
            { id: 7, text: 'I finished my finals and received my offer in the same week. Literally, after my last final, I was on the phone receiving my offer. Finally, I could breathe.' },
            */
            { id: 8, text: 'I can’t believe the stress I have been putting myself under while having narcolepsy. To put it in basic terms, narcolepsy causes someone to not get proper rest during the night because they lack cells which produce hormones that regulate the stages of sleep. This causes them to get sleepy during the day to make up for the poor quality of sleep they get at night. I have been depriving myself of sleep for my whole life without knowing. No wonder I was crashing and burning.' },
            { id: 9, text: 'The semester is over. Finally, I can breathe.' }
          ],
          showBlog: false
        },
        {
          id: 5,
          title: 'Happy Every Day',
          date: '10/25/2019',
          author: 'Annica',
          paragraphs: [
            { id: 0, text: 'Note: I wrote this on 10/25/2019 and was hesistant to upload. I uploaded this on 12/24/2019.' },
            { id: 1, text: 'This blog post is quite sad and somewhat unrelated to technology.' },
            { id: 2, text: 'The first time I saw Sulli was in f(x)’s music video of Electric Shock. She always showed off her super gorgeous smile.' },
            { id: 3, text: 'On October 14, 2019, Sulli passed away.' },
            { id: 4, text: 'I don’t want to hunt for reasons for why she left. We will never know why for sure.' },
            { id: 5, text: 'She reminded me to live in the moment every day. She was unhappy even though she was incredibly successful. She was gorgeous, and a former member of a successful K-pop group from one of the top companies. She attained what tons of young people are working for. Her company accepts way below 1%, and not everyone in the company makes it into a group. Her group\'s music videos have millions and millions of views. Even as successful as she was, she was not happy.' },
            { id: 6, text: 'I have an image in my head that once I graduate and work at a top company, I\'ll be happy. That image is not true at all. I have to be happy every day with what I have.' },
            { id: 7, text: 'I have to live every day and be happy. It is hard to remember that happiness does not come from acquisition. I need to be happy now.' }
          ],
          showBlog: false
        },
        {
          id: 4,
          title: 'codeLinc 6.0: Civil Rights and 1st Place',
          date: '10/6/2019',
          author: 'Annica',
          paragraphs: [
            { id: 0, text: 'I went to codeLinc this September 28-29th in Greensboro, NC. It was an amazing experience. We went to a civil rights museum, ate delicious food, and won first place.' },
            { id: 1, text: 'Our bus arrived early and we were in a historic city, so the organizers took us to the International Civil Rights Museum. Greensboro is where a group of four students began a movement to protest segregation by sitting at a whites only counter. The museum has the exact counter that the students sat at. Being in the museum was incredibly powerful and can’t be explained by words. it showed me the ugly things humans have done. Everyone should go there at least once. I think more hackathons should take the attendees out into the city, since lots of hackers travel to cities far away.' },
            { id: 2, text: 'The food at codeLinc was incredible. It was really good. They put out an infinite amount of delicious food. Breakfast, breakfast part two, lunch, lunch part two, dinner, dinner again, midnight food, and always available coffee. I have never had such good food. I heard that they spent an incredible amount of money to pay for the incredible quality of food. I drank so much coffee. Other hackathons really need to step it up.' },
            { id: 3, text: 'While I was at the museum, I met a person at Lincoln. I thought he was just a regular software guy because he was so casual. I told him how my group trespassed on the museum by accident earlier, and how Geno\'s and Pat\'s cheesesteaks are super overrated. I wiped my little tears at the museum next to him. He spoke at the opening ceremony, I found out he was right below the CTO. Pretty surprising.' },
            { id: 4, text: 'Long story short, my team won. I drank so much coffee.' },
            { id: 5, text: 'I never expected our team to win. After the other teams presented and showed their apps, super cool websites, and data analysis tools, I thought we weren’t going to place. Well, we did, at the top. They liked our idea the best. I concur. It was a pretty good idea, but everyone else had all of these bells and whistles that ours didn’t.' },
            { id: 6, text: 'I feel strange taking the win, because I am used to seeing other people take the win. I have been to so many hackathons and watched other people stand at the front smiling. I couldn’t believe when they said we won. Also, on the bus ride back home, someone said that I was a winner. I didn\'t understand what they meant until I thought about it.' },
            { id: 7, text: 'So that was fun!' }
          ],
          showBlog: false
        },
        {
          id: 3,
          title: 'HopHacks: Let Me Speak!',
          date: '9/24/2019',
          author: 'Annica',
          paragraphs: [
            { id: 0, text: 'My group at HopHacks consisted of three other guys and me. Many hackathons follow this judging format: the judges went to the table number of the projects that fit under their category. The presenters would have to present multiple times. For one of the judges, I was talked over every time I tried to speak.' },
            { id: 1, text: 'When groups present, it looks bad if everyone doesn’t speak. It looks especially bad if the one underrepresented minority doesn’t speak. As the girl in the team of guys, <strong>I was trying to get my word in to prove that I wasn’t there for decoration.</strong>' },
            { id: 2, text: 'I tried to speak at least five times and was spoken over by a guy every time. Two dudes kept interrupting me. I was not being neutral at all. I was literally making sounds and got cut off.' },
            { id: 3, text: 'Me: “Th-” <br>Guy 1: “Blah blah blah…” <br>Me: “Yeah and-” <br>Guy 2: “Yada yada yada...” <br>Judge: “Orly… Cool!” <br>Me: “Our-” <br>Guy 1: “Foo bar foo bar…” <br>Me: “Ye-” <br>Guy 2: “Lala...” <br>Me: *gives up*' },
            { id: 4, text: 'After the last time, I gave up and let the two who kept cutting me off talk. I tried to speak so many times I am pretty sure the two dudes and the judge noticed at least once. Apparently anything I say will just make us lose points.' },
            { id: 5, text: 'The judge actually asked and Guy 3 a question directly. Thank you, judge, for making me feel like I deserved some airtime. People like the judge are the people we need in tech!' },
            { id: 6, text: 'I have never had a negative experience in tech until now.' },
            { id: 7, text: 'Perhaps I am being too sensitive. Actually, I have ruled that out. I have already mentioned this: for group projects, everyone should speak, otherwise, the group looks bad. In every single case for a group project, everyone needs to speak. For group projects at school, Hell’s Kitchen, KPop, companies, and every other context, as many members as possible should speak. Even BTS has at least half of the group say something when accepting an award because they value all of the members’ perspective and contribution. This is how I know I am not being sensitive.' },
            { id: 8, text: 'After the judge left, I suggested that we determine exactly what each of us would talk about. Everyone agreed and I spoke for the next presentation.' },
            { id: 9, text: 'I do not want to assume poor intentions, but I tried to speak so many times and was cut off every time. One would think that after the third time I would get my word in. People these days think they are Socrates and no one else can say it like they can.' },
            { id: 10, text: 'I really need to learn to be more assertive.' }
          ],
          showBlog: false
        },
        {
          id: 2,
          title: 'HopHacks: Face Tech\'s Reality',
          date: '9/20/2019',
          author: 'Annica',
          paragraphs: [
            { id: 0, text: 'On September 13th, I went to Baltimore to participate in Johns Hopkins University’s hackathon, HopHacks. I was on the bus that the hackathon provided for Northeastern cities. We came off the highway and passed peeling infrastructure, boarded up doors, and barbed wire fences on the way to the university.' },
            { id: 1, text: 'Once I stepped foot on Johns Hopkins, I saw not a single blade of grass out of place. The roads were completely clear of dead leaves. The buildings and roads matched red bricks almost too uniformly.' },
            { id: 2, text: 'The difference between the streets and the university shows how unfair our world is.' },
            { id: 3, text: 'At the hackathon, there was a lot of guys. I have never been to a hackathon with so many dudes. I sat in a row with two other females and greeted them, “hey fellow girls.” The person next to me agreed, there were indeed a lot of guys.' },
            { id: 4, text: 'I highly doubt HopHacks rejected anyone or crafted their hackathon to be so male-dominated. They probably accepted every applicant because I received the acceptance to the hackathon soon after. This was different from the hackathon I went to the week before, PennApps, because I saw many more girls.' },
            { id: 5, text: 'Again, I highly doubt HopHacks was responsible for the lack of girls. Most likely few girls applied. PennApps had a much larger applicant pool to choose from, which is why the speakers at the opening ceremony mentioned that 30% of hackers were female. PennApps most likely denied a bunch of dudes.' },
            { id: 6, text: 'I do not want to say anything bad about HopHacks. I am quite certain they did not intend for there to be so many guys at their hackathon and accepted every applicant. HopHacks would not be a good hackathon for first-time female hackers because seeing so many males would be discouraging.' },
            { id: 7, text: 'Personally, the first hackathon I attended was Technica, the largest female and non-binary hackathon. I imagine that if I came into HopHacks as a first-time hacker, I would be hesitant to attend other hackathons. If I were a first-time hacker, I would be afraid to talk to all the guys at team building.' },
            { id: 8, text: 'This is why female-centered hackathons like Technica and TechTogether are so important. Non-males need support in a male-dominated field. My opinion on this runs into some issues.' },
            { id: 9, text: 'Some people think that the tech industry should not have to bend backwards to get females in the industry. If these females deserve to be in tech, they should be able to get past all of the adversity. I think everyone agrees diversity quotas are not a good idea. A good idea is to have specific support for females just starting. Female-centered hackathons prevent underrepresentation from detering female hackers.' },
            { id: 10, text: 'Multiple factors contribute to underrepresented individuals quitting tech. These factors include imposter syndrome, only knowing Java, having to retake pre-calc, not being a Machine Learning person, and seeing people who do not look like you at a hackathon. That last factor may be the factor that puts someone over the edge.' },
            { id: 11, text: 'Luckily, I had a positive experience at my first hackathon. I\'m glad I have have first-hand experience with all the good things about tech before finding the bad.' }
          ],
          showBlog: false
        },
        {
          id: 1,
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
            { id: 6, text: 'I learned a lot from being on the other side. <strong>I learned what it is like to be so passionate about a subject and teach students who don’t care nearly as much.</strong> I learned that you can offer all the resources in the world, but the students don’t care enough to use them.' },
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
h5 {
  margin: 0;
}
#blog {
  display: block;
  max-width: 70em;
  margin: 0 auto;
}
#blog > h2 {
  text-align: center;
}
#blog-nav {
  display: grid;
  grid-template-rows: auto;
  margin: 0% 3%;
}
.blog-nav-item {
  display: grid;
  padding: 0% 1%;
  margin-bottom: 0.5%;
  border-left: hsl(216, 21%, 13%) solid 0.5vh;
  color: #ebc1c5cc;
  background: hsl(216, 21%, 26%);
  text-decoration: none;
  transition: 0.7s;
}
.blog-nav-item:hover {
  background: hsl(216, 21%, 13%);
  border-left: #ebc1c5cc solid 1vh;
  cursor: pointer;
}
article {
  margin: .5% 0;
  padding: 1%;
  transition: border-left 0.7s;
}
.blog-title {
  color: #354051;
  border-left: #354051 solid 1vh;
  padding-left: 1%;
  margin-bottom: 0;
  transition: all 0.7s;
  cursor: pointer;
}
.blog-title:hover {
  color: hsl(216, 21%, 13%);
  border-left: hsl(216, 21%, 13%) solid 0.5vh;
  transition: all 0.7s;
}
.blog-img {
  max-width: 25em;
  box-shadow: 1em 1em 2em .25em rgba(0,0,0,.2);
}
.blog-close-btn {
  color: #354051;
  border-left: #354051 solid 1vh;
  padding-left: 1%;
  margin-bottom: 0;
  transition: all 0.7s;
  cursor: pointer;
}
.blog-close-btn:hover{
  color: hsl(216, 21%, 13%);
  border-left: hsl(216, 21%, 13%) solid 0.5vh;
  transition: all 0.7s;
}
iframe, .desc {
  border-left: #ebc1c5cc solid 1vh;
  padding-left: 1%;
  width: 100%;
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
  #blog {
    margin: 0;
  }
}
</style>
