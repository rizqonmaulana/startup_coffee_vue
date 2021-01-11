import axios from 'axios'
import router from '../../router'

export default {
  state: {
    limit: 12,
    page: 1,
    products: [],
    totalRows: null,
    categoryName: 'favorite',
    sortBy: 'product_name',
    sortType: 'ASC',
    searchKeyword: '',
    productPrice: ''
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
    },
    setPrice(state, payload) {
      state.productPrice = payload
    }
  },
  actions: {
    getAllProduct(context) {
      return new Promise((resolve, reject) => {
        axios
          .get('http://localhost:3000/product')
          .then(response => {
            console.log(response)
            context.commit('setProduct', response.data)
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    getProductPrice(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(`http://localhost:3000/product?id=${payload}`)
          .then(response => {
            console.log(response)
            context.commit('setPrice', response.data.data[0].product_price)
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    getProductsByCategory(context, payload) {
      return new Promise((resolve, reject) => {
        context.commit('changeCategory', payload)
        axios
          .get(
            `http://localhost:3000/category/${payload}?sortBy=${context.state.sortBy}&sortType=${context.state.sortType}&limit=${context.state.limit}&page=${context.state.page}`
          )
          .then(response => {
            console.log(response)
            context.commit('setProduct', response.data)
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    getProductById(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(`http://localhost:3000/product/detail/${payload}`)
          .then(result => {
            resolve(result)
            // context.state.categoryName = categoryName
            // context.state.totalRows = response.data.pagination.totalData
            // context.state.products = response.data.data
          })
          .catch(error => {
            reject(error.response)
          })
      })
    },
    sortProduct(context, payload) {
      context.commit('changeSort', payload)
      if (context.state.searchKeyword === '') {
        context.dispatch('getProductsByCategory', context.state.categoryName)
      } else {
        context.dispatch('searchProduct', context.state.searchKeyword)
      }
    },
    searchProduct(context, payload) {
      context.commit('changeSearch', payload)
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
    postProduct(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post('http://localhost:3000/product', payload)
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
    },
    patchProduct(_context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .patch(`http://localhost:3000/product/${payload.id}`, payload.dataSet)
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
    deleteProduct(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .delete(`http://localhost:3000/product/${payload}`)
          .then(result => {
            console.log(result)
            setTimeout(function() {
              router.push('/product')
            }, 1000)
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
    },
    getProductPrice(state) {
      return state.productPrice
    }
  }
}
