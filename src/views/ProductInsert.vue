<template>
  <div>
    <Navbar />
    <b-container>
      <b-row>
        <b-col col lg="5" sm="12">
          <MainLeft
            :form="form"
            @getStartHour="getStartHour"
            @getEndHour="getEndHour"
            @getStock="getStock"
            @getCategory="getCategory"
          />
        </b-col>
        <b-col col lg="7" sm="12">
          <MainRight
            :form="form"
            @getProductName="getProductName"
            @getProductPrice="getProductPrice"
            @getProductDesc="getProductDesc"
            @getSizeR="getSizeR"
            @getSizeL="getSizeL"
            @getSizeXL="getSizeXL"
            @getSize250gr="getSize250gr"
            @getSize300gr="getSize300gr"
            @getSize500gr="getSize500gr"
            @postProduct="postProduct"
            @getHomeDelivery="getHomeDelivery"
            @getDineIn="getDineIn"
            @getTakeAway="getTakeAway"
          />
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
      <!-- test upload file -->
      <input type="file" @change="handleFile" />
      <button @click="showImage">show image</button>
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
        productName: '',
        productPrice: 0,
        productDesc: '',
        productStartHour: '',
        productEndHour: '',
        image: '',
        productQty: 0,
        categoryId: 0,
        sizeRegular: 0,
        sizeLarge: 0,
        sizeExtraLarge: 0,
        size250gr: 0,
        size300gr: 0,
        size500gr: 0,
        deliveryHome: 0,
        deliveryDineIn: 0,
        deliveryTakeAway: 0
      },
      dismissSecs: 5,
      dismissCountDown: 0,
      showDismissibleAlert: false
    }
  },
  methods: {
    showImage() {
      console.log(this.form.image)
    },
    postProduct() {
      console.log(this.form)
      const {
        productName,
        productPrice,
        productDesc,
        productStartHour,
        productEndHour,
        image,
        productQty,
        categoryId,
        sizeRegular,
        sizeLarge,
        sizeExtraLarge,
        size250gr,
        size300gr,
        size500gr,
        deliveryHome,
        deliveryDineIn,
        deliveryTakeAway
      } = this.form
      const data = new FormData()
      data.append('product_name', productName)
      data.append('product_price', productPrice)
      data.append('product_desc', productDesc)
      data.append('product_start_hour', productStartHour)
      data.append('product_end_hour', productEndHour)
      data.append('image', image)
      data.append('product_qty', productQty)
      data.append('category_id', categoryId)
      data.append('size_regular', sizeRegular)
      data.append('size_large', sizeLarge)
      data.append('size_extra_large', sizeExtraLarge)
      data.append('size_250gr', size250gr)
      data.append('size_300gr', size300gr)
      data.append('size_500gr', size500gr)
      data.append('delivery_home', deliveryHome)
      data.append('delivery_dine_in', deliveryDineIn)
      data.append('delivery_take_away', deliveryTakeAway)
      for (var pair of data.entries()) {
        console.log(pair[0] + ', ' + pair[1])
      }

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
    getProductName(name) {
      this.form.productName = name
    },
    getProductPrice(price) {
      this.form.productPrice = price
    },
    getProductDesc(desc) {
      this.form.productDesc = desc
    },
    getStartHour(start) {
      this.form.productStartHour = start
    },
    getEndHour(end) {
      this.form.productEndHour = end
    },
    getStock(stock) {
      this.form.productQty = stock
    },
    getCategory(category) {
      this.form.categoryId = category
    },
    getSizeR(size) {
      this.form.sizeRegular = size
    },
    getSizeL(size) {
      this.form.sizeLarge = size
    },
    getSizeXL(size) {
      this.form.sizeExtraLarge = size
    },
    getSize250gr(size) {
      this.form.size250gr = size
    },
    getSize300gr(size) {
      this.form.size300gr = size
    },
    getSize500gr(size) {
      this.form.size500gr = size
    },
    getHomeDelivery(delivery) {
      this.form.deliveryHome = delivery
    },
    getDineIn(delivery) {
      this.form.deliveryDineIn = delivery
    },
    getTakeAway(delivery) {
      this.form.deliveryTakeAway = delivery
    },
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    showAlert() {
      this.dismissCountDown = this.dismissSecs
    },
    handleFile(event) {
      console.log(event.target.files[0])
      this.form.image = event.target.files[0]
    }
  }
}
</script>
