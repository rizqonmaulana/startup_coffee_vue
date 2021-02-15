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
              <li v-if="userRole === 1" class="nav-item">
                <router-link class="nav-link" to="/admin/order">
                  Orders
                </router-link>
              </li>
              <li v-else class="nav-item">
                <router-link class="nav-link" to="/product/checkout"
                  >Your Cart</router-link
                >
              </li>
              <li v-if="userRole === 1" class="nav-item">
                <router-link class="nav-link" to="/admin/dashboard"
                  >Dashboard</router-link
                >
              </li>
              <li v-else class="nav-item">
                <router-link class="nav-link" to="/history"
                  >History</router-link
                >
              </li>
            </ul>
          </div>
          <div class="nav-user ml-md-auto">
            <ul v-if="user === 0" class="navbar-nav mr-auto flex-row">
              <li class="nav-item ml-lg-auto">
                <router-link class="nav-link no-wrapper" to="/login"
                  >Login</router-link
                >
              </li>
              <li class="nav-item pr-0">
                <a class="nav-link" href="#">
                  <button class="btn-signup text-nowrap">
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
              <router-link to="/Profile" class="nav-item pr-0">
                <b-dropdown
                  right
                  variant="none"
                  class="ml-auto profile-dropdown"
                  no-caret
                  ><template slot="button-content">
                    <img
                      v-if="!userPic"
                      class="rounded-circle"
                      src="../../assets/profile.png"
                    />

                    <img
                      v-else
                      :src="'http://localhost:3000/' + userPic"
                      class="rounded-circle profile-img"
                    />
                  </template>

                  <b-dropdown-item>
                    <router-link to="/profile"
                      ><p>My Profile</p>
                    </router-link></b-dropdown-item
                  >

                  <b-dropdown-item v-if="user === 1">
                    <p @click="resetUser">
                      Logout
                    </p></b-dropdown-item
                  >
                </b-dropdown>
              </router-link>
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
                <router-link class="nav-link" to="/product/checkout"
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
      userEmail: '',
      userPic: '',
      userRole: 0,
      searchKeyword: '',
      searchInput: 0
    }
  },
  methods: {
    ...mapActions(['logout', 'searchProduct', 'getUserProfile']),
    resetUser() {
      this.user = 0
      this.logout()
    },
    showSearch() {
      this.searchInput = 1
    }
  },
  created() {
    let getUser = localStorage.getItem('vuex')
    getUser = JSON.parse(getUser)
    if (getUser.Auth.user.userName) {
      this.user = 1
      this.userRole = getUser.Auth.user.userRole
      this.userEmail = getUser.Auth.user.userEmail
      this.getUserProfile(this.userEmail)
        .then(result => {
          console.log(result)
          this.userPic = result.data.data[0].user_pic
          console.log(result)
        })
        .catch(error => {
          console.log(error)
        })
    } else {
      this.user = 0
    }
  }
}
</script>

<style scoped>
p {
  margin-bottom: unset;
}

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

.navbar-nav .nav-link .rounded-circle {
  width: 30px;
  height: 30px;
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

.profile-img {
  width: 35px;
  height: 35px;
}

button {
  padding: 0.375rem 0rem !important;
}

button.btn.dropdown-toggle {
  padding-left: unset !important;
}
</style>
