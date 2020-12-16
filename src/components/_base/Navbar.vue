<template>
    <div>
    <nav>
      <div class="container my-4">
        <div class="d-flex justify-content-between">
          <div class="nav-logo">
            <ul class="navbar-nav">
              <li>
                  <a class="navbar-brand" href="#"><img class="mr-3" src="../../assets/coffee-nav-icon.png"><strong style="color: #0B132A;">Coffe Shop</strong></a>
              </li>
            </ul>
          </div>
          <div class="nav-menu d-md-block d-none d-sm-none d-md-block">
            <ul class="navbar-nav flex-row">
              <li class="nav-item">
                <router-link class="nav-link" to="/">Home</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/product">Product</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/lifecycle">Your Cart</router-link>
              </li>
              <li class="nav-item">
                  <router-link class="nav-link" to="#">History</router-link>
              </li>  
            </ul>
          </div>
          <div class="nav-user ml-md-auto">
            <ul class="navbar-nav mr-auto flex-row">
              <li class="nav-item ml-lg-auto">
                <a class="nav-link" href="#">
                  <img src="../../assets/search-icon.png" style="width: 30px; height:30px;">
                </a>
              </li>
              <li class="nav-item pr-0">
                <a class="nav-link" href="#">
                  <img src="../../assets/chat-icon.png">
                </a>  
              </li>
              <li class="nav-item pr-0">
                <a class="nav-link" href="#">
                  <img class="rounded-circle" src="../../assets/profile.png">
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
                <router-link class="nav-link" to="/product">Product</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/lifecycle">Your Cart</router-link>
              </li>
              <li class="nav-item">
                  <router-link class="nav-link" to="#">History</router-link>
              </li>  
            </ul>
          </div>
        </div>
      </div>
    </nav>
    </div>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style src="@/styles/main.css">

</style>