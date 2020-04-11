<template>
    <div class="photo">
      <van-nav-bar
        title="剧照"
        left-arrow
        @click-left="onClickLeft"
      />
      <ul>
      <li v-for="data in photoList" :key="data.id">
        <img :src="data.image" alt="">
      </li>
    </ul>
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
      photoList: []
    }
  },
  created () {
    axios.get(`/Service/callback.mi/movie/Image.api?movieId=${this.$route.params.id}&t=202041116364453940`).then(res => {
      // console.log(res.data)
      this.photoList = res.data
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
    ul{
    padding: 5px;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    li{
      width: 25%;
      height: 88px;
      box-sizing: border-box;
      padding: 5px;
      img{
        width: 100%;
        height: 100%;
      }
    }
  }
  }

</style>
