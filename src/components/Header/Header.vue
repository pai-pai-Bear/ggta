<template>  
 <div>
    <div class="header-wrap">    
      <header id="header">
        <div class="search">
          <slot name="left"></slot>
          <slot name='main'></slot>
          <slot name='right'></slot>
        </div>
        <div>
          <slot name="nav"></slot>
        </div>
      </header>
    </div>
 </div>
</template>

<script>
export default {
  components: {
  }
}
</script>

<style lang="stylus">
.header-wrap
  height 100px
  #header
    width 100%
    position fixed
    left 0
    top 0 
    z-index 100
    .search
      display flex
      align-items center
      padding 16px 30px
      box-sizing border-box
      width 100%
      // height 88px
      // line-height 56px
      .jumpSearch
        background-color #ededed
        flex auto
        margin 0 20px
        border-radius 5px
        text-align center
        font-size 26px
        color #666
        vertical-align middle
        .iconfont
          font-size 32px
          vertical-align middle
          margin-right 6px 
      button 
        width 74px
        height 40px
        margin auto 0
        color #b4282d
        font-size 24px
        font-weight bold
        outline none 
        border-style none
        background #fff
        border 1px solid #b4282d
        border-radius 8px
      img 
        vertical-align middle
    .nav
      display flex
      height 60px
      .navLeft
        position relative
        left 0
        height 100%
        // width 600px
        margin 0 30px
        .dd
          position absolute
          left 0
          display flex
          height 100%
          font-size 26px
          li
            display inline-block
            padding 0 20px
            text-align center
            flex 1
            color #333
            font-weight bold
            
            &.action
              color #b4282d
              border-bottom 6px solid #b4282d
            span
              display block
              width 100%
              white-space nowrap
      
  // .swiper-container
  //   height 370px
  //   width 100%
  //   .swiper-wrapper
  //     height 100%
  //     width 100%
  //     .swiper-slide
  //       height 100%
  //       width 100%
  //   .swiper-pagination
  //     bottom 28px
  //     span 
  //       margin 0 6px 
  //       height 4px
  //       width 40px
  //       background #fff


</style>