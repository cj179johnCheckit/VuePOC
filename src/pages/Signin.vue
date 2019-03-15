<template>
  <div>This is sign in page</div>
</template>

<script>
import { default as httpMixin } from '../mixins/http.js'

export default {
  mixins: [httpMixin],
  data: function() {
    return {
      customers: httpMixin.get('http://localhost:3000/admin/customers')
    }
  }
}
</script>

<style>
</style>