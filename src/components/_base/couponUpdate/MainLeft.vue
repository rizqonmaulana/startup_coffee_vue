<template>
  <div class="main-left">
    <p>
      <span style="color: #4F5665;">Favorite & Promo </span>
      <span style="color: #6a4029;"><strong> > Add new product </strong></span>
    </p>
    <div
      class="card mt-5 coupon-card justify-content-md-center"
      style="width: 300px; background-color: #FFCB65;"
    >
      <img
        class="card-img-top rounded-circle mx-auto mt-4"
        src="../../../assets/profile.png"
        style="width: 80px"
      />
      <div class="card-body text-center">
        <h5
          class="card-title"
          style="font-weight: 700; font-size: 22px; line-height: 35px;"
        >
          Beef Spaghetti
          <br />
          20% OFF
        </h5>
        <p class="card-text" style="font-size: 14px;">
          Buy 1 Choco Oreo and get 20% off for Beef Spaghetti
        </p>
        <hr />
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
    <div class="mt-5 pt-4">
      <span style="color: #6a4029;"><strong> Expire Date : </strong></span>
      <div class="form-group mt-3">
        <select name="start-hour" class="form-control start-hour mt-3">
          <option disabled selected>Select start date</option>
        </select>
      </div>
      <div class="form-group mt-4 mb-5">
        <select name="end-hour" class="form-control end-hour">
          <option disabled selected>Select end date</option>
        </select>
      </div>

      <span class="mt-5" style="color: #6a4029;"
        ><strong> Input Coupon Code : </strong></span
      >
      <div class="form-group mt-3 mb-4">
        <input type="text" class="form-control input-stock" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['form'],
  data() {
    return {
      startHour: this.form.productStartHour,
      endHour: this.form.productEndHour,
      stock: this.form.productQty
    }
  },
  methods: {
    getStartHour(start) {
      this.$emit('getStartHour', start)
    },
    getEndHour(end) {
      this.$emit('getEndHour', end)
    },
    getStock(qty) {
      const stock = Number(qty)
      this.$emit('getStock', stock)
    },
    getCategory(event) {
      const category = Number(event.target.value)
      this.$emit('getCategory', category)
    }
  }
}
</script>

<style scoped>
.main-left {
  padding-right: 20%;
}
.add-pic {
  margin-left: 23%;
  margin-top: 10%;
}
.cam-icon-container {
  width: 200px;
  height: 200px;
  background: rgba(186, 186, 186, 0.35);
}
.cam-icon-pic {
  margin-top: 28%;
}
.btn-add {
  width: 100%;
  line-height: 60px;
  font-weight: 700;
  color: #fff;
  border: unset;
  border-radius: 10px;
  -webkit-box-shadow: 0px 10px 20px rgba(137, 85, 55, 0.4);
  box-shadow: 0px 10px 20px rgba(137, 85, 55, 0.4);
}
.btn-add-pic {
  background: #0b132a;
}
.btn-add-pic:hover {
  background-color: #03050a;
}
.btn-gallery {
  background: #ffba33;
}
.btn-gallery:hover {
  background-color: #eb9d00;
}

.start-hour,
.end-hour,
.input-stock {
  height: 50px;
  border-radius: 10px;
}

.coupon {
  font-weight: 700;
  font-size: 33px;
}

.coupon-card {
  border-radius: 20px;
  margin-left: auto;
  font-family: 'Poppins', sans-serif;
}

@media (max-width: 576px) {
  .main-left {
    padding: 25px;
  }
}
</style>
