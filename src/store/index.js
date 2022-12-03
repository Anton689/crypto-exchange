import Vue from 'vue'
import Vuex from 'vuex'
import exchanger from '@/store/modules/exchanger'
import getters from '@/store/getters'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    exchanger
  },
  getters
})
