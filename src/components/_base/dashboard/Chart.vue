<script>
import { Line } from 'vue-chartjs'

export default {
  extends: Line,
  mounted() {
    // Overwriting base render method with actual data.
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
            label: '2019',
            backgroundColor: 'transparent',
            borderColor: '#fcd68d',
            data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
          },
          {
            label: '2020',
            backgroundColor: 'transparent',
            borderColor: '#abe0ed',
            data: [60, 30, 8, 79, 20, 50, 19, 50, 20, 60, 72, 81]
          }
        ]
      },
      {
        responsive: true,
        maintainAspectRatio: false
      }
    )
  }
}
</script>
