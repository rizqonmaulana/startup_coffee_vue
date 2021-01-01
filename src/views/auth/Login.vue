<template>
    <div>
        <h1> halaman login </h1>
        <h3> {{ dataName }} </h3>
        <b-form @submit.prevent="onSubmit" @reset.prevent="onReset">
        <input type="email" v-model="form.userEmail" placeholder="Input Your Email ..."
        /><br />
        <input type="password" v-model="form.userPassword" placeholder="Input Your Password ..."/>
        <br />
        <button type="submit">Submit</button>
        <button type="reset">Reset</button>
        </b-form> 
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
    name: 'Login',
    data() {
        return {
            form: {
                userEmail: '',
                userPassword: ''
            }
        }
    },
    computed: {
        // mapState && mapGetters
        // cara 1
        // dataName() {
        //     return this.$store.state.name
        // }
        //  cara 2
        ...mapState(['name']),
        ...mapState( { dataName: 'name' } )
    },
    methods: {
        // mapAction && mapMutations
        ...mapActions(['login']),
        onSubmit() {
            this.login(this.form)
                .then(result => {
                    console.log(result)
                    alert('Success login')
                })
                .catch(error => {
                    alert(error.data.msg)
                })
        },
        onReset() {
            this.form = {
                userEmail: '',
                userPassword: ''
            }
        }
    },
}
</script>