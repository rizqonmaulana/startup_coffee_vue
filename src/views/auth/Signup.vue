<template>
  <div class="signup-container">
    <b-container>
      <b-row class="signup-row">
        <b-col
          class="d-none d-lg-block d-xl-block"
          col
          lg="6"
          sm="12"
          cols="12"
        >
          <img class="bg-auth" src="../../assets/bg-auth.png" />
        </b-col>
        <b-col col lg="6" sm="12" cols="12">
          <SignupForm class="signup-form" />
        </b-col>
      </b-row>
      <FloatCard class="float-card" />
    </b-container>
    <Footer />
  </div>
</template>

<script>
import Footer from '../../components/_base/Footer'
import SignupForm from '../../components/_base/auth/SignupForm'
import FloatCard from '../../components/_base/auth/FloatCard'

export default {
  components: {
    Footer,
    SignupForm,
    FloatCard
  }
}
</script>

<style scoped>
.bg-auth {
  width: 100%;
  margin: unset;
}

.float-card {
  position: absolute;
  margin-top: -10%;
  margin-left: 8.5%;
}

.signup-row {
  margin-bottom: 50px;
}

@media (max-width: 1200px) {
  .float-card {
    position: static;
    margin-top: -5%;
    margin-left: auto;
    margin-right: auto;
  }

  .signup-row {
    margin-bottom: 50px;
  }
}

@media (max-width: 992px) {
  .float-card {
    position: static;
    margin: 50px 0px 20px 0px;
  }

  .signup-row {
    margin-bottom: -20px;
  }

  .signup-form {
    background-color: #fff;
    border-radius: 10px;
    padding: 1px 20px 20px;
  }

  .signup-container {
    background-image: url('../../assets/bg-auth.png');
    background-repeat: no-repeat;
    background-size: cover;
  }
}

@media (max-width: 768px) {
  .float-card {
    position: static;
    margin: 50px 0px 20px 55px;
  }
}

@media (max-width: 576px) {
  .float-card {
    position: static;
    margin: 50px 0px 20px 30px;
  }
}
</style>
