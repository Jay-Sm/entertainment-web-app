import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "home",
    meta: {
      title: "Home | Entertainment App"
    },
    component: Home,
  },
  {
    path: "/movie",
    name: "movie",
    meta: {
      title: "Movies | Entertainment App"
    },
    component: () => import("../views/Movie.vue"),
  },
  {
    path: "/tv",
    name: "tv",
    meta: {
      title: "TV Shows | Entertainment App"
    },
    component: () => import("../views/TV.vue"),
  },
  {
    path: "/bookmarked",
    name: "bookmarked",
    meta: {
      title: "Bookmarked Titles | Entertainment App"
    },
    component: () => import("../views/Bookmarked.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach((to, from) => {
  document.title = to.meta?.title ?? "Entertainment App";
});

export default router;
