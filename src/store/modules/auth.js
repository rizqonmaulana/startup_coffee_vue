import axios from 'axios'
import router from '../../router/index'

export default {
  state: {
    user: {},
    token: localStorage.getItem('token') || null
  },
  mutations: {
    setUser(state, payload) {
      console.log(payload)
      console.log('ini payload ^')
      state.user = payload
      state.token = payload.token
    },
    delUser(state) {
      state.user = {}
      state.token = null
    }
  },
  actions: {
    login(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post('http://localhost:3000/user/login', payload)
          .then(result => {
            context.commit('setUser', result.data.data)
            localStorage.setItem('token', result.data.data.token)
            resolve(result)
            router.push('/product')
          })
          .catch(error => {
            reject(error.response)
          })
      })
    },
    logout(context) {
      localStorage.removeItem('token')
      localStorage.removeItem('cart')
      context.commit('delUser')
      router.push('/login')
    },
    registerUser(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post('http://localhost:3000/user/register', payload)
          .then(result => {
            console.log(result)
            resolve(result)
          })
          .catch(error => {
            console.log(error)
            reject(error.response)
          })
      })
    },
    interceptorRequest(context) {
      console.log('interceptor Request work !')
      axios.interceptors.request.use(
        function(config) {
          // Do something before request is sent
          config.headers.Authorization = `Bearer ${context.state.token}`
          return config
        },
        function(error) {
          // Do something with request error
          return Promise.reject(error)
        }
      )
    },
    interceptorResponse(context) {
      console.log('interceptor Response work !')
      axios.interceptors.response.use(
        function(response) {
          // Any status code that lie within the range of 2xx cause this function to trigger
          // Do something with response data
          return response
        },
        function(error) {
          // Any status codes that falls outside the range of 2xx cause this function to trigger
          // Do something with response error
          if (
            error.response.data.status === 403 &&
            (error.response.data.msg === 'invalid token' ||
              error.reponse.data.msg === 'jwt expired' ||
              error.reponse.data.msg === 'invalid signature' ||
              error.reponse.data.msg === 'jwt malformed')
          ) {
            context.dispatch('logout')
            console.log(error.response)
            alert(error.response.data.msg)
          } else if (
            error.response.data.status === 400 &&
            error.response.data.msg ===
              'Your are not allowed to access this page'
          ) {
            alert(error.response.data.msg)
            router.push('/product')
          }
          console.log(error)
          return Promise.reject(error)
        }
      )
    }
  },
  getters: {
    isLogin(state) {
      return state.token !== null
    }
  }
}
