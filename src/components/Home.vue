<template lang="html">
    <div class="temp">
		<!-- 设置轮播图 ajax请求 -->
		<mt-swipe class="mint-swipe" :auto="4000">
		  <mt-swipe-item v-for="item in list">
		  	<img :src="item.img" alt="">
		  </mt-swipe-item>
		</mt-swipe>
		<!-- 九宫格 -->
		<div class="mui-content">
		        <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-home"></span>
		                    <div class="mui-media-body">Home</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span>
		                    <div class="mui-media-body">Email</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-chatbubble"></span>
		                    <div class="mui-media-body">Chat</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-location"></span>
		                    <div class="mui-media-body">location</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-search"></span>
		                    <div class="mui-media-body">Search</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-phone"></span>
		                    <div class="mui-media-body">Phone</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-gear"></span>
		                    <div class="mui-media-body">Setting</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-info"></span>
		                    <div class="mui-media-body">about</div></a></li>
		           <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-more"></span>
		                    <div class="mui-media-body">more</div></a></li>
		        </ul> 
		</div>
    </div>
</template>

<script>
/*mint-ui 导入 toast 的提示信息*/
import { Toast } from 'mint-ui';
export default {
	/*list 里面是ajax请求的数据*/
	data(){
		return{
			 list : [
			 /*这里面是假的数据*/
             /*   {
                    "url": "http://www.itcast.cn/subject/phoneweb/index.html",
                    "img": "http://8867345.s21i-8.faiusr.com/2/ABUIABACGAAg_dj2wwUowvbjywUwgAU4wAI!640x640.jpg"
                },
                {
                    "url": "http://www.itcast.cn/subject/phoneweb/index.html",
                    "img": "http://8867345.s21i-8.faiusr.com/2/ABUIABACGAAgmMv3wwUopMqcATCABTjAAg!640x640.jpg"
                },
                {
                    "url": "http://www.itcast.cn/subject/phoneweb/index.html",
                    "img": "http://8867345.s21i-8.faiusr.com/2/ABUIABACGAAgyr6AxAUo2IHXtQMwgAU4wAI!640x640.jpg"
                }*/

            ]
		}
	},
	created:function(){
		/*在生命周期函数 created函数中最早使用getimg 的ajax请求*/
		this.getImgs()

	},
	methods:{
		/*实现ajax get请求*/
		getImgs(){
			var url="http://vue.studyit.io/api/getlunbo";
			this.$http.get(url).then(function(res){
				var data = res.body;
                // 对于 错误处理
                if (data.status != 0) {
                    Toast(data.message);
                    return ;
                }
                this.list = data.message;

			})
		}
	}
}
</script>

<style scoped>
/* 轮播图的样式 */
	.mint-swipe{
		height: 300px;
	}

	.mint-swipe-item{
		height: 300px;
		width: 100%;
		background-color: skyblue;
	}
	.mint-swipe-item img{
		width: 100%;
		height: 100%;
	}
	
/* mint-swipe-item is-active */
</style>