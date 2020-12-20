<template>
    <div>
        <Navbar />
            <div class="product-checkout pb-5">
                <b-container>
                    <b-row>
                        <b-col col lg="6" sm="12" class="pr-lg-5">
                            <OrderSummary 
                                :orderData="orderData" 
                                />
                        </b-col>
                        
                        <b-col col lg="6" sm="12"   class="pl-lg-4 main-right">
                            <AddressCard/>
                            <PaymentCard
                              @selectPaymentMethod="selectPaymentMethod"
                              class="mt-5"/>
                        </b-col>
                        <button @click="getOrder()">get order</button>
                    </b-row>
                </b-container>
            </div>
        <Footer class="mt-5"/>
    </div>
</template>

<script>
import Navbar from '../components/_base/Navbar'
import Footer from '../components/_base/Footer'
import OrderSummary from '../components/_base/productCheckout/OrderSummary'
import AddressCard from '../components/_base/productCheckout/AddressCard'
import PaymentCard from '../components/_base/productCheckout/PaymentCard'

export default {
    name: 'ProductCheckout',
    components : {
        Navbar,
        Footer,
        OrderSummary,
        AddressCard,
        PaymentCard
    },
    data() {
        return {
            order : {
                orderPaymentMethod : "",
                orderTotal : this.subTotal,
                customerId : 1,
                promoCode : ""
            },
            orderData : []
        }
    },
    created() {
        this.orderData = JSON.parse(localStorage.getItem('cart'))
        this.subTotal
    },
    methods: {
        getOrder() {
            console.log(this.order)
        },
        selectPaymentMethod(method) {
            this.order.orderPaymentMethod = method
        }
    },
    computed: {
        subTotal() {
            const dataCount = this.orderData.length
            console.log(this.orderData)
            let result = 0
            for (let i = 0; i < dataCount; i++) {
                result += this.orderItem[i].orderDetailPrice
            }
            console.log(result)
            return result
        }
    }
}
</script>

<style scoped>
.product-checkout {
    background-image: url('../assets/payment-bg.png');
    background-size: cover;
}

.main-right{
    margin-top: 12%;
}

/* @media (max-width: 576px) { 
    .main-right{
        margin-top: 250px !important;
    }
} */
</style>