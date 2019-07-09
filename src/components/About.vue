<template>
  <div id="about">
    <div id="titlelogo">
      <h2>{{ title }}</h2>
      <img class="logo" :src="logo">
    </div>
    <div id="content">
      <div class="text">
        <p v-for="text in texts" :id="text.id">{{ text.p }}</p>
      </div>
      <div>
        <img class="mypicture" :src="mypicture">
      </div>
      <a :href="resume.link"><span>{{ resume.p }}</span></a>
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
        { p: 'Banannica, or Annica Chiu, is a web developer based in Philadelphia, PA.', id: 0 },
        { p: 'Bubble tea lover, Temple University student, teacher, and soccer fan.', id: 1 }
      ],
      resume: { p: 'Check out my resume.', link: 'https://google.com' }
    }
  }
}
</script>

<style>
#about{
  background: hsl(348, 92%, 80%);
  display: block;
  padding: 5%;
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
  color: #eee;
  text-decoration: none;
  text-align: left;
}
a:hover{
  color: #F73F52;
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
  span{
    font-size: 12pt;
  }
  p{
    font-size: 12pt;
  }
  #equation{
  font-size: 120%;
  }
}
/* Big Screen */
@media screen and (min-width: 1000px) {
  h1, h2{
    font-size: 48pt;
  }
  span{
    font-size: 18pt;
  }
  p{
    font-size: 18pt;
  }
  #equation{
  font-size: 300%;
  }
}
</style>