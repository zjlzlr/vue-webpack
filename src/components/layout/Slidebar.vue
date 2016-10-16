<template>
  <div class="app-slidebar">
     <el-row class="tac">
		  <el-col :span="24">
		    <el-menu default-active="index" class="el-menu-vertical-demo" router>
		      <el-menu-item index="index"><i class="el-icon-menu"></i>
		        主页</el-menu-item>
		      <el-submenu index="one">
		        <template slot="title"><i class="el-icon-message"></i>导航一</template>
		          <el-menu-item index="/one/itemone">选项1</el-menu-item>
		          <el-menu-item index="/one/itemtwo">选项2</el-menu-item>
		          <el-menu-item index="/one/itemthree">选项3</el-menu-item>
		      </el-submenu>
		      <el-menu-item index="two" ><i class="el-icon-menu"></i>
		        导航二
		      </el-menu-item>
		    </el-menu>
		  </el-col>
		</el-row>
  </div>
</template>

<script>
export default {
   
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
.app-slidebar {
    border: 1px solid;
    display: inline-block;
    vertical-align: top;
    height: 100%;
}
</style>
