import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

import actions from './actions'
import mutations from './mutations'
import state from './state'
import getters from './getters'

export default new Vuex.Store({
  state:state,
  mutations: mutations,
  actions: actions,
  getters: getters
})
