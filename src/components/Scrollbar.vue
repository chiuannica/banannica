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
  height: 8px;
  background: transparent;
  z-index: 100;
}
#progress{
  width: 8px;
  height: 8px;
  background: hsl(50, 100%, 84%);
}
</style>
