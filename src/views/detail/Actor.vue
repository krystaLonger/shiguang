<template>
  <div>
    <div class="photo">
      <van-nav-bar
        title="演职员表"
        left-arrow
        @click-left="onClickLeft"
      />
      <van-index-bar :index-list="indexList" >
      <div v-for="(data,index) in actorList" :key="index" >
        <van-index-anchor index="index">{{data.typeName}}</van-index-anchor>
        <div v-for="item in data.persons" :key="item.id" class="photoList">
          <img :src="item.image != 'http://img31.mtime.cn/ph/888/2226888/2226888_1280X720X2.jpg'?item.image:''" alt="" >
          <div class="right">
            <van-cell  :title="item.name" />
            <span class="nameEn">{{item.nameEn}}</span>
          </div>
        </div>
      </div>
    </van-index-bar>
    </div>
  </div>

</template>

<script>
import axios from 'axios'
import Vue from 'vue'
import { IndexBar, IndexAnchor, Cell, NavBar, Toast } from 'vant'
Vue.use(Cell)
Vue.use(IndexBar)
Vue.use(IndexAnchor)
Vue.use(NavBar)
Vue.use(Toast)
export default {
  data () {
    return {
      indexList: [],
      actorList: []
    }
  },
  created () {
    axios.get(`/Service/callback.mi/Movie/MovieCreditsWithTypes.api?movieId=${this.$route.params.id}&t=202041112194447274`).then(res => {
      this.actorList = res.data.types
      // console.log(this.actorList)
    })
  },
  methods: {
    onClickLeft () {
      this.$router.back()
    }
  }
}
</script>

<style scoped lang='scss'>
  .photo{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #ffffff;
    .photoList{
      display: flex;
      width: 100%;

      padding: 10px;
      img{
        width: 70px;
        height: 70px;
        float: left;
      }
      .right{
        width: 75%;

        .nameEn{
          padding-left: 16px;
        }
      }
    }
  }
</style>
