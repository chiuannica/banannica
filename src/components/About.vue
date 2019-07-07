<template>
  <div id="about">
    <div class="titlelogo">
      <h1>{{ title }}</h1>
      <img class="logo" :src="logo">
    </div>
    <div v-for="text in texts">
      <p :id="text.id">{{ text.p }}</p>
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
      texts: [
        { p: 'Banannica is a web developer based in Philadelphia, PA.', id: 0 },
        { p: 'Banana + Annica = Banannica', id: 'equation' },
        { p: 'Web Developer', id: 1 }
      ]
    }
  }
}
</script>

<style>
#about{
  background: hsl(348, 92%, 80%)

}
h1{
  animation: 
    typing 3s steps(40, end),
    blinking-cursor .5s step-start 2;
}
p{
  font-size: 16pt;
  text-align: center;
  margin: 5%;
}
#equation{
  color: #F73F52;
  font-size: 120%;
}
.titlelogo{
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin-bottom: -15%;
  margin-top: -10%;
}
/* Images */
.logo{
  width: 50%;
  height: 50%;
  margin-left: -30%;
  margin-right: 10%;
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