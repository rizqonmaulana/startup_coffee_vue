<template>
    <div>
        <Navbar />
            <b-container>
                <b-row>
                    <b-col col lg="5" sm="12">
                        <MainLeft 
                            :form="form"
                            @getStartHour="getStartHour"
                            @getEndHour="getEndHour"
                            @getStock="getStock"
                            @getCategory="getCategory"
                        />
                    </b-col>
                    <b-col col lg="7" sm="12">
                        <MainRight 
                            :form="form"
                            @getProductName="getProductName"
                            @getProductPrice="getProductPrice"
                            @getProductDesc="getProductDesc"
                            @getSizeR="getSizeR"
                            @getSizeL="getSizeL"
                            @getSizeXL="getSizeXL"
                            @getSize250gr="getSize250gr"
                            @getSize300gr="getSize300gr"
                            @getSize500gr="getSize500gr"
                            @postProduct="postProduct"
                            @getHomeDelivery="getHomeDelivery"
                            @getDineIn="getDineIn"
                            @getTakeAway="getTakeAway"
                        />
                    </b-col>
                </b-row>
                <b-alert
                    :show="dismissCountDown"
                    dismissible
                    variant="success"
                    @dismissed="dismissCountDown=0"
                    @dismiss-count-down="countDownChanged"
                    class="mt-4">
                <p> {{productName}} Product successfully added</p>
                <b-progress
                    variant="success"
                    :max="dismissSecs"
                    :value="dismissCountDown"
                    height="4px">
                </b-progress>
                </b-alert>
            </b-container>
        <Footer />
    </div>
</template>

<script>
import Navbar from '../components/_base/Navbar'
import Footer from '../components/_base/Footer'
import MainLeft from '../components/_base/productInsert/MainLeft'
import MainRight from '../components/_base/productInsert/MainRight'
import axios from 'axios'

export default {
    components: {
        Navbar,
        Footer,
        MainLeft,
        MainRight
    },
    data() {
        return {
            form: {
                productName: 'nama',
                productPrice: 0,
                productDesc: '',
                productStartHour: '',
                productEndHour: '',
                productQty: 0,
                categoryId: 0,
                sizeRegular: 0,
                sizeLarge: 0,
                sizeExtraLarge: 0,
                size250gr: 0,
                size300gr: 0,
                size500gr: 0,
                deliveryHome: 0,
                deliveryDineIn: 0,
                deliveryTakeAway: 0
            },
            dismissSecs: 5,
            dismissCountDown: 0,
            showDismissibleAlert: false
        }
    },
    created() {
        const id = this.$route.params.id
        this.getProductDetail(id)
    },
    methods: {
        getProductDetail(id) {
            axios.get(`http://localhost:3000/product/detail/${id}`)
            .then(response => {
                console.log(this.form)
                this.form = response.data.data[0]
            })
            .catch(error => {
                console.log(error)
            })
        },
        getProductName(name) {
            this.form.productName = name
        },
        getProductPrice(price) {
            this.form.productPrice = price
        },
        getProductDesc(desc) {
            this.form.productDesc = desc
        },
        getStartHour(start) {
            this.form.productStartHour = start
        },
        getEndHour(end) {
            this.form.productEndHour = end
        },
        getStock(stock) {
            this.form.productQty = stock
        },
        getCategory(category) {
            this.form.categoryId = category
        },
        getSizeR(size) {
            this.form.sizeRegular = size
        },
        getSizeL(size) {
            this.form.sizeLarge = size
        },
        getSizeXL(size) {
            this.form.sizeExtraLarge = size
        },
        getSize250gr(size) {
            this.form.size250gr = size
        },
        getSize300gr(size) {
            this.form.size300gr = size
        },
        getSize500gr(size) {
            this.form.size500gr = size
        },
        getHomeDelivery(delivery) {
            this.form.deliveryHome = delivery
        },
        getDineIn(delivery) {
            this.form.deliveryDineIn = delivery
        },
        getTakeAway(delivery) {
            this.form.deliveryTakeAway = delivery
        },
        countDownChanged(dismissCountDown) {
            this.dismissCountDown = dismissCountDown
        },
        showAlert() {
            this.dismissCountDown = this.dismissSecs
        }
    }
}
</script>