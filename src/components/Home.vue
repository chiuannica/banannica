<template>
  <div id="main">
    <div id="banannica">
      <h1>{{ title }}</h1>
      <h3>{{ subtitle }}</h3>
    </div>
    <About></About>
    <Projects></Projects>
  </div>
</template>

<script>
import About from './About'
import Projects from './Projects'

export default {
  name: 'Home',
  components: {
    About, Projects
  },
  data () {
    return {
      title: 'Banannica',
      subtitle: 'Web Developer'
    }
  },
  methods (){
    /* SHOW UP ON SCROLL */
    // Detect if elements are visible
    var scroll = window.requestAnimationFrame ||
                // IE Fallback
                function(callback){ window.setTimeout(callback, 1000/60)};
    // the elements that show up have the class show-on-scroll
    var elementsToShow = document.querySelectorAll('.show-on-scroll'); 
    function loop() {
        //for each jawn w show-on-scroll, do this function
        Array.prototype.forEach.call(elementsToShow, function(element){
          //if the element is in view, add class is-visible
          if (isElementInViewport(element)) {
            element.classList.add('is-visible');
          } else {
          //if element is not in view, remove is-visible class
            element.classList.remove('is-visible');
          }
        });
        //execute this function every time there is a scroll
        scroll(loop);
    }
    // Call the loop for the first time
    loop();
    // Helper function from: http://stackoverflow.com/a/7557433/274826
    function isElementInViewport(el) {
      var rect = el.getBoundingClientRect();
      return (
        (rect.top <= 0
          && rect.bottom >= 0)
        ||
        (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.top <= (window.innerHeight || document.documentElement.clientHeight))
        ||
        (rect.top >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
      );
    }
    
  }
}
</script>

<style>
#banannica{
  margin-bottom: 20vh;
}
.banana{
  margin-top: -10%;
  margin-left: 30%;
  width: 40%;
  height: 40%;
  opacity: 0.6;
}
</style>