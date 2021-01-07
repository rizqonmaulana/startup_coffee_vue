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
      <span style="color: #6a4029;"><strong> Delivery Hour : </strong></span>
      <div class="form-group mt-3">
        <select
          v-model="form.productStartHour"
          name="start-hour"
          class="form-control start-hour mt-3"
        >
          <option value="" disabled selected>Select start hour</option>
          <option value="10:00:00">10:00</option>
          <option value="11:00:00">11:00</option>
          <option value="12:00:00">12:00</option>
          <option value="13:00:00">13:00</option>
          <option value="14:00:00">14:00</option>
          <option value="15:00:00">15:00</option>
          <option value="16:00:00">16:00</option>
          <option value="17:00:00">17:00</option>
          <option value="18:00:00">18:00</option>
          <option value="19:00:00">19:00</option>
          <option value="20:00:00">20:00</option>
          <option value="21:00:00">21:00</option>
          <option value="22:00:00">22:00</option>
        </select>
      </div>
      <div class="form-group mt-4 mb-4">
        <select
          v-model="form.productEndHour"
          name="end-hour"
          class="form-control end-hour"
        >
          <option value="" disabled selected>Select end hour</option>
          <option value="10:00:00">10:00</option>
          <option value="11:00:00">11:00</option>
          <option value="12:00:00">12:00</option>
          <option value="13:00:00">13:00</option>
          <option value="14:00:00">14:00</option>
          <option value="15:00:00">15:00</option>
          <option value="16:00:00">16:00</option>
          <option value="17:00:00">17:00</option>
          <option value="18:00:00">18:00</option>
          <option value="19:00:00">19:00</option>
          <option value="20:00:00">20:00</option>
          <option value="21:00:00">21:00</option>
          <option value="22:00:00">22:00</option>
        </select>
      </div>

      <span class="mt-3" style="color: #6a4029;"
        ><strong> Input Stock : </strong></span
      >
      <div class="form-group mt-3 mb-4">
        <select
          v-model="form.productQty"
          name="stock"
          class="form-control input-stock"
        >
          <option value="" disabled selected>Input stock</option>
          <option value="50">50</option>
          <option value="100">100</option>
          <option value="150">150</option>
          <option value="200">200</option>
        </select>
      </div>

      <span class="mt-5" style="color: #6a4029;"
        ><strong> Select Category : </strong></span
      >
      <div class="form-group mt-3">
        <select
          v-model="form.categoryId"
          name="stock"
          class="form-control input-stock"
        >
          <option value="" disabled selected>Input stock</option>
          <option value="1">Coffee</option>
          <option value="2">Non Coffee</option>
          <option value="3">Foods</option>
          <option value="4">Add on</option>
          <option value="5">Favorite</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['form']
  // data() {
  //     return {
  //         startHour : this.form.productStartHour,
  //         endHour : this.form.productEndHour,
  //         stock : this.form.productQty
  //     }
  // },
  // methods: {
  //     getStartHour(start){
  //         this.$emit('getStartHour', start)
  //     },
  //     getEndHour(end){
  //         this.$emit('getEndHour', end)
  //     },
  //     getStock(qty){
  //         const stock = Number(qty)
  //         this.$emit('getStock', stock)
  //     },
  //     getCategory(event) {
  //         const category = Number(event.target.value)
  //         this.$emit('getCategory', category)
  //     }
  // }
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
