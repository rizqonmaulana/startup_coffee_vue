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
import Login from '../views/auth/Login.vue'
import Signup from '../views/auth/Signup.vue'
import store from '../store/index'

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
    component: ProductDetail,
    meta: { requiresAuth: true }
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
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: { requiresVisitor: true }
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
    // meta: { requiresVisitor: true }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  linkExactActiveClass: 'active' // active class for *exact* links.
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters.isLogin) {
      next({
        path: '/login'
      })
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.requiresVisitor)) {
    if (store.getters.isLogin) {
      next({
        path: '/product'
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
