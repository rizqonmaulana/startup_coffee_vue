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
        <router-link class="nav-icon" to="/login">
          <button
            class="btn-signup"
            style="line-height: 30px; width: 100px; border-radius: 30px;"
          >
            Login
          </button>
        </router-link>
      </div>
    </div>
    <h3 class="text-center header-text mb-3">
      Sign Up
    </h3>
    <b-container>
      <b-row>
        <b-col lg="6" sm="12" cols="12">
          <p class="text-form">
            User Name:
          </p>
          <input
            v-focus
            class="form-control"
            type="email"
            v-model="form.userName"
            placeholder="Enter your user name"
          />
          <p class="text-form">
            First Name :
          </p>
          <input
            class="form-control"
            type="text"
            v-model="form.userFirstName"
            placeholder="Enter your first name"
          />
          <p class="text-form">
            Last Name :
          </p>
          <input
            class="form-control"
            type="text"
            v-model="form.userLastName"
            placeholder="Enter your last name"
          />
          <p class="text-form">
            Address
          </p>
          <input
            class="form-control"
            type="text"
            v-model="form.userAddress"
            placeholder="Enter your address"
          />
          <p class="text-form">
            Date of birth
          </p>
          <input
            class="form-control"
            type="date"
            v-model="form.userDob"
            placeholder="Enter your date of birth"
          />
        </b-col>
        <b-col lg="6" sm="12" cols="12">
          <p class="text-form">
            Email Adress :
          </p>
          <input
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
            Phone Number :
          </p>
          <input
            class="form-control"
            type="text"
            v-model="form.userPhone"
            placeholder="Enter your phone number"
          />
          <p class="text-form">
            Gender :
          </p>
          <select name="gender" v-model="form.userGender" class="form-control">
            <option value="" selected disabled
              >Please select your gender</option
            >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <p class="text-form">
            Photo :
          </p>
          <input
            class="form-control"
            type="file"
            @change="handleFile"
            placeholder="Choose your photo"
          />
        </b-col>
        <button @click="postUser" class="btn-signup mt-5">
          Sign Up
        </button>
        <button class="btn-signup btn-signup-google mt-3">
          <img src="../../../assets/icon-google.svg" class="google-icon" />
          Sign up with Google
        </button>
      </b-row>
    </b-container>
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
        userName: '',
        userEmail: '',
        image: '',
        userPassword: '',
        userPhone: '',
        userAddress: '',
        userFirstName: '',
        userLastName: '',
        userDob: '',
        userGender: ''
      }
    }
  },
  methods: {
    ...mapActions(['registerUser']),
    postUser() {
      const {
        userName,
        userEmail,
        image,
        userPassword,
        userPhone,
        userAddress,
        userFirstName,
        userLastName,
        userDob,
        userGender
      } = this.form

      const data = new FormData()
      data.append('userName', userName)
      data.append('userEmail', userEmail)
      data.append('image', image)
      data.append('userPassword', userPassword)
      data.append('userPhone', userPhone)
      data.append('userAddress', userAddress)
      data.append('userFirstName', userFirstName)
      data.append('userLastName', userLastName)
      data.append('userDob', userDob)
      data.append('userGender', userGender)
      for (var pair of data.entries()) {
        console.log(pair[0] + ', ' + pair[1])
      }

      this.registerUser(data)
        .then(result => {
          this.successAlert(result.data.msg)
        })
        .catch(error => {
          this.errorAlert(error.data.msg)
        })
    },
    handleFile(event) {
      console.log(event.target.files[0])
      this.form.image = event.target.files[0]
    }
  }
}
</script>

<style scoped>
.signup-form {
  padding: 0 5%;
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
