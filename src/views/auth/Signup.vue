<template>
  <div>
    <div class="main">
      <b-container class="signup-container">
        <b-row class="signup-row">
          <b-col col="12">
            <SignupForm class="signup-form" />
          </b-col>
        </b-row>
      </b-container>
      <FloatCard class="float-card" />
    </div>
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
.main {
  background-image: url('../../assets/bg-auth.png');
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 50px;
  padding-bottom: 50px;
}

.signup-container {
  background-color: rgba(255, 255, 255, 0.9);
  margin-bottom: 100px;
  padding-bottom: 50px;
  border-radius: 10px;
}

.bg-auth {
  width: 100%;
  margin: unset;
}

.float-card {
  margin-right: auto;
  margin-left: auto;
  left: 0;
  right: 0;
  margin-top: -50px;
}

@media (max-width: 576px) {
  .main {
    padding: 10px;
  }
}
</style>
