<template>
    <div>
        <router-link class="card-product-link" :to="{name: 'DetailProduct', params: {id: productId}}" >
            <div class="card card-product shadow rounded">
            <img class="card-img-top rounded-circle product-item mx-auto" src="../../../assets/cold_brew.png" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title poppins text-center">{{ productName }}</h5>
            </div>
            <div class="card-price mb-4">
                <p class="card-text text-center poppins">Rp {{ productPrice }}</p>
            </div>
            </div>
        </router-link>
    </div>
</template>

<script>
export default {
    props: ['productId', 'productName', 'productPrice']
}
</script>

<style scoped>
.card-product-link {
  margin: 0 30px 100px 0;
  text-decoration: unset;
  color: #000;
}

.card-product-link .card-product {
  border-radius: 30px !important;
  border: unset;
  width: 10rem;
  height: 250px;
}

.card-product-link
.card-product
.product-item {
  width: 135px;
  margin-top: -45px;
}

.card-product-link
.card-product
.card-title {
  font-weight: 900;
  font-size: 22px;
}

.card-product-link
.card-product
.card-text {
  font-size: 17px;
  font-weight: 700;
  color: #6a4029;
}
</style>