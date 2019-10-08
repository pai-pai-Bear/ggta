<template>
  <div id="cateWrap">
    <header>
      <div class="title">
        <i class="iconfont iconsousuo"></i>
        <span>
          搜索商品，共23155款好物
        </span>
      </div>
    </header>
    <div class="cate-list">
      <ul>
        <li class="one active">推荐专区</li>
        <li>推荐专区</li>
        <li>推荐专区</li>
        <li>推荐专区</li>
        <li>推荐专区</li>
        <li>推荐专区</li>
        <li>推荐专区</li>
        <li>推荐专区</li>
        <li>推荐专区</li>
        <li>推荐专区</li>
        <li>推荐专区</li>
        <li>推荐专区</li>
      </ul>
    </div>
    <div class="cate-showlist">
      <div class="swiper-cotainer">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="https://yanxuan.nosdn.127.net/db32d24cdd1d133d1e02fe47f300b58d.jpg?imageView&amp;quality=75&amp;thumbnail=0x196">
          </div>
          <div class="swiper-slide">
            <img src="https://yanxuan.nosdn.127.net/db32d24cdd1d133d1e02fe47f300b58d.jpg?imageView&amp;quality=75&amp;thumbnail=0x196">
          </div>
          <div class="swiper-slide">
            <img src="https://yanxuan.nosdn.127.net/db32d24cdd1d133d1e02fe47f300b58d.jpg?imageView&amp;quality=75&amp;thumbnail=0x196">
          </div>
        </div>
        <div class="pagination"></div>
      </div>
      <ul ref="things">
        <li >
          <div class="i-wrap">
            <img src="https://yanxuan.nosdn.127.net/71a5f1a0299e278f8193c193d8b7d1e4.png?imageView&amp;quality=85&amp;thumbnail=144x144" class="cateImg" data-reactid=".0.1.1.0.0.1:$categroup0.1.$subCate_0.0.0.0">
          </div>
          <div class="t-wrap">
            明星商品
          </div>
        </li>
        <li >
          <div class="i-wrap">
            <img src="https://yanxuan.nosdn.127.net/71a5f1a0299e278f8193c193d8b7d1e4.png?imageView&amp;quality=85&amp;thumbnail=144x144" class="cateImg" data-reactid=".0.1.1.0.0.1:$categroup0.1.$subCate_0.0.0.0">
          </div>
          <div class="t-wrap">
            明星商品
          </div>
        </li>
        <li style="margin: 0">
          <div class="i-wrap">
            <img src="https://yanxuan.nosdn.127.net/71a5f1a0299e278f8193c193d8b7d1e4.png?imageView&amp;quality=85&amp;thumbnail=144x144" class="cateImg" data-reactid=".0.1.1.0.0.1:$categroup0.1.$subCate_0.0.0.0">
          </div>
          <div class="t-wrap">
            明星商品
          </div>
        </li>
        <li>
          <div class="i-wrap">
            <img src="https://yanxuan.nosdn.127.net/71a5f1a0299e278f8193c193d8b7d1e4.png?imageView&amp;quality=85&amp;thumbnail=144x144" class="cateImg" data-reactid=".0.1.1.0.0.1:$categroup0.1.$subCate_0.0.0.0">
          </div>
          <div class="t-wrap">
            明星商品
          </div>
        </li>
        <li>
          <div class="i-wrap">
            <img src="https://yanxuan.nosdn.127.net/71a5f1a0299e278f8193c193d8b7d1e4.png?imageView&amp;quality=85&amp;thumbnail=144x144" class="cateImg" data-reactid=".0.1.1.0.0.1:$categroup0.1.$subCate_0.0.0.0">
          </div>
          <div class="t-wrap">
            明星商品
          </div>
        </li>
        <li style="margin: 0">
          <div class="i-wrap">
            <img src="https://yanxuan.nosdn.127.net/71a5f1a0299e278f8193c193d8b7d1e4.png?imageView&amp;quality=85&amp;thumbnail=144x144" class="cateImg" data-reactid=".0.1.1.0.0.1:$categroup0.1.$subCate_0.0.0.0">
          </div>
          <div class="t-wrap">
            明星商品
          </div>
        </li>
        <li>
          <div class="i-wrap">
            <img src="https://yanxuan.nosdn.127.net/71a5f1a0299e278f8193c193d8b7d1e4.png?imageView&amp;quality=85&amp;thumbnail=144x144" class="cateImg" data-reactid=".0.1.1.0.0.1:$categroup0.1.$subCate_0.0.0.0">
          </div>
          <div class="t-wrap">
            明星商品
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'

export default {
  mounted() {
    new Swiper('.swiper-cotainer', {
      loop: true,
      pagination: {
        el: '.pagination'
      }
    })
  },

}
</script>

<style lang="stylus">
#cateWrap
  background #fff
  overflow hidden
  header
    position relative
    top 0
    height 56px
    line-height 56px
    width 100%
    padding 16px 30px
    border-bottom 1px solid #ededed
    text-align center
    .title
      height 56px
      background #ededed
      border-radius 10px
      font-size 26px
      letter-spacing 1px
      vertical-align middle
    .iconfont  
      vertical-align middle
      font-size 32px 
  .cate-list    
    float left 
    width 162px
    height 1148px
    color #333
    ul
      padding 40px 0
      text-align center
      font-size 28px
      li
        box-sizing border-box
        height 50px
        line-height 50px
        margin-top 40px
        &.one
          margin-top 0
        &.active
          color #b4282d
          border-left 4px solid #b4282d
  .cate-showlist  
    float right
    width 528px
    height 1097px
    padding 30px 30px 21px
    .swiper-cotainer
      position relative
      top 0
      left 0
      margin-bottom 32px
      width 528px
      height 192px
      overflow hidden
      .swiper-wrapper
        width 100%
        .swiper-slide 
          height 192px
          img
            width 100%
            height 192px
      .pagination
        position absolute
        bottom 20px
        z-index 10
        text-align center 
        span
          text-align center
          width 40px
          height 4px
          background #fff
    ul        
      display flex
      flex-wrap wrap
      li
        text-align center
        margin-right 34px
        .t-wrap
          font-size 24px
</style>