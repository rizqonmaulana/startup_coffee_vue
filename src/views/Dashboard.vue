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
            <Card
              :title="today.title"
              :currency="today.currency"
              :count="today.count"
              :increase="today.increase"
              :increaseText="today.increaseText"
              :color="today.style"
              :image="today.image"
            />
          </b-col>
          <b-col col lg="4" cols="12" class="dashboard-card">
            <Card
              :title="week.title"
              :count="week.count"
              :increase="week.increase"
              :increaseText="week.increaseText"
              :color="week.style"
              :image="week.image"
            />
          </b-col>
          <b-col col lg="4" cols="12" class="dashboard-card">
            <Card
              :title="year.title"
              :currency="year.currency"
              :count="year.count"
              :increase="year.increase"
              :increaseText="year.increaseText"
              :color="year.style"
              :image="year.image"
            />
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
import Navbar from '../components/_base/Navbar'
import Footer from '../components/_base/Footer'
import Card from '../components/_base/dashboard/Card'
import Chart from '../components/_base/dashboard/Chart'
import Button from '../components/_base/dashboard/Button'

export default {
  components: {
    Navbar,
    Footer,
    Card,
    Chart,
    Button
  },
  data() {
    return {
      today: {
        title: "Today's Income",
        currency: 'Rp',
        count: 1000000,
        increase: 2,
        increaseText: '% Yesterday',
        style: 'background-image: linear-gradient(to right, #adff94, #ceffbf)',
        image: 'img/icon-income-1.7a20ef17.jpg'
      },
      week: {
        title: 'This Week Orders',
        count: 358,
        increase: 10,
        increaseText: '% Last Week',
        style: 'background-image: linear-gradient(to right, #fcd68d, #ffe7ba)',
        image: 'img/icon-income-2.e70d0ef1.jpg'
      },
      year: {
        title: "This Year's Income",
        currency: 'Rp',
        count: 158000000,
        increase: 7,
        increaseText: '% Last Year',
        style: 'background-image: linear-gradient(to right, #abe0ed, #b9e1eb)',
        image: 'img/icon-income-3.d5420a16.jpg'
      }
    }
  }
}
</script>

<style scoped>
.main {
  background-image: url('../assets/bg-profile.png');
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
