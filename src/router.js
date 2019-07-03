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
      path: "/contact",
      name: "contact",
      // route level code-splitting
      // this generates a separate chunk (contact.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "contact" */ "@views/Contact.vue")
    },
    {
      path: "/booking",
      name: "booking",
      component: Booking
    },
    {
      path: "/services",
      name: "services",
      component: () => import("@views/Services.vue")
    },
    {
      path: "*",
      component: PageNotFound
    }
  ]
});
