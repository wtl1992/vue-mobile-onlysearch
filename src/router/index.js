import Vue from "vue";
import VueRouter from "vue-router";
import Tv from "../views/Tv";
import Home from "../components/Home";
import ShowTv from "../views/ShowTv";
import SearchTv from "../views/SearchTv";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/tvResult/:pageIndex",
    name: "tv",
    component: Tv
  },
  {
    path: "/showTv/:url/:platform/:aid/:tvName",
    name: "showTv",
    component: ShowTv
  },
  {
    path: "/tvSearchResult/:keyword",
    name: "tvSearchResult",
    component: SearchTv
  }
];

const router = new VueRouter({
  //mode: "abstract",
  base: process.env.BASE_URL,
  routes
});

export default router;
