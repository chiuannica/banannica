<template>
  <div id="scrollbar">
    <div id="progress"></div>
  </div>
</template>

<script>
export default {
  name: 'Scrollbar',
  data () {
    return {
      title: 'Annica is super cool'
    }
  },
  methods: {
    handleScroll () {
      var howMuchProgress = document.documentElement.scrollTop
      var totalPageHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
      var scrolled = (howMuchProgress / totalPageHeight) * 100
      document.getElementById('progress').style.width = scrolled + '%'
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style>
#scrollbar{
  position: fixed;
  width: 150%;
  background: transparent;
  z-index: 10;
}
#progress{
  width: 0.5em;
  height: 0.5em;
  background: rgba(235,193,197,1) 50%;
}
</style>
