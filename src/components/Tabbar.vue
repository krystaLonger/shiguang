<template>
  <nav>
    <ul>
      <li class="img">
        <img src="https://static1.mtime.cn/html5/20200116143308/images/2014/logo_mtime.png" alt="">
      </li>
      <router-link
        v-for="data in navList"
        :key="data.id"
        :to="data.path"
        active-class="active"
        tag="li"
      >
      <span>{{data.title}}</span>
      </router-link>
    </ul>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      navList: [
        { id: 1, title: '首页', path: '/homepage' },
        { id: 2, title: '购票', path: '/cinema' },
        { id: 3, title: '商城', path: '/store' },
        { id: 4, title: '我的', path: '/mine' }
      ]
    }
  }
}
</script>

<style scoped lang='scss'>
  ul{
    background: #1c2635;
    width: 100%;
    display: flex;
    height: 50px;
    li{
      width: 25%;
      line-height: 50px;
      text-align: center;
      margin: 0 10px;
      color: white;
      font-size: 14px;
      img{
        width: 100%;
        height: 50%;
      }
    }
    .img{
      padding: 0;
    }
  }
  .active{
    font-size: 16px;
    border-bottom: 1px solid white;
  }
  .img{
    margin: 0;
  }
</style>
