import Vue from "vue";
import Router from "vue-router";
import Home from "@views/Home.vue";
import Booking from "@views/Booking";
import PageNotFound from "@components/_pageNotFound.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "@views/About.vue")
    },
    {
      path: "/booking",
      name: "booking",
      component: Booking
    },
    {
      path: "*",
      component: PageNotFound
    }
  ]
});
