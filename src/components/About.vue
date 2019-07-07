<template>
  <div id="about">
    <div id="titlelogo">
      <h1>{{ title }}</h1>
      <img class="logo" :src="logo">
    </div>
    <div id="content">
      <div class="text">
        <p v-for="text in texts" :id="text.id">{{ text.p }}</p>
        <a :href="resume.link"><p>{{ resume.p }}</p></a>
      </div>
      <div><img class="mypicture" :src="mypicture"></div>
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
        { p: 'Banannica is a web developer based in Philadelphia, PA.', id: 0 },
        { p: 'I am a bubble tea lover, ARMY, student, teacher, and soccer fan.', id: 1 }
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

}
h1{
  animation: 
    typing 3s steps(40, end),
    blinking-cursor .5s step-start 2;
}
p{
  font-size: 16pt;
  margin: 2%;
}
a{
  text-decoration: none;
  color: #e3e3e3;
}
a:hover{
  color: #F73F52;
}
#titlelogo{
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin-bottom: -15%;
  margin-top: -10%;
}
#content{
  width: 100%;
  display: grid;
  grid-template-columns: 3fr 1fr;
}
.text{
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr;
}
#equation{
  font-family: 'Dosis';
  color: #F73F52;
  font-size: 150%;
}
/* Images */
.logo{
  width: 50%;
  height: 50%;
  margin-left: -30%;
  margin-right: 10%;
}
.mypicture{
  border-radius: 50%;
  width: 90%;
  margin: 5%;
}
/* Smol Screen */
@media screen and (max-width: 600px) {
  h1{
    font-size: 18pt;
  }
  span{
    font-size: 12pt;
  }
  p{
    font-size: 12pt;
  }
}
/* Big Screen */
@media screen and (min-width: 1000px) {
  h1{
    font-size: 64pt;
  }
  span{
    font-size: 24pt;
  }
  p{
    font-size: 18pt;
  }
}
</style>