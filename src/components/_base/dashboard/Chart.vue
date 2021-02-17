<script>
import { mapActions, mapGetters } from 'vuex'
import { Line } from 'vue-chartjs'

export default {
  extends: Line,
  data() {
    return {
      chartData: []
    }
  },
  computed: {
    ...mapGetters({ chart: 'getChart' })
  },
  methods: {
    ...mapActions(['getChart'])
  },
  mounted() {
    this.getChart()
    setTimeout(() => {
      for (let i = 0; i <= this.chart.length; i++) {
        this.chartData.push(this.chart[i].total)
      }
    }, 1000)

    setTimeout(() => {
      this.renderChart(
        {
          labels: [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December'
          ],
          datasets: [
            {
              label: '2021',
              backgroundColor: 'transparent',
              borderColor: '#abe0ed',
              data: this.chartData
            }
          ]
        },
        {
          responsive: true,
          maintainAspectRatio: false
        }
      )
    }, 1500)
  }
}
</script>
