<template>
  <div>
    <nav>
      <b-container class="my-4">
        <div class="d-flex justify-content-between">
          <div class="nav-logo">
            <ul class="navbar-nav">
              <li>
                <router-link class="navbar-brand" to="/"
                  ><img
                    class="mr-3"
                    src="../../assets/coffee-nav-icon.png"
                  /><strong style="color: #0B132A;"
                    >StartUp Coffee</strong
                  ></router-link
                >
              </li>
            </ul>
          </div>
          <div class="nav-menu d-md-block d-none d-sm-none d-md-block">
            <ul class="navbar-nav flex-row">
              <li class="nav-item">
                <router-link class="nav-link" to="/">Home</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/product"
                  >Product</router-link
                >
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/product/checkout"
                  >Your Cart</router-link
                >
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/history"
                  >History</router-link
                >
              </li>
              <li v-if="user === 1" class="nav-item">
                <p class="nav-link" @click="resetUser">
                  Logout
                </p>
              </li>
            </ul>
          </div>
          <div class="nav-user ml-md-auto">
            <ul v-if="user === 0" class="navbar-nav mr-auto flex-row">
              <li class="nav-item ml-lg-auto">
                <router-link class="nav-link" to="/login">Login</router-link>
              </li>
              <li class="nav-item pr-0">
                <a class="nav-link" href="#">
                  <button class="btn-signup">
                    Sign Up
                  </button>
                </a>
              </li>
            </ul>
            <ul v-else class="navbar-nav mr-auto flex-row">
              <li class="nav-item ml-lg-auto">
                <a class="nav-link" @click="showSearch" href="#">
                  <input
                    v-if="searchInput === 1"
                    v-on:keyup.enter="searchProduct(searchKeyword)"
                    v-model="searchKeyword"
                    class="search-input"
                    placeholder="search..."
                  />
                  <img
                    v-else
                    src="../../assets/search-icon.png"
                    style="width: 30px; height:30px;"
                  />
                </a>
              </li>
              <li class="nav-item pr-0">
                <a class="nav-link" href="#">
                  <img src="../../assets/chat-icon.png" />
                </a>
              </li>
              <li class="nav-item pr-0">
                <a class="nav-link" href="#">
                  <img class="rounded-circle" src="../../assets/profile.png" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <!-- mobile view menu -->
        <div class="d-flex flex-column d-none d-sm-block d-md-none">
          <div class="nav-menu-m align-center mx-auto my-auto">
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0 flex-row">
              <li class="nav-item">
                <router-link class="nav-link" to="/">Home</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/product"
                  >Product</router-link
                >
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/lifecycle"
                  >Your Cart</router-link
                >
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="#">History</router-link>
              </li>
            </ul>
          </div>
        </div>
      </b-container>
    </nav>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Navbar',
  data() {
    return {
      user: 0,
      searchKeyword: '',
      searchInput: 0
    }
  },
  methods: {
    ...mapActions(['logout', 'searchProduct']),
    resetUser() {
      this.user = 0
      this.logout()
    },
    showSearch() {
      this.searchInput = 1
      console.log(this.searchInput)
    }
    // logout() {
    //   alert.log('anda berhasil logout')
    //   this.logout()
    // }
  },
  created() {
    let getUser = localStorage.getItem('vuex')
    getUser = JSON.parse(getUser)
    if (getUser.Auth.user.userName) {
      this.user = 1
    } else {
      this.user = 0
    }
  }
}
</script>

<style scoped>
nav.navbar-brand img {
  width: 30px;
  height: 33px;
}

.nav-login {
  color: pink;
}

.navbar-nav .active .nav-link,
.navbar-nav .nav-link.show,
.navbar-nav .nav-link.active {
  color: #6a4029;
}

.navbar-nav .nav-link {
  color: #4f5665;
  margin-right: 2vw;
}

.navbar-nav .nav-link:hover {
  color: #6a4029;
  margin-right: 2vw;
}

.nav-logo,
.nav-user {
  width: 30vw;
}

.nav-menu {
  width: 40vw;
}

.login-text {
  color: #0b132a;
  font-weight: 700;
}

.btn-signup {
  color: #6a4029;
  background: #ffba33;
  outline: unset;
  border-radius: 10px;
  font-weight: 700;
  padding: 2px 17px;
  border: unset;
}

.flex-row {
  justify-content: center;
}

.search-input {
  width: 150px;
  border-top: unset;
  border-left: unset;
  border-right: unset;
  border-bottom: 1px solid grey;
  outline: unset;
  font-size: 14px;
}
</style>
