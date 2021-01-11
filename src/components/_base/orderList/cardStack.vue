<template>
  <div>
    <vue-card-stack :cards="cards" :stack-width="360" :card-width="280">
      <template v-slot:card="{ card }">
        <div
          class="card"
          style="width: 100%; 
                height: 100%; 
                background-color: #fff; 
                border-radius: 10px; 
                border: 2px solid brown;
                padding: 20px ;
                "
        >
          <div class="text-center">
            <h2>Delivery Order</h2>
            <p>for {{ card.user_name }}</p>
            <div class="order-item mb-3 d-flex flex-row align-items-center">
              <div class="pic" style="width: 25%;">
                <img
                  src="../../../assets/product-3.png"
                  style="height: 70px; width: 62px; border-radius: 20px;"
                />
              </div>
              <div class="text mr-3" style="width: 45%;">
                <!-- {{ item.productName }} -->
                <br />
                <!-- x{{ item.orderDetailQty }} -->
                <br />
                <!-- {{ item.orderDetailSize }} -->
              </div>
              <div class="price text-right text-nowrap" style="width: 30%;">
                IDR {{ card.order_total }}
              </div>
            </div>
            <hr style="width: 100%" />
            <div class="row" style="color: #362115; line-height: 35px;">
              <div class="col">
                Tax Fees
                <br />
                <strong style="font-size: 20px;">
                  TOTAL
                </strong>
              </div>
              <div class="col text-right text-nowrap">
                Rp 0
                <br />
                <strong style="font-size: 20px;">
                  IDR {{ card.order_total }}
                </strong>
              </div>
            </div>
          </div>
          <!-- <h5>{{ card.name }}</h5> -->
        </div>
      </template>

      <template v-slot:nav="{ activeCardIndex, onNext, onPrevious }">
        <nav class="nav">
          <div class="counter">
            {{ activeCardIndex + 1 }}/{{ cards.length }}
          </div>
          <button v-on:click="onPrevious" class="button">
            <span class="chevron left"> </span>
          </button>
          <button v-on:click="onNext" class="button">
            <span class="chevron right"> > </span>
          </button>
        </nav>
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
  data() {
    return {
      cards: []
    }
  },
  created() {
    this.getOrderList()
    this.cards = this.orderList
  },
  computed: {
    ...mapGetters({
      orderList: 'getOrderList'
    })
  },
  methods: {
    ...mapActions(['getOrderList'])
  }
}
</script>
