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
  li
    margin-bottom: 1rem;
    margin-left: 1.5rem;
    font-weight: bold;

    &.active
      background-color: #FFF;
      a
        color: black;
    a
      color: white;

</style>


