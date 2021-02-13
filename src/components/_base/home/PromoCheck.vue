<template>
  <div class="float-card">
    <div class="d-flex flex-row align-items-center justify-content-between">
      <div>
        <h2>
          Check our promo <br />
          today!
        </h2>
        <p>
          Let's see the deals and pick yours.
        </p>
      </div>
      <div>
        <button class="btn-signup">
          See Promo
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.float-card {
  width: 900px;
  border-radius: 10px;
  padding: 25px 50px;
  -webkit-box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.4);
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.4);
  background-color: #fff;
}

h2 {
  color: #343944;
}

p {
  color: #4f5665;
}

.btn-signup {
  width: 200px;
  line-height: 40px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 10px;
  border: unset;
  background-color: #ffba33;
  color: #6a4029;
  font-weight: 700;
}

@media (max-width: 992px) {
  .float-card {
    width: 700px;
  }
}

@media (max-width: 768px) {
  .float-card {
    width: 400px;
  }

  .flex-row {
    flex-direction: column !important;
  }
}

@media (max-width: 576px) {
  .float-card {
    width: 365px;
  }
}

@media (max-width: 414px) {
  .float-card {
    margin-top: 30px;
    width: 300px;
  }
}

@media (max-width: 375px) {
  .float-card {
    width: 270px;
  }
}
</style>
