<template>
  <div class="datail">
    <div class="top">
      <div class="left">
        <img :src="filmInfo.image" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      filmInfo: []
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

<style scoped>
</style>
