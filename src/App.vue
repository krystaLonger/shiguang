<template>
  <div id="app">
    <router-view></router-view>
    <Tabbar></Tabbar>
  </div>
</template>

<script>
import Tabbar from '@/components/Tabbar'
export default {
  components: {
    Tabbar
  }
}
</script>

<style lang="scss">
  *{
    margin: 0;
    padding: 0;
    font-size: 14px;
  }
  ul li{
    list-style: none;
  }
  body>div>div{
    position: absolute;
    top: 42px;
  }
</style>
