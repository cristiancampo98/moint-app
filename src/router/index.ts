import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import WorkersDetailView from "../views/workers/DetailView.vue";
import DetailUser from "../views/DetailUser.vue";
import PersonalInformation from "../views/PersonalInformation.vue";
import ModalDetailUser from "../components/users/ModalDetailUser.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/worker-detail/:userId",
      name: "WorkersDetailView",
      component: WorkersDetailView,
    },
    {
      path: "/DetailUser",
      name: "DetailUser",
      component: DetailUser,
    },
    {
      path: "/PersonalInformation",
      name: "PersonalInformation",
      component: PersonalInformation,
    },
    {
      path: "/ModalDetailUser",
      name: "ModalDetailUser",
      component: ModalDetailUser,
    },
  ],
});

export default router;
