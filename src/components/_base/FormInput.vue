<template>
  <div>
    <h5>ini form input</h5>
    <input type="text" :value="dataProductName" @input="changeProductName" />
    <br />
    <label>{{ dataProductName }}</label>
    <!--  -->
    <form>
      <input
        type="text"
        v-model="form.productName"
        placeholder="Product Name ..."
      />
      <br />
      <input
        type="text"
        v-model="form.productPrice"
        placeholder="Product Price ..."
      />
      <br />
      <input
        type="text"
        v-model="form.productDesc"
        placeholder="Product Desc ..."
      />
      <br />
      <input
        type="text"
        v-model="form.productStartHour"
        placeholder="Product Start Hour ..."
      />
      <br />
      <input
        type="text"
        v-model="form.productEndHour"
        placeholder="Product End Hour ..."
      />
      <br />
      <input
        type="text"
        v-model="form.productQty"
        placeholder="Product Qty ..."
      />
      <br />
      <input
        type="text"
        v-model="form.categoryId"
        placeholder="Category Id..."
      />
      <br />
      <input
        type="text"
        v-model="form.sizeRegular"
        placeholder="Size Regular"
      />
      <br />
      <input type="text" v-model="form.sizeLarge" placeholder="Size Large" />
      <br />
      <input
        type="text"
        v-model="form.sizeExtraLarge"
        placeholder="Size Extra Large"
      />
      <br />
      <input type="text" v-model="form.size250gr" placeholder="Size 250gr" />
      <br />
      <input type="text" v-model="form.size300gr" placeholder="Size 300gr" />
      <br />
      <input type="text" v-model="form.size500gr" placeholder="Size 500gr" />
      <br />
      <input
        type="text"
        v-model="form.deliveryHome"
        placeholder="Delivery Home"
      />
      <br />
      <input
        type="text"
        v-model="form.deliveryDineIn"
        placeholder="Delivery Dine In"
      />
      <br />
      <input
        type="text"
        v-model="form.deliveryTakeAway"
        placeholder="Delivery Take Away"
      />
      <br />
      <br />
      <button type="button" @click="postProduct()">Save</button>
      <button type="button" @click="patchProduct()">Update</button>
    </form>
    <!--  -->
  </div>
</template>

<script>
export default {
  props: ['dataProductName'],
  methods: {
    changeProductName(event) {
      const changeProductName = event.target.value
      this.$emit('changeProductName', changeProductName)
    }
  }
}
</script>
