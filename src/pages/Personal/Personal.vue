<template>
  <section style="background:#fff">
    <div class="user-wrap">
      <div class="user-pic">
        <img class="avatar" src="//yanxuan.nosdn.127.net/8945ae63d940cc42406c3f67019c5cb6.png" data-reactid=".0.1.0.0.0.0">
      </div>
      <div class="user-info">
        <p>immadao</p>
        <span>普通用户</span>
      </div>
    </div>

    <div class="money">
      <div>我的资产</div>
      <ul>
        <li>
          <p>￥<span>0</span></p>
          <span>回馈金</span>
        </li>
        
        <li>
          <p><span>0</span></p>
          <span>红包</span>
        </li>
        
        <li>
          <p><span>0</span></p>
          <span>优惠卷</span>
        </li>
        
        <li>
          <p>￥<span>0</span></p>
          <span>津贴</span>
        </li>
        
        <li>
          <p><span>0</span></p>
          <span>礼品卡</span>
        </li>
      </ul>
    </div>

    <div class="order-list">
      <ul>
        <li>
          <i></i>
          <span>我的订单</span>
        </li>
        <li>
          <i></i>
          <span>我的订单</span>
        </li>
        <li>
          <i></i>
          <span>我的订单</span>
        </li>
        <li>
          <i></i>
          <span>我的订单</span>
        </li>
        <li>
          <i></i>
          <span>我的订单</span>
        </li>
        <li>
          <i></i>
          <span>我的订单</span>
        </li>
        <li>
          <i></i>
          <span>我的订单</span>
        </li>
        <li>
          <i></i>
          <span>我的订单</span>
        </li>
        <li>
          <i></i>
          <span>我的订单</span>
        </li>
        <li>
          <i></i>
          <span>我的订单</span>
        </li>
        <li>
          <i></i>
          <span>我的订单</span>
        </li>

      </ul>
    </div>

    <div class="out">
      <p>退出登录</p>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="stylus">
.user-wrap
  display flex
  align-items  center
  box-sizing border-box
  height 270px
  width 100%
  padding-left 30px
  background-image: url(//yanxuan.nosdn.127.net/d069279e5834bbca17065a9855a014bf.png) 
  .user-pic 
    height 141px
    width 141px
    border-radius 50%
    overflow hidden
    margin-right 30px
    img
      height 100%
      width 100%
  .user-info
    font-size 37px
    color #fff
    p
      margin-bottom 9.9px
    span
      font-size 28px

.money
  border-bottom .26667rem solid #f4f4f4
  div
    box-sizing border-box
    height 105px
    line-height 105px
    width 100%
    padding-left 30px
    font-size 26px
    color #333
    border-bottom 1px solid #aaa
  ul
    display flex
    height 160px
    font-weight bold
    font-size 24px
    color #333
    li
      display flex
      flex-direction column
      justify-content center
      width 25%
      height 100%
      text-align center
      p
        margin-bottom 18px
        span 
          font-weight bold
          font-size 32px
.order-list
  border-bottom .53333rem solid #f5f5f5
  ul
    display flex
    flex-wrap wrap
    li
      width 33%
      height 135px
      text-align center
      padding-top 45px
      border-right 1px solid rgba(0,0,0, .15)
      border-bottom 1px solid rgba(0,0,0, .15)
      &:nth-of-type(3n)
        border-right none
.out
  height 130px
  line-height 130px
  text-align center
  font-size 26px
  border-bottom 120px solid #f5f5f5

</style>