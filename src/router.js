import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
import PostList from '@/components/PostList'
import Article from '@/components/Article'
import SideBar from '@/components/SideBar'
import UserInfo from '@/components/UserInfo'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'root',
      components: {
        main:PostList
      }
    },
    {
      path:'/topic/:id&auther=:name',
      name:'post_content',
      components:{
        main:Article,
        sidebar:SideBar
      },
    },
    {
      path:'/user/:name',
      name:'user_info',
      components:{
        main:UserInfo,
      }
    }
    // {
    //   path: '/',
    //   name: 'home',
    //   component: Home
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
