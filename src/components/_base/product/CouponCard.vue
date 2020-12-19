<template>
    <div class="coupon-card-parent px-auto">
        <div class="card mt-5 ml-4 coupon-card coupon-card-back position-absolute justify-content-md-center d-none d-sm-block" style="width: 225px; height: 340px; background-color: #895537;">
        </div>

        <div class="card mt-4 coupon-card coupon-card-back position-absolute justify-content-md-center d-none d-sm-block" style="width: 215px; height: 390px; background-color: #000; margin-left: 5px;">
        </div>

        <div class="card mt-5 coupon-card justify-content-md-center" style="width: 230px; background-color: #FFCB65;">
        <img class="card-img-top rounded-circle mx-auto mt-4" src="../../../assets/profile.png" style="width: 80px">
        <div class="card-body text-center">
            <h5 class="card-title" style="font-weight: 700; font-size: 22px; line-height: 35px;">
            Beef Spaghetti
            <br>
            20% OFF
            </h5>
            <p class="card-text" style="font-size: 14px;">
            Buy 1 Choco Oreo and get 20% off for Beef Spaghetti
            </p>
            <hr>
            <p class="poppins">
            COUPON CODE
            </p>
            <h5 class="poppins coupon">
            FNPR15RG
            </h5>
            <p class="poppins" style="font-size: 12px;">
            Valid untill October 10th 2020
            </p>
        </div>
        </div>
        <a href="#" class="btn btn-coupon mt-5">
        <span class="poppins" style="font-weight: 700; font-size: 17px;">
            Apply Coupon
        </span>
        </a>
        <div class="coupon-term-condition mt-5">
        <p style="font-size: 12px; color: #4F5665;">
            Terms and Condition <br>
        1. You can only apply 1 coupon per day <br>
        2. It only for dine in <br>
        3. Buy 1 get 1 only for new user <br>
        4. Should make member card to apply coupon
        </p>
        </div> 
    </div>
</template>

<style scoped>
.coupon-card-parent .coupon {
  font-weight: 700;
  font-size: 33px;
}

.coupon-card-parent .btn-coupon {
  color: #fff;
  background-color: #6a4029;
  border-radius: 20px;
  width: 230px;
  line-height: 30px;
  margin-left: -45px;
}

.coupon-card-parent .btn-coupon:hover {
  color: #fff;
  background-color: #e8ab33;
  -webkit-box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.34);
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.34);
}

.coupon-card-parent .coupon-card {
  border-radius: 20px;
  font-family: 'Poppins', sans-serif;
  margin-left: -45px;
}

.coupon-card-parent .coupon-term-condition {
  margin-left: -45px;
}

@media (max-width: 1200px) {
  .coupon-card-parent {
    margin-left: -12% !important;
  }
}

@media (max-width: 991px) {
  .coupon-card-parent {
    margin-left: 26vw !important;
  }
}

@media (max-width: 576px) {
  .coupon-card {
    margin-right: 10vw !important;
    width: 240px !important;
  }
}

</style>