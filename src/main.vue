<template>
    <div id='app'>
        <navbar></navbar>
        <slidebar></slidebar>
        <app-main></app-main>
        <footbar></footbar>
    </div>
</template>
<script>
    import Navbar from 'components/layout/Navbar.vue'
    import Slidebar from 'components/layout/Slidebar.vue'
    import AppMain from 'components/layout/AppMain.vue'
    import Footbar from 'components/layout/Footbar.vue'
    export default {//这里是官方的写法，默认导出，ES6
        components: {
            Navbar,
            Slidebar,
            AppMain,
            Footbar
          },
    }
</script>
<style lang='less' scoped>
    .color{
       color:blue;
    }
</style>