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
import Navbar from '../components/_base/Navbar'
import Footer from '../components/_base/Footer'
import MainLeft from '../components/_base/couponInsert/MainLeft'
import MainRight from '../components/_base/couponInsert/MainRight'

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
      }
    }
  }
}
</script>
