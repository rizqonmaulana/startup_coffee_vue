<template>
  <div>
    <div class="main-container">
      <b-container fluid class="forgot-password-container text-center">
        <div class="form-container">
          <h1 class="header-text mb-4">Forgot your password ?</h1>
          <h5 class="header-text">Don't worry, we got your back!</h5>
          <div class="d-flex justify-content-between align-items-center">
            <div>
              <input
                class="form-control"
                type="email"
                placeholder="Enter your email address"
              />
            </div>
            <div>
              <button class="btn-send ml-3">
                Send
              </button>
            </div>
          </div>
          <h5 class="header-text">
            Click here if you didn't receive any link <br />
            in 2 minutes
          </h5>
          <button class="btn-send btn-resend mt-3 mb-2">
            Resend Link
          </button>
          <h5 class="header-text">
            01:35
          </h5>
        </div>
      </b-container>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from '../../components/_base/Footer'
export default {
  components: {
    Footer
  }
}
</script>

<style scoped>
.main-container {
  background-image: url('../../assets/bg-forgot-password.png');
  background-repeat: no-repeat;
  background-size: cover;
  height: 750px;
}

.forgot-password-container {
  background-color: rgba(0, 0, 0, 0.5);
  height: 1000px;
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
