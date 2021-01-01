<template>
    <div>
        <Navbar />
            <div class="main pt-5 pb-5">
                <b-container>
                    <b-row>
                        <div class="col text-center mb-5" style="color: #fff; text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.8);"> 
                            <h3>Let's see what you have bought!</h3>
                            <p>Select item to delete</p>
                        </div>
                    </b-row>
                    <b-row>
                        <b-col v-for="(item, index) in history" :key="index" col lg="3" md="6" sm="12" class="history-card">
                            <HistoryCard 
                                :orderDetailId=item.order_detail_id
                                :productName=item.product_name
                                :productOrderQty=item.order_detail_qty
                                :productPic=item.product_pic
                                :productPrice=item.order_detail_price
                                :productInvoice=item.order_invoice
                                @deleteOrderHistory="deleteOrderHistory"
                            />
                        </b-col> 
                    </b-row>
                </b-container>
            </div>
        <Footer />
    </div>
</template>

<script>
import Navbar from '../components/_base/Navbar'
import Footer from '../components/_base/Footer'
import HistoryCard from '../components/_base/history/HistoryCard'
import axios from 'axios'

export default {
    components: {
        Navbar,
        Footer,
        HistoryCard
    },
    data() {
        return {
            customerId: 1,
            history: []
        }
    },
    created() {
        this.getHistory(this.customerId)
        console.log(this.customerId)
    },
    methods: {
        getHistory(customerId) {
           axios.get(`http://localhost:3000/order/history/${customerId}`)
            .then(response => {
                const historyItem = response.data.data
                this.history = historyItem
                console.log(this.history)
            })
            .catch(error => {
                console.log(error)
            })
        },
        deleteOrderHistory() {
            console.log('bisa delete')
            this.getHistory(this.customerId)
        }
    }
}
</script>

<style scoped>
    .main {
        background-image: url('../assets/bg-history.png');
        background-size: cover;
    }

    .history-card {
        margin-right: 80px;
    }
</style>