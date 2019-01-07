<template>
  <div class="full-width center-content">
    <div class="row">
      <div class="col-3">
        <nav-bar></nav-bar>
      </div>
      <div class="col-9">
        <main-content></main-content>
      </div>
    </div>
  </div>
</template>

<script>
import { NavBar, MainContent } from './components/layouts'

export default {
  components: {
    NavBar,
    MainContent
  }
}
</script>
