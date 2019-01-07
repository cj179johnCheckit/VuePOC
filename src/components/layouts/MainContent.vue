<template>
  <div>
    <transition
      mode="out-in"
      enter-active-class="fadeIn"
      leave-active-class="fadeOut"
      appear>
      <router-view class="animated"></router-view>
    </transition>
  </div>
</template>

<script>
// import { Customers, Hubs } from '../../pages';
export default {
  name: 'main-content',
}
</script>

<style>

</style>
