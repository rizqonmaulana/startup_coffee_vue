<template>
  <div class="main-right">
    <p class="text-brown">
      Name :
    </p>
    <select
      v-model="form.productId"
      @click="handlePrice()"
      class="form-control"
    >
      <option
        v-for="(item, index) in productData"
        :key="index"
        :value="item.product_id"
        >{{ item.product_name }}</option
      >
    </select>
    <p class="text-brown">
      Normal Price :
    </p>
    <input
      class="form-control"
      v-model="productPrice"
      type="text"
      placeholder="Type the price"
    />
    <p class="text-brown">
      Description :
    </p>
    <input
      v-model="form.couponDesc"
      class="form-control"
      type="text"
      placeholder="Describe your product min.150 characters"
    />
    <p class="text-brown">
      Product size :
    </p>
    <p class="text-grey">
      Click size you want to user for this product
    </p>
    <div class="btn-size-collection poppins text-center">
      <button
        :class="
          activeButton.sizeRegular === 1
            ? 'btn-size rounded-circle mt-2 active'
            : 'btn-size rounded-circle mt-2'
        "
      >
        R
      </button>
      <button
        :class="
          activeButton.sizeLarge === 1
            ? 'btn-size rounded-circle mt-2 active'
            : 'btn-size rounded-circle mt-2'
        "
      >
        L
      </button>
      <button
        :class="
          activeButton.sizeExtraLarge === 1
            ? 'btn-size rounded-circle mt-2 active'
            : 'btn-size rounded-circle mt-2'
        "
      >
        XL
      </button>
      <button
        :class="
          activeButton.size250gr === 1
            ? 'btn-size rounded-circle mt-2 active'
            : 'btn-size rounded-circle mt-2'
        "
      >
        250gr
      </button>
      <button
        :class="
          activeButton.size300gr === 1
            ? 'btn-size rounded-circle mt-2 active'
            : 'btn-size rounded-circle mt-2'
        "
      >
        300gr
      </button>
      <button
        :class="
          activeButton.size500gr === 1
            ? 'btn-size rounded-circle mt-2 active'
            : 'btn-size rounded-circle mt-2'
        "
      >
        500gr
      </button>
    </div>

    <p class="text-brown">
      Input delivery methods :
    </p>
    <p class="text-grey">
      Click methods you want to use for this product
    </p>
    <button
      :class="
        activeButton.deliveryHome === 1
          ? 'btn-delivery mt-3 active'
          : 'btn-delivery mt-3'
      "
    >
      Home Delivery
    </button>
    <button
      :class="
        activeButton.deliveryDineIn === 1
          ? 'btn-delivery mt-3 active'
          : 'btn-delivery mt-3'
      "
    >
      Dine in
    </button>
    <button
      :class="
        activeButton.deliveryTakeAway === 1
          ? 'btn-delivery mt-3 active'
          : 'btn-delivery mt-3'
      "
    >
      Take away
    </button>

    <br />

    <button
      @click="id === 0 ? addCoupon() : updateCoupon()"
      class="btn-save btn-save-save mt-5"
    >
      Save Promo
    </button>
    {{ productData[0] }}
    <br />
    {{ productPrice }}
    <button class="btn-save btn-save-cancel mt-4">
      Cancel
    </button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { alertMixin } from '../../../mixins/alertMixin'
export default {
  mixins: [alertMixin],
  props: ['form'],
  data() {
    return {
      id: 0,
      activeButton: {
        deliveryHome: 1,
        deliveryDineIn: 1,
        deliveryTakeAway: 1,
        sizeRegular: 1,
        sizeLarge: 1,
        sizeExtraLarge: 1,
        size250gr: 1,
        size300gr: 1,
        size500gr: 1
      }
    }
  },
  computed: {
    ...mapGetters({
      productData: 'getDataProduct',
      productPrice: 'getProductPrice'
    })
  },
  created() {
    if (this.$route.params.id) {
      this.id = this.$route.params.id
    }
    this.getAllProduct()
    setTimeout(() => {
      this.handlePrice()
    }, 1000)
  },
  methods: {
    ...mapActions([
      'getAllProduct',
      'getProductPrice',
      'getActiveCoupon',
      'postCoupon',
      'patchCoupon'
    ]),
    handlePrice() {
      this.getProductPrice(this.form.productId)
    },
    addCoupon() {
      this.postCoupon(this.form)
        .then(result => {
          this.successLogin(result.data.msg)
        })
        .catch(error => {
          this.errorAlert(error.data.msg)
        })
      this.getActiveCoupon()
    },
    updateCoupon() {
      const setData = {
        id: this.id,
        data: {
          productId: this.form.productId,
          couponCode: this.form.couponCode,
          couponDiscount: this.form.couponDiscount,
          couponDesc: this.form.couponDesc,
          couponStartDate: this.form.couponStartDate.substring(0, 10),
          couponEndDate: this.form.couponEndDate.substring(0, 10)
        }
      }
      this.patchCoupon(setData)
        .then(result => {
          this.successLogin(result.data.msg)
        })
        .catch(error => {
          this.errorAlert(error.data.msg)
        })
      this.getActiveCoupon()
    }
  }
}
</script>

<style scoped>
.main-right {
  padding: 30px 25px 0px 70px;
}
.text-brown {
  color: #6a4029;
  margin: 40px 0px 20px;
  font-weight: bold;
}
.text-grey {
  color: #9f9f9f;
  font-size: 12px;
}
.form-control {
  border-top: unset;
  border-right: unset;
  border-left: unset;
}
.btn-size-collection .btn-size {
  font-weight: 700;
  font-size: 20px;
  width: 60px;
  height: 60px;
  border: unset;
  margin-right: 25px;
  background-color: #dfdfdf;
  outline: none;
}
.btn-size-collection .btn-size.active {
  background-color: #ffba33;
  -webkit-box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.34);
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.34);
}
.btn-size-collection .btn-size:hover {
  -webkit-box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.34);
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.34);
}
.btn-delivery {
  background-color: #dfdfdf;
  margin-right: 5%;
  color: #000;
  width: 25%;
  line-height: 50px;
  font-weight: 700;
  border: unset;
  border-radius: 10px;
  outline: none;
  -webkit-box-shadow: 0px 5px 10px rgba(137, 85, 55, 0.4);
  box-shadow: 0px 5px 10px rgba(137, 85, 55, 0.4);
}
.btn-delivery:hover {
  -webkit-box-shadow: 0px 10px 20px rgba(137, 85, 55, 0.4);
  box-shadow: 0px 10px 20px rgba(137, 85, 55, 0.4);
}
.btn-delivery.active {
  background-color: #ffba33;
  color: #6a4029;
  -webkit-box-shadow: 0px 10px 20px rgba(137, 85, 55, 0.4);
  box-shadow: 0px 10px 20px rgba(137, 85, 55, 0.4);
}
.btn-save {
  margin-top: 50px;
  width: 100%;
  line-height: 60px;
  font-size: 20px;
  font-weight: bold;
  border-radius: 10px;
  border: unset;
}
.btn-save-save {
  background: #6a4029;
  color: #fff;
}
.btn-save-cancel {
  background: rgba(186, 186, 186, 0.35);
  color: #4f5665;
}
@media (max-width: 576px) {
  .main-right {
    padding: 0 25px 0;
  }
}
</style>
