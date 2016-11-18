/**
 * Created by chen on 2016/11/17.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '../app'
import Index from '../view/index'

Vue.use(VueRouter)

const Router = [
  {
    path: '/', component: App,
      children: [
        { path : '/index', name: 'index', component: Index}
      ]
  }
]

const router  = new VueRouter({
  router: Router,
  linkActiveClass: 'active',
  history: true
})

export default router
