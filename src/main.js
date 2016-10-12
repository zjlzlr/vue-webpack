import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import VueResource from 'vue-resource'
Vue.use(VueResource)
import Index from './views/App.vue'
import List from './views/List.vue'
import Hello from './views/Hello.vue'
import StyleCss from './css/style.less'
/* eslint-disable no-new */
/*new Vue({
  el: '#app',
  render: h => h(App)
})
Vue.use(VueRouter);*/
// 创建一个路由器实例

// 每条路由规则应该映射到一个组件。这里的“组件”可以是一个使用 Vue.extend创建的组件构造函数，也可以是一个组件选项对象。
// 稍后我们会讲解嵌套路由

const router = new VueRouter({
	routes: [
        {
	      path: '/app',//访问地址
	      name: 'app',//定义路由的名字。方便使用。
	      component: Index,//引用的组件名称，对应上面使用`import`导入的组件
          //component:require("components/app.vue")//还可以直接使用这样的方式也是没问题的。不过会没有import集中引入那么直观
	    },
	    {
	      path: '/list',//访问地址
	      name: 'list',//定义路由的名字。方便使用。
	      component: List,//引用的组件名称，对应上面使用`import`导入的组件
	    },
	    {
	      path: '/hello',//访问地址
	      name: 'hello',//定义路由的名字。方便使用。
	      component: Hello,//引用的组件名称，对应上面使用`import`导入的组件
	    },
	    { path: '*', redirect: '/app' }
	]
});

//开启debug模式
Vue.config.debug = true;
/*router.redirect({//定义全局的重定向规则。全局的重定向会在匹配当前路径之前执行。
    '*':"/app"//重定向任意未匹配路径到/index
});*/
// 现在我们可以启动应用了！
const App = new Vue({
  router
}).$mount('#app')
