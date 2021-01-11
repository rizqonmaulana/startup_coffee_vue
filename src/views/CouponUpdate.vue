<template>
  <div>
    <Navbar />
    <b-container>
      <b-row>
        <b-col col lg="5" sm="12">
          <MainLeft :form="form" />
        </b-col>
        <b-col col lg="7" sm="12">
          <MainRight :form="form" />
        </b-col>
      </b-row>
    </b-container>
    <Footer />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Navbar from '../components/_base/Navbar'
import Footer from '../components/_base/Footer'
import MainLeft from '../components/_base/couponInsert/MainLeft'
import MainRight from '../components/_base/couponInsert/MainRight'
// import axios from 'axios'

export default {
  components: {
    Navbar,
    Footer,
    MainLeft,
    MainRight
  },
  data() {
    return {
      form: {
        productId: '',
        couponCode: '',
        couponDiscount: '',
        couponDesc: '',
        couponStartDate: '',
        couponEndDate: ''
      },
      dismissSecs: 5,
      dismissCountDown: 0,
      showDismissibleAlert: false
    }
  },
  methods: {
    ...mapActions(['getActiveCouponById'])
  },
  created() {
    this.getActiveCouponById(this.$route.params.id)
      .then(result => {
        this.form.productId = result.data.data[0].product_id
        this.form.couponCode = result.data.data[0].coupon_code
        this.form.couponDiscount = result.data.data[0].coupon_discount
        this.form.couponDesc = result.data.data[0].coupon_desc
        this.form.couponStartDate = result.data.data[0].coupon_start_date
        this.form.couponEndDate = result.data.data[0].coupon_end_date
      })
      .catch(error => {
        console.log(error.data.msg)
      })
  }
}
</script>
