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
            src="../../../assets/icon-invoice.png"
            width="60px"
          />
        </div>
        <div class="desc" style="width: 70%">
          <div class="item-desc">
            <p>Invoice : {{ history.order_invoice }}</p>
            <p>Date : {{ formatTime(history.order_created_at) }}</p>
            <p>Status : {{ history.order_status == 0 ? 'Process' : 'Done' }}</p>
            <p>Payment Method : {{ history.order_payment_method }}</p>
            <p>
              Total : <strong>IDR {{ history.order_total }}</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  props: ['history'],
  data() {
    return {
      show: 1
    }
  },
  methods: {
    formatTime(value) {
      return moment(String(value)).format('MMM Do YY, h:mm:ss a')
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
  font-size: 12px;
}

.btn-del {
  background-color: red;
  border: unset;
  color: #fff;
  line-height: 20px;
  width: 23px;
  font-weight: bold;
  margin: -80px 0px 0px -13px;
}
</style>
