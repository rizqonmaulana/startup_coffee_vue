<template>
  <div>
    <nav>
      <b-container class="my-4">
        <div class="d-flex justify-content-between ">
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
              <li class="nav-item">
                <router-link class="nav-link" to="/history"
                  ><p @click="logout">Logout</p></router-link
                >
              </li>
            </ul>
          </div>
          <div class="nav-user ml-md-auto">
            <ul class="navbar-nav mr-auto flex-row">
              <li class="nav-item ml-lg-auto">
                <a class="nav-link" href="#">
                  <router-link to="/login">
                    <p class="login-text">Login</p>
                  </router-link>
                </a>
              </li>
              <li class="nav-item pr-0">
                <a class="nav-link" href="#">
                  <router-link to="/signup">
                    <button class="btn-signup">
                      Sign Up
                    </button></router-link
                  >
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
  methods: {
    ...mapActions(['logout'])
    // logout() {
    //   alert.log('anda berhasil logout')
    //   this.logout()
    // }
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

.nav-logo,
.nav-user {
  width: 30vw;
}

.nav-menu {
  width: 40vw;
}
</style>
