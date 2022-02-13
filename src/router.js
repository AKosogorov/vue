import Vue from "vue";
import VueRouter from "vue-router";
import MainPage from "@/pages/MainPage";
import AddPage from "@/pages/AddPage";

Vue.use(VueRouter)

const routes = [
  {
    path: '/vue/',
    component: MainPage
  },
  {
    path: '/vue/add',
    component: AddPage
  }
]

export default new VueRouter({
  mode: 'history',
  routes
})