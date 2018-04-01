import Vue from 'vue'
import Router from 'vue-router';

Vue.use(Router)

const router= new Router({
    routes: [
      {
          path: '/',
          redirect: '/showCount'
      },  {
          path: '/showCount', //vuexdemo组件
          meta:{
            name:"vuex组件"
          },
          component: resolve => require(['../components/showCount/index.vue'], resolve)
      },  {
        path: '/dataBinding', //vue双向绑定demo
        meta:{
          name:"vue双向绑定"
        },
        component: resolve => require(['../components/dataBinding/index.vue'], resolve)
    }
  ]
})
//路由拦截器
router.beforeEach((to,from,next) =>{
       console.log([to,from])
       document.title=to.meta.name
       next()
})
export default router;