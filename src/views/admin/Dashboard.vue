<template>
  <div>
    <Navbar />
    <div class="main">
      <b-container class="dashboard-container">
        <div class="text-center mb-5">
          <h2 class="header-text">See how your store progress so far</h2>
        </div>
        <b-row class="mb-5">
          <b-col col lg="4" cols="12" class="dashboard-card">
            <Card :data="today" :income="todayIncome.data[0].total_price" />
          </b-col>
          <b-col col lg="4" cols="12" class="dashboard-card">
            <Card :data="week" :income="weekOrders.data[0].weekOrder" />
          </b-col>
          <b-col col lg="4" cols="12" class="dashboard-card">
            <Card :data="year" :income="yearIncome.data[0].total_price" />
          </b-col>
        </b-row>
        <Chart class="mb-5" />
        <Button class="mb-5" />
      </b-container>
    </div>
    <Footer />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Navbar from '../../components/_base/Navbar'
import Footer from '../../components/_base/Footer'
import Card from '../../components/_base/dashboard/Card'
import Chart from '../../components/_base/dashboard/Chart'
import Button from '../../components/_base/dashboard/Button'

export default {
  components: {
    Navbar,
    Footer,
    Card,
    Chart,
    Button
  },
  computed: {
    ...mapGetters({
      yearIncome: 'getYearIncome',
      weekOrders: 'getWeekOrders',
      todayIncome: 'getTodayIncome'
    })
  },
  methods: {
    ...mapActions(['getYearIncome', 'getWeekOrders', 'getTodayIncome'])
  },
  created() {
    this.getYearIncome()
    this.getWeekOrders()
    this.getTodayIncome()
  },
  data() {
    return {
      today: {
        title: "Today's Income",
        currency: 'Rp',
        style: 'background-image: linear-gradient(to right, #adff94, #ceffbf)',
        image: 'icon-income-1.jpg'
      },
      week: {
        title: 'This Week Orders',
        style: 'background-image: linear-gradient(to right, #fcd68d, #ffe7ba)',
        image: 'icon-income-2.jpg'
      },
      year: {
        title: "This Year's Income",
        currency: 'Rp',
        style: 'background-image: linear-gradient(to right, #abe0ed, #b9e1eb)',
        image: 'icon-income-3.jpg'
      }
    }
  }
}
</script>

<style scoped>
.main {
  background-image: url('../../assets/bg-profile.png');
  background-repeat: no-repeat;
  background-size: cover;
  padding: 50px 0;
}

.dashboard-container {
  background-color: rgba(255, 255, 255, 0.93);
  border-radius: 10px;
  padding: 20px 30px 1px;
  -webkit-box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.4);
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.4);
}

.header-text {
  color: #6a4029;
  font-weight: 700;
}

@media (max-width: 991px) {
  .dashboard-card {
    margin-top: 20px;
  }
}

@media (max-width: 576px) {
  .dashboard-container {
    padding: 20px 20px 1px;
  }
}
</style>
