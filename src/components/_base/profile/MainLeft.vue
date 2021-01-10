<template>
  <div class="main-left text-center">
    <img
      v-if="!profile.user_pic && !url"
      :src="'http://localhost:3000/assets/user_profile.png'"
      style="width: 150px;"
    />
    <img
      v-if="profile.user_pic && url"
      class="rounded-circle"
      :src="url"
      style="width: 150px;"
    />
    <img
      v-if="profile.user_pic && !url"
      class="rounded-circle"
      :src="'http://localhost:3000/' + profile.user_pic"
      style="width: 150px; height: 150px;"
    />
    <h5 class="mt-3">{{ profile.user_name }}</h5>
    <p class="mb-4">{{ profile.user_email }}</p>
    <input id="fileUpload" type="file" @change="handleFile" hidden />
    <button
      @click="chooseFiles()"
      class="btn-yellow-brown poppins mb-3"
      style="width: 100%;"
    >
      Choose photo
    </button>
    <br />
    <button class="btn-brown-white poppins" style="width: 100%;">
      Remove photo
    </button>
    <button
      class="btn-white-brown mt-5 py-3 poppins"
      style="width: 100%; border: 2px solid #9f9f9f;"
    >
      Edit Password
    </button>
    <p
      class="my-5 poppins"
      style="font-weight: 700; color: #6A4029; font-size: 20px;"
    >
      Do you want to save the change?
    </p>
    <button
      @click="updateUser"
      class="btn-brown-white poppins py-3"
      style="width: 100%;"
    >
      Save Change
    </button>
    <br />
    <button
      class="btn-yellow-brown poppins mt-4 mb-3 py-3"
      style="width: 100%;"
    >
      Cancel
    </button>
    <button
      class="btn-white-brown mt-5 py-3 poppins"
      style="width: 100%; border: 2px solid #9f9f9f;"
    >
      Log out
    </button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: ['profile'],
  data() {
    return {
      url: ''
    }
  },
  methods: {
    ...mapActions(['patchUserProfile']),
    updateUser() {
      const {
        user_address,
        user_first_name,
        user_gender,
        user_last_name,
        user_name,
        user_phone,
        user_pic
      } = this.profile

      let { user_dob } = this.profile
      user_dob = user_dob.substring(0, 10)

      const data = new FormData()
      data.append('userName', user_name)
      data.append('image', user_pic)
      data.append('userPhone', user_phone)
      data.append('userAddress', user_address)
      data.append('userFirstName', user_first_name)
      data.append('userLastName', user_last_name)
      data.append('userDob', user_dob)
      data.append('userGender', user_gender)

      const setData = {
        dataSet: data,
        email: this.profile.user_email
      }

      this.patchUserProfile(setData)
    },
    chooseFiles() {
      document.getElementById('fileUpload').click()
    },
    handleFile(event) {
      const file = event.target.files[0]
      this.url = URL.createObjectURL(file)
      this.profile.user_pic = file
    }
  }
}
</script>

<style scoped>
.main-left {
  padding: 0px 25px;
}

.btn-yellow-brown {
  background-color: #ffba33;
  color: #6a4029;
  padding: 10px 30px;
  border-radius: 10px;
  font-weight: 700;
  border: unset;
  outline: unset;
}

.btn-yellow-brown:hover {
  background-color: #fcac0d;
}

.btn-brown-white {
  background-color: #6a4029;
  color: #fff;
  padding: 10px 30px;
  border-radius: 10px;
  font-weight: 700;
  border: unset;
  outline: unset;
}

.btn-brown-white:hover {
  background-color: #633015;
}

.btn-white-brown {
  background-color: #fff;
  color: #6a4029;
  padding: 10px 35px;
  border-radius: 10px;
  font-weight: 700;
  border: 2px solid #6a4029;
  outline: unset;
}

.btn-white-brown:hover {
  color: #5e290c;
  background-color: rgb(238, 238, 238);
}
</style>
