import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/login',
    component: require("../views/LoginCmp.vue").default,
  },
  {
    path: '/registration',
    component: require("../views/RegistrationCmp.vue").default,
  },
  {
    path: '/user',
    component: require("../views/SubContainer.vue").default,
    redirect: { path: "/user/dashboard" },
    children: [
      {
        path: 'dashboard',
        component: require("../components/component/user/DashboardCmp.vue").default,
      },
      {
        path: 'diagnostics',
        component: require("../components/component/base-comp/DiagnosticsCmp.vue").default,
      },
      {
        path: 'repair',
        component: require("../components/component/base-comp/RepairCmp.vue").default,
      },
      {
        path: 'devices',
        component: require("../components/component/base-comp/DeviceCmp.vue").default,
      },
      {
        path: 'parts',
        component: require("../components/component/base-comp/PartsCmp.vue").default,
      },
      {
        path: 'accessories',
        component: require("../components/component/base-comp/AccessoriesCmp.vue").default,
      },
      {
        path: 'warehouse',
        component: require("../components/component/base-comp/WarehouseCmp.vue").default,
      },
      {
        path: 'client_list',
        component: require("../components/component/base-comp/ClientsList.vue").default,
      },
      {
        path: 'client_list_block',
        component: require("../components/component/base-comp/ClientsListBlock.vue").default,
      },

      {
        path: 'services_report',
        component: require("../components/component/base-comp/ServicesReportCmp.vue").default,
      },
      {
        path: 'sales_report',
        component: require("../components/component/base-comp/SalesReportCmp.vue").default,
      },
      {
        path: 'warehouse_report',
        component: require("../components/component/base-comp/WarehouseReportCmp.vue").default,
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
