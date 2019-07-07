<template>
  <div id="home">
    <h1>{{ title }} <span>{{ subtitle }}</span></h1>
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
#home{
  margin: 70px;
}
/* Animation */
h1{
  font-size: 32pt;
  color: #222;
  text-align: center;
  overflow: hidden;
  border-right: .1em solid transparent;
  white-space: nowrap;
  margin: 20px auto;
  letter-spacing: 0.07em;
  animation: 
    typing 2s steps(40, end),
    blinking-cursor .5s step-start 5;
  animation-delay: 0s;
}
span{
  font-size: 14pt;
  font-family: 'Roboto';
}
@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}
@keyframes blinking-cursor {
  from, to { border-color: transparent }
  50% { border-color: #F73F52; }
}
/* Images */
.logo{
  width: 50%;
  height: 50%;
}
.banana{
  margin-top: -18%;
  margin-left: 30%;
  z-index: -1;
  width: 60%;
  height: 60%;
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