<template>
  <div class="signup-form">
    <div class="d-flex flex-row justify-content-between nav-menu">
      <div>
        <router-link class="nav-icon" to="/"
          ><img class="mr-3" src="../../../assets/coffee-nav-icon.png" /><strong
            style="color: #0B132A;"
            >StartUp Coffee</strong
          ></router-link
        >
      </div>
      <div>
        <button
          class="btn-signup"
          style="line-height: 30px; width: 100px; border-radius: 30px;"
        >
          Sign Up
        </button>
      </div>
    </div>
    <h3 class="text-center header-text mb-3">
      Login
    </h3>
    <b-form @submit.prevent="onSubmit" @reset.prevent="onReset">
      <p class="text-form">
        Email Address :
      </p>
      <input
        v-focus
        class="form-control"
        type="email"
        v-model="form.userEmail"
        placeholder="Enter your email address"
      />
      <p class="text-form">
        Password :
      </p>
      <input
        class="form-control"
        type="password"
        v-model="form.userPassword"
        placeholder="Enter your password"
      />
      <p class="text-form">
        <button type="submit" class="btn-signup mt-5">
          Login
        </button>
        <button class="btn-signup btn-signup-google mt-3">
          <img src="../../../assets/icon-google.svg" class="google-icon" />
          Login with Google
        </button>
      </p>
    </b-form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { alertMixin } from '../../../mixins/alertMixin'

export default {
  mixins: [alertMixin],
  data() {
    return {
      form: {
        userEmail: '',
        userPassword: ''
      }
    }
  },
  methods: {
    ...mapActions(['login']),
    onSubmit() {
      this.login(this.form)
        .then(result => {
          this.successLogin(result.data.msg)
        })
        .catch(error => {
          this.errorAlert(error.data.msg)
        })
    },
    onReset() {
      this.form = {
        userEmail: '',
        userPassword: ''
      }
    }
  }
}
</script>

<style scoped>
.signup-form {
  padding: 0 10%;
}

.nav-icon {
  padding: unset !important;
}

.nav-menu {
  margin: 30px 0 50px;
}

.header-text {
  color: #6a4029;
  font-weight: 700;
  font-size: 30px;
}

.text-form {
  color: #4f5665;
  font-weight: 700;
  font-size: 20px;
  line-height: 20px;
  margin-top: 40px;
}

.form-control {
  height: 50px;
  border-radius: 10px;
}

.btn-signup {
  width: 100%;
  line-height: 55px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 10px;
  border: unset;
  background-color: #ffba33;
  color: #6a4029;
  font-weight: 700;
  -webkit-box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
  outline: unset;
}

.btn-signup-google {
  color: #000;
  background-color: #fff;
  -webkit-box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
  outline: unset;
}

.btn-signup-google:hover,
.btn-signup:hover {
  -webkit-box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3);
}

.google-icon {
  width: 25px;
  margin-right: 5px;
}
</style>
