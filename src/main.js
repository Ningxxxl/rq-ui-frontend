import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import {API} from './api/api'
import axios from './api/axios.config';
import App from './App.vue'

Vue.config.productionTip = false

Vue.prototype.$axios = axios
Vue.prototype.$api = API
Vue.use(ElementUI);

new Vue({
  render: h => h(App),
}).$mount('#app')
