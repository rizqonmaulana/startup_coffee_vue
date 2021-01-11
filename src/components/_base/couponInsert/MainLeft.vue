<template>
  <div class="main-left">
    <p>
      <span style="color: #4F5665;">Favorite & Promo </span>
      <span style="color: #6a4029;"><strong> > Add new product </strong></span>
    </p>
    <div class="add-pic">
      <div class="rounded-circle text-center cam-icon-container">
        <img
          class="cam-icon-pic"
          src="../../../assets/cam-icon.png"
          style="width:80px"
        />
      </div>
    </div>
    <button class="btn-add btn-add-pic mt-5">
      Take a picture
    </button>
    <button class="btn-add btn-gallery mt-5">
      Choose from gallery
    </button>
    <div class="mt-5 pt-4">
      <span style="color: #6a4029;"
        ><strong> Enter the discount : </strong></span
      >
      <div class="form-group mt-3 mb-5">
        <select
          name="start-hour"
          v-model="form.couponDiscount"
          class="form-control start-hour mt-3"
        >
          <option value="" disabled selected>Input Discount</option>
          <option value="10">10%</option>
          <option value="20">20%</option>
          <option value="30">30%</option>
          <option value="40">40%</option>
          <option value="50">50%</option>
          <option value="60">60%</option>
          <option value="70">70%</option>
          <option value="80">80%</option>
          <option value="90">90%</option>
          <option value="100">100%</option>
        </select>
      </div>
      <span style="color: #6a4029;"><strong> Expire Date : </strong></span>
      <div class="form-group mt-3">
        <input
          v-model="startDate"
          @change="startDateFormat"
          type="date"
          name="start-hour"
          class="form-control start-hour mt-3"
          placeholder="Select start date"
        />
      </div>
      <div class="form-group mt-4 mb-5">
        <input
          v-model="endDate"
          @change="endDateFormat"
          type="date"
          name="end-hour"
          class="form-control end-hour"
          placeholder="Select end date"
        />
      </div>

      <span class="mt-5" style="color: #6a4029;"
        ><strong> Input Coupon Code : </strong></span
      >
      <div class="form-group mt-3 mb-4">
        <input
          v-model="form.couponCode"
          type="text"
          class="form-control input-stock"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['form'],
  computed: {
    startDate() {
      return this.form.couponStartDate.substring(0, 10)
    },
    endDate() {
      return this.form.couponEndDate.substring(0, 10)
    }
  },
  methods: {
    startDateFormat(event) {
      this.form.couponStartDate = event.target.value
    },
    endDateFormat(event) {
      this.form.couponEndDate = event.target.value
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

@media (max-width: 576px) {
  .main-left {
    padding: 25px;
  }
}
</style>
