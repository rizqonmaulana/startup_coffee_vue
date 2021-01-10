import axios from 'axios'
import router from '../../router/index'

export default {
  state: {
    user: {},
    userProfile: {},
    token: localStorage.getItem('token') || null,
    msg: ''
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload
      state.token = payload.token
    },
    delUser(state) {
      state.user = {}
      state.token = null
    },
    setUserProfile(state, payload) {
      state.userProfile = payload
    },
    setMsg(state, payload) {
      state.msg = payload
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
            resolve(result)
          })
          .catch(error => {
            reject(error.response)
          })
      })
    },
    getUserProfile(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(`http://localhost:3000/user/${payload}`)
          .then(result => {
            context.commit('setUserProfile', result.data.data[0])
            resolve(result)
          })
          .catch(error => {
            reject(error.response)
          })
      })
    },
    patchUserProfile(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .patch(
            `http://localhost:3000/user/update/${payload.email}`,
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
    patchUserPassword(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .patch(
            `http://localhost:3000/user/update/password/${payload.email}`,
            payload
          )
          .then(result => {
            context.commit('setMsg', result.data.msg)
            resolve(result)
          })
          .catch(error => {
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
          return response
        },
        function(error) {
          if (
            error.response.data.status === 403 &&
            error.response.data.msg === 'jwt expired'
          ) {
            context.dispatch('logout')
            alert('Sorry Your token is Expired !')
          } else if (
            error.response.data.status === 403 &&
            error.response.data.msg === 'jwt malformed'
          ) {
            context.dispatch('logout')
            alert('Sorry Your token is not valid !')
          } else if (
            error.response.data.status === 403 &&
            error.response.data.msg === 'jwt invalid'
          ) {
            context.dispatch('logout')
            alert('Sorry Your token is not valid !')
          }

          return Promise.reject(error)
        }
      )
    }
  },
  getters: {
    isLogin(state) {
      return state.token !== null
    },
    getUserProfile(state) {
      return state.userProfile
    },
    getMsg(state) {
      return state.msg
    }
  }
}
