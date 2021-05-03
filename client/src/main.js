import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import VueQuagga from 'vue-quaggajs';
Vue.use(VueQuagga);
import _axios from 'axios'
import VueAxios from 'vue-axios'

let axios = _axios.create({
  baseURL: "https://market-barcode.herokuapp.com/"
})

// axios ile istek gönderir isek burası isteği yakalayacak ve istek gitmeden fonksiyonu çalıştırıcak
axios.interceptors.request.use(function (config) {
  config.headers.token = store.state.token;
  console.log(config);
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

axios.interceptors.response.use(function(config){
  console.log(config);
  return config;
})

Vue.use(VueAxios, axios)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
