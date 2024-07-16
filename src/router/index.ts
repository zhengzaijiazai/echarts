import { createRouter, createWebHashHistory } from "vue-router";

import echartsData from "./echarts";

const routes = [
  {
    path: "/",
    // @ts-ignore
    component: () => import("../views/Home/index.vue"),
  },
  ...echartsData
];

const router: any = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
