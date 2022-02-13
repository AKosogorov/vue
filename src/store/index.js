import Vue from "vue";
import Vuex from 'vuex'
import cardsModule from '@/store/cardsModule'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    cardsModule
  }
})