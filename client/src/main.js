import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';

import _axios from 'axios'
import VueAxios from 'vue-axios'

let axios = _axios.create({
  baseURL: "http://localhost:85/"
})

// axios ile istek gönderir isek burası isteği yakalayacak ve istek gitmeden fonksiyonu çalıştırıcak
axios.interceptors.request.use(function (config) {
  console.log(config);
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

Vue.use(VueAxios, axios)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
