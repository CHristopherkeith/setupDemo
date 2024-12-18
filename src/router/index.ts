import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView/index.vue";
import Three from "@/views/Three/Three.vue";
import JumpMp from "@/views/JumpMp/JumpMp.vue";
// import FlowEditor from "@/views/FlowEditor/FlowEditor.vue";
// import FlowEditor from "@/views/FlowEditor/FlowEditor.vue";
// import MyComp1 from "@/views/MyComp/MyComp1.vue"
// import MyComp2 from "@/views/MyComp/MyComp2.vue"

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/three",
    name: "three",
    component: Three,
  },
  {
    path: "/pages-h5/test/index",
    name: "jumpMp",
    component: JumpMp,
  },
  // {
  //   path: "/about",
  //   name: "about",
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  // },
  // {
  //   path: "/editor",
  //   name: "editor",
  //   // component: FlowEditor,
  //   component: () =>
  //     import(/* webpackChunkName: "editor" */ "../views/FlowEditor/FlowEditor.vue"),
  // },

  // {
  //   path: "/c1",
  //   name: "c1",
  //   component: () =>
  //     import(/* webpackChunkName: "MyComp1-r" */ "../views/MyComp/MyComp1.vue"),
  // },
  // {
  //   path: "/c2",
  //   name: "c2",
  //   component: () =>
  //     import(/* webpackChunkName: "MyComp2-r" */ "../views/MyComp/MyComp2.vue"),
  // },

  // {
  //   path: "/c1",
  //   name: "c1",
  //   component: MyComp1
  // },
  // {
  //   path: "/c2",
  //   name: "c2",
  //   component: MyComp2
  // },
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
