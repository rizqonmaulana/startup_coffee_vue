import axios from 'axios'

export default {
  state: {
    coupon: [],
    VUE_APP_ROOT_URL: process.env.VUE_APP_ROOT_URL
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
          .get(`${context.state.VUE_APP_ROOT_URL}/coupon/active`)
          .then(response => {
            console.log(response)
            context.commit('setCoupon', response.data.data)
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    getActiveCouponById(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(`${context.state.VUE_APP_ROOT_URL}/coupon/active/${payload}`)
          .then(response => {
            console.log(response)
            context.commit('setCoupon', response.data.data[0])
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
          .post(`${context.state.VUE_APP_ROOT_URL}/coupon`, payload)
          .then(result => {
            console.log(result)
            resolve(result)
          })
          .catch(error => {
            console.log(error.response)
            reject(error.response)
          })
      })
    },
    patchCoupon(context, payload) {
      console.log(payload)
      console.log('^ ini payload patch coupon')
      return new Promise((resolve, reject) => {
        axios
          .patch(
            `${context.state.VUE_APP_ROOT_URL}/coupon/${payload.id}`,
            payload.data
          )
          .then(result => {
            console.log(result)
            resolve(result)
          })
          .catch(error => {
            console.log(error.response)
            reject(error.response)
          })
      })
    },
    deleteCoupon(context, payload) {
      console.log(payload)
      return new Promise((resolve, reject) => {
        axios
          .delete(`${context.state.VUE_APP_ROOT_URL}/coupon/${payload}`)
          .then(result => {
            console.log(result)
            context.dispatch('getActiveCoupon')
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
      console.log(state.coupon)
      console.log('^ coupon cuy')
      return state.coupon
    }
  }
}
