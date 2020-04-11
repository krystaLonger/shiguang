<template>
  <div class="homepage">

    <router-view></router-view>

    <div class="coming">
      <p>即将上映</p>
      <i>></i>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped lang='scss'>

  .hot,.coming{
    display: flex;
    justify-content: space-between;
    padding: 10px;
    border-top: 1px solid gainsboro;
    p{
      font-size: 22px;
      color: #333;
    }
    i{
      font-size: 22px;
      color: gray;
    }
  }
</style>
