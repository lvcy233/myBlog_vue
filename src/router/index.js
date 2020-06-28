import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/MyBlog",
    name: "MyBlog",
    component: () => import("@/views/MyBlog")
  },
  {
    path: "/PersonCenter",
    name: "PersonCenter",
    component: () => import("@/views/PersonCenter")
  },
  {
    path: "/Login",
    name: "Login",
    component: () => import("@/views/Login")
  },
  {
    path: "/Setting",
    name: "Setting",
    component: () => import("@/views/Setting")
  }
];

const router = new VueRouter({
  //去掉/#
  mode: "history",
  routes
});

export default router;
