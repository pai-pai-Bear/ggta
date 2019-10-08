<template>
<div class="swiper-container">
  <div class="swiper-wrapper">
    <div class="swiper-slide">
      <img src="https://yanxuan.nosdn.127.net/6746f9dcaebe5a546a74762253a3cb83.jpg?imageView&amp;quality=75&amp;thumbnail=750x0">
    </div>
    <div class="swiper-slide">
      <img src="https://yanxuan.nosdn.127.net/866adf55cbd68253d09855e382cb778b.jpg?imageView&amp;quality=75&amp;thumbnail=750x0">
    </div>
    <div class="swiper-slide">
      <img src="https://yanxuan.nosdn.127.net/0e4c3779545a6d3a4e4b02625b08ac9e.jpg?imageView&amp;quality=75&amp;thumbnail=750x0">
    </div>
    <div class="swiper-slide">
      <img src="https://yanxuan.nosdn.127.net/1e4f7eee0aa77af90cb6e34f1960c6dc.jpg?imageView&amp;quality=75&amp;thumbnail=750x0">
    </div>
    <div class="swiper-slide">
      <img src="https://yanxuan.nosdn.127.net/f43e222c012a6de59b4a99103ac8a739.jpg?imageView&amp;quality=75&amp;thumbnail=750x0">
    </div>
    <div class="swiper-slide">
      <img src="https://yanxuan.nosdn.127.net/647c2450daf2874ae5611a504e36fbef.jpg?imageView&amp;quality=75&amp;thumbnail=750x0">
    </div>
    <div class="swiper-slide">
      <img src="https://yanxuan.nosdn.127.net/8d2af3ab55bf51d5ac03e5d9c6fa1fc4.jpg?imageView&amp;quality=75&amp;thumbnail=750x0">
    </div>
    <div class="swiper-slide">
      <img src="https://yanxuan.nosdn.127.net/a310178c93946767752b161d7ee49ab6.jpg?imageView&amp;quality=75&amp;thumbnail=750x0">
    </div>
  </div>
  <div class="swiper-pagination">
    
  </div>
</div>
</template>

<script>
import 'swiper/css/swiper.min.css'
import Swiper from 'swiper'
export default {
  mounted() {
    new Swiper('.swiper-container', {
      loop: true,
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
  .swiper-pagination
    bottom 28px
    span 
      margin 0 6px 
      height 4px
      width 40px
      background #fff


</style>