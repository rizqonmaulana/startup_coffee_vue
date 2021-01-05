<template>
  <div class="d-flex justify-content-between align-items-center stats">
    <div class="d-flex justify-content-between align-items-center">
      <div class="rounded-circle icon-circle text-center">
        <img class="icon" src="../../../assets/icon-people.png" />
      </div>
      <div class="desc">
        <h4><strong>90+</strong></h4>
        <p>Staff</p>
      </div>
    </div>
    <div class="d-flex justify-content-between align-items-center">
      <div class="rounded-circle icon-circle text-center">
        <img class="icon" src="../../../assets/icon-map.png" />
      </div>
      <div class="desc">
        <h4><strong>30+</strong></h4>
        <p>Stores</p>
      </div>
    </div>
    <div class="d-flex justify-content-between align-items-center">
      <div class="rounded-circle icon-circle text-center">
        <img
          class="icon"
          src="../../../assets/icon-love.png"
          style="width: 25px;"
        />
      </div>
      <div class="desc">
        <h4><strong>900+</strong></h4>
        <p>Customer</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.stats {
  background-color: #fff;
  border-radius: 10px;
  padding: 20px 50px;
  -webkit-box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.4);
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.4);
}
.icon-circle {
  background-color: #ffba33;
  height: 50px;
  width: 50px;
}

.icon {
  margin-top: 14px;
}

.desc {
  padding-top: 10px;
  margin-left: 20px;
}

@media (max-width: 992px) {
  .stats {
    padding: 20px 20px;
  }
}

@media (max-width: 576px) {
  .icon-circle {
    height: 30px;
    width: 30px;
  }

  .icon {
    margin-top: 0;
    width: 12px;
  }

  .desc {
    padding-top: 5px;
    margin-left: 10px;
  }
}
</style>
