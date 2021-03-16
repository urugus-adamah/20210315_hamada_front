import Vue from 'vue'
import VueRouter from 'vue-router'
import TodoList from '../views/TodoList.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'todolist',
    component: TodoList
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
