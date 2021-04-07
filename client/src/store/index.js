import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'
Vue.use(Vuex)

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})



export default new Vuex.Store({
  state: {
    token: "",  //dadar32fgw45gw
    isLogin: ""  //true > false
  },
  mutations: {
    setLogin(state, payload) {
      state.isLogin = payload;
    },
    setToken(state, payload) {
      state.token = payload;
    },
  },
  getters: {
    token(state) {
      return state.token;
    },
    isLogin(state) {
      return state.isLogin;
    }
  },
  plugins: [vuexLocal.plugin]
})
