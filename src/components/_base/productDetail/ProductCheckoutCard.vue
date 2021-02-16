<template>
  <div>
    <div class="checkout-card py-2 px-5 poppins d-flex flex-row">
      <div class="d-flex flex-row" style="width:100%">
        <div class="p-2 pic" style="width:30%">
          <img
            v-if="productPic"
            :src="url + '/fileupload/' + productPic"
            class="rounded-circle mx-auto product-img"
          />
          <img
            v-else
            src="../../../assets/cold_brew.png"
            class="rounded-circle mx-auto product-img"
          />
        </div>
        <div class="p-2 desc my-auto" style="width:40%">
          <div class="desc-text">
            <h5 style="font-weight: 900;">{{ productName }}</h5>
            <p>x{{ orderQty }} ({{ orderSize }})</p>
          </div>
        </div>
        <div class="p-2 checkout my-auto" style="width:30%">
          <span class="ml-2 " style="font-weight: 700; font-size: 20px;"
            >Checkout</span
          >
          <router-link to="/product/checkout">
            <button class="btn-checkout rounded-circle">
              <img
                src="../../../assets/arrow-checkout.png"
                style="width: 25px;"
              />
            </button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['productPic', 'productName', 'orderQty', 'orderSize'],
  data() {
    return {
      url: process.env.VUE_APP_ROOT_URL
    }
  }
}
</script>

<style scoped>
img.product-img {
  max-width: 100px;
  max-height: 100px;
}

.checkout-card {
  width: 100%;
  border-radius: 20px;
  -webkit-box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.34);
  box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.34);
}

.checkout-card .desc {
  line-height: 13px;
}

.checkout-card .checkout span {
  margin-right: 10%;
}

.checkout-card .checkout .btn-checkout {
  background-color: #ffba33;
  border: unset;
  padding: 10px;
}

.checkout-card .checkout .btn-checkout:hover {
  background-color: #faa906;
  -webkit-box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.34);
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.34);
}

.checkout-card .pic img {
  width: 127px;
}

@media (max-width: 576px) {
  img.product-img {
    max-width: 80px;
    max-height: 80px;
    margin-left: -25px !important;
  }
  .checkout-card .pic img {
    margin-left: 20%;
  }

  .checkout-card .desc .desc-text {
    text-align: center;
    margin-top: 25px;
  }

  .checkout-card .checkout {
    text-align: center;
  }

  .checkout-card .pic img {
    margin-left: -35px;
    margin-top: 10px;
    width: 100px;
  }

  .desc {
    font-size: 14px;
  }
}

@media (max-width: 375px) {
  .checkout-card .pic img {
    margin-left: 13%;
  }
  .checkout-card .desc .desc-text {
    text-align: center;
    margin-top: 25px;
  }
  .checkout-card .checkout {
    text-align: center;
  }
  .checkout-card .pic img {
    margin-left: -35px;
    margin-top: 30px;
    width: 80px;
  }
  .desc {
    font-size: 12px;
  }
}
</style>
