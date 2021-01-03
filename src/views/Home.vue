<template>
  <div class="home">
    <NavbarHome />
    <b-container>
      <Header style="background-color:red; height:500px;" />
      <Stats
        style="background-color:green; height:150px; margin-left: auto; margin-right: auto; left:0; right:0; margin-top: -75px; width: 700px; position: absolute"
      />
      <Desc style="background-color:blue; height:600px;" />
      <Favorite style="background-color:yellow; height:600px;" />
      <MapStore style="background-color:purple; height:700px;" />
      <Partner style="background-color:orange; height:250px;" />
      <Testimonial style="background-color:brown; height:400px;" />
      <PromoCheck style="background-color:pink; height:150px;" />
    </b-container>
    <Footer />
  </div>
</template>

<script>
import NavbarHome from '../components/_base/NavbarHome'
import Footer from '../components/_base/Footer'
import Header from '../components/_base/home/Header'
import Stats from '../components/_base/home/Stats'
import Desc from '../components/_base/home/Desc'
import Favorite from '../components/_base/home/Favorite'
import MapStore from '../components/_base/home/MapStore'
import Partner from '../components/_base/home/Partner'
import Testimonial from '../components/_base/home/Testimonial'
import PromoCheck from '../components/_base/home/PromoCheck'

export default {
  components: {
    NavbarHome,
    Footer,
    Header,
    Stats,
    Desc,
    Favorite,
    MapStore,
    Partner,
    Testimonial,
    PromoCheck
  }
}
</script>
