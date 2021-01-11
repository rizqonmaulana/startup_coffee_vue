<template>
  <div class="main-right">
    <div v-if="errors.length > 0" class="error-warn">
      <p>Error : {{ errors }}</p>
    </div>

    <p class="text-brown">
      Name :
    </p>
    <input
      v-focus
      v-model="form.productName"
      class="form-control"
      type="text"
      placeholder="Type product name min.50 characters"
    />

    <p class="text-brown">
      Price :
    </p>
    <input
      v-model="form.productPrice"
      class="form-control"
      type="number"
      placeholder="Type the price"
    />
    <p class="text-brown">
      Description :
    </p>
    <input
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
          form.sizeRegular === 1
            ? 'btn-size rounded-circle mt-2 active'
            : 'btn-size rounded-circle mt-2'
        "
      >
        R
      </button>
      <button
        @click="getSizeL()"
        :class="
          form.sizeLarge === 1
            ? 'btn-size rounded-circle mt-2 active'
            : 'btn-size rounded-circle mt-2'
        "
      >
        L
      </button>
      <button
        @click="getSizeXL()"
        :class="
          form.sizeExtraLarge === 1
            ? 'btn-size rounded-circle mt-2 active'
            : 'btn-size rounded-circle mt-2'
        "
      >
        XL
      </button>
      <button
        @click="getSize250gr()"
        :class="
          form.size250gr === 1
            ? 'btn-size rounded-circle mt-2 active'
            : 'btn-size rounded-circle mt-2'
        "
      >
        250gr
      </button>
      <button
        @click="getSize300gr()"
        :class="
          form.size300gr === 1
            ? 'btn-size rounded-circle mt-2 active'
            : 'btn-size rounded-circle mt-2'
        "
      >
        300gr
      </button>
      <button
        @click="getSize500gr()"
        :class="
          form.size500gr === 1
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
        form.deliveryHome === 1
          ? 'btn-delivery mt-3 active'
          : 'btn-delivery mt-3'
      "
    >
      Home Delivery
    </button>
    <button
      @click="getDineIn()"
      :class="
        form.deliveryDineIn === 1
          ? 'btn-delivery mt-3 active'
          : 'btn-delivery mt-3'
      "
    >
      Dine in
    </button>
    <button
      @click="getTakeAway()"
      :class="
        form.deliveryTakeAway === 1
          ? 'btn-delivery mt-3 active'
          : 'btn-delivery mt-3'
      "
    >
      Take away
    </button>

    <br />

    <button @click="addProduct()" class="btn-save btn-save-save mt-5">
      Save Product
    </button>
    <br />
    <button class="btn-save btn-save-cancel mt-4">
      Cancel
    </button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: ['form'],
  data() {
    return {
      id: 0,
      errors: []
    }
  },
  created() {
    this.id = this.$route.params.id
  },
  methods: {
    ...mapActions(['postProduct', 'patchProduct']),
    addProduct() {
      this.errors = []
      if (!this.form.productName) {
        this.errors.push('Product name required.')
      }
      if (!this.form.productPrice) {
        this.errors.push('Price required.')
      }
      if (!this.form.image) {
        this.errors.push('Product image required.')
      }
      if (!this.form.productDesc) {
        this.errors.push('Product description required.')
      }
      if (!this.form.productStartHour) {
        this.errors.push('Product start hour required.')
      }
      if (!this.form.productEndHour) {
        this.errors.push('Product end hour required.')
      }
      if (!this.form.productQty) {
        this.errors.push('Product quantity required.')
      }
      if (!this.form.categoryId) {
        this.errors.push('Product category required.')
      }

      if (this.errors.length === 0) {
        const {
          productName,
          productPrice,
          image,
          productDesc,
          productStartHour,
          productEndHour,
          productQty,
          categoryId,
          sizeId,
          deliveryId,
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
        data.append('productName', productName)
        data.append('productPrice', productPrice)
        data.append('image', image)
        data.append('productDesc', productDesc)
        data.append('productStartHour', productStartHour)
        data.append('productEndHour', productEndHour)
        data.append('productQty', productQty)
        data.append('categoryId', categoryId)
        data.append('sizeId', sizeId)
        data.append('deliveryId', deliveryId)
        data.append('sizeRegular', sizeRegular)
        data.append('sizeLarge', sizeLarge)
        data.append('sizeExtraLarge', sizeExtraLarge)
        data.append('size250gr', size250gr)
        data.append('size300gr', size300gr)
        data.append('size500gr', size500gr)
        data.append('deliveryHome', deliveryHome)
        data.append('deliveryDineIn', deliveryDineIn)
        data.append('deliveryTakeAway', deliveryTakeAway)
        // for (var pair of data.entries()) {
        //   console.log(pair[0] + ', ' + pair[1])
        // }
        const setData = {
          dataSet: data,
          id: this.id
        }

        if (this.id) {
          this.patchProduct(setData)
            .then(result => {
              alert(result.data.msg)
            })
            .catch(error => {
              alert(error.data.msg)
            })
        } else {
          this.postProduct(data)
            .then(result => {
              alert(result.data.msg)
            })
            .catch(err => {
              alert(err.data.msg)
            })
        }
        this.form = []
      }
    },
    getHomeDelivery() {
      if (this.form.deliveryHome === 0) {
        this.form.deliveryHome = 1
      } else {
        this.form.deliveryHome = 0
      }
    },
    getDineIn() {
      if (this.form.deliveryDineIn === 0) {
        this.form.deliveryDineIn = 1
      } else {
        this.form.deliveryDineIn = 0
      }
    },
    getTakeAway() {
      if (this.form.deliveryTakeAway === 0) {
        this.form.deliveryTakeAway = 1
      } else {
        this.form.deliveryTakeAway = 0
      }
    },
    getSizeR() {
      if (this.form.sizeRegular === 0) {
        this.form.sizeRegular = 1
      } else {
        this.form.sizeRegular = 0
      }
    },
    getSizeL() {
      if (this.form.sizeLarge === 0) {
        this.form.sizeLarge = 1
      } else {
        this.form.sizeLarge = 0
      }
    },
    getSizeXL() {
      if (this.form.sizeExtraLarge === 0) {
        this.form.sizeExtraLarge = 1
      } else {
        this.form.sizeExtraLarge = 0
      }
    },
    getSize250gr() {
      if (this.form.size250gr === 0) {
        this.form.size250gr = 1
      } else {
        this.form.size250gr = 0
      }
    },
    getSize300gr() {
      if (this.form.size300gr === 0) {
        this.form.size300gr = 1
      } else {
        this.form.size300gr = 0
      }
    },
    getSize500gr() {
      if (this.form.size500gr === 0) {
        this.form.size500gr = 1
      } else {
        this.form.size500gr = 0
      }
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

.error-warn {
  background: rgba(245, 25, 25, 0.35);
  border-radius: 10px;
  padding: 15px;
}

@media (max-width: 576px) {
  .main-right {
    padding: 0 25px 0;
  }
}
</style>
