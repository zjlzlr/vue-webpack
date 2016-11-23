<template>
  <section class="app-main">
    <div class="container is-fluid is-marginless app-content">
        <router-view class="animated"></router-view>
    </div>
  </section>
</template>

<script>
export default {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
.app-main {
    padding-top: 50px;
    margin-left: 180px;
    transform: translateZ(0);
}
 @media screen and (min-width: 980px){
	.container.is-fluid {
	    margin: 0 20px;
	    max-width: none;
	}
}

.app-content {
    padding: 20px;
}
@media screen and (min-width: 1180px){
	.container {
	    max-width: 1200px;
	}
}
@media screen and (min-width: 980px){
	.container {
	    margin: 0 auto;
	    max-width: 960px;
	}
}
.container {
    position: relative;
}
.is-marginless {
    margin: 0!important;
}
</style>
