import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView/index.vue";
import FlowEditor from "@/views/FlowEditor/FlowEditor.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/editor",
    name: "editor",
    component: FlowEditor,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach(async (to, from) => {
  // console.log(to, from);
  // await new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     resolve(true);
  //   }, 1000);
  // })
});

export default router;
