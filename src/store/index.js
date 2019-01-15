import Vue from 'vue'
import Vuex from 'vuex'
import * as mutationsType from './mutations-type'
import * as filtersType from './filters-type'

Vue.use(Vuex)

const STORE_KEY = 'toread-application'

const store = new Vuex.Store({
  state: {
    toreads: [],
    uid: 0
  },
  getters: {
    [filtersType.ALL] (state) {
      return state.toreads
    },
    [filtersType.ACTIVE] (state) {
      return state.toreads.filter(item => !item.completed)
    },
    [filtersType.COMPLETED] (state) {
      return state.toreads.filter(item => item.completed)
    }
  },
  mutations: {
    [mutationsType.LOAD_TOREADS] (state) {
      state.toreads = JSON.parse(localStorage.getItem(STORE_KEY) || '[]')
      state.toreads.forEach(function (toread, index) {
        toread.id = index
      })
      state.uid = state.toreads.length
    },
    [mutationsType.ADD_TOREAD] (state, toread) {
      toread.completed = false
      toread.id = state.uid++
      state.toreads.push(toread)
    },
    [mutationsType.DELETE_TOREAD] (state, id) {
      state.toreads = state.toreads.filter(item => item.id !== id)
    }
  }
})

store.watch(state => state.toreads, toreads => {
  localStorage.setItem(STORE_KEY, JSON.stringify(toreads))
}, { deep: true })

export default store
