import axios from 'axios'

export default {
  state: {
    cart: [],
    orderList: [],
    orderDetailList: [],
    VUE_APP_ROOT_URL: process.env.VUE_APP_ROOT_URL,
    history: [],
    orderDetail: [],
    chart: []
  },
  mutations: {
    setOrderList(state, payload) {
      state.orderList = payload.data
    },
    setOrderDetailList(state, payload) {
      state.orderDetailList = payload.data
    },
    setHistory(state, payload) {
      state.history = payload
    },
    setOrderDetail(state, payload) {
      state.orderDetail = payload
    },
    setChart(state, payload) {
      state.chart = payload
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
    },
    getHistory(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(`${context.state.VUE_APP_ROOT_URL}/order/history/${payload}`)
          .then(result => {
            context.commit('setHistory', result.data.data)
            resolve(result)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    getOrderDetail(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(`${context.state.VUE_APP_ROOT_URL}/order/invoice/${payload}`)
          .then(result => {
            context.commit('setOrderDetail', result.data.data)
            resolve(result)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    deleteHistory(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .delete(`${context.state.VUE_APP_ROOT_URL}/order/${payload}`)
          .then(result => {
            resolve(result)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    patchOrderStatus(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .patch(`${context.state.VUE_APP_ROOT_URL}/order`, payload)
          .then(result => {
            resolve(result)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    getChart(context) {
      return new Promise((resolve, reject) => {
        axios
          .get(`${context.state.VUE_APP_ROOT_URL}/order/admin/chart`)
          .then(result => {
            context.commit('setChart', result.data.data)
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
    },
    getHistory(state) {
      return state.history
    },
    getOrderDetail(state) {
      return state.orderDetail
    },
    getChart(state) {
      return state.chart
    }
  }
}
