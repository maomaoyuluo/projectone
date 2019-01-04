<template>
  <div class="scrolltop">
    <BackTop :height="100" :bottom="200">

      <div class="top">
        <Icon type="ios-arrow-up" />
        TOP</div>
    </BackTop>
  </div>
</template>

<script>
  export default {
    name:'scrolltop'
  }
</script>

<style scoped>
  .top{
    padding: 10px;
    background: #000;
    color: #fff;
    text-align: center;
    font-size: 18px;
    /*z-index: 10;*/
    position: fixed;
    bottom: 50px;
    right: 10px;
  }
  .ivu-icon{
    font-size: 20px;
  }
</style>
