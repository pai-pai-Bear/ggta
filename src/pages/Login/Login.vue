<template>
  <div class="body">
    <Header class="header">
      <template v-slot:left>
        <i class="iconfont iconshouye" @click="$router.replace('/home')"></i>
      </template>
      <template v-slot:main>
        <img src="//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png" alt="">
      </template>
      <template v-slot:right>
        <div>
          <i class="iconfont iconsousuo" style="margin-right:25px"></i>
          <i class="iconfont icongouwuche"></i>
        </div>
      </template>
      
    </Header>
    <div class="l-bg">
      <div class="bg-img">
        <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" data-reactid=".0.1.0.1.0.0">
      </div>
      <div class="btns">
        <button class="phone" @click="$router.push('/phone')">手机号快速登陆</button>
        <button class="e-mail" @click="$router.push('/email')">邮箱账号登陆</button>
      </div>
    </div>
    <div class="thirdlog">
      <div class="wx ">
        <i class="iconfont iconweixin"></i>
        <span>微信</span>
      </div>
      <div class="qq">
        <i class="iconfont iconqq"></i>
        <span>QQ</span>
      </div>
      <div class="wb">
        <i class="iconfont iconweibo"></i>
        <span>微博</span>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../../components/Header/Header'
export default {
  components: {
    Header,
  }
}
</script>

<style lang="stylus">
.body
  background #f2f5f4
#header
  .search
    display flex
    height 100px
    justify-content space-between
    background:#fafafa
    img 
      margin-left 50px
      height 70%
    .iconfont
      font-size 46px
    p
      position absolute
      left 0
      right 0
      margin auto
      text-align center
      color #b4282d
      font-size 40px
      font-weight bold
      span
        font-size 26px
        color #666

.l-bg      
  display flex 
  flex-direction column
  justify-content center
  align-items center
  margin-top 100px
  width 100%
  .bg-img  
    width 270px
    padding 150px 0 190px
    margin-bottom 40px
    img 
      width 100%
      height 90px
  .btns
    display flex
    flex-direction column
    width 670px
    button
      margin-bottom  30px
      height 94px
      border 2px solid #dd1a21
      &.phone
        font-size 26px
        background #dd1a21
        color #fff
      &.e-mail
        font-size 26px
        background #f2f5f4
        color #dd1a21

.thirdlog
  position absolute
  bottom 80px
  display flex
  width 100%
  justify-content center
  font-size 26px
  line-height 40px
  .iconfont 
    font-size 28px
    margin-right 10px
  .qq
    width 88px
    height 40px
    padding 0 40px
    text-align center
    border-right 2px solid #979797
    border-left 2px solid #979797
  .wx
    height 40px
    padding 0 40px
  .wb
    height 40px
    padding 0 40px
</style>