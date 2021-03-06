import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import VueResource from 'vue-resource'
Vue.use(VueResource)
import Index from 'views/Index.vue'
import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
Vue.use(Element)
import StyleCss from 'css/style.less'
import Main from 'src/main.vue'
import store from './store'

// 每条路由规则应该映射到一个组件。这里的“组件”可以是一个使用 Vue.extend创建的组件构造函数，也可以是一个组件选项对象。
// 稍后我们会讲解嵌套路由
const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/index',//访问地址
            name: 'index',//定义路由的名字。方便使用。
            component: Index,//引用的组件名称，对应上面使用`import`导入的组件
            //component:require("components/app.vue")//还可以直接使用这样的方式也是没问题的。不过会没有import集中引入那么直观

        },
        {
            path: '/one',//访问地址
            name: 'one',//定义路由的名字。方便使用。
            component: function (resolve) {
                require(['./views/one/index.vue'], resolve) // 引用的组件名称，对应上面使用`import`导入的组件
            },
            children: [
                {
                    name: 'itemone',
                    path: 'itemone',
                    component: function (resolve) {
                        require(['./views/one/itemone.vue'], resolve)
                    }
                },
                {
                    name: 'itemtwo',
                    path: 'itemtwo',
                    component: function(resolve) {
                        require(['./views/one/itemtwo.vue'], resolve)
                    }
                },
                {
                    name: 'itemthree',
                    path: 'itemthree',
                    component: function(resolve) {
                        require(['./views/one/itemthree.vue'], resolve)
                    }
                },
            ]
        },
        {
            path: '/two',//访问地址
            name: 'two',//定义路由的名字。方便使用。
            component: function(resolve) {
                require(['./views/two/index'], resolve) //引用的组件名称，对应上面使用`import`导入的组件
            }
        },

        /*{
         path: '/list',//访问地址
         name: 'list',//定义路由的名字。方便使用。
         component: List,//引用的组件名称，对应上面使用`import`导入的组件
         },
         {
         path: '/hello',//访问地址
         name: 'hello',//定义路由的名字。方便使用。
         component: Hello,//引用的组件名称，对应上面使用`import`导入的组件
         },*/
        {path: '', redirect:'/index'}
    ]
});
//sync(store, router)
//开启debug模式
Vue.config.debug = true;
/*router.redirect({//定义全局的重定向规则。全局的重定向会在匹配当前路径之前执行。
 '*':"/app"//重定向任意未匹配路径到/index
 });*/
// 现在我们可以启动应用了！
const App = new Vue({
    router,
    store,
    ...Main,
}).
$mount('#app')
