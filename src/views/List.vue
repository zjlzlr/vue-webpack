<template>
<div>
    <h1>列表姓名：{{name}}</h1>
    <h2>列表：{{age}}</h2>
    <button @click="golist">查看主页</button>
</div>
</template>
<script>
    export default {//这里是官方的写法，默认导出，ES6
        data () { //ES6，等同于data:function(){}
            return {    //必须使用这样的形式，才能创建出单一的作用域
                name:"list name",
                age:"22"
            }
        },
        methods :{
            golist () {//方法，定义路由跳转，注意这里必须使用this，不然报错
                this.$router.push({name:"app"});
            }
        }
    }
</script>
<style>
    
</style>