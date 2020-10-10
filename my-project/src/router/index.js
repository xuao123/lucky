import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import A from '@/components/router-base/a.vue'
import B from '@/components/router-base/b.vue'
import NotPage from '@/components/router-base/404.vue'
import Home from '@/components/router-base/home.vue'

Vue.use(Router)
const originalpush = Router.prototype.push
Router.prototype.push = function push (lacation,onResolve,onReject){
  if(onResolve || onReject)return originalpush.call(this,location,onResolve,onReject)
  return originalpush.call(this,location).catch(err =>err)
}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    
    {
      path: '/404',
      name: '404',
      component: NotPage
    },
    {
      path: '*',
      name: '*',
      component: NotPage
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      children:[
        {
          path: '/a',
          name: 'a',
          component: A
        },
        {
          path: '/b',
          name: 'b',
          component: B
        },
      ]
    }
  ]
})
