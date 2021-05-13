import Vue from "vue"
import Router from "vue-router"

import Home from "@/views/Home"
import Error from "@/views/Error"
import Category from "@/views/Category"

Vue.use(Router)

export default new Router({
  mode: "history",

  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },

    {
      path: "/category/:id_category",
      name: "category",
      component: Category
    },
    
    {
      path: "*",
      name: "error",
      component: Error
    },
  ]
})