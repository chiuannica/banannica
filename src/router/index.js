import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Contact from '@/components/Contact'
import Blog from '@/components/Blog'
import Bio from '@/components/Bio'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog
    },
    {
      path: '/bio',
      name: 'Bio',
      component: Bio
    },
    {
      path: '/linkedin',
      name: 'Linkedin',
      component: Contact,
      beforeEnter (to, from, next) {
        window.location.href = 'https://www.linkedin.com/in/annicachiu/'
      }
    },
    {
      path: '/github',
      name: 'GitHub',
      component: Contact,
      beforeEnter (to, from, next) {
        window.location.href = 'https://github.com/chiuannica'
      }
    },
    {
      path: '/resume',
      name: 'Resume',
      component: Contact,
      beforeEnter (to, from, next) {
        window.location.href = 'https://drive.google.com/file/d/1e45ocYNocybtCat2cPd2afco7j7TM_3n/view?usp=sharing'
      }
    }
  ]
})
