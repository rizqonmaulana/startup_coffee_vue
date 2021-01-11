<template>
  <div>
    <div class="form">
      <div class="d-flex justify-content-between align-items-center mb-4">
        <h5 class="poppins">Contacts</h5>
        <div class="p-2">
          <img src="../../../assets/edit-icon.png" style="width: 40px;" />
        </div>
      </div>
      <div class="row poppins mb-5">
        <div class="col-lg-6">
          <label for="email" class="title">
            Email address:
          </label>
          <br />
          <input
            v-focus
            type="text"
            v-model="profile.user_email"
            name="email"
            disabled
          />
          <p class="note">*email can't update</p>
        </div>
        <div class="col-1"></div>
        <div class="col-lg-4">
          <label for="phone" class="title">
            Mobile number:
          </label>
          <br />
          <input type="text" v-model="profile.user_phone" name="phone" />
        </div>
      </div>
      <div class="row mt-2">
        <div class="col-lg-6">
          <label for="address" class="title">
            Delivery address
          </label>
          <br />
          <input type="text" v-model="profile.user_address" name="address" />
        </div>
      </div>
      <h5 class="mt-5 mb-5 poppins">Details</h5>
      <div class="row mb-5">
        <div class="col-lg-6">
          <label for="display-name" class="title">
            Display name:
          </label>
          <br />
          <input type="text" v-model="profile.user_name" name="display-name" />
        </div>
        <div class="col-1"></div>
        <div class="col-lg-4">
          <label for="dob" class="title">
            DD/MM/YY
          </label>
          <br />
          <input
            type="date"
            v-model="userBirthday"
            @change="dateFormat"
            name="dob"
          />

          <!-- {{ userBirthday }} -->
        </div>
      </div>
      <div class="row mb-5">
        <div class="col-lg-6">
          <label for="first-name" class="title">
            First name :
          </label>
          <br />
          <input
            type="text"
            v-model="profile.user_first_name"
            name="first-name"
          />
        </div>
      </div>
      <div class="row mb-5  ">
        <div class="col-lg-6">
          <label for="last-name" class="title">
            Last name :
          </label>
          <br />
          <input
            type="text"
            v-model="profile.user_last_name"
            name="last-name"
          />
        </div>
      </div>
      <div class="row my-3 gender-radio">
        <div class="col text-center">
          <input
            type="radio"
            name="gender"
            value="male"
            v-model="profile.user_gender"
          />
          <label
            class="ml-3 gender-label mr-5"
            :class="profile.user_gender === 'male' ? 'active' : ''"
            for="gender"
            >Male</label
          >

          <input
            class="ml-5"
            type="radio"
            name="gender"
            value="female"
            v-model="profile.user_gender"
          />
          <label
            class="ml-3 gender-label poppins"
            :class="profile.user_gender === 'female' ? 'active' : ''"
            for="gender"
          >
            Female
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['profile'],
  computed: {
    userBirthday() {
      return this.profile.user_dob.substring(0, 10)
    }
  },
  methods: {
    dateFormat(event) {
      this.profile.user_dob = event.target.value
    }
  }
}
</script>

<style scoped>
input {
  outline: unset;
  color: #4f5665;
  font-size: 18px;
}

.form {
  background-color: #fff;
  border-radius: 20px;
  padding: 10px 10px 40px 55px;
  margin-bottom: 50px;
  -webkit-box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.22);
  box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.22);
  border-bottom: 10px solid #6a4029;
}

.form h5 {
  font-weight: 700;
  font-size: 20px;
  color: #4f5665;
}

.form .row {
  width: 100%;
}

.form .row .col-lg-6 label.title,
.form .row .col-lg-4 label.title {
  color: #9f9f9f;
  font-size: 20px;
}

.form .row .col-lg-6 input,
.form .row .col-lg-4 input {
  width: 100%;
  border-top: unset;
  border-left: unset;
  border-right: unset;
}

.form .row .row.my-3.gender-radio .text-center label.gender-label.active {
  font-weight: 700;
  color: #6a4029;
}

.active {
  color: #6a4029;
  font-weight: 700;
}

.note {
  color: rgb(182, 182, 182);
  font-size: 12px;
}

@media (max-width: 576px) {
  .form {
    -webkit-box-shadow: unset;
    box-shadow: unset;
    border-bottom: unset;
  }
}
</style>
