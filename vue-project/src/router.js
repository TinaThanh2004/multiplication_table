import {createRouter, createWebHistory} from 'vue-router';
import Home from './views/Home.vue';
import MultiplicationTable from "./views/MultiplicationTable.vue";
import AboutMe from './views/AboutMe.vue';
import AllItems from './views/portfolio/AllItems.vue'
import PortfolioItemDetails from "@/views/portfolio/PortfolioItemDetails.vue";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/multiplication-table',
    name: 'MultiplicationTable',
    component: MultiplicationTable
  },
  {
    path: '/about-me',
    name: 'AboutMe',
    component: AboutMe
  },
  // {
  //   path: '/examples/student-data',
  //   name: 'StudentDataExample',
  //   component: StudentList
  // },
  {
    path: '/examples/portfolio',
    children: [
      {
        path: '',
        name: 'Portfolio',
        component: AllItems
      },
      {
        path: ':portfolioId',
        name: 'PortfolioItemDetails',
        component: PortfolioItemDetails
      }
    ]
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
