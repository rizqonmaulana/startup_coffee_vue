import axios from 'axios'

export default {
  state: {
    coupon: []
  },
  mutations: {
    setCoupon(state, payload) {
      state.coupon = payload
    }
  },
  actions: {
    getActiveCoupon(context) {
      return new Promise((resolve, reject) => {
        axios
          .get('http://localhost:3000/coupon/active')
          .then(response => {
            console.log(response.data.data)
            context.commit('setCoupon', response.data.data)
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    postCoupon(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post('http://localhost:3000/coupon', payload)
          .then(result => {
            console.log(result)
            resolve(result)
          })
          .catch(error => {
            console.log(error.response)
            reject(error.response)
          })
      })
    }
  },
  getters: {
    getActiveCoupon(state) {
      return state.coupon
    }
  }
}
