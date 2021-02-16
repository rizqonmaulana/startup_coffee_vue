<template>
  <div>
    <Navbar />
    <div class="product-checkout pb-5">
      <b-container>
        <b-row>
          <b-col col lg="6" sm="12" class="pr-lg-5 cardstack">
            <CardStack />
            <!-- <OrderSummary :orderData="orderData" @subTotal="subTotal" /> -->
          </b-col>

          <b-col col lg="6" sm="12" class="pl-lg-4 main-right">
            <AddressCard />
            <PaymentCard
              @selectPaymentMethod="selectPaymentMethod"
              @postOrder="postOrder"
              class="mt-5"
            />
          </b-col>
        </b-row>
      </b-container>
    </div>
    <Footer class="mt-5" />
  </div>
</template>

<script>
import Navbar from '../../components/_base/Navbar'
import Footer from '../../components/_base/Footer'
import CardStack from '../../components/_base/orderList/cardStack'
import AddressCard from '../../components/_base/productCheckout/AddressCard'
import PaymentCard from '../../components/_base/productCheckout/PaymentCard'
import axios from 'axios'

export default {
  name: 'ProductCheckout',
  components: {
    Navbar,
    Footer,
    CardStack,
    AddressCard,
    PaymentCard
  },
  data() {
    return {
      order: {
        orderPaymentMethod: '',
        orderTotal: 0,
        customerId: 2,
        promoCode: ''
      },
      orderData: [],
      submitData: [],
      url: process.env.VUE_APP_ROOT_URL
    }
  },
  created() {
    this.orderData = JSON.parse(localStorage.getItem('cart'))

    // this.subTotal
  },
  methods: {
    getOrder() {
      this.submitData = [this.order, ...this.orderData]
    },
    selectPaymentMethod(method) {
      this.order.orderPaymentMethod = method
    },
    subTotal(result) {
      this.order.orderTotal = result
    },
    async postOrder() {
      await this.getOrder()
      await axios
        .post(this.url + '/order', this.submitData)
        .then(response => {
          console.log(response)
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>

<style scoped>
.cardstack {
  margin-top: 130px;
}

.product-checkout {
  background-image: url('../../assets/bg-payment.png');
  background-size: cover;
}

.main-right {
  margin-top: 12%;
}
</style>
