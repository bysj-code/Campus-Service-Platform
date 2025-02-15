import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import maijia from '@/views/modules/maijia/list'
    import yonghu from '@/views/modules/yonghu/list'
    import dingdanxinxi from '@/views/modules/dingdanxinxi/list'
    import discussershoushangpin from '@/views/modules/discussershoushangpin/list'
    import ershoushangpin from '@/views/modules/ershoushangpin/list'
    import xiaoyuangonggao from '@/views/modules/xiaoyuangonggao/list'
    import config from '@/views/modules/config/list'
    import users from '@/views/modules/users/list'
    import dingdanfahuo from '@/views/modules/dingdanfahuo/list'


//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
      ,{
	path: '/maijia',
        name: '卖家',
        component: maijia
      }
      ,{
	path: '/yonghu',
        name: '用户',
        component: yonghu
      }
      ,{
	path: '/dingdanxinxi',
        name: '订单信息',
        component: dingdanxinxi
      }
      ,{
	path: '/discussershoushangpin',
        name: '二手商品评论',
        component: discussershoushangpin
      }
      ,{
	path: '/ershoushangpin',
        name: '二手商品',
        component: ershoushangpin
      }
      ,{
	path: '/xiaoyuangonggao',
        name: '校园公告',
        component: xiaoyuangonggao
      }
      ,{
	path: '/config',
        name: '轮播图管理',
        component: config
      }
      ,{
	path: '/users',
        name: '管理员',
        component: users
      }
      ,{
	path: '/dingdanfahuo',
        name: '订单发货',
        component: dingdanfahuo
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
