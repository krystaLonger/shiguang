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
       <div class="mallshop">
         <ul>
           <li v-for="item in shopData" :key="item.id"><img :src="item.img" alt=""></li>
         </ul>
       </div>
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
          shopData:[
            {id:1,img: "http://img5.mtime.cn/mg/2019/08/19/141732.33138431.jpg"},
            {id:2,img:"http://img5.mtime.cn/mg/2019/07/03/174427.96016382.jpg"},
            {id:3,img:"http://img5.mtime.cn/mg/2019/07/03/174012.80503273.jpg"}
            
          ]
      }
  }, 
  async created() {
    await axios.get('/Service/callback-mall.mi/PageSubArea/MarketFirstPageNew.api?t=20204110542841854').then(res => {
      this.banners = res.data.scrollImg
      console.log(res.data.scrollImg)
      this.navData=res.data.navigatorIcon
    })
  }
}
</script>

<style lang="scss" scoped>
.shopBox{
  background: #d8d8d8;
  position: relative;
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
                max-width: 375px;
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
        .mallshop{
          li{
            float: left;
          img{
            width: 187.5px;
            height: 225px;
          }
          }
          li:nth-child(3){
            width: 375px;
            img{
              width: 100%;
              height: 111px;
            }
          }
        }
}
</style>
