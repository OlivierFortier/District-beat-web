import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Apropos from "../views/Apropos.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/a-propos",
    name: "Apropos",
    component: Apropos
  },
  {
    path: "/jouer",
    name: "Jouer",
    component: () => import("../views/Jouer.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
