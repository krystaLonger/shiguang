<template>
  <div>
    <div class="photo">
      <van-nav-bar
        title="演职员表"
        left-text="返回"
        left-arrow
      />
      <van-index-bar :index-list="indexList" >
      <div v-for="(data,index) in actorList" :key="index" >
        <van-index-anchor index="index">{{data.typeName}}</van-index-anchor>
        <div v-for="item in data.persons" :key="item.id" class="photoList">
          <img :src="item.image" alt="" >
          <div class="right">
            <van-cell  :title="item.name" />
            <span>{{item.nameEn}}</span>
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
    axios.get('/Service/callback.mi/Movie/MovieCreditsWithTypes.api?movieId=264258&t=202041112194447274').then(res => {
      this.actorList = res.data.types
      // console.log(this.actorList)
    })
  },
  methods: {
    onClickLeft () {
      Toast('返回')
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
      // display: flex;
      img{
        width: 70px;
        height: 70px;

      }
    }
  }
</style>
