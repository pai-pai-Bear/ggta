<template>
  <section style="height:100vh; background:#fff">
    <Header>
      <template v-slot:left>
        <i class="iconfont iconshouye" @click="$router.replace('/home')"></i>
      </template>
      <template v-slot:main>
        <img class="p-img" src="//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png" alt="">
      </template>
      <template v-slot:right>
        <div style="line-height:67px">
          <i class="iconfont iconsousuo" style="margin-right:25px"></i>
          <i class="iconfont icongouwuche"></i>
        </div>
      </template>
    </Header>
    <div class="p-wrap">
      <div class="p-container">
        <div class="p-logo">
          <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" data-reactid=".0.2.0.0.0">
        </div>
        <div class="p-main">
          <div class="p-input">
            <div class="user">
              <input type="text" placeholder="请输入手机号">
            </div>          
            <div class="pw">
              <input type="password" placeholder="请输入短信验证码"/>
              <button class="code">获取验证码</button>
            </div>
            
          </div>
          <p>
            <span>遇到问题？</span>
            <span style="color:#666">使用密码验证登录</span>
          </p>
          <div class="in">
            <button class="in-p">登录</button>
          </div>
          <div class="agree">
            <input type="checkbox" name="agree" id="agree">
              我同意<a href="##">《服务条款》</a>和<a href="##">《网易隐私政策》</a>
          </div>
        </div>
        <span style="color:#333" @click="$router.back()">其他登录方式 ></span>
      </div>
    </div>
  </section>  
</template>

<script>
import Header from '../../components/Header/Header'
export default {
  components: {
    Header,
  }
}
</script>

<style lang="stylus" >
.search
  display flex
  height 100px
  justify-content space-between
  background:#fafafa
  .p-img 
      position absolute
      left 0
      right 0
      margin auto 
      height 50%
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

.p-wrap
  padding-top 48px
  height 700px
  .p-container
    display flex
    flex-direction column
    align-items center
    justify-content space-between
    font-size 26px
    color #7f7f7f
    padding 0 48px
    height 100%
    .p-logo
      img 
        height 64px
        width 190px
    .p-main
      display flex
      flex-direction column
      align-items center
      justify-content space-between
      margin-top 16px
      height 500px
      p
        display flex
        justify-content space-between
        width 100%
        font-size 28px
      .p-input
        width 100%
        height 240px
        font-size 30px
        input 
          height 88px
          width 100%
          border-bottom 2px solid #ddd
        .pw
          position relative
          top 40px

        .code
          position absolute
          right 20px
          bottom 20px
          height 58px
          width 160px
          border 2px solid #aaa
          border-radius 6px
          background #fff
          color #333
          font-size 28px
      .in
        .in-p
          height 94px
          width 680px
          background #dd1a21
          outline none
          border-radius 5px
          color #fff
          font-size 30px
      .agree
        width 100%
        font-size 25px
        input
        #agree
          height 28px
          width 28px
          border-style none
          border 2px solid #eee
          cursor: pointer    
          vertical-align middle
          &:after
            background #fff
        a
          color #007aff
</style>