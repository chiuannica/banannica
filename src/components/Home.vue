<template>
  <div id="home">
    <main>
      <h1>{{ title }}</h1>
      <div class="etf-desc">
        <p class="show-on-scroll magic-text subtitle">{{ subtitle }}</p>
        <div class="etf-text" v-for="text in texts" :key="text.id">{{ text.p }}</div>
      </div>
      <div class="what">
        <h4 class="what-tl">{{ whatTitle }}</h4>
        <div class="etf-text" v-for="what in whats" :key="what.id"><strong>{{ what.t }}</strong>: {{ what.p }}</div>
      </div>

      <div class="button-container">
        <a :key="link.id" v-for="link in links" :href="link.link">{{ link.name }}</a>
      </div>
      <!--
      <div class="chart">
        <iframe src="//datawrapper.dwcdn.net/u16Xo/1/" frameborder="0" allowtransparency="true" allowfullscreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen width="566" height="398"></iframe>
      </div>
      -->
    </main>
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
      title: 'WTF is ETF',
      subtitle: 'Exchange-traded funds (ETFs)',
      texts: [
        { id: 0, p: "are investment funds traded on stock exchanges. They combine several securities into a single entity. ETFs are called exchange-traded funds because they are bought and sold like stocks thoughout the day."},
        { id: 1, p: "There are many different ETFs that track specific indexes, bonds, or commodities."}
        
      ],
      whatTitle: "What is that?",
      whats: [
        { id: 0, t: 'Securities', p: 'are bonds, indexes, or commodities.'},
        { id: 1, t: 'Bonds', p: 'are agreements between the lender and borrower that states that the borrower will pay back the value of the loan with interest.'},
        { id: 1, t: 'Stocks', p: 'are a type of inventment that represents ownership of part of a company. People buy stocks because they believe the value of the company will grow.'},
        { id: 1, t: 'Indexes', p: 'are a measurement of a section of a stock market, or a subset of the market. For example, a major index is the S&P 500, which is a collection of 500 company stocks that reflect the U.S. economy.'},
        { id: 1, t: 'Commodities', p: 'are natural resources, including wheat, corn, gold, and oil.'},
      ],

      links: [
        { id: 0, name: 'Timeline', link: '#about' },
        { id: 1, name: 'FAQ', link: '#projects' }
      ]
    }
  }
}
</script>

<style>
main{
  max-width: 100%;
  height: 100vh;
}
.etf-desc {
  margin: 0 4em;
}
.etf-text {
  font-size: 2em;
}
.what {
  margin: 2em 6em;
}
.what-tl {
  color: hsla(134, 100%, 10%, 0.774);
}
.subtitle {
  text-align: left;
  font-size: 3em;
}
.button-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.button-container > a {
  padding: 1em;
}
.button-container > a:hover {
  color: hsl(216, 21%, 13%);
}
@media screen and (max-width: 768px) {
  .circle{
    width: 100%;
    border: none;
  }
}
</style>
