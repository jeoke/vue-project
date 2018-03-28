import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/Main.vue'
import BookDetail from '@/BookDetail.vue'
import Cart from '@/page/Cart.vue'
import Explorer from '@/page/Explorer.vue'
import Home from '@/page/Home.vue'
import Me from '@/page/Me.vue'
Vue.use(Router)

export default new Router({
    mode:'history',
  	base: __dirname,
  	linkActiveClass:"active",
  	routes : [
         { path: '/', redirect: '/home' },
         {          	
         	 	name:'Main',
         		path:'/',
         	 	component:Main,
         	 	children:[
         			{name:'Home',path:'home',component:Home},
              		{name:'Categories',path:'categories',component:Explorer},
             	 	{name:'ShoppingCart',path:'shopping-cart',component:Cart},
              		{name:'Me',path:'Me',component:Me}
                ]
          },
          {name:'BookDetail',path:'/books/:id',component:BookDetail}

  	]
})
