<template>
  <div id="main">
    <h1>{{ title }}</h1>
    <h3>{{ subtitle }}</h3>
    <img class="banana" :src="banana">
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      title: 'Banannica',
      subtitle: 'Web Developer',
      banana: require('@/assets/banana.png'),
    }
  }
}
</script>

<style>
#main{
  padding-top: 7%;
  min-height: 70vh;
}
/* Animation */
h1{
  font-size: 32pt;
  color: #222;
  text-align: center;
}
h3{
  font-size: 18pt;
  font-family: 'Roboto';
  text-align: center;
}
/* Images */
.logo{
  width: 50%;
  height: 50%;
}
.banana{
  margin-top: -10%;
  margin-left: 30%;
  width: 40%;
  height: 40%;
  opacity: 0.6;
}
/* Smol Screen */
@media screen and (max-width: 600px) {
  h1{
    font-size: 18pt;
  }
  span{
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
}
</style>