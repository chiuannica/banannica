<template>
  <div id="bio">
    <h2>{{ title }}</h2>
    <div class="bio-body">
      <div class="bio-text">
        <div class="bio-image"></div>
        <p>{{ bio }}</p>
      </div>
      <div class="bio-music-player">
        <p v-html="musicPlayer"></p>
      </div>
      <div :key=section.id v-for="section in sections">
        <h3 v-html="section.title"></h3>
        <ul class="list" v-for="(p, index) in section.ps" :key="index">
          <li>{{ p.text }}</li>
        </ul>
      </div>

      <div class="bio-text">
        <div class="bio-image tokyo"></div>
        <p v-html="quote"></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Bio',
  data () {
    return {
      title: 'More About Me',
      icon: 'fa fa-coffee',
      bio: 'I\'m Annica, a world-traveler and polyglot in training. I am an amateur musician, designer, writer and nail artist. I love cooking and baking. I collect cow squishmallows. I am a bubble tea connoisseur.',
      musicPlayer: '<iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1EpoclJh2zQYiI?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
      quote: "“Life is a series of natural and spontaneous changes. Don't resist them; that only creates sorrow. Let reality be reality. Let things flow naturally forward in whatever way they like.” </br></br>Lao Tzu",
      sections: [
        {
          id: 0,
          title: 'Bragging Rights',
          ps: [
            {id: 0, text: '200+ day streak on Duolingo (I\'m learning Korean!)'},
            {id: 1, text: 'I was a BTS fan in 2014'},
            {id: 2, text: 'I do not watch many shows or movies'},
            {id: 1, text: 'I probably know more about Kpop than anyone you know'},
            {id: 1, text: 'I listen to music in Cantonese, Mandarin, English, Spanish, Korean, and Japanese'}
          ]
        },
        {
          id: 1,
          title: 'Failures that keep me up at night',
          ps: [
            {id: 5, text: 'I got waitlisted to a summer program at Curtis Institute of Music and wonder if I would have pursued music if I was accepted'},
            {id: 5, text: 'I got rejected by a program to go to Guatemala in high school'}
          ]
        },

        {
          id: 1,
          title: 'I want to... ',
          ps: [
            {id: 2, text: 'visit Spain and Japan, revisit Hong Kong, Korea, and Germany'},
            {id: 3, text: 'meet Yuta'},
            {id: 3, text: 'meet a capybara'}
          ]
        }
      ]
    }
  }
}
</script>

<style>
#bio {
  padding: 5%;
}
#bio > h2 {
  text-align: center;
}
.bio-body > div > h3 {
  margin: 0;
  margin-top: 0.6em;
  margin-bottom: 0.4em;
}
.bio-text {
  position: relative;
}
.bio-image {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url('../assets/bgs/cafe.gif');
  background-size: cover;
  opacity: 0.4;
  z-index: -1;
}
.tokyo {
  background-image: url('../assets/bgs/tokyo.gif');
}
.bio-text > p {
  position: relative;
  padding: 5%;
  text-shadow: 0 0 0.2em black;
  color: white;
}
.bio-body {
  padding: 0;
  display:grid;
  grid-template-columns: 3fr 2fr;
  grid-gap: 2em;
}
.list {
  padding: 0;
  margin: 0;
  margin-left: 6%;
}
.list > li {
  padding: 0;
  margin: 0;
  margin-bottom: 1%;
}
@media screen and (max-width: 768px) {
  .bio-body {
    display: block;
  }
  .bio-body > div {
    margin: 0;
    margin-bottom: 5%;
  }

}
</style>
