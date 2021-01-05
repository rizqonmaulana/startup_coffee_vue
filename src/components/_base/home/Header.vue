<template>
  <div class="main">
    <b-container>
      <div class="header-text">
        <h1 class="mt-3">
          Start Your Day with Coffee and Good Meals
        </h1>
        <p class="mt-4">
          We provide high quality beans, good taste and healthy meals made by
          love just for you, Start your day with us for a bigger smile!
        </p>
        <button class="btn-start mt-3">
          Get Started
        </button>
      </div>
    </b-container>
  </div>
</template>
<style scoped>
.main {
  background-image: url('../../../assets/bg-home.png');
  background-repeat: no-repeat;
  background-size: cover;
  padding: 100px 0 150px;
}

.header-text {
  width: 450px;
}

.btn-start {
  color: #6a4029;
  font-weight: 700;
  background-color: #ffba33;
  border: unset;
  border-radius: 10px;
  outline: unset;
  padding: 10px 30px;
}

h1,
p {
  color: #fff;
  font-weight: 700;
}

h1 {
  line-height: 50px;
}

@media (max-width: 576px) {
  .header-text {
    width: 100%;
  }
}
</style>
