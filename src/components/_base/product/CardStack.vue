<template>
  <div>
    <vue-card-stack
      class="text-center"
      :cards="cards"
      :stack-width="300"
      :card-width="220"
      v-if="getCards === 1"
    >
      <template v-slot:card="{ card }">
        <div
          style="width: 100%; height: 100%; border-radius: 20px; padding:0 10px; background-color: #d9a368; border: 2px solid #996731"
        >
          <div
            class="edit-btn float-right"
            style="margin-top: -12px; margin-right:-10px;"
          >
            <router-link
              v-if="user.user_role === 1"
              :to="{ name: 'CouponUpdate', params: { id: card.coupon_id } }"
            >
              <img src="../../../assets/edit-icon.png" style="width: 30px" />
            </router-link>
            <img
              v-if="user.user_role === 1"
              class="btn-del"
              src="../../../assets/icon-delete.png"
              @click="destroyCoupon(card.coupon_id)"
              onclick="confirm('are you sure want to delete this coupon ?')"
              style="width: 30px; cursor: pointer;"
            />
          </div>
          <br />
          <img
            v-if="card.product_pic === null"
            class="rounded-circle coupon-img"
            src="../../../assets/cold_brew.png"
          />
          <img
            v-else
            class="rounded-circle coupon-img"
            :src="'http://localhost:3000/' + card.product_pic"
          />
          <h5
            class="card-title mt-2"
            style="font-weight: 700; font-size: 22px; line-height: 35px;"
          >
            {{ card.product_name }}
            <br />
            {{ card.coupon_discount }}% OFF
          </h5>
          <p class="card-text" style="font-size: 14px;">
            {{ card.coupon_desc }}
          </p>
          <hr style="border: 1px solid #ffef8a; border-radius: 1px;" />
          <p class="poppins">
            COUPON CODE
          </p>
          <h5 class="poppins coupon">
            {{ card.coupon_code }}
          </h5>
          <p class="poppins" style="font-size: 12px;">
            Valid untill {{ card.coupon_end_date }}
          </p>
        </div>
      </template>

      <template
        class="nav"
        v-slot:nav="{ activeCardIndex, onNext, onPrevious }"
      >
        <div class="d-flex justify-content-center">
          <div>
            <button v-on:click="onPrevious" class="button-arrow">
              <span class="arrow">&#8592;</span>
            </button>
          </div>
          <div class="align-self-center">
            <div class="counter">
              {{ activeCardIndex + 1 }}/{{ cards.length }}
            </div>
          </div>
          <div>
            <button v-on:click="onNext" class="button-arrow">
              <span class="arrow">&#8594;</span>
            </button>
          </div>
        </div>
        <a href="#" class="btn btn-coupon mt-3">
          <span class="poppins" style="font-weight: 700; font-size: 17px;">
            Apply Coupon
          </span>
        </a>
      </template>
    </vue-card-stack>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import VueCardStack from 'vue-card-stack'

export default {
  components: {
    VueCardStack
  },
  computed: {
    ...mapGetters({
      cards: 'getActiveCoupon',
      user: 'getUser'
    }),
    getCards() {
      if (this.cards.length > 0) {
        return 1
      } else {
        return 0
      }
    }
  },
  methods: {
    ...mapActions(['getActiveCoupon', 'deleteCoupon']),
    destroyCoupon(id) {
      this.deleteCoupon(id)
      this.getActiveCoupon()
    }
  },
  created() {
    this.getActiveCoupon()
  }
}
</script>

<style scoped>
.coupon-img {
  width: 100px;
  height: 100px;
}

.button-arrow {
  border: unset;
  background-color: #fff;
  outline: unset;
  padding: unset;
}

.arrow {
  font-weight: 700;
  font-size: 50px;
}

.btn-coupon {
  color: #fff;
  background-color: #6a4029;
  border-radius: 20px;
  width: 230px;
  line-height: 30px;
}

.btn-coupon:hover {
  color: #fff;
  background-color: #e8ab33;
  -webkit-box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.34);
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.34);
}
</style>
