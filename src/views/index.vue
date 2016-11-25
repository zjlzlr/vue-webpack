<template>
<div class='app-index'>
    <el-tabs type="border-card" class="tabs">
        <el-tab-pane label="用户管理">
            <div>aaaaaaaaaaaaaaaaaaaaaaaaa</div>
        </el-tab-pane>
        <el-tab-pane label="配置管理">配置管理</el-tab-pane>
        <el-tab-pane label="角色管理">角色管理</el-tab-pane>
        <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
    </el-tabs>

    <el-row>
        <el-col :span="24"><div class=" demo-color-box bg-blue-light">sssssssssssssss</div></el-col>
    </el-row>
    <el-row>
        <el-col :span="4"><div>===aa===dd===ee==</div></el-col>
        <el-col :span="4"><div>aaaaaaaa</div></el-col>
        <el-col :span="4"><div>bbbb</div></el-col>
        <el-col :span="4"><div>ccccccccc</div></el-col>
        <el-col :span="4"><div>ddddddddd</div></el-col>
        <el-col :span="4"><div>eeeeeeee</div></el-col>
    </el-row>
    vue main index content
    <i class="el-icon-edit"></i>
    <i class="el-icon-share"></i>
    <i class="el-icon-delete"></i>
    <el-button type="primary" icon="search">搜索</el-button>
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
<style scoped lang="less">
    .tabs{
        width: 100%;
    }
</style>
