<template>
  <div class="side-bar">
    <div class="logo-container">
      <img id="nav-bar-logo" src="/assets/images/checkit-logo.svg" />
    </div>

    <b-nav vertical>
      <b-nav-item href="#">Customers</b-nav-item>
      <b-nav-item href="#">Hubs</b-nav-item>
    </b-nav>
  </div>
</template>
<script>
  export default {}
</script>
<style lang="stylus">
  .logo-container
    vertical-align: middle;
    margin-top: 30px;
    margin-bottom: 20px;
    text-align: center;

  #nav-bar-logo
    height: 150px; width: 150px;

  .side-bar
    width: 300px;
    position: fixed;
    background: #000;
    height: 100%;
    display: block;
    @media (max-width: 500px) {
      margin-left:-50rem;
      -webkit-transition: margin 1000ms ease-out;
	    -moz-transition: margin 1000ms ease-out;
	    -o-transition: margin 1000ms ease-out;
	    transition: margin 1000ms ease-out;
    }
    @media (min-width: 500px) {
      -webkit-transition: margin 500ms ease-out;
	    -moz-transition: margin 500ms ease-out;
	    -o-transition: margin 500ms ease-out;
	    transition: margin 500ms ease-out;
    }
</style>
