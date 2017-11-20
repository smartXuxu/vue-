// 1.0 导入vue核心包
import Vue from 'vue';

// 2.0 导入App.vue的vue对象
import App from './App.vue';

// 3.0 将vue-router集成到这个项目中来
import vueRouter from 'vue-router';
// 3.0.1 将vueRouter对象绑定到Vue对象上
Vue.use(vueRouter);

// 3.0.2 导入路由规则对应的组件对象
import home from './components/Home.vue';
import car from './components/shopcar/car.vue';

// 3.0.2 定义路由规则
var router1 = new vueRouter({
	linkActiveClass:"mui-active",
	routes:[
		{path:'/home',component:home}, 
		{path:'/car',component:car}
	]
	});


// 4.0 注册mint-ui
// 导入mint-ui的css文件
import Vue from 'vue';
import Mint from 'mint-ui';
import 'mint-ui/lib/style.min.css';
Vue.use(Mint);
// 导入mint-ui组件对象
import mintui from 'mint-ui';
// 在Vue中全局使用mintui
Vue.use(mintui);
// 5.0 注册mui的css样式
import '../statics/mui/css/mui.css';
/*导入vue-resouse 路由的使用*/
  import vueResource from 'vue-resource'
    Vue.use(vueResource)

/* 引入自己设置的 site.css*/
import '../statics/css/site.css';
// 5.0 利用Vue对象进行解析渲染
new Vue({
	el:'#app',
	// 使用路由对象实例
	router:router1,
	// render:function(create){create(App)} //es5的写法
	render:c=>c(App)  // es6的函数写法 =>：goes to
});