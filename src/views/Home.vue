<template>
  <div class="home">
    <Navbar />
    <b-container  class="centered">
      <b-card>
        <h5>Interpolation</h5>
        <p>My name is {{name}}</p>  
      </b-card>
      <b-card>
        <h5>Computed</h5>
        <p>Original Message : {{ message }}</p>  
        <p>Reverse Message : {{ reverseMessage }}</p>
      </b-card>
      <b-card>
        <h5>Directive</h5>
        <hr>
          <h6>v-if</h6>
          <div v-if=" role === 1">kamu adalah admin</div>
          <div v-else-if=" role === 2 ">kamu adalah kasir</div>
          <div v-else>kamu adalah user biasa</div>
        <hr>
          <h6>v-for</h6>
          <ul>
            <li v-for="(item, index) in dataProduct" :key="index">
              {{index}} - {{item.product_name}} - {{item.product_price}}
            </li>
          </ul>
        <hr>
          <h6>v-on</h6>
          <button v-on:click="boom()">click me</button>
          <button @click="boom()">click me</button>
          <input type="text" v-model="searchData" v-on:keyup.enter="search()">
          <p>{{searchData}}</p>
        <hr>
          <h6>v-bind</h6>
          <a :href="urlGoogle">link google</a>
          <br>
          <a :href="role === 1 ? urlGoogle : urlYoutube">link baru</a>
      </b-card>
      <b-card>
        <h5>Component Communication</h5>
        <FormInput 
          :dataProductName="product_name" 
          @changeProductName="changeNameProduct"/>
        <br>
        <label>{{product_name}}</label>
      </b-card>
    </b-container>
  </div>
</template>

<script>
// [1] step pertama import component
import Navbar from '../components/_base/Navbar'
import FormInput from '../components/_base/FormInput'

export default {
  name: 'Home',
  components: {
    // [2] step kedua daftarkan component
    Navbar,
    FormInput
  },
  data() {
    return {
      name: 'Rizqon Maulana',
      message: 'Hello World',
      role: 2,
      searchData: '',
      dataProduct: [
        {
          product_name : 'Meja',
          product_price : '50000'
        },
        {
          product_name : 'Kursi',
          product_price : '35000'
        },
        {
          product_name : 'Lemari',
          product_price : '730000'
        }
      ],
      urlGoogle : 'https://google.com',
      urlYoutube : 'https://youtube.com',
      product_name: 'adudu'
    }
  },
  computed: {
    reverseMessage : function() {
      return this.message.split(' ').reverse().join('')
    }
  },
  methods: {
    boom() {
      console.log('Boom !')
      alert('Boom !')
    },
    search() {
      console.log('Process search')
      console.log(this.searchData)
    },
    changeNameProduct(event){
      this.product_name = event
    }
  },
};
</script>

<style scoped>
  .centered {
    text-align: center;
  }
</style>
