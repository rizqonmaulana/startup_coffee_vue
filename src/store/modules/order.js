import axios from 'axios'

export default {
  state: {
    orderList: [],
    orderDetailList: [],
    VUE_APP_ROOT_URL: process.env.VUE_APP_ROOT_URL
  },
  mutations: {
    setOrderList(state, payload) {
      state.orderList = payload.data
    },
    setOrderDetailList(state, payload) {
      state.orderDetailList = payload.data
    }
  },
  actions: {
    getOrderList(context) {
      return new Promise((resolve, reject) => {
        axios
          .get(`${context.state.VUE_APP_ROOT_URL}/order/admin/list`)
          .then(result => {
            context.commit('setOrderList', result.data)
            resolve(result)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    getOrderDetailList(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(
            `${context.state.VUE_APP_ROOT_URL}/order/admin/list/detail?orderId=${payload}`
          )
          .then(result => {
            context.commit('setOrderDetailList', result.data)
            resolve(result)
          })
          .catch(error => {
            reject(error)
          })
      })
    }
  },
  getters: {
    getOrderList(state) {
      return state.orderList
    },
    getOrderDetailList(state) {
      return state.orderDetailList
    }
  }
}
