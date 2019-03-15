<template>
  <div>This is for Customers
      {{getCustomers()}}
  </div>
</template>

<script>
import { default as httpMixin } from '../mixins/http.js'

export default {
  mixins: [httpMixin],
  data: () => ({
    customers: []
  }),
  methods: {
    getCustomers() {
      this.$http.get('http://localhost:3000/admin/customers')
        .then(response => {
          // console.log(response)
          this.customers = response
        })
        .catch(error => console.log(error))
    }
  }
}
</script>

<style>

</style>

