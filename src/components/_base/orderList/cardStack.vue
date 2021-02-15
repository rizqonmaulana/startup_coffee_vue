<template>
  <div>
    <vue-card-stack
      v-if="show"
      :cards="cards"
      :stack-width="360"
      :card-width="280"
    >
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
              <div class="price text-right text-nowrap" style="width: 30%;">
                Invoice : {{ card.order_invoice }} <br />
                Payment :
                {{ card.order_payment_method }} <br />
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
              <button
                class="btn btn-warning mt-5 mx-auto"
                @click="patchOrder(card.order_invoice)"
              >
                Mark as done
              </button>
            </div>
          </div>
        </div>
      </template>

      <template v-slot:nav="{ activeCardIndex, onNext, onPrevious }">
        <div class="d-flex justify-content-center arrow-nav">
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
      </template>
    </vue-card-stack>
  </div>
</template>
<script>
import { alertMixin } from '../../../mixins/alertMixin'
import { mapActions, mapGetters } from 'vuex'
import VueCardStack from 'vue-card-stack'

export default {
  mixins: [alertMixin],
  data() {
    return {
      show: false
    }
  },
  components: {
    VueCardStack
  },
  created() {
    this.getOrderList()
      .then(result => {
        console.log(result)
        this.show = true
      })
      .catch(err => {
        console.log(err)
      })
  },
  computed: {
    ...mapGetters({
      cards: 'getOrderList'
    })
  },
  methods: {
    ...mapActions(['getOrderList', 'patchOrderStatus']),
    patchOrder(invoice) {
      const data = {
        invoice: invoice
      }
      this.patchOrderStatus(data)
        .then(result => {
          console.log(result)
          this.getOrderList()
          this.$forceUpdate()
          this.successLogin(result.data.msg)
        })
        .catch(error => {
          this.errorAlert(error.data.msg)
        })
    }
  }
}
</script>

<style scoped>
.arrow-nav {
  margin-right: 20%;
}

.button-arrow {
  border: unset;
  background-color: transparent;
  outline: unset;
  padding: unset;
}

.arrow {
  font-weight: 700;
  font-size: 50px;
}
</style>
