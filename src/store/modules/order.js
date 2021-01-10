import axios from 'axios'

export default {
  state: {
    orderList: [],
    orderDetailList: []
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
          .get('http://localhost:3000/order/admin/list')
          .then(result => {
            console.log(result)
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
            `http://localhost:3000/order/admin/list/detail?orderId=${payload}`
          )
          .then(result => {
            console.log(result)
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
