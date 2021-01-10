<template>
  <div>
    <Navbar />
    <div class="main">
      <b-container class="py-3">
        <h3 style="color: #fff; font-weight: 700;  text-shadow: 2px 2px #000; ">
          User Profile
        </h3>
      </b-container>
      <b-container fluid="sm">
        <div class="profile-container">
          <b-row>
            <b-col col lg="4" sm="12" cols="12" style="padding: unset;">
              <MainLeft :profile="profile" />
            </b-col>
            <b-col col lg="8" sm="12" cols="12" class="profile-form">
              <ProfileForm :profile="profile" />
            </b-col>
          </b-row>
          <button @click="showComputed">show computed</button>
        </div>
      </b-container>
    </div>
    <Footer />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Navbar from '../components/_base/Navbar'
import Footer from '../components/_base/Footer'
import MainLeft from '../components/_base/profile/MainLeft'
import ProfileForm from '../components/_base/profile/ProfileForm'

export default {
  components: { Navbar, Footer, MainLeft, ProfileForm },
  computed: {
    ...mapGetters({
      profile: 'getUserProfile'
    })
  },
  methods: {
    ...mapActions(['getUserProfile']),
    showComputed() {
      console.log(this.profile)
    }
  },
  mounted() {
    this.profile.user_dob = this.profile.user_dob.substring(0, 10)
  },
  created() {
    let getUserEmail = localStorage.getItem('vuex')
    getUserEmail = JSON.parse(getUserEmail)
    getUserEmail = getUserEmail.Auth.user.userEmail
    this.getUserProfile(getUserEmail)
  }
}
</script>

<style scoped>
.main {
  background-image: url('../assets/bg-profile.png');
  background-repeat: no-repeat;
  background-size: cover;
  padding: 0px 0px 50px;
}

.profile-container {
  background-color: #fff;
  border-radius: 10px;
  padding: 30px 50px 30px 50px;
}

.profile-form {
  padding: unset;
}

@media (max-width: 576px) {
  .profile-container {
    background-color: #fff;
    border-radius: 10px;
    padding: 30px 15px 0px 15px;
  }
  .profile-form {
    margin-top: 50px;
  }
}
</style>
