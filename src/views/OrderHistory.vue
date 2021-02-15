<template>
  <div>
    <Navbar />
    <div class="main pt-5 pb-5">
      <b-container>
        <b-row>
          <div
            class="col text-center mb-5"
            style="color: #fff; text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.8);"
          >
            <h3>Let's see what you have bought!</h3>
            <p>Select item to delete</p>
          </div>
        </b-row>
        <b-modal
          id="orderDetailModal"
          title="Invoice"
          hide-footer="true"
          @hidden="getHistory(user.userId)"
          @ok="getHistory(user.userId)"
        >
          <div class="wrapper">
            <div class="text-top">
              <h5 class="text-center">StartUp Coffee</h5>
              <p v-if="detail.length > 0">
                Invoice : {{ detail[0].order_invoice }}
              </p>
              <p v-if="detail.length > 0">
                Date : {{ formatTime(detail[0].order_created_at) }}
              </p>
              <p v-if="detail.length > 0">
                Payment : {{ detail[0].order_payment_method }}
              </p>
              <p v-if="detail.length > 0">
                {{ detail[0].order_detail_delivery }}
              </p>
            </div>
            <table class="table">
              <thead class="thead-dark">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Item</th>
                  <th scope="col">Qty</th>
                  <th scope="col">Price</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in detail" :key="index">
                  <th scope="row">{{ index + 1 }}</th>
                  <td>{{ item.product_name }}</td>
                  <td>{{ item.order_detail_qty }}</td>
                  <td>{{ item.order_detail_price }}</td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td>
                    Total
                  </td>
                  <td>
                    <strong v-if="detail.length > 0"
                      >IDR {{ detail[0].order_total }}</strong
                    >
                  </td>
                </tr>
                <button
                  v-if="detail.length > 0"
                  class="btn btn-danger"
                  @click="deleteHistory(detail[0].order_invoice)"
                >
                  Delete
                </button>
              </tbody>
            </table>
          </div>
        </b-modal>
        <b-row>
          <b-col
            v-for="(item, index) in history"
            :key="index"
            col
            lg="3"
            md="6"
            sm="12"
            class="history-card"
            v-b-modal.orderDetailModal
            @click="getOrderDetail(item.order_invoice)"
          >
            <HistoryCard :history="item" />
          </b-col>
        </b-row>
      </b-container>
    </div>
    <Footer />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import moment from 'moment'
import Navbar from '../components/_base/Navbar'
import Footer from '../components/_base/Footer'
import HistoryCard from '../components/_base/history/HistoryCard'

export default {
  components: {
    Navbar,
    Footer,
    HistoryCard
  },
  data() {
    return {
      customerId: 1
    }
  },
  computed: {
    ...mapGetters({
      user: 'getUser',
      history: 'getHistory',
      detail: 'getOrderDetail'
    })
  },
  methods: {
    ...mapActions(['getHistory', 'getOrderDetail', 'deleteHistory']),
    delHistory(invoice) {
      this.deleteHistory(invoice)
    },
    formatTime(value) {
      return moment(String(value)).format('MMM Do YY, h:mm:ss a')
    }
  },
  created() {
    this.getHistory(this.user.userId)
  }
}
</script>

<style scoped>
p {
  margin-bottom: unset;
  font-size: 10px;
}

th {
  font-size: 12px;
}

td {
  font-size: 10px;
}

.main {
  background-image: url('../assets/bg-history.png');
  background-size: cover;
}

.history-card {
  margin-right: 80px;
}
</style>
