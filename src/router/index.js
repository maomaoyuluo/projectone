// 导入Vue和vue-router
import Vue from 'vue'
import router from 'vue-router'
//导入导航组件
// import app from '@/App'
import navs from '@/components/nav/navs'
// import active from '@/components/active/active'
import before from '@/components/shopcar/before'
import after from '@/components/shopcar/after'
import lancome from '@/components/lancome'
import homepage from '@/components/homepage'
import operate from '@/components/register/operate'
import register from '@/components/register/register'
import control from '@/components/control/productC'
import users from '@/components/contents/users'
import goods from '@/components/contents/goods'
import goodsfixed from '@/components/contents/goodsfixed'
import adminlogin from '@/components/register/adminlogin'
import goodsdetail from '@/components/shopinfo/goodsdetail'
// 全局使用router
Vue.use(router);
// 导出
export default new router({
  // mode:'history',
  routes:[
    {
      path:'/',
      component:lancome,
      redirect:'/navs',
    },
    {
      path:'/navs',
      name:'navs',
      component:navs,
      redirect: '/navs/homepage',
      children:[
        {
          path:'/navs/homepage',
          name:'homepage',
          component:homepage
        },
        {
          path:'/navs/operate',
          name:'operate',
          component:operate
        },
        {
          path:'/navas/register',
          name:'register',
          component:register
        },
        {
          path:'/goodsdetail',
          name:'goodsdetail',
          component:goodsdetail
        }
      ]
    },
    {
      path:'/before',
      name:'before',
      component:before
    },{
      path:'/after',
      name:'after',
      component:after
    },
    {
      path:'/adminlogin',
      name:'adminlogin',
      component:adminlogin
    },
    {
      path:'/control',
      name:'control',
      component:control,
      redirect:'/control/users',
      children:[
        {
          path:'/control/users',
          name:'users',
          component:users
        },{
          path:'/control/goods',
          name:'goods',
          component:goods
        },{
          path:'/control/goodsfixed',
          name:'goodsfixed',
          component:goodsfixed
        }
      ]
    }
  ]
})
