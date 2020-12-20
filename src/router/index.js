import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Product from '../views/Product.vue'
import Lifecycle from '../views/Lifecycle.vue'
import ProductDetail from '../views/ProductDetail.vue'
import ProductCheckout from '../views/ProductCheckout.vue'
import ProductInsert from '../views/ProductInsert.vue'
import ProductUpdate from '../views/ProductUpdate.vue'
import History from '../views/OrderHistory.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/product',
    name: 'Product',
    component: Product
  },
  {
    path: '/lifecycle',
    name: 'Lifecycle',
    component: Lifecycle
  },
  {
    path: '/product/detail/:id',
    name: 'DetailProduct',
    component: ProductDetail
  },
  {
    path: '/product/checkout',
    name: 'ProductCheckout',
    component: ProductCheckout
  },
  {
    path: '/product/add',
    name: 'ProductInsert',
    component: ProductInsert
  },
  {
    path: '/product/update/:id',
    name: 'ProductUpdate',
    component: ProductUpdate
  },
  {
    path: '/history',
    name: 'History',
    component: History
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  linkExactActiveClass: 'active' // active class for *exact* links.
})

export default router
