<template>
  <div class="home">
    <NavbarHome />
    <Header />
    <b-container>
      <Stats class="stats" />
      <Caption />
      <div class="text-center favorite-text">
        <h4>Here is People's Favorite</h4>
        <p class="mt-3">
          Let's choose and have a bit taste people's favorite. it might be yours
          too!
        </p>
      </div>
      <b-container>
        <b-row>
          <b-col col lg="4" cols="12">
            <Favorite />
          </b-col>
          <b-col col lg="4" cols="12">
            <Favorite />
          </b-col>
          <b-col col lg="4" cols="12">
            <Favorite />
          </b-col>
        </b-row>
      </b-container>

      <MapStore />
      <Partner />
      <Testimonial class="testimonial" />
      <PromoCheck class="float-card" />
    </b-container>
    <Footer />
  </div>
</template>

<script>
import NavbarHome from '../components/_base/NavbarHome'
import Footer from '../components/_base/Footer'
import Header from '../components/_base/home/Header'
import Stats from '../components/_base/home/Stats'
import Caption from '../components/_base/home/Caption'
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
    Caption,
    Favorite,
    MapStore,
    Partner,
    Testimonial,
    PromoCheck
  }
}
</script>

<style scoped>
.stats {
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  margin-top: -75px;
  width: 50%;
  position: absolute;
  z-index: 9999;
}

.favorite-text {
  margin: 50px 0 80px;
}

.float-card {
  position: absolute;
  margin-top: -8%;
  margin-left: 8.5%;
}

.testimonial {
  margin-bottom: 180px;
}

@media (max-width: 1200px) {
  .float-card {
    margin-left: auto;
    margin-right: auto;
  }
}

@media (max-width: 992px) {
  .float-card {
    position: static;
    margin: 50px 0px 20px 0px;
  }
  .testimonial {
    margin-bottom: 0px;
  }
}

@media (max-width: 768px) {
  .stats {
    width: 90%;
  }

  .float-card {
    position: static;
    margin: 50px 0px 20px 55px;
  }

  .favorite-text {
    margin: 50px 0 30px;
  }
}

@media (max-width: 576px) {
  .float-card {
    position: static;
    margin: 50px 0px 20px 30px;
  }
}
</style>
