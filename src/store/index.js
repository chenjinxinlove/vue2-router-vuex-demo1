/**
 * Created by chen on 2016/11/17.
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    comn: {
      loading: false,
      indexConf: {
        isFooter: true,
        isShowSearch: true,
        isBack: false,
        isShare: false,
        title: ''
      }
    }
  },
  mutations: {
    changeIndexConf: (state, data) => {
      Object.assign(state.comn.indexConf, data)
    },
    isLoading: (state, status) => {
      state.comn.loading = status
    }
  }
})

export default store
