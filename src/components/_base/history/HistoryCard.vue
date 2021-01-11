<template>
  <div>
    <div class="card">
      <div class="d-flex flex-row align-items-center">
        <button
          @click="deleteOrderHistory(orderDetailId)"
          class="btn-del rounded-circle"
        >
          X
        </button>
        <div class="pic" style="width: 30%">
          <img
            class="rounded-circle"
            src="../../../assets/product-1.png"
            width="60px"
          />
        </div>
        <div class="desc" style="width: 70%">
          <div class="item-desc">
            <h5>{{ productName }} (x{{ productOrderQty }})</h5>
            <div class="d-flex flex-row justify-content-between">
              <div>
                <p>IDR {{ productPrice }}</p>
                <p>Delivered</p>
              </div>
              <div>
                <input type="checkbox" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  props: [
    'productName',
    'productOrderQty',
    'productPic',
    'productPrice',
    'productInvoice',
    'orderDetailId'
  ],
  methods: {
    deleteOrderHistory(orderDetailId) {
      axios
        .delete(`http://localhost:3000/order/history/${orderDetailId}`)
        .then(response => {
          console.log(response)
          this.$emit('deleteOrderHistory')
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>

<style scoped>
.card {
  padding: 10px 20px 0px;
  border: unset !important;
  border-radius: 20px;
  width: 350px;
  -webkit-box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
  margin: 0 13px 20px 12px;
}

.card .pic {
  padding-bottom: 10px;
}

.card .desc h5 {
  font-weight: 700;
  font-size: 18px;
}

.card .desc p {
  margin-top: 5px;
  color: #895537;
  line-height: 4px;
  font-size: 14px;
}

.btn-del {
  background-color: red;
  border: unset;
  color: #fff;
  line-height: 20px;
  width: 23px;
  font-weight: bold;
  margin: -60px 0px 0px -13px;
}
</style>
