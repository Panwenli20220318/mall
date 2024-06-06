import Vue from 'vue'
import router from './router'
import axios from 'axios'
import App from './App.vue'
// import env from './env'

Vue.config.productionTip = false;

// 切换mock为 false 以使用真实的 API
const mock = false;
if (mock) {
  require('./mock/api');  // 导入并使用模拟 API
}

Vue.prototype.axios = axios;
axios.defaults.baseURL = 'https://mock.presstime.cn/mock/6657e645dd3831604f0229ee/api';
// 根据前端的跨域方式做调整(接口代理)  访问'/a/b' => 会转换为'/api/a/b' => 转发的时候'/a/b'
// axios.defaults.baseURL = '/api';
//根据环境变量获取不同的请求地址
// axios.defaults.baseURL = env.baseURL;
axios.defaults.timeout = 8000;
// 添加响应拦截器，status ：0 成功；10 未登录
axios.interceptors.response.use(function (response) {
  let res = response.data;
  if (res.status == 0) {
    return res.data;
  }
  else if (res.status == 10) {
    window.location.href = "/#/login";
  } else {
    alert(res.msg);
  }
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
