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
      <!-- test upload file -->

      <!-- test upload file -->
    </b-container>
    <Footer />
  </div>
</template>

<script>
import Navbar from '../components/_base/Navbar'
import Footer from '../components/_base/Footer'
import MainLeft from '../components/_base/productInsert/MainLeft'
import MainRight from '../components/_base/productInsert/MainRight'
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
        productName: '',
        productPrice: '',
        productDesc: '',
        productStartHour: '',
        productEndHour: '',
        image: '',
        productQty: '',
        categoryId: '',
        sizeRegular: 0,
        sizeLarge: 0,
        sizeExtraLarge: 0,
        size250gr: 0,
        size300gr: 0,
        size500gr: 0,
        deliveryHome: 0,
        deliveryDineIn: 0,
        deliveryTakeAway: 0
      }
    }
  }
}
</script>
