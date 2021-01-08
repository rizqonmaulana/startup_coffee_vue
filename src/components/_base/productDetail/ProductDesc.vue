<template>
  <div>
    <div class="product-name pl-5 ml-lg-4 poppins">
      <h1 class="text-uppercase">{{ productName }}</h1>
    </div>
    <div class="product-desc mt-5 poppins">
      <p>
        {{ productDesc }}
      </p>
    </div>
    <div class="delivery-time poppins mt-5">
      <p>
        Delivery only on
        <span>
          <strong>
            Monday to friday
          </strong>
          at
          <strong>{{ productStart }} - {{ productEnd }}</strong>
        </span>
      </p>
    </div>

    <div class="count-n-price mt-4 mb-4">
      <b-row>
        <b-col col lg="6" sm="12">
          <div class="product-amount d-flex flex-row">
            <div class="p-2">
              <button class="btn-min" @click="counterDown()">
                -
              </button>
            </div>
            <div class="p-2">
              <input
                type="number"
                id="subTotal"
                class="product-total-amount px-2"
                v-model="productQty"
              />
            </div>
            <div class="p-2">
              <button class="btn-plus" @click="counterUp()">
                +
              </button>
            </div>
          </div>
        </b-col>
        <b-col col lg="6" sm="12" class="text-right poppins">
          <p class="pr-3 mt-2 product-price">
            <strong>Rp {{ subTotal }}</strong>
          </p>
        </b-col>
      </b-row>
    </div>
    <b-alert
      :show="dismissCountDown"
      dismissible
      variant="success"
      @dismissed="dismissCountDown = 0"
      @dismiss-count-down="countDownChanged"
    >
      <p>{{ productName }} added to cart</p>
      <b-progress
        variant="success"
        :max="dismissSecs"
        :value="dismissCountDown"
        height="4px"
      ></b-progress>
    </b-alert>
    <div class="btn-add-n-ask poppins">
      <button
        @click="
          addToCart()
          showAlert()
        "
        class="btn-add mt-3"
      >
        Add to Cart
      </button>
      <br />
      <button v-if="role === 0" class="btn-ask mt-3">
        Ask a Staff
      </button>
      <br />
      <router-link :to="{ name: 'ProductUpdate', params: { id: productId } }">
        <button v-if="role === 1" class="btn-ask">
          Edit Product
        </button>
      </router-link>
      <br />
      <button
        v-if="role === 1"
        @click="deleteProduct(productId)"
        class="btn-add mt-3"
        style="background-color: #000;"
      >
        Delete Product
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'productId',
    'productName',
    'productDesc',
    'productPrice',
    'productStart',
    'productEnd',
    'role'
  ],
  data() {
    return {
      productQty: 0,
      dismissSecs: 3,
      dismissCountDown: 0,
      showDismissibleAlert: false
    }
  },
  created() {
    this.counterUp()
    this.subTotal
  },
  methods: {
    deleteProduct(id) {
      this.$emit('deleteProduct', id)
    },
    counterUp() {
      this.productQty += 1
      this.getSubTotal(this.subTotal)
      this.getOrderQty(this.productQty)
    },
    counterDown() {
      this.productQty -= 1
      this.getSubTotal(this.subTotal)
      this.getOrderQty(this.productQty)
    },
    getOrderQty(qty) {
      this.$emit('getOrderQty', qty)
    },
    getSubTotal(subTotal) {
      this.$emit('getSubTotal', subTotal)
    },
    addToCart() {
      this.$emit('addToCart')
    },
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    showAlert() {
      this.dismissCountDown = this.dismissSecs
    }
  },
  computed: {
    subTotal() {
      return this.productQty * this.productPrice
    }
  }
}
</script>

<style scoped>
.product-name h1 {
  font-weight: 900;
  font-size: 45px;
}

.product-desc {
  font-size: 20px;
  line-height: 30px;
  color: #6a4029;
}

.delivery-time {
  font-weight: 500;
  font-size: 20px;
  color: #6a4029;
  width: 300px;
}

.count-n-price .product-amount {
  color: #6a4029;
  font-size: 20px;
  font-weight: 700;
  position: static;
}

.count-n-price .product-amount .btn-min,
.count-n-price .product-amount .btn-plus {
  font-weight: 700;
  color: #6a4029;
  padding: 10px 17px;
  background: #fff;
  border: 1px solid #9f9f9f;
}

.count-n-price .product-amount .btn-min {
  position: absolute;
  border-right: unset;
  border-radius: 10px 0 0 10px;
}

.count-n-price .product-amount .product-total-amount {
  position: absolute;
  margin-left: 25px;
  width: 30px;
  padding: unset !important;
  width: 70px;
  height: 52px;
  text-align: center;
  border: 1px solid #9f9f9f;
}

.count-n-price .product-amount .btn-plus {
  position: absolute;
  margin-left: 79px;
  border-left: unset;
  border-radius: 0 10px 10px 0;
}

.count-n-price .product-amount .btn-min:hover,
.count-n-price .product-amount .btn-plus:hover {
  background-color: #ffba33;
}

.count-n-price .product-amount .text-right strong {
  margin-right: 55px;
}

.btn-add-n-ask .btn-add,
.btn-add-n-ask .btn-ask {
  width: 97%;
  height: 65px;
  border-radius: 20px;
  font-size: 20px;
  font-weight: 700;
  border: unset;
}

.btn-add-n-ask .btn-add {
  color: #fff;
  background-color: #6a4029;
}

.btn-add-n-ask .btn-ask {
  color: #6a4029;
  background-color: #ffba33;
}

.btn-add-n-ask .btn-add:hover {
  color: #fff;
  background-color: #824e32;
  -webkit-box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.34);
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.34);
}

.btn-add-n-ask .btn-ask:hover {
  color: #6a4029;
  background-color: #fdc451;
  -webkit-box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.34);
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.34);
}

.product-price {
  font-size: 30px;
}

@media (max-width: 576px) {
  .btn-add-n-ask .btn-add,
  .btn-add-n-ask .btn-ask {
    width: 350px !important;
    height: 65px;
    border-radius: 20px;
    font-size: 20px;
    font-weight: 700;
    border: unset;
  }

  .product-price {
    font-size: 23px;
  }
}

@media (max-width: 375px) {
  .product-name h1 {
    font-size: 40px !important;
  }

  .btn-add-n-ask .btn-add,
  .btn-add-n-ask .btn-ask {
    width: 320px !important;
    height: 65px;
    border-radius: 20px;
    font-size: 20px;
    font-weight: 700;
    border: unset;
  }
}
</style>
