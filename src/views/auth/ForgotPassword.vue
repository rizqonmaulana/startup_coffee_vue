<template>
  <div>
    <div class="main-container">
      <b-container fluid class="forgot-password-container text-center">
        <div class="form-container">
          <h1 class="header-text mb-4">Forgot your password ?</h1>
          <h5 class="header-text">Don't worry, we got your back!</h5>
          <div
            v-if="key"
            class="d-flex justify-content-between align-items-center"
          >
            <div>
              <input
                v-model="password"
                class="form-control"
                type="password"
                placeholder="Enter your new password"
              />
              <input
                v-model="confirmPassword"
                class="form-control mt-2"
                type="password"
                placeholder="Confirm password"
              />
            </div>
            <div>
              <button v-if="key" @click="resetPass" class="btn-send ml-3">
                Reset Password
              </button>
            </div>
          </div>
          <div v-else class="d-flex justify-content-between align-items-center">
            <div>
              <input
                v-model="email"
                class="form-control"
                type="email"
                placeholder="Enter your email address"
              />
            </div>
            <div>
              <button class="btn-send ml-3" @click="forgot">
                Send
              </button>
            </div>
          </div>
        </div>
      </b-container>
    </div>
    <Footer />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { alertMixin } from '../../mixins/alertMixin'
import Footer from '../../components/_base/Footer'
export default {
  mixins: [alertMixin],
  components: {
    Footer
  },
  data() {
    return {
      key: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  },
  created() {
    this.key = this.$route.query.key
  },
  methods: {
    ...mapActions(['forgotPassword', 'resetPassword']),
    forgot() {
      const data = {
        email: this.email
      }
      this.forgotPassword(data)
        .then(result => {
          console.log(result)
          this.successLogin(result.data.msg)
        })
        .catch(error => {
          this.errorAlert(error.data.msg)
        })
    },
    resetPass() {
      const data = {
        password: this.password,
        confirmPassword: this.confirmPassword,
        key: this.key
      }
      this.resetPassword(data)
        .then(result => {
          console.log(result)
          this.successLogin(result.data.msg)
          this.$router.push({ name: 'Login' })
        })
        .catch(error => {
          this.errorAlert(error.data.msg)
        })
    }
  }
}
</script>

<style scoped>
.main-container {
  background-image: url('../../assets/bg-forgot-password.png');
  background-repeat: no-repeat;
  background-size: cover;
  height: 500px;
}

.forgot-password-container {
  background-color: rgba(0, 0, 0, 0.5);
  height: 500px;
}

.header-text {
  font-weight: 700;
  color: #fff;
}

h1.header-text {
  padding-top: 110px;
}

.form-container {
  padding: 0px 20% 0px;
}

.form-control {
  width: 550px;
  height: 60px;
}

.btn-send {
  width: 150px;
  height: 60px;
  background-color: #ffba33;
  color: #6a4029;
  font-weight: 700;
  font-size: 18px;
  border-radius: 10px;
  border: unset;
  outline: unset;
}

.btn-send:hover {
  background-color: #ffaa00;
  -webkit-box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
}

.btn-resend {
  color: #fff;
  background: #6a4029;
  width: 300px;
}

.btn-resend:hover {
  background: #482a1b;
  -webkit-box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
}

.d-flex {
  margin: 60px 0;
}

@media (max-width: 992px) {
  .form-container {
    padding: 0px 6% 0px;
  }
}

@media (max-width: 768px) {
  .form-container {
    padding: 0px 0px 0px;
  }

  .d-flex {
    flex-direction: column;
  }

  .btn-send {
    margin-top: 20px;
  }
}

@media (max-width: 576px) {
  .form-control {
    width: 330px;
    height: 60px;
  }
}
</style>
