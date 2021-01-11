import Swal from 'sweetalert2'

export const alertMixin = {
  data() {
    return {
      msg: {
        login: 'Login success',
        success: 'Data successfuly added',
        update: 'Data successfulle updated',
        error:
          'Oops.. there is something wrong with your data, please check it again'
      }
    }
  },
  methods: {
    successLogin() {
      Swal.fire(this.msg.login)
    },
    successAlert() {
      Swal.fire(this.msg.success)
    },
    errorAlert(error) {
      Swal.fire(error)
    }
  }
}
