<template>
<div>
    <h1 class="color">姓名：{{name}}</h1>
    <h2>{{age}}</h2>
    <button @click="goapp">查看列表</button>
</div>
</template>
<script>
    import Home from 'model/home.js'
    export default {//这里是官方的写法，默认导出，ES6
        data () { //ES6，等同于data:function(){}
            return {    //必须使用这样的形式，才能创建出单一的作用域
                name:"主页name",
                age:"主页年龄"
            }
        },
        mounted() {
            //model调用
           Home.getRanking();
        },
        methods :{
            goapp () {//方法，定义路由跳转，注意这里必须使用this，不然报错
                this.$router.push({name:"list"});
            }
        }
    }
</script>
<style lang='less' scoped>
    .color{
       color:blue;
    }
</style>