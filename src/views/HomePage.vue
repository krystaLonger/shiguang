<template>
  <div class="homepage">
    <div class="hot">
      <p >正在热映（2部）</p>
      <i>></i>
    </div>
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
  .homepage{
    position: absolute;
    top: 42px;
  }
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
