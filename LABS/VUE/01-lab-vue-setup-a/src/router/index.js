import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import MorePics from "../views/MorePics.vue";
import ExampleRoute from "../views/ExampleRoute.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/more-pics",
      name: "MorePics",
      component: MorePics,
    },
    {
      path: "/example-route",
      name: "Example Route",
      component: ExampleRoute,
    },
  ],
});

export default router;
