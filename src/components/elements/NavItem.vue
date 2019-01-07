<template>
  <div>
    <li
      @mouseover="item.active = true"
      @mouseleave="item.active = false"
      :class="{ active: item.active }"
      v-for="item in items"
      :key="item.display">
      <router-link :to="item.href">{{item.display}}</router-link>
    </li>
  </div>
</template>

<script>
export default {
  props: {
    items: Array
  }
}
</script>

<style lang="stylus">
  li.active
    background-color: #FFF;
</style>


