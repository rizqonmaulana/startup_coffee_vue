<template>
  <div class="main-left text-center">
    <img
      class="rounded-circle"
      src="../../../assets/profile.png"
      style="width: 150px;"
    />
    <h5 class="mt-3">Zalaikha</h5>
    <p class="mb-4">zulaikha17@gmail.com</p>
    <button class="btn-yellow-brown poppins mb-3" style="width: 100%;">
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
    <button class="btn-brown-white poppins py-3" style="width: 100%;">
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
