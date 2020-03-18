import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/topic/:id",
    name: "Topic",
    component: () =>
      import(/* webpackChunkName: "topic" */ "../views/ThemeDetails.vue")
  },
  {
    path: "/user/:name",
    name: "User",
    component: () =>
      import(/* webpackChunkName: "user" */ "../views/UserData.vue")
  },
  {
    path: "/getstart",
    name: "Noob",
    component: () => import(/* webpackChunkName: "noob" */ "../views/Noob.vue")
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/api",
    name: "API",
    component: () => import(/* webpackChunkName: "api" */ "../views/API.vue")
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Login.vue")
  },
  {
    path: "/search_pass",
    name: "Password",
    component: () =>
      import(/* webpackChunkName: "password" */ "../views/ForgetPassword.vue")
  },
  {
    path: "*",
    redirect: "/"
  }
];

const router = new VueRouter({
  mode: "history",
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  }
});

export default router;
