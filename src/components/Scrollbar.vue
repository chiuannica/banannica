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
  width: 100%;
  background: transparent;
  z-index: 100;
}
#progress{
  width: 1em;
  height: 1em;
  background: linear-gradient(0deg, rgba(235,193,197,0.3) 0%, rgba(235,193,197,1) 100%);
}
</style>
