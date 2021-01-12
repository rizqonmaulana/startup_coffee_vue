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
import MainLeft from '../components/_base/productInsert/MainLeft'
import MainRight from '../components/_base/productInsert/MainRight'
import router from '../router'
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
        image: '',
        productDesc: '',
        productStartHour: '',
        productEndHour: '',
        productQty: '',
        categoryId: '',
        sizeId: '',
        deliveryId: '',
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
  },
  created() {
    const id = this.$route.params.id
    this.getProductById(id)
      .then(result => {
        this.form.productName = result.data.data[0].product_name
        this.form.productPrice = result.data.data[0].product_price
        this.form.productDesc = result.data.data[0].product_desc
        this.form.productStartHour = result.data.data[0].product_start_hour
        this.form.productEndHour = result.data.data[0].product_end_hour
        this.form.productQty = result.data.data[0].product_qty
        this.form.categoryId = result.data.data[0].category_id
        this.form.sizeId = result.data.data[0].size_id
        this.form.deliveryId = result.data.data[0].delivery_id
        this.form.sizeRegular = result.data.data[0].size_regular
        this.form.sizeLarge = result.data.data[0].size_large
        this.form.sizeExtraLarge = result.data.data[0].size_extra_large
        this.form.size250gr = result.data.data[0].size_250gr
        this.form.size300gr = result.data.data[0].size_300gr
        this.form.size500gr = result.data.data[0].size_500gr
        this.form.deliveryHome = result.data.data[0].delivery_home
        this.form.deliveryDineIn = result.data.data[0].delivery_dine_in
        this.form.deliveryTakeAway = result.data.data[0].delivery_take_away
      })
      .catch(error => {
        alert(error.data.msg)
        router.push('/product')
      })
  },
  methods: {
    ...mapActions(['getProductById'])
  }
}
</script>
