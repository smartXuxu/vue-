<!-- 以后项目的根组件 -->
<template>
	<div>
	<!-- mint-UI头部的固定导航 -->
	<mt-header fixed title="vue商城项目固定在顶部"></mt-header>
	<!-- 占位 -->
	<router-view></router-view>
	<!-- mui 尾部的导航 -->
	<nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item " to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/tabbar-with-chat">
				<span class="mui-icon mui-icon-email">
				
				</span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item" to="/car">
				<span class="mui-icon mui-icon-contact">
					<span class="mui-badge">0</span>
				</span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="tabbar-with-map">
				<span class="mui-icon mui-icon-gear"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>

	</div>
</template>

<script>

	export default{  // es6的导出对象的写法
		data(){  //等价于 es5的 data:function(){
			return {
				
			}
		},
		methods:{
			// add,  // es6的写法  等价于es5 ： add:add
			
		},
		created(){

		}
	}
</script>

<style scoped>
/*当前页面的css样式写到这里，其中scoped表示这个里面写的css代码只是在当前组件页面上有效，不会去影响到其他组件页面*/
	

</style>