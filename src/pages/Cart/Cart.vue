<template>
  <div>
    <header class="cat">
      <p>购物车</p>
      <span>领卷</span>
    </header>
    <ul class="promise">
      <li style="float:left">
        <i></i>
        <span>30天无忧退货</span>
      </li>
      <li>
        <i></i>
        <span>48小时快速退款</span>
      </li>
      <li>
        <i style="margin-left:35px"></i>
        <span >满88元免邮费</span>
      </li>
    </ul>
    <div class="container">
      <div class="bg">
        <div class="bg-img"></div>
        <div class="bg-txt">去添加点什么吧</div>
        <div class="btn">登录</div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="stylus">
c = #b4282d
.cat
  display flex
  justify-content space-between
  align-items center
  padding 0 30px
  height 88.7px
  background #fff
  p
    font-size 34px
    color #333
  span
    font-size 28px
    margin-right 24px
    color c
.promise
  display flex
  align-items center
  justify-content space-between
  padding 0 30px
  height 72px
  font-size 24px
  color #333
  background #eee
  li
    flex 1
    i
      display inline-block
      height 25px
      width 25px
      color #333
      border-radius 50%
.container
  position fixed
  top 88.7px
  left 0
  bottom 0
  width 100%
  background #f4f4f4
  text-align center
  z-index -5
  .bg
    position absolute
    top -45px
    right 0
    bottom 0
    left 0
    height 300px
    margin auto
    .bg-img
      height 248px
      width 248px
      margin 0 auto 
      margin-bottom 8px
      background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-d6193bd6e4.png);
    .bg-txt 
      font-size 26px
      color #999
      margin-bottom 55px
      line-height 1px
    .btn
      margin auto
      width 480px
      height 92px
      line-height 92px
      font-size 30px
      color #fff
      text-align center
      background c
      border-radius 5px
</style>