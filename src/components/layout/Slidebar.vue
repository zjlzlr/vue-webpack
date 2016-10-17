<template>
  <aside class="app-slidebar slideInLeft">
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
  </aside>
</template>

<script>
export default {
   
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
.slideInLeft {
    animation-name: slideInLeft;
}
.app-slidebar {
    position: fixed;
    top: 50px;
    left: 0;
    bottom: 0;
    padding: 20px 0 50px;
    width: 180px;
    min-width: 45px;
    max-height: 100vh;
    height: calc(100% -50px);
    z-index: 1023;
    background: #fff;
    box-shadow: 0 2px 3px hsla(0,0%,7%,.1),0 0 0 1px hsla(0,0%,7%,.1);
    overflow-y: auto;
    overflow-x: hidden;
}
@media screen and (max-width: 768px){
	.app-sidebar {
	    transform: translate3d(-180px,0,0);
	}
}
</style>
