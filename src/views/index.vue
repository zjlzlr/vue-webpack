<template>
<div class='app-index'>
    vue main index content

</div>
</template>
<script>
    export default {//这里是官方的写法，默认导出，ES6
        data(){
            return{
              test:0
            }
        },
        methods: {
            go(){
            },
            mounted() {
                // this.getBusiCollumn();
            },
        }
    }
</script>
