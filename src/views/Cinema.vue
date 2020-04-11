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
  </div>
</template>

<script>
export default {
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
