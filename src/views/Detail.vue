<template>
  <div class="datail" v-if="filmInfo">
    <div class="top">
      <div class="left">
        <img :src="filmInfo.image" alt="">
      </div>
      <div class="right">
        <h3>{{filmInfo.titleCn}}</h3>
        <h5>{{filmInfo.titleEn}}</h5>
        <span>{{filmInfo.runTime}}</span>
        <p>
          <span v-for="(type,index) in filmInfo.type" :key="index">{{type}}</span>
        </p>
        <p>
          <span v-for="(time,index) in filmInfo.release" :key="index">{{time}}/</span>
        </p>
        <nav>
          <span>我想看</span>
          <span>我要评分</span>
        </nav>
        <i>{{filmInfo.rating}}</i>
      </div>
      <p class="text">{{filmInfo.commonSpecial}}</p>
    </div>
    <div class="center">
      <p :class="{details:isActive}">{{filmInfo.content}}</p>
      <i class="iconfont " @click="isActive = !isActive" :class="isActive?'icon-jiantou-copy-copy':'icon-jiantou'"></i>
    </div>
    <div class="actors">
      <p @click="isPhotoShow=true">演职人员</p>
      <ul>
        <li>演职人员</li>
      </ul>
    </div>
    <Actor v-show="isPhotoShow"></Actor>
  </div>
</template>

<script>
import axios from 'axios'
import Actor from './detail/Actor'
export default {
  components: {
    Actor
  },
  data () {
    return {
      filmInfo: null,
      isActive: true,
      isPhotoShow: false
    }
  },
  created () {
    // console.log(this.$route.params.id)
    axios.get(`/Service/callback.mi/movie/Detail.api?movieId=${this.$route.params.id}&locationId=365&t=20204102122947031`).then(res => {
      this.filmInfo = res.data
    })
  }
}
</script>

<style scoped lang='scss'>
  .top{
    display: flex;
    flex-wrap: wrap;
    padding-left: 18px;
    font-family: "helvetica neue","微软雅黑";
    .left{
      overflow: hidden;
      background: #fff;
      margin-right: 6px;
      padding: 2px;
      width: 123px;
      height: 182px;
      // float: left;
      img{
        width: 100%;
        height: auto;
      }
    }
    .right{
      // float: right;
      h3{
        margin-top:5px;
        font-size: 18px;
      }
      h5{
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        font-size: 16px;
        margin-bottom: 15px;
      }
      p{
        margin: 2px ;
      }
      nav{
        display: flex;
        span{
          display: block;
          width: 88px;
          height: 36px;
          line-height: 36px;
          margin: 10px 0 0 5px;
          text-align: center;
          border: 1px solid #999;
          border-radius: 18px;
          font-size: 15px;
        }
      }
      i{
        position: absolute;
        top: 50px;
        right: 10px;
        width: 30px;
        height: 30px;
        background: #659d0e;
        color: #fff;
        font-size: 16px;
        text-align: center;
        line-height: 30px;
      }
    }
    .text{
      color: #fd8900;
      font-size: 18px;
      margin-left:78px ;
    }
  }
  .center{
    margin: 5px 0;
    padding: 10px 15px;
    border-top: 10px solid #f6f6f6;
    border-bottom: 10px solid #f6f6f6;
    text-align: center;
    p{
      font-size: 18px;

      margin-bottom: 5px;
      // text-overflow: ellipsis;
      // white-space: nowrap;
    }
    .details{
      height: 50px;
      overflow: hidden;
    }
  }
</style>
