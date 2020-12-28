<template>
    <div class="address-card-container">
        <span class="poppins" style="color: #fff; font-weight: 700; font-size: 20px; text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.8);">
            Payment method
        </span>
        
        <div class="address-card-content poppins mt-2">
            <input @click="selectPaymentMethod('Card')" class="mr-2" type="radio" name="payment-method" value="card" style="width: 20px;"> 
            <img class="mr-4" src="../../../assets/card-icon.png" width="30px">
            <span class="poppins">Card</span>
        <hr style="margin: 12.7px 0">
            <input @click="selectPaymentMethod('Bank')" class="mr-2" type="radio" name="payment-method" value="bank" style="width: 20px;"> 
            <img class="mr-4" src="../../../assets/bank-icon.png" width="30px">
            <span class="poppins">Bank</span>
        <hr style="margin: 12.7px 0">
            <input @click="selectPaymentMethod('COD')" class="mr-2" type="radio" name="payment-method" value="cod" style="width: 20px;"> 
            <img class="mr-4" src="../../../assets/cod-icon.png" width="30px">
            <span class="poppins">Cash on Delivery</span>
        </div>

        <button @click="postOrder()" class="btn-confirm poppins mt-5">
            Confirm and Pay
        </button>
    </div>
</template>

<script>
export default {
    methods: {
        selectPaymentMethod(method) {
            this.$emit('selectPaymentMethod', method)
        },
        postOrder(){
            this.$emit('postOrder')
        }
    }
}
</script>

<style scoped>
.address-card-container .address-card-content {
  background-color: #fff !important;
  border-radius: 20px;
  -webkit-box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.35);
          box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.35);
  padding: 30px 35px 10px;
  line-height: 20px;
}

.address-card-container .btn-confirm {
  width: 100%;
  line-height: 60px;
  background-color: #6a4029;
  font-weight: 700;
  color: #fff;
  border: unset;
  border-radius: 10px;
  -webkit-box-shadow: 0px 10px 20px rgba(137, 85, 55, 0.4);
          box-shadow: 0px 10px 20px rgba(137, 85, 55, 0.4);
}

.address-card-container .btn-confirm:hover {
  background-color: #663215;
}    
</style>