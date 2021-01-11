import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Product from '../views/Product.vue'
import ProductDetail from '../views/ProductDetail.vue'
import ProductCheckout from '../views/ProductCheckout.vue'
import ProductInsert from '../views/ProductInsert.vue'
import ProductUpdate from '../views/ProductUpdate.vue'
import History from '../views/OrderHistory.vue'
import Login from '../views/auth/Login.vue'
import Signup from '../views/auth/Signup.vue'
import store from '../store/index'
import ForgotPassword from '../views/auth/ForgotPassword.vue'
import Profile from '../views/Profile.vue'
import Dashboard from '../views/admin/Dashboard.vue'
import CouponInsert from '../views/CouponInsert.vue'
import CouponUpdate from '../views/CouponUpdate.vue'
import Forbidden403 from '../views/error/403.vue'
import OrderList from '../views/admin/OrderList.vue'

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
  },
  {
    path: '/forgot',
    name: 'ForgotPassword',
    component: ForgotPassword
    // meta: { requiresVisitor: true }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/admin/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/coupon',
    name: 'CouponInsert',
    component: CouponInsert
  },
  {
    path: '/coupon/update/:id',
    name: 'CouponUpdate',
    component: CouponUpdate
  },
  {
    path: '/403',
    name: 'Forbidden403',
    component: Forbidden403
  },
  {
    path: '/admin/order',
    name: 'OrderList',
    component: OrderList
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
