<template>
  <div class="product">
    <Navbar />
    <main>
      <b-container class="product-cust">
        <b-row>
          <b-col col lg="3" sm="12" class="main-left">
            <div class="promo-head">
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
            </div>
            <CardStack style="margin-left: -50px;" />
            <div class="coupon-term-condition mt-5">
              <p style="font-size: 12px; color: #4F5665;">
                Terms and Condition <br />
                1. You can only apply 1 coupon per day <br />
                2. It only for dine in <br />
                3. Buy 1 get 1 only for new user <br />
                4. Should make member card to apply coupon
              </p>
            </div>
            <router-link to="/coupon">
              <button v-if="user.userRole === 1" class="btn-add btn-promo">
                Add new promo
              </button>
            </router-link>
          </b-col>
          <b-col col lg="9" sm="12" class="main-right">
            <NavMenu class="mt-3" @setToPageOne="setToPageOne" />
            <div class="product-list ml-lg-4 mt-5 pt-4">
              <b-row>
                <ProductCard
                  v-for="(item, index) in products"
                  :productPic="item.product_pic"
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
              <button v-if="user.userRole === 1" class="btn-add">
                Add new product
              </button>
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
import CardStack from '../components/_base/product/CardStack'

export default {
  components: {
    Navbar,
    Footer,
    CouponCard,
    ProductCard,
    CardStack,
    NavMenu
  },
  computed: {
    ...mapGetters({
      products: 'getDataProduct',
      page: 'getPageProduct',
      limit: 'getLimitProduct',
      rows: 'getTotalRowsProduct',
      categoryName: 'getCategoryName',
      user: 'getUser'
    })
  },
  data() {
    return {
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
      role: 1,
      sortBy: '',
      sortType: ''
    }
  },
  methods: {
    ...mapActions(['getProductsByCategory']),
    ...mapMutations(['changePage']),
    setToPageOne() {
      this.page = 1
      this.currentPage = 1
      this.handlePageChange(1)
    },
    handlePageChange(numberPage) {
      this.page = numberPage
      this.changePage(numberPage)
      this.getProductsByCategory(this.categoryName)
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
  margin-top: 330px;
  background-color: #ffba33;
  color: #6a4029;
}

.coupon-term-condition {
  margin-left: -45px;
}

.promo-head {
  margin-left: -30px;
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
