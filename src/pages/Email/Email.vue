<template>
  <div style="height:100vh;background:#fff">
    <Header class="header">
      <template v-slot:left>
        <i class="iconfont iconshouye" @click="$router.replace('/home')"></i>
      </template>
      <template v-slot:main>
        <img class="p-img" src="//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png" alt="">
      </template>
      <template v-slot:right>
        <div class="e-r">
          <i class="iconfont iconsousuo" style="margin-right:25px"></i>
          <i class="iconfont icongouwuche"></i>
        </div>
      </template>
    </Header>
    <div class="e-wrap">
      <div class="e-container">
        <div class="e-logo">
          <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" data-reactid=".0.2.0.0.0">
        </div>
        <div class="e-main">
          <div class="e-input">
            <div class="user">
              <input type="text" 
              placeholder="邮箱账号"
               v-model="email"
               @change="pwd"/>
            </div>          
            <div class="pw">
              <input type="password" placeholder="密码"  />
            </div>
            <div v-show="show" class="fal">邮箱格式不正确</div>
          </div>
          <p>
            <span>注册账号</span>
            <span>忘记密码</span>
          </p>
          <div class="in">
            <button class="in-e">登录</button>
          </div>
          
        </div>
        <span style="color:#333" @click="$router.back()">其他登录方式 ></span>
      </div>
    </div>
  </div>  
</template>

<script>
import Header from '../../components/Header/Header'
export default {
  data() {
    return {
      email:'',
      show: false
    }
  },

  components: {
    Header,
  },

  methods: {
    pwd() {
      if(this.email === '') {
        this.show = false
        return
      }
      const reg = /^([a-z0-9A-Z_-])+([-_.][a-z0-9A-Z]+)*@([a-z0-9A-Z_-]+)+(.[a-z0-9A-Z]{2,5})$/
        if(!reg.test(this.email)){
          this.show = true
        } else {
          this.show = false
        }
    } 
  }
}
</script>

<style lang="stylus" scoped>
body
  background #fff
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
  .e-r
    
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

.e-wrap
  padding-top 48px
  height 635px
  .e-container
    display flex
    flex-direction column
    align-items center
    justify-content space-between
    font-size 26px
    color #7f7f7f
    padding 0 48px
    height 100%
    .e-logo
      img 
        height 64px
        width 190px
    .e-main
      display flex
      flex-direction column
      align-items center
      justify-content space-between
      margin-top 136px
      p
        display flex
        justify-content space-between
        margin 50px 0
        width 100%
        font-size 28px
      .e-input
        width 100%
        font-size 30px
        .fal
          height 30px
          line-height 80px
          color red
          font-size 30pxpx

        input 
          height 88px
          width 100%
          outline none
          border-bottom 2px solid #ddd
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
        .in-e
          height 94px
          width 680px
          background #dd1a21
          outline none
          border-radius 5px
          color #fff
          font-size 30px
          margin-bottom 70px
          color rgba(255,255,255,.5)
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
</style>