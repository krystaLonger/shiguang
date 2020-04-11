<template>
  <div class="hotpage">
    <!-- <ul>
      <li v-for="data in dataList" :key="data" @click="toDetail(data)">{{data}}</li>
    </ul> -->
    <div class="hot">
      <p >正在热映（{{dataList.length}}部）</p>
      <i>></i>
    </div>
    <ul>
      <router-link
        v-for="data in dataList"
        :key="data.id"
        :to="{
          name:'detail',
          params:{id:data.id}
        }"
        tag="li"
      >
        <img :src="data.img" alt="">
        <p>{{data.t}}</p>
        <span v-show="data.r>0">{{data.r}}</span>
      </router-link>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      dataList: []
    }
  },
  created () {
    axios.get('/Service/callback.mi/Showtime/LocationMovies.api?locationId=365&t=202041020245920547').then(res => {
      this.dataList = res.data.ms
      // console.log(res.data.ms)
    })
  }
}
</script>

<style scoped lang='scss'>
  ul{
    width: 100%;
    display: flex;
    box-sizing:border-box;
    flex-wrap: wrap;
    padding: 0 18px;
    margin-bottom:10px ;
    overflow: hidden;
    height: 300px;
    li{
      box-sizing: border-box;
      width: 25%;
      padding-left: 8px;
      position: relative;
      img{
        width: 100%;
        height: 115px;
      }
      p{
        font-size: 16px;
        text-align: center;
        // height: 42px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin-bottom: 12px;
      }
      span{
        display: block;
        width: 20px;
        text-align: center;
        position: absolute;
        top: 3px;
        right: 2px;
        background: #659d0e;
        color: #fff;
      }
    }
  }
   .hot{
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
