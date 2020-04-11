<template>
  <div class="cinema">
    <div class="title">
      <div class="left">北京<i class="iconfont iconjiantou9"></i></div>
     
      <div class="center">
         <i class="iconfont iconiconset0157"></i>
         <input type="text" placeholder="筛选影院">
      </div>
      <div class="right">搜索</div>
    </div>
    <div class="nav">
      <ul>
        <li>离我最近<i class="iconfont iconjiantou9"></i></li>
        <span>|</span>
        <li>全城<i class="iconfont iconjiantou9"></i></li>
        <span>|</span>
        <li>影院特效<i class="iconfont iconjiantou9"></i></li>
      </ul>
    </div>
    <div class="content">
      <ul v-if="dataList.length">
        <li v-for="data in dataList" :key="data.cinemaId">
          <div class="lf">
            <p class="cname">{{data.cinameName}}</p>
            <p class="cname1">{{data.address}}</p>
          </div>
          <div class="rt" v-show="data.minPrice">
            <p class="my">
              <i>￥</i>
              {{data.minPrice/100}}
              <i>起</i>
            </p>
          </div>
        </li>
      </ul>
      <div class="text" v-else>
        <div class="text1">
          <i></i>
          <p>抱歉没有满足的影院</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return{
      dataList:[]
    }
  },
  created() {
    axios.get('/api/proxy/ticket/onlineCinemasByCity.api?locationId=290&_=1586599123306').then(res => {
      this.dataList=res.data.data.cinemaList
      console.log(this.dataList)
    })
  }
}
</script>

<style lang="scss" scoped>
i{
  font-size: 12px;
  color: #ccc;
}
.cinema{
  .title{
    display: flex;
    height: 60px;
    line-height: 60px;
    justify-content: space-between;
  align-items: center;
  color: #333;
  .left{
    padding-left: 10px;
  }
    .center{
      height: 35px;
      box-sizing: border-box;
      line-height: 35px;
      border-radius: 10px;
      border: 1px solid #bbb;
      i{
        font-size: 18px;
        padding-right: 5px;
      }
      input{
        border: 0;
        outline: none;
      }
    }
    .right{
      padding-right: 10px;
    }
  }
  .nav{
    border-top: 1px solid #d8d8d8;
    border-bottom:1px solid #d8d8d8;
    ul{
  display: flex;
    height: 40px;
    line-height: 40px;
    justify-content: space-around;
    color: #777;
    li{
      font-size: 14px;
    }
    span{
      color: #bbb;
    }
    }
   
  }
}
</style>
