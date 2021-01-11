<template>
  <div>
    <Navbar />
    <main class="product-detail">
      <b-container class="product-details">
        <b-row>
          <b-col col lg="6" sm="12">
            <MainLeftTop
              :productName="product.product_name"
              :productPic="product.product_pic"
              :deliveryDineIn="product.delivery_dine_in"
              :deliveryHome="product.delivery_home"
              :deliveryTakeAway="product.delivery_take_away"
              @selectDelivery="selectDelivery"
            />
          </b-col>
          <b-col col lg="6" sm="12">
            <MainRightTop
              class="main-right-top"
              :productId="product.product_id"
              :productName="product.product_name"
              :productDesc="product.product_desc"
              :productPrice="product.product_price"
              :productStart="product.product_start_hour"
              :productEnd="product.product_end_hour"
              :role="role"
              @getOrderQty="getOrderQty"
              @getSubTotal="getSubTotal"
              @addToCart="addToCart"
              @deleteProduct="deleteProduct"
            />
          </b-col>
        </b-row>
      </b-container>
      <b-container>
        <b-row class="mt-3">
          <b-col col lg="4" md="12" sm="12" class="mt-3">
            <MainLeftBottom
              :sizeR="product.size_regular"
              :sizeL="product.size_large"
              :sizeXL="product.size_extra_large"
              :size250gr="product.size_250gr"
              :size300gr="product.size_300gr"
              :size500gr="product.size_500gr"
              @selectSize="selectSize"
            />
          </b-col>
          <b-col col lg="8" md="12" sm="12" class="mt-3">
            <MainRightBottom
              :productPic="product.product_pic"
              :productName="product.product_name"
              :orderQty="orderData.orderDetailQty"
              :orderSize="orderData.orderDetailSize"
            />
          </b-col>
        </b-row>
      </b-container>
    </main>
    <Footer />
  </div>
</template>

<script>
import Navbar from '../components/_base/Navbar'
import Footer from '../components/_base/Footer'
import MainLeftTop from '../components/_base/productDetail/ProductDeliveryAndTime'
import MainRightTop from '../components/_base/productDetail/ProductDesc'
import MainLeftBottom from '../components/_base/productDetail/ProductSize'
import MainRightBottom from '../components/_base/productDetail/ProductCheckoutCard'
import axios from 'axios'

export default {
  components: {
    Navbar,
    Footer,
    MainLeftTop,
    MainRightTop,
    MainLeftBottom,
    MainRightBottom
  },
  data() {
    return {
      productId: '',
      product: [],
      cart: [],
      orderData: {
        productId: '',
        orderDetailDelivery: '',
        orderDetailSize: '',
        orderDetailQty: 1,
        orderDetailPrice: 0
      },
      role: 1
    }
  },
  created() {
    this.productId = this.$route.params.id
    this.orderData.productId = this.$route.params.id
    this.getProductDetail(this.productId)
    let getCart = localStorage.getItem('cart')
    getCart = JSON.parse(getCart)
    if (getCart) {
      this.cart = getCart
    } else {
      this.cart = []
    }
  },
  methods: {
    getProductDetail(id) {
      axios
        .get(`http://localhost:3000/product/detail/${id}`)
        .then(response => {
          const productDetail = response.data.data[0]
          this.product = productDetail
        })
        .catch(error => {
          console.log(error.response)
        })
    },
    selectDelivery(delivery) {
      this.orderData.orderDetailDelivery = orderDetailDelivery
    },
    selectSize(size) {
      this.orderData.orderDetailSize = size
    },
    getOrderQty(qty) {
      this.orderData.orderDetailQty = qty
    },
    getSubTotal(subTotal) {
      this.orderData.orderDetailPrice = subTotal
    },
    addToCart() {
      const data = this.orderData
      const setCart = {
        productId: data.productId,
        productName: this.product.product_name,
        productPic: this.product.product_pic,
        orderDetailDelivery: data.orderDetailDelivery,
        orderDetailSize: data.orderDetailSize,
        orderDetailQty: data.orderDetailQty,
        orderDetailPrice: data.orderDetailPrice
      }
      this.cart = [...this.cart, setCart]
      localStorage.setItem('cart', JSON.stringify(this.cart))
    }
  }
}
</script>

<style scoped>
.main-right-top {
  margin-top: 85px;
}
</style>
