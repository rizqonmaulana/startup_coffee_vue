<template>
  <div>
    <Navbar />
   <div class="centered">
      <h1>This is Lifecycle Page</h1>
      <h5 id="test">{{dataTesting}}</h5>
   </div>
  </div>
</template>

<script>
// [1] step pertama
import Navbar from '../components/_base/Navbar'

export default {
  name: 'Lifecycle',
  components: {
    Navbar
  },
  data() {
    return {
      dataTesting: 'Rizqon Maulana'
    }
  },
  created() {
    console.log('created is Running ! => ' + this.dataTesting)
  }
  ,
//   paling awal di eksekusi
  beforeCreate() {
    console.log('Before created is Running ! => ' + this.dataTesting)
  },
//   sebelum menjalankan dom
  mounted() {
    console.log('mounted is Running ! => ' + this.dataTesting)
    console.log(document.getElementById('test'))
  },
// setelah dom terbentuk
  beforeMount() {
    console.log('before mount is Running ! => ' + this.dataTesting)
    console.log(document.getElementById('test'))
  }
};
</script>

<style scoped>
  .centered {
    text-align: center;
  }
</style>
