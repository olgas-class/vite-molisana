import { createRouter, createWebHistory } from "vue-router";

import HomePage from "./pages/HomePage.vue";
import AboutPage from "./pages/AboutPage.vue";
import ContactsPage from "./pages/ContactsPage.vue";
import ProductsPage from "./pages/ProductsPage.vue";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/chi-siamo",
      name: "about",
      component: AboutPage,
    },
    {
      path: "/contatti",
      name: "contacts",
      component: ContactsPage,
    },
    {
      path: "/prodotti",
      name: "products",
      component: ProductsPage,
    },
  ],
});
