<template>
  <div>
    <div class="product-name">
      <p>
        <span style="color: #4F5665;">Favorite & Promo </span>
        <span style="color: #6a4029;"
          ><strong class="text-lowercase">
            > {{ detail.product_name }}
          </strong></span
        >
      </p>
    </div>
    <div class="product-pic text-center">
      <img
        v-if="detail.product_pic"
        :src="url + '/fileupload/' + detail.product_pic"
        class="rounded-circle mx-auto product-img"
      />
      <img
        v-else
        src="../../../assets/cold_brew.png"
        class="rounded-circle mx-auto product-img"
      />
    </div>
    <div class="product-card mt-5">
      <div class="delivery-time-card">
        <h5>Delivery and Time</h5>
        <div class="delivery-btn-collection-1 mt-4">
          <button
            v-if="detail.delivery_dine_in != 0"
            @click="selectDelivery('Dine In')"
            :class="
              btnDelivery === 'Dine In' ? 'delivery-btn active' : 'delivery-btn'
            "
          >
            Dine In
          </button>
          <button
            v-if="detail.delivery_home != 0"
            @click="selectDelivery('Door Delivery')"
            :class="
              btnDelivery === 'Door Delivery'
                ? 'delivery-btn active'
                : 'delivery-btn'
            "
          >
            Door Deliver
          </button>
          <button
            v-if="detail.delivery_take_away != 0"
            @click="selectDelivery('Pick Up')"
            :class="
              btnDelivery === 'Pick Up' ? 'delivery-btn active' : 'delivery-btn'
            "
          >
            Pick up
          </button>
        </div>
        <br />
        <span class="mr-5">Now</span>
        <button
          @click="selectNow('yes')"
          :class="
            btnNow === 'yes' ? 'delivery-btn active mr-2' : 'delivery-btn mr-2'
          "
        >
          Yes
        </button>
        <button
          @click="selectNow('no')"
          :class="btnNow === 'no' ? 'delivery-btn active' : 'delivery-btn'"
        >
          No
        </button>
        <br />
        <div class="set-delivery-time mt-4 mb-4">
          <span class="mr-4">Set time</span>
          <input
            type="text"
            class="poppins"
            placeholder="Enter time for reservation"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['detail', 'orderData'],
  data() {
    return {
      btnDelivery: '',
      btnNow: '',
      url: process.env.VUE_APP_ROOT_URL
    }
  },
  methods: {
    selectDelivery(delivery) {
      this.btnDelivery = delivery
      this.orderData.orderDetailDelivery = delivery
    },
    selectNow(now) {
      this.btnNow = now
    }
  }
}
</script>

<style scoped>
.product-img {
  width: 250px;
  height: 250px;
  margin-top: 55px;
}

.product-card {
  background-color: #fff;
  border-radius: 20px;
  -webkit-box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.2);
  padding: 27px 30px;
}

.product-card .delivery-btn {
  background-color: #f4f4f8;
  color: #9f9f9f;
  border-radius: 10px;
  font-weight: 700;
  font-size: 15px;
  line-height: 30px;
  padding: 3px 15px;
  margin-right: 5px;
  border: 1px solid rgba(186, 186, 186, 0.35);
  outline: none;
}

.product-card .delivery-btn.active,
.product-card .delivery-btn:hover {
  color: #fff;
  background-color: #6a4029;
  -webkit-box-shadow: 0px 6px 20px rgba(137, 85, 55, 0.4);
  box-shadow: 0px 6px 20px rgba(137, 85, 55, 0.4);
}

.product-card .set-delivery-time input {
  border: 1px solid #f4f4f8;
  border-radius: 5px;
  background-color: #f4f4f8;
  line-height: 35px;
  width: 225px;
  font-size: 13px;
  color: #9f9f9f;
}

@media (max-width: 576px) {
  .product-img {
    width: 200px;
    height: 200px;
  }
}
</style>
