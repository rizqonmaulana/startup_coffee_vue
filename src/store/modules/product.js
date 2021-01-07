import axios from 'axios'

export default {
  state: {
    limit: 12,
    page: 1,
    products: [],
    totalRows: null,
    categoryName: 'favorite',
    sortBy: 'product_name',
    sortType: 'ASC',
    searchKeyword: ''
  },
  mutations: {
    setProduct(state, payload) {
      state.products = payload.data
      state.totalRows = payload.pagination.totalData
    },
    changePage(state, payload) {
      state.page = payload
    },
    changeCategory(state, payload) {
      state.categoryName = payload
    },
    changeSort(state, payload) {
      if (payload == 1) {
        state.sortBy = 'product_name'
        state.sortType = 'ASC'
      } else if (payload == 2) {
        state.sortBy = 'product_name'
        state.sortType = 'DESC'
      } else if (payload == 3) {
        state.sortBy = 'product_price'
        state.sortType = 'ASC'
      } else if (payload == 4) {
        state.sortBy = 'product_price'
        state.sortType = 'DESC'
      }
    },
    changeSearch(state, payload) {
      state.searchKeyword = payload
    }
  },
  actions: {
    getProductsByCategory(context, data) {
      return new Promise((resolve, reject) => {
        context.commit('changeCategory', data)
        axios
          .get(
            `http://localhost:3000/category/${data}?sortBy=${context.state.sortBy}&sortType=${context.state.sortType}&limit=${context.state.limit}&page=${context.state.page}`
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
            reject(error)
          })
      })
    },
    sortProduct(context, data) {
      context.commit('changeSort', data)
      if (context.state.searchKeyword === '') {
        context.dispatch('getProductsByCategory', context.state.categoryName)
      } else {
        context.dispatch('searchProduct', context.state.searchKeyword)
      }
    },
    searchProduct(context, data) {
      context.commit('changeSearch', data)
      return new Promise((resolve, reject) => {
        axios
          .get(
            `http://localhost:3000/category/${context.state.categoryName}?search=${context.state.searchKeyword}&sortBy=${context.state.sortBy}&sortType=${context.state.sortType}&limit=${context.state.limit}&page=${context.state.page}`
          )
          .then(response => {
            // this.totalRows = response.data.pagination.totalData
            // this.products = response.data.data
            console.log(response)
            context.commit('setProduct', response.data)
            resolve(response)
          })
          .catch(error => {
            console.log(error)
            reject(error)
          })
      })
    },
    postProduct(context, data) {
      return new Promise((resolve, reject) => {
        axios
          .post('http://localhost:3000/product', data)
          .then(result => {
            console.log(result)
            resolve(result)
            // this.showAlert()
          })
          .catch(error => {
            console.log(error.response)
            reject(error.response)
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
