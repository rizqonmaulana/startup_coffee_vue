<template>
  <div class="main-right">
    <p class="text-brown">
      Name :
    </p>
    <input
      @input="getProductName"
      v-model="form.productName"
      class="form-control"
      type="text"
      placeholder="Type product name min.50 characters"
    />

    <p class="text-brown">
      Price :
    </p>
    <input
      @input="getProductPrice"
      v-model="form.productPrice"
      class="form-control"
      type="text"
      placeholder="Type the price"
    />
    <p class="text-brown">
      Description :
    </p>
    <input
      @input="getProductDesc"
      v-model="form.productDesc"
      class="form-control"
      type="text"
      placeholder="Describe your product min.150 characters"
    />
    <p class="text-brown">
      Input product size :
    </p>
    <p class="text-grey">
      Click size you want to user for this product
    </p>
    <div class="btn-size-collection poppins text-center">
      <button
        @click="getSizeR()"
        :class="
          sizeRegular === 1
            ? 'btn-size rounded-circle mt-2 active'
            : 'btn-size rounded-circle mt-2'
        "
      >
        R
      </button>
      <button
        @click="getSizeL()"
        :class="
          sizeLarge === 1
            ? 'btn-size rounded-circle mt-2 active'
            : 'btn-size rounded-circle mt-2'
        "
      >
        L
      </button>
      <button
        @click="getSizeXL()"
        :class="
          sizeExtraLarge === 1
            ? 'btn-size rounded-circle mt-2 active'
            : 'btn-size rounded-circle mt-2'
        "
      >
        XL
      </button>
      <button
        @click="getSize250gr()"
        :class="
          size250gr === 1
            ? 'btn-size rounded-circle mt-2 active'
            : 'btn-size rounded-circle mt-2'
        "
      >
        250gr
      </button>
      <button
        @click="getSize300gr()"
        :class="
          size300gr === 1
            ? 'btn-size rounded-circle mt-2 active'
            : 'btn-size rounded-circle mt-2'
        "
      >
        300gr
      </button>
      <button
        @click="getSize500gr()"
        :class="
          size500gr === 1
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
      @click="getHomeDelivery()"
      :class="
        deliveryHome === 1 ? 'btn-delivery mt-3 active' : 'btn-delivery mt-3'
      "
    >
      Home Delivery
    </button>
    <button
      @click="getDineIn()"
      :class="
        deliveryDineIn === 1 ? 'btn-delivery mt-3 active' : 'btn-delivery mt-3'
      "
    >
      Dine in
    </button>
    <button
      @click="getTakeAway()"
      :class="
        deliveryTakeAway === 1
          ? 'btn-delivery mt-3 active'
          : 'btn-delivery mt-3'
      "
    >
      Take away
    </button>

    <br />

    <button @click="postProduct()" class="btn-save btn-save-save mt-5">
      Save Product
    </button>
    <br />
    <button class="btn-save btn-save-cancel mt-4">
      Cancel
    </button>
  </div>
</template>

<script>
export default {
  props: ['form'],
  data() {
    return {
      sizeRegular: this.form.sizeRegular,
      sizeLarge: this.form.sizeLarge,
      sizeExtraLarge: this.form.sizeExtraLarge,
      size250gr: this.form.size250gr,
      size300gr: this.form.size300gr,
      size500gr: this.form.size500gr,
      deliveryHome: this.form.deliveryHome,
      deliveryDineIn: this.form.deliveryDineIn,
      deliveryTakeAway: this.form.deliveryTakeAway
    }
  },
  methods: {
    postProduct() {
      this.$emit('postProduct')
    },
    getProductName(event) {
      const name = event.target.value
      this.$emit('getProductName', name)
    },
    getProductPrice(event) {
      const price = Number(event.target.value)
      this.$emit('getProductPrice', price)
    },
    getProductDesc(event) {
      const desc = event.target.value
      this.$emit('getProductDesc', desc)
    },
    getHomeDelivery() {
      if (this.deliveryHome === 0) {
        this.deliveryHome = 1
      } else {
        this.deliveryHome = 0
      }
      const delivery = this.deliveryHome
      this.$emit('getHomeDelivery', delivery)
    },
    getDineIn() {
      if (this.deliveryDineIn === 0) {
        this.deliveryDineIn = 1
      } else {
        this.deliveryDineIn = 0
      }
      const delivery = this.deliveryDineIn
      this.$emit('getDineIn', delivery)
    },
    getTakeAway() {
      if (this.deliveryTakeAway === 0) {
        this.deliveryTakeAway = 1
      } else {
        this.deliveryTakeAway = 0
      }
      const delivery = this.deliveryTakeAway
      this.$emit('getTakeAway', delivery)
    },
    getSizeR() {
      if (this.sizeRegular === 0) {
        this.sizeRegular = 1
      } else {
        this.sizeRegular = 0
      }
      const size = this.sizeRegular
      this.$emit('getSizeR', size)
    },
    getSizeL() {
      if (this.sizeLarge === 0) {
        this.sizeLarge = 1
      } else {
        this.sizeLarge = 0
      }
      const size = this.sizeLarge
      this.$emit('getSizeL', size)
    },
    getSizeXL() {
      if (this.sizeExtraLarge === 0) {
        this.sizeExtraLarge = 1
      } else {
        this.sizeExtraLarge = 0
      }
      const size = this.sizeExtraLarge
      this.$emit('getSizeXL', size)
    },
    getSize250gr() {
      if (this.size250gr === 0) {
        this.size250gr = 1
      } else {
        this.size250gr = 0
      }
      const size = this.size250gr
      this.$emit('getSize250gr', size)
    },
    getSize300gr() {
      if (this.size300gr === 0) {
        this.size300gr = 1
      } else {
        this.size300gr = 0
      }
      const size = this.size300gr
      this.$emit('getSize300gr', size)
    },
    getSize500gr() {
      if (this.size500gr === 0) {
        this.size500gr = 1
      } else {
        this.size500gr = 0
      }
      const size = this.size500gr
      this.$emit('getSize500gr', size)
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
