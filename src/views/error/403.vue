<template>
  <div>
    <h1>403 FORBIDDEN</h1>
    <h3>You have no permission to access this page</h3>
    <h5>You will get return to home page in {{ timerCount }} second</h5>
  </div>
</template>

<script>
import router from '../../router'

export default {
  data() {
    return {
      timerCount: 5
    }
  },
  created() {
    setTimeout(function() {
      router.push('/')
    }, 5000),
      this.countDownTimer()
  },
  watch: {
    timerCount: {
      handler(value) {
        if (value > 0) {
          setTimeout(() => {
            this.timerCount--
          }, 1000)
        }
      },
      immediate: true // This ensures the watcher is triggered upon creation
    }
  }
}
</script>
