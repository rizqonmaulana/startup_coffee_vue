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
    productPrice: '',
    productDetail: []
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
    },
    setProductDetail(state, payload) {
      state.productDetail = payload
    }
  },
  actions: {
    getAllProduct(context) {
      return new Promise((resolve, reject) => {
        axios
          .get(process.env.VUE_APP_ROOT_URL + '/product')
          .then(response => {
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
          .get(process.env.VUE_APP_ROOT_URL + `/product?id=${payload}`)
          .then(response => {
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
            process.env.VUE_APP_ROOT_URL +
              `/category/${payload}?sortBy=${context.state.sortBy}&sortType=${context.state.sortType}&limit=${context.state.limit}&page=${context.state.page}`
          )
          .then(response => {
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
          .get(process.env.VUE_APP_ROOT_URL + `/product/detail/${payload}`)
          .then(result => {
            context.commit('setProductDetail', result.data.data[0])
            resolve(result)
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
            process.env.VUE_APP_ROOT_URL +
              `/category/${context.state.categoryName}?search=${context.state.searchKeyword}&sortBy=${context.state.sortBy}&sortType=${context.state.sortType}&limit=${context.state.limit}&page=${context.state.page}`
          )
          .then(response => {
            context.commit('setProduct', response.data)
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    postProduct(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post(process.env.VUE_APP_ROOT_URL + '/product', payload)
          .then(result => {
            resolve(result)
          })
          .catch(error => {
            reject(error.response)
          })
      })
    },
    patchProduct(_context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .patch(
            process.env.VUE_APP_ROOT_URL + `/product/${payload.id}`,
            payload.dataSet
          )
          .then(result => {
            resolve(result)
          })
          .catch(error => {
            reject(error.response)
          })
      })
    },
    deleteProduct(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .delete(process.env.VUE_APP_ROOT_URL + `/product/${payload}`)
          .then(result => {
            setTimeout(function() {
              router.push('/product')
            }, 1000)
            resolve(result)
          })
          .catch(error => {
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
    },
    getProductDetail(state) {
      return state.productDetail
    }
  }
}
