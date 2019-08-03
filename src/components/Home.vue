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
  min-height: 80vh;
  margin-top: 20vh;
}
.banana{
  margin-top: -10%;
  margin-left: 30%;
  width: 40%;
  height: 40%;
  opacity: 0.6;
}
</style>