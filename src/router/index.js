/**
 * Created by linhaifeng on 2016/10/28.
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from '../app';
import Index from '../view/index';
import Page1 from '../view/page1';
import Home from '../view/home';
import Article from '../view/article';
import HomeUserInfo from '../view/homeUserInfo';
import MyPet from '../view/myPet';
import AddPet from '../view/addPet';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: App,
    children: [

      { path: '/index', name:'index', component: Index },

      { path: '/page1', name:'page1', component: Page1 },

      { path: '/home', name:'home', component: Home},

      { path: '/HomeUserInfo/:uid', name:'homeUserInfo', component: HomeUserInfo },

      { path:'/article/:id', name:'article', component : Article},

      { path:'/home/mypet', name:'myPet', component : MyPet},

      { path:'/home/mypet/addpet', name:'addPet', component : AddPet},

    ]
  }
];



const router = new VueRouter({
  // mode:'history', //这样url就没有/#/XXX,而是常见的url形式
  routes:routes, // short for routes: routes
  linkActiveClass:'active',     //router-link的选中状态的class，也有一个默认的值
  history:true
});


export  default router
