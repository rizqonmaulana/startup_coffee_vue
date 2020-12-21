<template>
  <div class="home">
    <Navbar />
      <b-container class="text-center">
        <h1>This is home page</h1>
      </b-container>
    <Footer />
  </div>
</template>

<script>
import Navbar from '../components/_base/Navbar'
import Footer from '../components/_base/Footer'

export default {
  components: {
    Navbar, 
    Footer
  }  
}
</script>