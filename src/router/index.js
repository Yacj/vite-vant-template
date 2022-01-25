import { Toast } from "vant";
import { createRouter, createWebHashHistory } from "vue-router";
import { isLogin } from "../utils/auth";

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "home",
    component: () => import("../views/home/index.vue"),
    meta: {
      title: "首页",
      keepAlive: true,
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
router.beforeEach((to, form, next) => {
  const { title, needLogin } = to.meta;
  if (title) {
    document.title = title;
  }
  if (needLogin && !isLogin()) {
    Toast.fail("暂未登录，请登录后再世");
    next("login");
    return;
  }
  next();
});
export default router;
