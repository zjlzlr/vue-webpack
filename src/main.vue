<template>
    <div id='app'>
        <navbar></navbar>
        <div class="app-content">
            <slidebar class="left-content"></slidebar>
            <app-main class="right-content"></app-main>
        </div>
    </div>
</template>
<script>
    import {Navbar, Slidebar, AppMain} from 'components/layout/'
    /*import Navbar from 'components/layout/Navbar.vue'
    import Slidebar from 'components/layout/Slidebar.vue'
    import AppMain from 'components/layout/AppMain.vue'*/
    /*d*/
    export default {//这里是官方的写法，默认导出，ES6
        components: {
            Navbar,
            Slidebar,
            AppMain,
          },
    }
</script>