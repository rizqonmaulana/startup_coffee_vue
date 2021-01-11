import axios from 'axios'

export default {
  state: {},
  mutations: {},
  actions: {
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
  getters: {}
}
