<template>
  <div>
    <Navbar />
    <b-container>
      <h5>Hai berbuat apa</h5>
    </b-container>
    <Footer />
  </div>
</template>

<script>
import Navbar from '../components/_base/Navbar'
import Footer from '../components/_base/Footer'

export default {
  components: { Navbar, Footer }
}
</script>
