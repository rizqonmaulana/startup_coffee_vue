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
      <b-alert
        :show="dismissCountDown"
        dismissible
        variant="success"
        @dismissed="dismissCountDown = 0"
        @dismiss-count-down="countDownChanged"
        class="mt-4"
      >
        <p>{{ productName }} Product successfully added</p>
        <b-progress
          variant="success"
          :max="dismissSecs"
          :value="dismissCountDown"
          height="4px"
        >
        </b-progress>
      </b-alert>
    </b-container>
    <Footer />
  </div>
</template>

<script>
import Navbar from '../components/_base/Navbar'
import Footer from '../components/_base/Footer'
import MainLeft from '../components/_base/couponInsert/MainLeft'
import MainRight from '../components/_base/couponInsert/MainRight'
import axios from 'axios'

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
    postProduct() {
      console.log(this.form)
      axios
        .post('http://localhost:3000/product', this.form)
        .then(response => {
          console.log(response)
          this.showAlert()
        })
        .catch(error => {
          console.log(error)
        })
    },
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    showAlert() {
      this.dismissCountDown = this.dismissSecs
    }
  }
}
</script>
