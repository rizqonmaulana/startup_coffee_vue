<template>
  <div class="main text-center">
    <img class="rounded-circle" src="../../../assets/cold_brew.png" />
    <h4 class="mt-5">Hazelnut Latte</h4>

    <div class="desc-list mt-4">
      <div class="text-left ml-4">
        <div class="mt-3">
          <span class="check-mark">&#10003;</span>
          <span class="ml-2"> Hazelnut Syrup</span>
        </div>
        <div class="mt-3">
          <span class="check-mark">&#10003;</span>
          <span class="ml-2"> Vanilla Whipped Cream</span>
        </div>
        <div class="mt-3">
          <span class="check-mark">&#10003;</span>
          <span class="ml-2"> Ice / Hot</span>
        </div>
        <div class="mt-3">
          <span class="check-mark">&#10003;</span>
          <span class="ml-2"> Sliced Banana on Top</span>
        </div>
        <div class="mt-3">
          <span class="check-mark">&#10003;</span>
          <span class="ml-2"> Ice / Hot</span>
        </div>
        <div class="mt-3">
          <span class="check-mark">&#10003;</span>
          <span class="ml-2"> Sliced Banana on Top</span>
        </div>
      </div>
    </div>

    <h3>IDR 25.000</h3>
    <button class="btn-order mt-3">Order Now</button>
  </div>
</template>

<style scoped>
.main {
  width: 100%;
  padding: 50px 40px;
  border: 1px solid lightgray;
  border-radius: 10px;
}

img {
  width: 120px;
}

h5 {
  font-weight: 500;
}

.check-mark {
  font-size: 20px;
  color: green;
}

.desc-list {
  height: 300px;
}

.btn-order {
  color: #6a4029;
  border: 2px solid #ffba33;
  font-weight: 500;
  border-radius: 25px;
  padding: 5px 50px;
  background-color: #fff;
}

.btn-order:hover {
  background-color: #ffba33;
  transition-duration: 0.4s;
}

@media (max-width: 576px) {
  .main {
    margin-top: 30px;
  }
}
</style>
