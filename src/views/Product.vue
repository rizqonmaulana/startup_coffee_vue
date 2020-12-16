<template>
  <div class="product">
    <Navbar />
    <div class="centered">
      <h1>This is Product Page</h1>
      <b-alert :show="alert">{{ isMsg }}</b-alert>
      <form>
        <input
          type="text"
          v-model="form.productName"
          placeholder="Product Name ..."
        />
        <br />
        <input
          type="text"
          v-model="form.productPrice"
          placeholder="Product Price ..."
        />
        <br />
        <input
          type="text"
          v-model="form.productDesc"
          placeholder="Product Desc ..."
        />
        <br />
        <input
          type="text"
          v-model="form.productStartHour"
          placeholder="Product Start Hour ..."
        />
        <br />
        <input
          type="text"
          v-model="form.productEndHour"
          placeholder="Product End Hour ..."
        />
        <br />
        <input
          type="text"
          v-model="form.productQty"
          placeholder="Product Qty ..."
        />
        <br />
        <input
          type="text"
          v-model="form.categoryId"
          placeholder="Category Id..."
        />
        <br />
        <input
          type="text"
          v-model="form.sizeRegular"
          placeholder="Size Regular"
        />
        <br />
        <input type="text" v-model="form.sizeLarge" placeholder="Size Large" />
        <br />
        <input
          type="text"
          v-model="form.sizeExtraLarge"
          placeholder="Size Extra Large"
        />
        <br />
        <input type="text" v-model="form.size250gr" placeholder="Size 250gr" />
        <br />
        <input type="text" v-model="form.size300gr" placeholder="Size 300gr" />
        <br />
        <input type="text" v-model="form.size500gr" placeholder="Size 500gr" />
        <br />
        <input
          type="text"
          v-model="form.deliveryHome"
          placeholder="Delivery Home"
        />
        <br />
        <input
          type="text"
          v-model="form.deliveryDineIn"
          placeholder="Delivery Dine In"
        />
        <br />
        <input
          type="text"
          v-model="form.deliveryTakeAway"
          placeholder="Delivery Take Away"
        />
        <br />
        <br />
        <button type="button" @click="postProduct()">Save</button>
        <button type="button" @click="patchProduct()">Update</button>
      </form>
      <b-container class="bv-example-row">
        <b-row>
          <b-col
            xl="3"
            lg="4"
            md="6"
            sm="12"
            v-for="(item, index) in products"
            :key="index"
          >
            <b-card
              :title="item.product_name"
              img-src="https://picsum.photos/600/300/?image=25"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 20rem;"
              class="mb-2"
            >
              <b-card-text> Rp {{ item.product_price }} </b-card-text>

              <b-button href="#" variant="primary">Add To Cart</b-button>
              <b-button href="#" variant="success" @click="setProduct(item)"
                >Update</b-button
              >
              <b-button
                href="#"
                variant="danger"
                @click="deleteProduct(item.product_id)"
                >Delete</b-button
              >
            </b-card>
          </b-col>
        </b-row>
        <b-pagination
          v-model="currentPage"
          :total-rows="rows"
          :per-page="limit"
          @change="handlePageChange"
        >
        </b-pagination>
      </b-container>
      
    </div>
    <Footer />
  </div>
 
</template>

<script>
// [1] step pertama
import Navbar from '../components/_base/Navbar'
import Footer from '../components/_base/Footer'
import axios from 'axios'

export default {
  components: {
    Navbar,
    Footer
  },
  computed: {
    rows() {
      return this.totalRows
    }
  },
  data() {
    return {
      products: [],
      form: {
        productName: '',
        productPrice: '',
        productDesc: '',
        productStartHour: '',
        productEndHour: '',
        productQty: '',
        categoryId: '',
        sizeRegular: '',
        sizeLarge: '',
        sizeExtraLarge: '',
        size250gr: '',
        size300gr: '',
        size500gr: '',
        deliveryHome: '',
        deliveryDineIn: '',
        deliveryTakeAway: ''
      },
      alert: false,
      isMsg: '',
      productId: '',
      currentPage: 1,
      totalRows: null,
      limit: 5,
      page: 1,
      activeNav: 'nav-link active'
    }
  },
  created() {
    this.getProduct()
  },
  methods: {
    getProduct() {
      axios
        .get(
          `http://localhost:3000/product?limit=${this.limit}&page=${this.page}`
        )
        .then(response => {
          console.log(response)
          this.totalRows = response.data.pagination.totalData
          this.products = response.data.data
        })
        .catch(error => {
          console.log(error)
        })
    },
    postProduct() {
      console.log(this.form)
      axios
        .post('http://localhost:3000/product', this.form)
        .then(response => {
          console.log(response)
          this.alert = true
          this.isMsg = response.data.msg
          this.getProduct()
        })
        .catch(error => {
          console.log(error.response)
        })
    },
    setProduct(data) {
      console.log(data)
      this.form = {
        productId: data.product_id,
        productName: data.product_name,
        productPrice: data.product_price,
        productDesc: data.product_desc,
        productStartHour: data.product_start_hour,
        productEndHour: data.product_end_hour,
        productQty: data.product_qty,
        categoryId: data.category_id,
        sizeRegular: data.size_regular,
        sizeLarge: data.size_large,
        sizeExtraLarge: data.size_extra_large,
        size250gr: data.size_250gr,
        size300gr: data.size_300gr,
        size500gr: data.size_500gr,
        deliveryHome: data.delivery_home,
        deliveryDineIn: data.delivery_dine_in,
        deliveryTakeAway: data.delivery_take_away
      }
    },
    patchProduct() {
      // console.log(this.product_id)
      console.log(this.form)
    },
    deleteProduct(product_id) {
      axios
        .delete(`http://localhost:3000/product/${product_id}`)
        .then(response => {
          console.log(response)
          this.alert = true
          this.isMsg = response.data.msg
          this.getProduct()
        })
        .catch(error => {
          console.log(error.response)
        })
    },
    handlePageChange(numberPage) {
      console.log(numberPage)
      this.page = numberPage
      this.getProduct()
    }
  }
}
</script>

<style scoped>
.centered {
  text-align: center;
}
</style>
