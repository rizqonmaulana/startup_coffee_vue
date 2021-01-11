import axios from 'axios'

export default {
  state: {
    yearIncome: '',
    weekOrders: '',
    todayIncome: '',
    VUE_APP_ROOT_URL: process.env.VUE_APP_ROOT_URL
  },
  mutations: {
    setYearIncome(state, payload) {
      state.yearIncome = payload
    },
    setWeekOrders(state, payload) {
      state.weekOrders = payload
    },
    setTodayIncome(state, payload) {
      state.todayIncome = payload
    }
  },
  actions: {
    getYearIncome(context) {
      return new Promise((resolve, reject) => {
        axios
          .get(`${context.state.VUE_APP_ROOT_URL}/order/admin/year-income`)
          .then(result => {
            context.commit('setYearIncome', result.data)
            resolve(result)
          })
          .catch(error => {
            console.log(error)
            reject(error.response)
          })
      })
    },
    getWeekOrders(context) {
      console.log('masukk get week orders')
      return new Promise((resolve, reject) => {
        axios
          .get(`${context.state.VUE_APP_ROOT_URL}/order/admin/week-order`)
          .then(result => {
            console.log(result)
            context.commit('setWeekOrders', result.data)
            resolve(result)
          })
          .catch(error => {
            console.log(error)
            reject(error.response)
          })
      })
    },
    getTodayIncome(context) {
      return new Promise((resolve, reject) => {
        axios
          .get(`${context.state.VUE_APP_ROOT_URL}/order/admin/daily-income`)
          .then(result => {
            context.commit('setTodayIncome', result.data)
            resolve(result)
          })
          .catch(error => {
            console.log(error)
            reject(error.response)
          })
      })
    }
  },
  getters: {
    getYearIncome(state) {
      return state.yearIncome
    },
    getWeekOrders(state) {
      return state.weekOrders
    },
    getTodayIncome(state) {
      return state.todayIncome
    }
  }
}
