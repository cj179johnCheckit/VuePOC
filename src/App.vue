<template>
  <div class="full-width center-content">
    <nav-bar-component> </nav-bar-component>
    <hello-component name="World" />
  </div>
</template>

<script>
import HelloComponent from './components/HelloComponent.vue'
import NavBarComponent from './components/NavBarComponent.vue'
export default {
  components: {
    HelloComponent,
    NavBarComponent
  }
}
</script>
