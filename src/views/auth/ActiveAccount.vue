<template>
  <button @click="patchUser" class="btn btn-primary btn-activate mt-3 ml-2">
    Activate my account now
  </button>
</template>

<script>
import { mapActions } from 'vuex'
import { alertMixin } from '../../mixins/alertMixin'

export default {
  mixins: [alertMixin],
  data() {
    return {
      key: ''
    }
  },
  created() {
    this.key = this.$route.params.key
  },
  methods: {
    ...mapActions(['activateUser']),
    patchUser() {
      const data = {
        key: this.key
      }
      this.activateUser(data)
        .then(result => {
          console.log(result)
          this.$router.push({ name: 'Login' })
          this.successLogin(result.data.msg)
        })
        .catch(error => {
          this.errorAlert(error.data.msg)
        })
    }
  }
}
</script>
<style scoped></style>
