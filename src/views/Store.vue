<template>
  <div class="shopBox">
    <div class="search">
            <div class="inputBox">
                <i class="iconfont iconiconset0157"></i>
                <input type="text" placeholder="搜索正版电影周边">
            </div>
            <div class="shopCar">
                <i class="iconfont icongouwuche"></i>
            </div>
      </div>
        <swiper v-if="banners">
            <div class="swiper-slide" v-for="item in banners" :key="item.image">
                <img :src="item.image" alt="">
            </div>
        </swiper>
        <div class="mallNav">
            <ul>
                <li v-for="item in navData" :key="item.image">
                <img :src="item.image" alt="">
                    <p>{{item.iconTitle}}</p>
                </li>
            </ul>
        </div>
        <!-- <div class="mallShop">
          <div>
              <img :src="dataA.cellA.img" alt="">
          </div>
          <div v-for="item in allData.cellC.list" :key="item.image">
              <img :src="item.image" alt="">
          </div>
          <div>
              <img :src="allData.cellB.img" alt="">
          </div>
        </div> -->
        </div>
</template>

<script>
import swiper from '@/components/Swiper'
import axios from 'axios'
export default {
  components:{
    swiper
  },
  data(){
      return {
          banners:"",
          navData:"",
          dataA:""
      }
  }, 
  mounted() {
    axios.get('/Service/callback-mall.mi/PageSubArea/MarketFirstPageNew.api?t=20204110542841854').then(res => {
      this.banners = res.data.scrollImg
      console.log(res.data.scrollImg)
      this.navData=res.data.navigatorIcon
      this.dataA=res.data.cellA
      console.log(res.data.cellA)
    })
  }
}
</script>

<style lang="scss" scoped>
*{
  padding: 0;
  margin: 0;
}

.shopBox{
  background: #f6f6f6;
  .search{
          width: 100%;
          height: 65px;
          border-bottom: 1px solid #d8d8d8;
          display: flex;
          align-items: center;
          padding: 12px;
          box-sizing: border-box;
          background: #f6f6f6;
          color: #333333;
          font-size: 20px;
          background: #f6f6f6;
          .inputBox{
              margin-left: 12px;
              width: 300px;
              height: 35px;
              border-radius:12px;
              border: 1px solid #d8d8d8;
              display: flex;
              align-items: center;
              background: #ffffff;
              input{
                  outline: none;
                  border: none;
              }
              .searchIcon{
              font-size: 24px;
              padding-left: 7px;
              color: #ccc;
              }
          }
          
        }
      .shopCar{
                i{
                  font-size: 30px;
                  color: #0075c4;
                  padding-left: 7px;
                }
          }
          .swiper-slide{
            width: 100%;
            height: 250px;
            overflow: hidden;
            position: relative;
            background: #ffffff;
            img{
              display: block;
                position: absolute;
                max-width: 100%;
                max-height: 250px;
            }
        }
        .mallNav{
          margin-bottom: 24px;
          font-size: 14px;
          border-bottom: 1px solid #e5e4e4;
          box-shadow: 0 4px 4px rgba(51,51,51,0.01);
          background: white;
          position: relative;
          z-index: 2;
          width: 100%;
          ul{
            width: 375px;
            height: 200px;
            display: flex;
          flex-wrap: wrap;
            li{
              margin-top: 20px;
              text-align: center;
              width: 25%;
              height: 50px;
              img{
                width: 50px;
              }
            }
          }
        }
}
</style>
