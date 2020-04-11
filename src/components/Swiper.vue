<template>
    <div>
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <slot></slot>
            </div>
        </div>
        <!-- swiper分页器 -->
        <div class="swiper-pagination outPagination"></div>
    </div>
    
</template>
<script>
import Swiper from 'swiper'
import 'swiper/css/swiper.css'
export default {
    mounted(){
        var myswiper = new Swiper(".swiper-container",{
            loop : true,
            pagination: {
                el: '.swiper-pagination'
            },
            autoplay: {
                delay: 4000,
                stopOnLastSlide: false,
                disableOnInteraction: true,
            },
        })
    }
}
</script>
<style lang="scss">
    .outPagination{
        width: 100%;
        background: #ffffff;
        span{
            margin-left: 10px;
            --swiper-pagination-color: #ffffff;
        }
    }
</style>


