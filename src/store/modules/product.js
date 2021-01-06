import axios from 'axios'

export default {
  state: {
    limit: 12,
    page: 1,
    products: [],
    totalRows: null,
    categoryName: 'favorite'
  },
  mutations: {
    setProduct(state, payload) {
      //   payload = response.data
      state.products = payload.data
      state.totalRows = payload.pagination.totalData
    },
    changePage(state, payload) {
      console.log('ini payload page')
      // console.log(payload)
      state.page = payload
      console.log(state.page)
    },
    changeCategory(state, payload) {
      state.categoryName = payload
    }
  },
  actions: {
    getProductsByCategory(context, data) {
      return new Promise((resolve, reject) => {
        context.commit('changeCategory', data)
        axios
          .get(
            `http://localhost:3000/category/${context.state.categoryName}?limit=${context.state.limit}&page=${context.state.page}`
          )
          .then(response => {
            console.log(response)
            context.commit('setProduct', response.data)
            resolve(response)
            // context.state.categoryName = categoryName
            // context.state.totalRows = response.data.pagination.totalData
            // context.state.products = response.data.data
          })
          .catch(error => {
            console.log(error)
            reject(error)
          })
      })
    }
  },
  getters: {
    getPageProduct(state) {
      return state.page
    },
    getLimitProduct(state) {
      return state.limit
    },
    getDataProduct(state) {
      return state.products
    },
    getTotalRowsProduct(state) {
      return state.totalRows
    },
    getCategoryName(state) {
      return state.categoryName
    }
  }
}
