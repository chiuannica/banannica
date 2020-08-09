<template>
  <div id="bio">
    <h2>{{ title }} <i :class="icon"></i></h2>
    <div class="bio-body">
      <p>Coming soon.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Bio',
  data () {
    return {
      title: 'Bio',
      icon: 'fa fa-coffee'
    }
  }
}
</script>

<style>
#bio {
  width: 80%;
  margin-left: 10%;
  margin-right: 10%;
}
#bio > h2 {
  text-align: center;
}
.bio-body {
  margin: 0 20%;
  text-align: center;
}
@media screen and (max-width: 768px) {
  
}
</style>
