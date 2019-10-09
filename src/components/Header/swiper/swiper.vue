<template>
<div class="swiper-container">
  <div class="swiper-wrapper">
    <div class="swiper-slide" v-for="(pic,index) in picList" :key="index">
      <img :src="pic.picUrl">
    </div>
    
  </div>
  <div class="swiper-pagination">
    
  </div>
</div>
</template>

<script>
import {mapState} from 'vuex'

import 'swiper/css/swiper.min.css'
import Swiper from 'swiper'
export default {

  computed: {
    ...mapState({
      picList: state => state.homeData.focusList
    })
  }
  ,
  mounted() {
    new Swiper('.swiper-container', {
      loop: true,
      autoplay: {
        delay: 3000,
        stopOnLastSlide: false,
        disableOnInteraction: true
      },
      pagination: {
        el: '.swiper-pagination'
      }
    })
  },
  methods: {
    
  },

  components: {
    
  }
}
</script>

<style lang="stylus">
.swiper-container
  height 370px
  width 100%
  .swiper-wrapper
    height 100%
    width 100%
    .swiper-slide
      height 100%
      width 100%
      img
        height 100%
        width 100%
  .swiper-pagination
    bottom 28px
    span 
      margin 0 6px 
      height 4px
      width 40px
      background #fff


</style>