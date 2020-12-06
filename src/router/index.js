import Vue from "vue";
import VueRouter from "vue-router";
import Accueil from "../views/Accueil.vue";
import Apropos from "../views/Apropos.vue";
import Instructions from "../views/Instructions.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Accueil",
    component: Accueil
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
  },
  {
    path: "/instructions",
    name: "Instructions",
    component: Instructions
  }
];

const router = new VueRouter({
  routes
});

export default router;
