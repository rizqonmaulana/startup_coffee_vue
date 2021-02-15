<template>
  <div>
    <h5
      class="mt-5"
      style="font-weight:700; font-size: 35px; color: #fff; text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.8);"
    >
      Checkout your
      <br />
      item now!
    </h5>
    <div class="order-card poppins mt-5">
      <h5
        style="text-align: center; font-size: 30px; font-weight: bold; color: #362115;"
      >
        Order Summary
      </h5>
      <div
        v-for="(item, index) in orderItem"
        :key="index"
        class="order-item pt-1 mb-3 d-flex flex-row align-items-center"
      >
        <div class="pic" style="width: 25%;">
          <img
            v-if="item.productPic"
            :src="url + '/' + item.productPic"
            style="height: 70px; width: 62px; border-radius: 20px;"
          />
          <img
            v-else
            src="../../../assets/product-3.png"
            style="height: 70px; width: 62px; border-radius: 20px;"
          />
        </div>
        <div class="text mr-3" style="width: 45%;">
          {{ item.productName }}
          <br />
          x{{ item.orderDetailQty }}
          <br />
          {{ item.orderDetailSize }}
        </div>
        <div class="price text-right" style="width: 30%;">
          IDR {{ item.orderDetailPrice }}
        </div>
        <button class="btn-del rounded-circle">x</button>
      </div>
      <hr style="width: 100%" />
      <div class="row" style="color: #362115; line-height: 35px;">
        <div class="col">
          SUBTOTAL
          <br />
          TAX FEES
          <br />
          SHIPPING
          <br />
          <br />
          <strong style="font-size: 20px;">
            TOTAL
          </strong>
        </div>
        <div class="col text-right">
          IDR {{ subTotal }}
          <br />
          IDR 0
          <br />
          IDR 0
          <br />
          <br />
          <strong style="font-size: 20px;"> IDR {{ subTotal }} </strong>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['orderData'],
  data() {
    return {
      orderItem: [],
      url: process.env.VUE_APP_ROOT_URL
    }
  },
  created() {
    this.orderItem = this.orderData
  },
  computed: {
    subTotal() {
      const dataCount = this.orderItem.length
      let result = 0
      for (let i = 0; i < dataCount; i++) {
        result += this.orderItem[i].orderDetailPrice
      }
      this.$emit('subTotal', result)
      return result
    }
  }
}
</script>

<style scoped>
.order-card {
  background-color: #fff;
  border-radius: 20px;
  padding: 60px 30px;
  -webkit-box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.35);
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.35);
}
.btn-del {
  color: #fff;
  font-size: 20px;
  font-weight: 900;
  background-color: red;
  border: unset;
  line-height: 20px;
  padding-bottom: 4px;
  margin-left: 10px;
}
</style>
