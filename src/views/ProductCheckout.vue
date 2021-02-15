<template>
  <div>
    <Navbar />
    <div class="product-checkout pb-5">
      <b-container>
        <b-row>
          <b-col col lg="6" sm="12" class="pr-lg-5">
            <OrderSummary :orderData="orderData" @subTotal="subTotal" />
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
import { mapGetters } from 'vuex'
import Navbar from '../components/_base/Navbar'
import Footer from '../components/_base/Footer'
import OrderSummary from '../components/_base/productCheckout/OrderSummary'
import AddressCard from '../components/_base/productCheckout/AddressCard'
import PaymentCard from '../components/_base/productCheckout/PaymentCard'
import axios from 'axios'
import { alertMixin } from '../mixins/alertMixin'

export default {
  mixins: [alertMixin],
  name: 'ProductCheckout',
  components: {
    Navbar,
    Footer,
    OrderSummary,
    AddressCard,
    PaymentCard
  },
  data() {
    return {
      order: {
        orderPaymentMethod: '',
        orderTotal: 0,
        promoCode: ''
      },
      orderData: [],
      submitData: []
    }
  },
  computed: {
    ...mapGetters({ userProfile: 'getUserProfile' })
  },
  created() {
    this.orderData = JSON.parse(localStorage.getItem('cart'))

    // this.subTotal
  },
  methods: {
    getOrder() {
      const order = { ...this.order, customerId: this.userProfile.user_id }
      console.log('VVVV data order cuy')
      console.log(order)
      this.submitData = [order, ...this.orderData]
      console.log('VVVV ini submitData')
      console.log(this.submitData)
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
        .post('http://localhost:3000/order', this.submitData)
        .then(result => {
          this.successLogin(result.data.msg)
        })
        .catch(error => {
          this.errorAlert(error.data.msg)
        })
    }
  }
}
</script>

<style scoped>
.product-checkout {
  background-image: url('../assets/bg-payment.png');
  background-size: cover;
}

.main-right {
  margin-top: 12%;
}

/* @media (max-width: 576px) { 
    .main-right{
        margin-top: 250px !important;
    }
} */
</style>
