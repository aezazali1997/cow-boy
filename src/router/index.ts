import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
const Home = () => import("../views/Home/Home.vue");
const App = () => import("../views/App/App.vue");
const Book = () => import("../views/Book/Book.vue");
const Cowboy3 = () => import("../views/Cowboy3/Cowboy3.vue");
const Cowboy4 = () => import("../views/Cowboy4/Cowboy4.vue");
const Cowboy4st = () => import("../views/Cowboy4ST/Cowboy4ST.vue");
const Services = () => import("../views/Services/Services.vue");

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/services",
    name: "Services",
    component: Services,
  },
  {
    path: "/app",
    name: "App",
    component: App,
  },
  {
    path: "/book",
    name: "Book",
    component: Book,
  },
  {
    path: "/cowboy3",
    name: "Cowboy",
    component: Cowboy3,
  },
  {
    path: "/cowboy4",
    name: "Cowboy4",
    component: Cowboy4,
  },
  {
    path: "/cowboy4st",
    name: "Cowboy4ST",
    component: Cowboy4st,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
