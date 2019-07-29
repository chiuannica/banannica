<template>
  <div id="about">
    <div id="titlelogo"  class="show-on-scroll magic-text">
      <h2>{{ title }}</h2>
      <img class="logo" :src="logo">
    </div>
    <div id="content">
      <div class="text show-on-scroll magic-text-side">
        <p v-for="text in texts" :id="text.id">{{ text.p }}</p>
      </div>
      <div>
        <img class="mypicture" :src="mypicture">
      </div>
      <a class="show-on-scroll magic-text" :href="resume.link">{{ resume.p }}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
  data () {
    return {
      title: 'About',
      logo: require('@/assets/logo_transparent.png'),
      mypicture: require('@/assets/mypicture.jpg'),
      texts: [
        { p: 'Banana + Annica = Banannica', id: 'equation' },
        { p: 'Bubble tea lover, Temple University student, soccer fan, instructor, and web developer.' },
        { p: 'Banannica, or Annica Chiu, is a web developer based in Philadelphia, PA. Annica Chiu is a sophomore at Temple University studying Information Science and Technology. She works as an instructor for web development and Python at Upward Bound, a program dedicated to serving low-income high school students. A born and raised Philadelphian, she pronounces water as “wooder.” Annica started volunteering at thirteen with kindergarteners and currently with cats.'}
      ],
      resume: { p: 'Check out my resume.', link: 'https://google.com' }
    }
  }
}
</script>

<style>
#about{
  background: hsl(348, 92%, 80%);
  padding: 5%;
  height: 100%;
  border-radius: 10px;
  min-height: 70vh;
}
h2{
  font-size: 32pt;
  color: #222;
  text-align: center;
}
p{
  font-size: 18pt;
}
a{
  color: #F73F52;
  text-decoration: none;
}
a:hover{
  color:#333;
}
#titlelogo{
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin-bottom: -15%;
  margin-top: -15%;
}
#content{
  width: 100%;
  display: grid;
  grid-template-columns: 3fr 1fr;
}
.text{
  display: inline-block;
}
#equation{
  font-family: 'Dosis';
  color: #F73F52;
  font-size: 200%;
}
/* Images */
.logo{
  width: 50%;
  height: 50%;
  margin-right: -13%;
}
.mypicture{
  border-radius: 50%;
  width: 90%;
  margin: 5%;
}
/* Smol Screen */
@media screen and (max-width: 600px) {
  h1, h2{
    font-size: 18pt;
  }
  p, a{
    font-size: 12pt;
  }
  #equation{
  font-size: 120%;
  }
  #content{
  display: block;
  }
  .mypicture{
    width: 40%;
    margin: 0;
  }
}
/* Big Screen */
@media screen and (min-width: 1000px) {
  h1, h2{
    font-size: 48pt;
  }
  p, a{
    font-size: 18pt;
  }
  #equation{
  font-size: 300%;
  }
}
</style>