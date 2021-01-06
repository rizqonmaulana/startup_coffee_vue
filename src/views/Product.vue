<template>
  <div class="product">
    <Navbar />
    <main>
      <b-alert :show="alert">{{ isMsg }}</b-alert>
      <b-container class="product-cust">
        <b-row>
          <b-col col lg="3" sm="12" class="main-left">
            <h4
              class="mt-4"
              style="color: #6A4029; font-weight: 700; text-align: center;"
            >
              Promo for you
            </h4>
            <p
              class="mt-4"
              style="font-weight: 400; font-size: 12px; text-align: center; font-family: Poppins, sans-serif; color: #000000;"
            >
              Coupons will be updated every weeks. <br />
              Check them out!
            </p>
            <CouponCard />
            <router-link to="/product/add">
              <button v-if="role === 1" class="btn-add btn-promo">
                Add new promo
              </button>
            </router-link>
          </b-col>
          <b-col col lg="9" sm="12" class="main-right">
            <!-- <NavMenu
              @setToPageOne="setToPageOne"
              @selectCategory="getProductByCategory"
              class="mt-3"
            /> -->
            <NavMenu class="mt-3" @setToPageOne="setToPageOne" />
            <div class="product-list ml-lg-4 mt-5 pt-4">
              <input v-on:keyup.enter="searchProduct" v-model="searchKeyword" />
              <select @click="sortProduct" v-model="sortId">
                <option value="1">A - Z </option>
                <option value="2">Z - A </option>
                <option value="3">Dari Termurah </option>
                <option value="4">Dari Termahal </option>
              </select>
              <b-row>
                <ProductCard
                  v-for="(item, index) in products"
                  :key="index"
                  :productId="item.product_id"
                  :productName="item.product_name"
                  :productPrice="item.product_price"
                  class="product-card"
                />
              </b-row>
            </div>
            <b-pagination
              v-model="currentPage"
              :total-rows="rows"
              :per-page="limit"
              @change="handlePageChange"
              class="float-right"
            >
            </b-pagination>
            <router-link to="/product/add">
              <button v-if="role === 1" class="btn-add">Add new product</button>
            </router-link>
          </b-col>
        </b-row>
      </b-container>
    </main>
    <Footer />
  </div>
</template>

<script>
// [1] step pertama
import { mapActions, mapGetters, mapMutations } from 'vuex'
import Navbar from '../components/_base/Navbar'
import Footer from '../components/_base/Footer'
import CouponCard from '../components/_base/product/CouponCard'
import ProductCard from '../components/_base/product/ProductCard'
import NavMenu from '../components/_base/product/NavMenu'
import axios from 'axios'

export default {
  components: {
    Navbar,
    Footer,
    CouponCard,
    ProductCard,
    NavMenu
  },
  computed: {
    ...mapGetters({
      products: 'getDataProduct',
      page: 'getPageProduct',
      limit: 'getLimitProduct',
      rows: 'getTotalRowsProduct',
      categoryName: 'getCategoryName'
    })
    // rows() {
    //   return this.totalRows
    // }
  },
  data() {
    return {
      // products: [],
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
      // totalRows: null,
      // limit: 12,
      // page: 1,
      // categoryName: '',
      role: 1,
      searchKeyword: '',
      sortId: 0,
      sortBy: '',
      sortType: ''
    }
  },
  // created() {
  //   this.getProductsByCategory('favorite')
  // },
  methods: {
    ...mapActions(['getProductsByCategory']),
    ...mapMutations(['changePage']),

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
    searchProduct() {
      axios
        .get(
          `http://localhost:3000/product?search=${this.searchKeyword}&limit=${this.limit}&page=${this.page}`
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
    sortProduct() {
      console.log(this.sortId)
      if (this.sortId == 1) {
        this.sortBy = 'product_name'
        this.sortType = 'ASC'
      } else if (this.sortId == 2) {
        this.sortBy = 'product_name'
        this.sortType = 'DESC'
      } else if (this.sortId == 3) {
        this.sortBy = 'product_price'
        this.sortType = 'ASC'
      } else if (this.sortId == 4) {
        this.sortBy = 'product_price'
        this.sortType = 'DESC'
      }
      console.log(this.sortBy)
      console.log(this.sortType)
      axios
        .get(
          `http://localhost:3000/product?sortBy=${this.sortBy}&sortType=${this.sortType}&limit=${this.limit}&page=${this.page}`
        )
        .then(response => {
          // console.log(response)
          this.totalRows = response.data.pagination.totalData
          this.products = response.data.data
          // console.log(this.products)
        })
        .catch(error => {
          console.log(error)
        })
    },
    setToPageOne() {
      this.page = 1
      this.currentPage = 1
      this.handlePageChange(1)
    },
    // getProductByCategory(categoryName) {
    //   console.log(categoryName)
    // axios
    //   .get(
    //     `http://localhost:3000/category/${categoryName}?limit=${this.limit}&page=${this.page}`
    //   )
    //   .then(response => {
    //     this.categoryName = categoryName
    //     this.totalRows = response.data.pagination.totalData
    //     this.products = response.data.data
    //   })
    //   .catch(error => {
    //     console.log(error)
    //   })
    // },
    // updateCategoryName(categoryName){
    //   this.categoryName = categoryName
    // },
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
      // this.page = numberPage
      this.changePage(numberPage)
      this.getProductsByCategory(this.categoryName)
      // this.getProductByCategory(this.categoryName)
    }
  }
}
</script>

<style scoped>
.main-left {
  border-top: 1px solid lightgrey;
  border-right: 1px solid lightgrey;
}

.main-right {
  border-top: 1px solid lightgrey;
}

.product-card {
  margin: 10px 23px 50px;
}

.btn-add {
  background-color: #6a4029;
  width: 100%;
  border-radius: 10px;
  border: unset;
  line-height: 50px;
  color: #fff;
  font-weight: bold;
}

.btn-promo {
  margin-top: 355px;
  background-color: #ffba33;
  color: #6a4029;
}

@media (max-width: 576px) {
  .main-left {
    border-top: unset;
    border-right: unset;
  }

  .main-right {
    border-top: unset;
  }

  .btn-promo {
    margin-top: 0px;
  }
}
</style>
