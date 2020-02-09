<template>
  <div id="about">
    <h2>{{ title }} <i :class="aboutIcon"></i></h2>
    <div class="content">
      <div class="text">
        <div  v-for="text in texts" :key="text.id" class="timeline-item">
          <h4><span class="date">{{ text.d }}</span>: <span class="t">{{ text.t }}</span></h4>
          <p>{{ text.p }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
  data () {
    return {
      title: 'Timeline of ETFs',
      aboutIcon: 'fa fa-clock',
      texts: [
        { d: '1989', t: 'Tried and failed ETF', p: 'Index shares for the S&P 500 failed because a Chicago federal court ruled that the fund must be traded on a futures exchange, because it was similar to a future contract, or a legal agreement to buy or sell an asset at a certain price at a certain time in the future.' },
        { d: '1993', t: 'The first ETF', p: 'The S&P 500 Trust ETF, the SPDR (\"spider\"), represents 500 of the largest U.S. companies. It is still one of the major ETFs, and the one and only ETF that I own.' },
        { d: '1996', t: 'Global Market ETFs', p: 'Morgan Stanley and Barclays Global Investors developed WEBS, or World Equity Benchmark Shares, which tracked Morgan Stanley Capital International markets. WEBS which allowed investors to invest in foreign markets. WEBS became iShares in 2000 and are now managed by BlackRock.' },
        { d: '2001', t: 'Total Market ETF', p: 'The Vanguard Total Stock Market ETF (VTI) tracks the entire investable U.S. investable market. It holds over 3600 stocks.' },
        { d: 'Today', p: 'There are 5000 different ETFs trading globally.' }
      ],
      resume: { p: 'Check out my resume.', link: 'https://google.com' }
    }
  }
}
</script>

<style>
#about {
  width: 100%;
  min-height: 50vh;
  border-left: #354051 1vh solid;
  margin: 0 5%;
}
#about > h2 {
  margin: 0 3%;
}
p{
  margin: 0;
}
h4{
  color:hsl(216, 21%, 13%) ;
  margin: 0;
}
.content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  margin-left: auto;
  margin-right: auto;
}
.text {
  margin: 0 3%;
}
.timeline-item {
  background: hsla(134, 100%, 10%, 0.20);
  color:#354051;
  padding: 0.5rem;
  margin: 0.2rem;
}
@media screen and (max-width: 768px) {
  .my-picture {
    width: 150%;
  }
  .text {
    margin-right: 2%;
  }
}
</style>
