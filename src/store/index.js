import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // loadFlag:false
    loadFlag:true
  },
  mutations: {
    loadturn(state){
      state.loadFlag=true;
    },
    unload(state){
      state.loadFlag=false;
    }
  },
  actions: {
  },
  modules: {
  }
})
